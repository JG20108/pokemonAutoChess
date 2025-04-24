import path from 'path';
import { monitor } from '@colyseus/monitor';
import config from '@colyseus/tools';
import { uWebSocketsTransport } from '@colyseus/uwebsockets-transport';
import uWebSockets from 'uWebSockets.js';
import {
  Presence,
  RedisDriver,
  RedisPresence,
  ServerOptions,
  matchMaker,
} from 'colyseus';
import helmet from 'helmet';
import cors from 'cors';
import express, { ErrorRequestHandler } from 'express';
import basicAuth from 'express-basic-auth';
import admin from 'firebase-admin';
import { connect } from 'mongoose';
import pkg from '../package.json';
import { initTilemap } from './core/design';
import { GameRecord } from './models/colyseus-models/game-record';
import DetailledStatistic from './models/mongo-models/detailled-statistic-v2';
import Meta from './models/mongo-models/meta';
import TitleStatistic from './models/mongo-models/title-statistic';
import { PRECOMPUTED_POKEMONS_PER_TYPE } from './models/precomputed/precomputed-types';
import AfterGameRoom from './rooms/after-game-room';
import CustomLobbyRoom from './rooms/custom-lobby-room';
import GameRoom from './rooms/game-room';
import PreparationRoom from './rooms/preparation-room';
import { getBotData, getBotsList } from './services/bots';
import { discordService } from './services/discord';
import { getLeaderboard } from './services/leaderboard';
import { getMetaItems, getMetaPokemons } from './services/meta';
import { pastebinService } from './services/pastebin';
import {
  MAX_CONCURRENT_PLAYERS_ON_SERVER,
  MAX_POOL_CONNECTIONS_SIZE,
  SynergyTriggers,
} from './types/Config';
import { DungeonPMDO } from './types/enum/Dungeon';
import { Item } from './types/enum/Item';
import { Pkm, PkmIndex } from './types/enum/Pokemon';
import { logger } from './utils/logger';
import chatV2 from './models/mongo-models/chat-v2';

const clientSrc = __dirname.includes('server')
  ? path.join(__dirname, '..', '..', 'client')
  : path.join(__dirname, 'public', 'dist', 'client');
const viewsSrc = path.join(clientSrc, 'index.html');

/**
 * Import your Room files
 */

let gameOptions: ServerOptions = {};

if (process.env.NODE_APP_INSTANCE) {
  const processNumber = Number(process.env.NODE_APP_INSTANCE || '0');
  const port = (Number(process.env.PORT) || 2567) + processNumber;
  gameOptions = {
    presence: new RedisPresence(
      process.env.REDIS_URI
    ) as Presence /* TODO: type assertion shouldnt be required, need to report that bug to colyseus */,
    driver: new RedisDriver(process.env.REDIS_URI),
    publicAddress: `${port}.${process.env.SERVER_NAME}`,
    selectProcessIdToCreateRoom: async function (
      roomName: string,
      clientOptions: any
    ) {
      if (roomName === 'lobby') {
        const lobbies = await matchMaker.query({ name: 'lobby' });
        if (lobbies.length !== 0) {
          throw 'Attempt to create one lobby';
        }
      }
      const stats = await matchMaker.stats.fetchAll();
      stats.sort((p1, p2) =>
        p1.roomCount !== p2.roomCount
          ? p1.roomCount - p2.roomCount
          : p1.ccu - p2.ccu
      );
      if (stats.length === 0) {
        throw 'No process available';
      } else {
        return stats[0]?.processId;
      }
    },
  };
}

if (process.env.MODE === 'dev') {
  gameOptions.devMode = true;
}

export default config({
  options: gameOptions,

  // uWebSockets caused many issues unfortunately, reverting to WebSocketTransport for now
  /*initializeTransport: function () {
    return new uWebSocketsTransport({
      compression: uWebSockets.SHARED_COMPRESSOR
    })
  },*/

  initializeGameServer: (gameServer) => {
    /**
     * Define your room handlers:
     */
    gameServer.define('after-game', AfterGameRoom);
    gameServer.define('lobby', CustomLobbyRoom);
    gameServer.define('preparation', PreparationRoom).enableRealtimeListing();
    gameServer.define('game', GameRoom).enableRealtimeListing();
  },

  initializeExpress: (app) => {
    /**
     * Bind your custom express routes here:
     * Read more: https://expressjs.com/en/starter/basic-routing.html
     */

    app.use(
      helmet({
        crossOriginOpenerPolicy: false, // required for firebase auth
        contentSecurityPolicy: {
          directives: {
            defaultSrc: [
              "'self'",
              'https://*.pokemon-auto-chess.com',
              'wss://*.pokemon-auto-chess.com',
              'https://*.firebaseapp.com',
              'https://apis.google.com',
              'https://*.googleapis.com',
              'https://*.githubusercontent.com',
              'http://raw.githubusercontent.com',
              'https://*.youtube.com',
              'https://pokemon.darkatek7.com',
              'https://eternara.site',
              'https://www.penumbra-autochess.com',
              'https://pokechess.com.br',
              'https://uruwhy.online',
              'https://koala-pac.com',
            ],
            scriptSrc: [
              "'self'",
              "'unsafe-inline'",
              "'unsafe-eval'",
              'https://apis.google.com',
              'https://*.googleapis.com',
            ],
            imgSrc: [
              "'self'",
              'data:',
              'blob:',
              'https://www.gstatic.com',
              'http://raw.githubusercontent.com',
            ],
          },
        },
      })
    );

    app.use(((err, req, res, next) => {
      res.status(err.status).json(err);
    }) as ErrorRequestHandler);

    app.use(cors());
    app.use(express.json());
    app.use(express.static(clientSrc));

    app.get('/', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/auth', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/lobby', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/preparation', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/game', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/after', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/bot-builder', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/bot-admin', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/sprite-viewer', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/map-viewer', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/gameboy', (req, res) => {
      res.sendFile(viewsSrc);
    });

    app.get('/pokemons', (req, res) => {
      res.send(Pkm);
    });

    app.get('/pokemons-index', (req, res) => {
      res.send(PkmIndex);
    });

    app.get('/types', (req, res) => {
      res.send(PRECOMPUTED_POKEMONS_PER_TYPE);
    });

    app.get('/items', (req, res) => {
      res.send(Item);
    });

    app.get('/types-trigger', (req, res) => {
      res.send(SynergyTriggers);
    });

    app.get('/meta', async (req, res) => {
      res.set('Cache-Control', 'no-cache');
      res.send(
        await Meta.find({}, [
          'cluster_id',
          'count',
          'ratio',
          'winrate',
          'mean_rank',
          'types',
          'pokemons',
          'x',
          'y',
        ])
      );
    });

    app.get('/titles', async (req, res) => {
      res.send(await TitleStatistic.find());
    });

    app.get('/meta/items', async (req, res) => {
      // Set Cache-Control header for 24 hours (86400 seconds)
      res.set('Cache-Control', 'max-age=86400');
      res.send(getMetaItems());
    });

    app.get('/meta/pokemons', async (req, res) => {
      // Set Cache-Control header for 24 hours (86400 seconds)
      res.set('Cache-Control', 'max-age=86400');
      res.send(getMetaPokemons());
    });

    app.get('/tilemap/:map', async (req, res) => {
      const tilemap = initTilemap(req.params.map as DungeonPMDO);
      res.send(tilemap);
    });

    app.get('/leaderboards', async (req, res) => {
      res.set('Cache-Control', 'no-cache');
      res.send(getLeaderboard());
    });

    app.get('/game-history/:playerUid', async (req, res) => {
      res.set('Cache-Control', 'no-cache');
      const { playerUid } = req.params;
      const { page = 1 } = req.query;
      const limit = 10;
      const skip = (Number(page) - 1) * limit;

      const stats = await DetailledStatistic.find(
        { playerId: playerUid },
        ['pokemons', 'time', 'rank', 'elo', 'gameMode'],
        { limit: limit, skip: skip, sort: { time: -1 } }
      );
      if (stats) {
        const records = stats.map(
          (record) =>
            new GameRecord(
              record.time,
              record.rank,
              record.elo,
              record.pokemons,
              record.gameMode
            )
        );

        // Return the records as the response
        return res.status(200).json(records);
      }

      // If no records found, return an empty array
      return res.status(200).json([]);
    });

    app.get('/chat-history/:playerUid', async (req, res) => {
      res.set('Cache-Control', 'no-cache');
      const { playerUid } = req.params;
      const { page = 1 } = req.query;
      const limit = 30;
      const skip = (Number(page) - 1) * limit;
      const messages = await chatV2.find({ authorId: playerUid }, undefined, {
        limit: limit,
        skip: skip,
        sort: { time: -1 },
      });
      return res.status(200).json(messages ?? []);
    });

    app.get('/bots', async (req, res) => {
      const botsData = await getBotsList();
      //breaks build {
      //   withSteps: req.query.withSteps === "true"
      // }
      res.send(botsData);
    });

    app.post('/bots', async (req, res) => {
      // get json from body
      try {
        const { bot, author } = req.body;
        const pastebinUrl = (await pastebinService.createPaste(
          `${author} has uploaded BOT ${bot.name}`,
          JSON.stringify(bot, null, 2)
        )) as string;

        logger.debug(
          `bot ${bot.name} created by ${author} with pastebin url ${pastebinUrl}`
        );

        discordService.announceBotCreation(bot, pastebinUrl, author);
        res.status(201).send(pastebinUrl);
      } catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
      }
    });

    app.get('/bots/:id', async (req, res) => {
      res.send(await getBotData(req.params.id));
    });

    app.get('/status', async (req, res) => {
      const ccu = await matchMaker.stats.getGlobalCCU();
      const version = pkg.version;
      res.send({ ccu, maxCcu: MAX_CONCURRENT_PLAYERS_ON_SERVER, version });
    });

    const basicAuthMiddleware = basicAuth({
      // list of users and passwords
      users: {
        admin: process.env.ADMIN_PASSWORD
          ? process.env.ADMIN_PASSWORD
          : 'Default Admin Password',
      },
      challenge: true,
    });

    app.use('/colyseus', basicAuthMiddleware, monitor());

    /**
     * Use @colyseus/monitor
     * It is recommended to protect this route with a password
     * Read more: https://docs.colyseus.io/tools/monitor/#restrict-access-to-the-panel-using-a-password
     */
    app.use('/colyseus', monitor());
  },

  beforeListen: () => {
    /**
     * Before before gameServer.listen() is called.
     */
    connect(
      'mongodb+srv://joseosgui:F1Wy7S9l0uOs6hgI@cluster0.andeznt.mongodb.net/dev?retryWrites=true&w=majority',
      {
        maxPoolSize: MAX_POOL_CONNECTIONS_SIZE,
        socketTimeoutMS: 45000,
      }
    );
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: 'pac-linkersito',
        clientEmail:
          'firebase-adminsdk-fbsvc@pac-linkersito.iam.gserviceaccount.com',
        privateKey:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDnMtOraErNVI9P\nSCIkmNzpw1e1qEvoPOGC1JBdDjCDWky7S7HeqZXTJOYcIGAsk5OM/Z5YhsxQHRiy\nRL9bMKIpDFXVMZhH44Sc2BM6rKbRNYa4wtEjEMGPQMkX5xvzCp+WXWgGaaxgEQHn\nDu8FNHgljY03CPqXiPBsJSM9k5gc1XSwUue4hUEjhovPCR36HeWEfQYDIDlCZvzL\nr0LPyQAq4NC8HOl069sO0XzoVHS3aXIZL/kYB/a8ILPY3OpV0Ndro1pLeWIAPv9s\nhJ9PaNoVviN1Uq16EXesf0zJHgVeGysVClpXXB/92Z32BBJjw8yEGnVpcHOInLVg\ndGHHWdL5AgMBAAECggEAAzwl1A8ohMj7HFvhBmwRI0A1ePg636wCZ8c7oeGx8hSQ\nYEqF2Zy72PF6OsiFL/p8pQtjbM+uCizuDIiDuO3sRvDCPrJr9A2N7HflhPundePu\n16T6Miho3O1GIwx7yqHKa9swum4+GDYEtcvysjryt2vMnwmEIBytaIX4gUMQbM7U\n/K6TjYkXZbCDfxNXpuGMRQMTjSUo60jNmM2RuFg407fJTDBbQqRWRuEbD0gZuLaK\n4fkrP6h0oya92b5kgyhZClbQZJqUF5YChJr/bA6ADLhweZsgp4kFe3tkYBRiXoer\n9oUX76tkE9tGG2XHl5ENeb1HUKoS/GyVDsVtcFT5AQKBgQD5l5fZq1EqiMcmvkHF\n2IK1XY381O4I7nm8Huh5hBidHG/ut/9ibMXHU2QVT9SncdGV6FVaEbDcAVsQG+Pb\nmwd1IIM45eBnLKCJ1KR2HQgiy3/El+rKWO4Aqn2PQswHJgSgPkMQ9br/ZlNJOUMK\nhtP87SB2b2aQF2aohnQvYDGpGQKBgQDtIlgpqIWgBJQSRDDyc1j7gvayBGansGj1\naJzDvH2HpQWtQneTCWC5x1Mt+nGQL3cH4HAx6sjsfzPpZT7HYyp68qs7hbXRvhgm\nIwm/7x6F0Krp4SVfLPRHr/cr8d5KdO+ZlODX0ykngIjajVOZNu3YTVgPvi/0Darj\nb4BHIPhU4QKBgQCH241LbWYz6dnFbABvSef0AuWbvueGsxBOZuCR7GZddrIy1bLM\nh3qsgebTdu3A60Jy/9Edws1rI83GmffQfLV1euoSmYYpgvArtjSDGlBoaC62+x5R\nYFDEygioZ2qZZYdVFi75V1ifVrp0/BdS7osLfKOT9BV2z1YQ24b4lrrRWQKBgF1G\n3C0Ox/kos+H3htVnwAG3AzkE+ChQAQk/bCKmWy5nIDOF6Kki0DRjjnmQgOk5cnXb\nt+Y6t2wnoRDWrXoarNQN7oMMVne5caBWufgQpA35BbHXyS6F7VThh7V2f30EQFdG\nM6dRvWd3bN2jJ9YlwCsMSW5v3kb+tVCfRHM2KdihAoGAflYkWiNAL04z09ncC+1w\nmK+cKwc5sme8X+YrFSwH+2TS60/xMl6ewUFNgcMU2idxok+896afjIcvOURw23uD\nL3iBZF3N+LCYE3r/Blp+eoA0s7oXE/pPQ6zUhShFTT+buiq53eyYJosmlBvo3SHL\nlQwVRIYHoIgdiSsu7sh6bj4=\n-----END PRIVATE KEY-----\n',
      }),
    });
  },
});
