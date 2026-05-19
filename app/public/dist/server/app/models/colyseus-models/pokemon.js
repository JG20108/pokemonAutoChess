"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metagross = exports.Metang = exports.Beldum = exports.Gigalith = exports.Boldore = exports.Roggenrola = exports.Garchomp = exports.Gabite = exports.Gible = exports.Electivire = exports.Electabuzz = exports.Elekid = exports.Medicham = exports.Meditite = exports.MegaCamerupt = exports.Camerupt = exports.Numel = exports.MegaSteelix = exports.Steelix = exports.Onix = exports.MegaLopunny = exports.Lopunny = exports.Buneary = exports.Tsareena = exports.Steenee = exports.Bounsweet = exports.Kleavor = exports.Scizor = exports.Scyther = exports.MegaAltaria = exports.Altaria = exports.Swablu = exports.Thievul = exports.Nickit = exports.Ribombee = exports.Cutiefly = exports.Crabominable = exports.Crabrawler = exports.Lucario = exports.Riolu = exports.MegaBanette = exports.Banette = exports.Shuppet = exports.MegaManectric = exports.Manectric = exports.Electrike = exports.Egg = exports.Substitute = exports.Ditto = exports.Pokemon = void 0;
exports.Grotle = exports.Turtwig = exports.Leavanny = exports.Swadloon = exports.Sewaddle = exports.PorygonZ = exports.Porygon2 = exports.Porygon = exports.Chandelure = exports.Lampent = exports.Litwick = exports.Alakazam = exports.Kadabra = exports.Abra = exports.Gengar = exports.Haunter = exports.Gastly = exports.KommoO = exports.HakamoO = exports.JangmoO = exports.Tyranitar = exports.Pupitar = exports.Larvitar = exports.HisuiSamurott = exports.Samurott = exports.Dewott = exports.Oshawott = exports.AegislashBlade = exports.Aegislash = exports.Doublade = exports.Honedge = exports.Slaking = exports.Vigoroth = exports.Slakoth = exports.Roserade = exports.Roselia = exports.Budew = exports.Skeledirge = exports.Crocalor = exports.Fuecoco = exports.Gallade = exports.Gardevoir = exports.Kirlia = exports.Ralts = exports.Salamence = exports.Shelgon = exports.Bagon = exports.Seismitoad = exports.Palpitoad = exports.Tympole = void 0;
exports.Snover = exports.Mamoswine = exports.Piloswine = exports.Swinub = exports.Exploud = exports.Loudred = exports.Whismur = exports.Aggron = exports.Lairon = exports.Aron = exports.Rhyperior = exports.Rhydon = exports.Rhyhorn = exports.Togekiss = exports.Togetic = exports.Togepi = exports.Ludicolo = exports.Lombre = exports.Lotad = exports.HisuiGoodra = exports.HisuiSliggoo = exports.Goodra = exports.Sligoo = exports.Goomy = exports.Dragonite = exports.Dragonair = exports.Dratini = exports.Haxorus = exports.Fraxure = exports.Axew = exports.AlolanMarowak = exports.Marowak = exports.Cubone = exports.Luxray = exports.Luxio = exports.Shinx = exports.Reuniclus = exports.Duosion = exports.Solosis = exports.Magmortar = exports.Magmar = exports.Magby = exports.Poliwrath = exports.Politoed = exports.Poliwhirl = exports.Poliwag = exports.Hydreigon = exports.Zweilous = exports.Deino = exports.Torterra = void 0;
exports.Machoke = exports.Machop = exports.Nidoking = exports.Nidorino = exports.NidoranM = exports.Nidoqueen = exports.Nidorina = exports.NidoranF = exports.Walrein = exports.Sealeo = exports.Spheal = exports.Scolipede = exports.Whirlipede = exports.Venipede = exports.Meganium = exports.Bayleef = exports.Chikorita = exports.Florges = exports.Floette = exports.Flabebe = exports.Kingdra = exports.Seadra = exports.Horsea = exports.Magnezone = exports.Magneton = exports.Magnemite = exports.Dusknoir = exports.Dusclops = exports.Duskull = exports.Wigglytuff = exports.Jigglypuff = exports.Igglybuff = exports.Venusaur = exports.Ivysaur = exports.Bulbasaur = exports.AlolanRaichu = exports.Raichu = exports.Pikachu = exports.Pichu = exports.Flygon = exports.Vibrava = exports.Trapinch = exports.Vanilluxe = exports.Vanillish = exports.Vanillite = exports.Froslass = exports.Glalie = exports.Snorunt = exports.MegaAbomasnow = exports.Abomasnow = void 0;
exports.Cleffa = exports.Ampharos = exports.Flaffy = exports.Mareep = exports.Crobat = exports.Golbat = exports.Zubat = exports.Azumarill = exports.Marill = exports.Azurill = exports.Feraligatr = exports.Croconaw = exports.Totodile = exports.Golem = exports.Graveler = exports.Geodude = exports.Victreebel = exports.Weepinbell = exports.Bellsprout = exports.Blastoise = exports.Wartortle = exports.Squirtle = exports.Golduck = exports.Psyduck = exports.GalarianSlowking = exports.GalarianSlowbro = exports.GalarianSlowpoke = exports.Slowking = exports.Slowbro = exports.Slowpoke = exports.HisuianTyphlosion = exports.Typhlosion = exports.Quilava = exports.Cyndaquil = exports.Sceptile = exports.Grovyle = exports.Treecko = exports.Blaziken = exports.Combusken = exports.Torchic = exports.Swampert = exports.Marshtomp = exports.Mudkip = exports.Infernape = exports.Monferno = exports.Chimchar = exports.Empoleon = exports.Prinplup = exports.Piplup = exports.Machamp = void 0;
exports.GalarianArticuno = exports.Articuno = exports.Pinsir = exports.GalarianMoltres = exports.Moltres = exports.Yveltal = exports.Miltank = exports.Wyrdeer = exports.Stantler = exports.Zeraora = exports.GalarianZapdos = exports.Zapdos = exports.OriginGiratina = exports.Giratina = exports.ShadowLugia = exports.Lugia = exports.PirouetteMeloetta = exports.Meloetta = exports.Fearow = exports.Spearow = exports.AlolanRaticate = exports.AlolanRattata = exports.Raticate = exports.Rattata = exports.PikachuSurfer = exports.Gyarados = exports.Magikarp = exports.Charizard = exports.Charmeleon = exports.Charmander = exports.Meowscarada = exports.Floragato = exports.Sprigatito = exports.Shiftry = exports.Nuzleaf = exports.Seedot = exports.Jumpluff = exports.Skiploom = exports.Hoppip = exports.Pidgeot = exports.Pidgeotto = exports.Pidgey = exports.Beedrill = exports.Kakuna = exports.Weedle = exports.Butterfree = exports.Metapod = exports.Caterpie = exports.Clefable = exports.Clefairy = void 0;
exports.Terrakion = exports.Keldeo = exports.Enamorus = exports.Tornadus = exports.Thundurus = exports.Landorus = exports.CastformHail = exports.CastformRain = exports.CastformSun = exports.Castform = exports.Kecleon = exports.GalarianFarfetchd = exports.Farfetchd = exports.Chatot = exports.Volcarona = exports.Larvesta = exports.Darkrai = exports.Volcanion = exports.Glaceon = exports.Sylveon = exports.Leafeon = exports.Umbreon = exports.Espeon = exports.Flareon = exports.Jolteon = exports.Vaporeon = exports.Eevee = exports.Rayquaza = exports.Groudon = exports.Kyogre = exports.Regigigas = exports.Registeel = exports.Zangoose = exports.Heracross = exports.TaurosAquaBreed = exports.TaurosBlazeBreed = exports.TaurosCombatBreed = exports.Tauros = exports.Regirock = exports.Solrock = exports.Lunatone = exports.Seviper = exports.Regice = exports.Entei = exports.Raikou = exports.Suicune = exports.Melmetal = exports.Meltan = exports.Palkia = exports.Dialga = void 0;
exports.MegaRayquaza = exports.PrimalKyogre = exports.PrimalGroudon = exports.Drampa = exports.Cryogonal = exports.Heatmor = exports.Torkoal = exports.RoaringMoon = exports.HooH = exports.Heatran = exports.Cresselia = exports.ShayminSky = exports.Shaymin = exports.DeoxysSpeed = exports.DeoxysAttack = exports.DeoxysDefense = exports.Deoxys = exports.Arceus = exports.Jirachi = exports.Victini = exports.Celebi = exports.Zekrom = exports.Reshiram = exports.Kyurem = exports.Marshadow = exports.ShadowMewtwo = exports.Mewtwo = exports.Mew = exports.Azelf = exports.Mesprit = exports.Uxie = exports.Latios = exports.Latias = exports.Lapras = exports.IronBundle = exports.Delibird = exports.Absol = exports.Spiritomb = exports.RotomDrone = exports.RotomMow = exports.RotomFan = exports.RotomFrost = exports.RotomWash = exports.RotomHeat = exports.Rotom = exports.Manaphy = exports.Phione = exports.Mawile = exports.Cobalion = exports.Virizion = void 0;
exports.Regieleki = exports.Delphox = exports.Braixen = exports.Fennekin = exports.Hatterene = exports.Hattrem = exports.Hatenna = exports.Genesect = exports.Aerodactyl = exports.Tyrantrum = exports.Tyrunt = exports.Relicanth = exports.Huntail = exports.Gorebyss = exports.Clamperl = exports.Omastar = exports.Omanyte = exports.Kabutops = exports.Kabuto = exports.Rampardos = exports.Cranidos = exports.Cradily = exports.Lileep = exports.Mienshao = exports.Mienfoo = exports.Bastiodon = exports.Shieldon = exports.Gliscor = exports.Gligar = exports.Archeops = exports.Archen = exports.Musharna = exports.Munna = exports.Wobbuffet = exports.Wynaut = exports.Armaldo = exports.Anorith = exports.Annihilape = exports.Primeape = exports.Mankey = exports.Sunflora = exports.Sunkern = exports.Diancie = exports.Carbink = exports.Aurorus = exports.Amaura = exports.Bellossom = exports.Vileplume = exports.Gloom = exports.Oddish = void 0;
exports.Hoothoot = exports.AlolanPersian = exports.AlolanMeowth = exports.Persian = exports.Meowth = exports.Crawdaunt = exports.Corphish = exports.Parasect = exports.Paras = exports.Galvantula = exports.Joltik = exports.Furret = exports.Sentret = exports.Hariyama = exports.Makuhita = exports.GalarianRapidash = exports.GalarianPonyta = exports.Rapidash = exports.Ponyta = exports.Floatzel = exports.Buizel = exports.Cloyster = exports.Shellder = exports.Noivern = exports.Noibat = exports.Xatu = exports.Natu = exports.Gourgeist = exports.Pumpkaboo = exports.Cacturne = exports.Cacnea = exports.MegaHoundoom = exports.Houndoom = exports.Houndour = exports.Blacephalon = exports.Stakataka = exports.TapuBulu = exports.TapuFini = exports.Xerneas = exports.TapuLele = exports.TapuKoko = exports.Blissey = exports.Chansey = exports.Happiny = exports.Shedinja = exports.Ninjask = exports.Nincada = exports.Eternatus = exports.Guzzlord = exports.Regidrago = void 0;
exports.Appletun = exports.Dipplin = exports.Applin = exports.Silvally = exports.TypeNull = exports.Granbull = exports.Snubull = exports.Tentacruel = exports.Tentacool = exports.Breloom = exports.Shroomish = exports.Drifblim = exports.Drifloon = exports.Bronzong = exports.Bronzor = exports.Mightyena = exports.Poochyena = exports.Lanturn = exports.Chinchou = exports.Toxicroak = exports.Croagunk = exports.Dewgong = exports.Seel = exports.Sneasler = exports.HisuiSneasel = exports.Weavile = exports.Sneasel = exports.Magcargo = exports.Slugma = exports.HisuiElectrode = exports.HisuiVoltorb = exports.Electrode = exports.Voltorb = exports.Venomoth = exports.Venonat = exports.Salazzle = exports.Salandit = exports.MrMime = exports.MimeJr = exports.Jynx = exports.Smoochum = exports.HisuiArcanine = exports.HisuiGrowlithe = exports.Arcanine = exports.Growlithe = exports.Naganadel = exports.Poipole = exports.Snorlax = exports.Munchlax = exports.Noctowl = void 0;
exports.UnownG = exports.UnownF = exports.UnownE = exports.UnownD = exports.UnownC = exports.UnownB = exports.UnownA = exports.Forretress = exports.Pineco = exports.Swoobat = exports.Woobat = exports.Probopass = exports.Nosepass = exports.AlolanSandslash = exports.AlolanSandshrew = exports.Sandslash = exports.Sandshrew = exports.Gothitelle = exports.Gothorita = exports.Gothita = exports.Primarina = exports.Brionne = exports.Popplio = exports.AlolanGolem = exports.AlolanGraveler = exports.AlolanGeodude = exports.Cinderace = exports.Raboot = exports.Scorbunny = exports.Staraptor = exports.Staravia = exports.Starly = exports.Serperior = exports.Servine = exports.Snivy = exports.Dragapult = exports.Drakloak = exports.Dreepy = exports.Wailord = exports.Wailmer = exports.Frosmoth = exports.Snom = exports.AlolanNinetales = exports.AlolanVulpix = exports.Ninetales = exports.Vulpix = exports.Starmie = exports.Staryu = exports.Hydrapple = exports.Flapple = void 0;
exports.Hitmonlee = exports.Hitmontop = exports.Tyrogue = exports.Chimecho = exports.Chingling = exports.Greninja = exports.Frogadier = exports.Froakie = exports.Sharpedo = exports.Carvanha = exports.Arbok = exports.Ekans = exports.AlolanMuk = exports.AlolanGrimer = exports.Muk = exports.Grimer = exports.HisuiZoroark = exports.HisuiZorua = exports.Zoroark = exports.Zorua = exports.Decidueye = exports.Dartix = exports.Rowlet = exports.AlolanDugtrio = exports.AlolanDiglett = exports.Wugtrio = exports.Wiglett = exports.Dugtrio = exports.Diglett = exports.UnownExclamation = exports.UnownQuestion = exports.UnownZ = exports.UnownY = exports.UnownX = exports.UnownW = exports.UnownV = exports.UnownU = exports.UnownT = exports.UnownS = exports.UnownR = exports.UnownQ = exports.UnownP = exports.UnownO = exports.UnownN = exports.UnownM = exports.UnownL = exports.UnownK = exports.UnownJ = exports.UnownI = exports.UnownH = void 0;
exports.Pancham = exports.Liepard = exports.Purrloin = exports.Claydol = exports.Baltoy = exports.Spinda = exports.Bibarel = exports.Bidoof = exports.AlolanExeggutor = exports.Exeggutor = exports.Exeggcute = exports.Heliolisk = exports.Helioptile = exports.Yanmega = exports.Yanma = exports.Clawitzer = exports.Clauncher = exports.GalarianWeezing = exports.Weezing = exports.Koffing = exports.MegaSableye = exports.Sableye = exports.Carnivine = exports.Tropius = exports.Dhelmise = exports.Kartana = exports.Glastrier = exports.Spectrier = exports.Minun = exports.Plusle = exports.Maractus = exports.Tinkaton = exports.Tinkatuff = exports.Tinkatink = exports.Dustox = exports.Cascoon = exports.Beautifly = exports.Silcoon = exports.Wurmple = exports.Emboar = exports.Pignite = exports.Tepig = exports.Shuckle = exports.Vespiqueen = exports.Combee = exports.Sudowoodo = exports.Bonsley = exports.MimikyuBusted = exports.Mimikyu = exports.Hitmonchan = void 0;
exports.MiniorKernelRed = exports.MiniorKernelBlue = exports.Minior = exports.MorpekoHangry = exports.Morpeko = exports.MausholdFour = exports.MausholdThree = exports.Tandemaus = exports.Nihilego = exports.Xurkitree = exports.Overqwil = exports.HisuianQwilfish = exports.Qwilfish = exports.Trevenant = exports.Phantump = exports.Obstagoon = exports.GalarianLinoone = exports.GalarianZigzagoon = exports.Linoone = exports.Zigzagoon = exports.Honchkrow = exports.Murkrow = exports.Pelipper = exports.Wingull = exports.Swanna = exports.Ducklett = exports.Hippodown = exports.Hippopotas = exports.Kricketune = exports.Kricketot = exports.Dodrio = exports.Doduo = exports.Mismagius = exports.Misdreavus = exports.CherrimSunlight = exports.Cherrim = exports.Cherubi = exports.UltraNecrozma = exports.Necrozma = exports.Volbeat = exports.Illumise = exports.Skuntank = exports.Stunky = exports.Lumineon = exports.Finneon = exports.Scrafty = exports.Scraggy = exports.Whiscash = exports.Barboach = exports.Pangoro = void 0;
exports.SawsbuckWinter = exports.SawsbuckAutumn = exports.SawsbuckSummer = exports.SawsbuckSpring = exports.DeerlingWinter = exports.DeerlingAutumn = exports.DeerlingSummer = exports.DeerlingSpring = exports.Ambipom = exports.Aipom = exports.UrsalunaBloodmoon = exports.Ursaluna = exports.Ursaring = exports.Teddiursa = exports.Kangaskhan = exports.Lickilicky = exports.Lickitung = exports.Araquanid = exports.Dewpider = exports.Milotic = exports.Feebas = exports.Kingambit = exports.Bisharp = exports.Pawniard = exports.Cyclizar = exports.Toxtricity = exports.Toxel = exports.Smeargle = exports.Cursola = exports.GalarCorsola = exports.Corsola = exports.Bruxish = exports.Arctovish = exports.Arctozolt = exports.Dracozolt = exports.Dracovish = exports.Pheromosa = exports.Stoutland = exports.Herdier = exports.Lillipup = exports.Comfey = exports.Inteleon = exports.Drizzile = exports.Sobble = exports.Gholdengo = exports.Gimmighoul = exports.HoopaUnbound = exports.Hoopa = exports.MiniorKernelGreen = exports.MiniorKernelOrange = void 0;
exports.Grubbin = exports.Garbodor = exports.Trubbish = exports.Golurk = exports.Golett = exports.Ferrothorn = exports.Ferroseed = exports.Polteageist = exports.Sinistea = exports.Grumpig = exports.Spoink = exports.Donphan = exports.Phanpy = exports.Tangrowth = exports.Tangela = exports.Clodsire = exports.PaldeaWooper = exports.Quagsire = exports.Wooper = exports.Mothim = exports.WormadamTrash = exports.WormadamSandy = exports.WormadamPlant = exports.BurmyTrash = exports.BurmySandy = exports.BurmyPlant = exports.burmyDivergentEvolutionRule = exports.Kilowattrel = exports.Wattrel = exports.Hypno = exports.Drowzee = exports.Grimmsnarl = exports.Morgrem = exports.Impidimp = exports.Magearna = exports.Lunala = exports.Solgaleo = exports.Cosmoem = exports.Cosmog = exports.Druddigon = exports.LycanrocDay = exports.LycanrocNight = exports.LycanrocDusk = exports.Rockruff = exports.Ariados = exports.Spinarak = exports.Swellow = exports.Taillow = exports.Watchog = exports.Patrat = void 0;
exports.IronHands = exports.OgerponCornerstoneMask = exports.OgerponCornerstone = exports.OgerponHearthflameMask = exports.OgerponHearthflame = exports.OgerponWellspringMask = exports.OgerponWellspring = exports.OgerponTealMask = exports.OgerponTeal = exports.Skarmory = exports.Barbaracle = exports.Binacle = exports.Krookodile = exports.Krokorok = exports.Sandile = exports.Baxcalibur = exports.Arctibax = exports.Frigibax = exports.Sigilyph = exports.Octillery = exports.Remoraid = exports.Mantine = exports.Mantyke = exports.HisuianLilligant = exports.Lilligant = exports.Petilil = exports.Audino = exports.Luvdisc = exports.Seaking = exports.Goldeen = exports.Pyukumuku = exports.Pawmot = exports.Pawmo = exports.Pawmi = exports.WishiwashiSchool = exports.Wishiwashi = exports.Durant = exports.Arrokuda = exports.Cramorant = exports.Stonjourner = exports.Hawlucha = exports.Klefki = exports.Braviary = exports.Rufflet = exports.GastrodonEastSea = exports.ShellosEastSea = exports.GastrodonWestSea = exports.ShellosWestSea = exports.Vikavolt = exports.Charjabug = void 0;
exports.Garganacl = exports.Naclstack = exports.Nacli = exports.Beartic = exports.Cubchoo = exports.Dragalge = exports.Skrelp = exports.Incineroar = exports.Torracat = exports.Litten = exports.Beheeyem = exports.Elgyem = exports.PillarConcrete = exports.PillarIron = exports.PillarWood = exports.Conkeldurr = exports.Gurdurr = exports.Timburr = exports.Malamar = exports.Inkay = exports.Mandibuzz = exports.Vullaby = exports.Talonflame = exports.Fletchinder = exports.Fletchling = exports.Glimmora = exports.Glimmet = exports.Bewear = exports.Stufful = exports.Centiskorch = exports.Sizzlipede = exports.Zygarde100 = exports.Zygarde50 = exports.Zygarde10 = exports.Kingler = exports.Krabby = exports.GalarianDarmanitanZen = exports.GalarianDarmanitan = exports.GalarianDarumaka = exports.DarmanitanZen = exports.Darmanitan = exports.Darumaka = exports.Drapion = exports.Skorupi = exports.Palossand = exports.Sandygast = exports.Turtonator = exports.Corviknight = exports.Corvisquire = exports.Rookidee = void 0;
exports.Skitty = exports.Farigiraf = exports.Girafarig = exports.Whimsicott = exports.Cottonee = exports.IndeedeeMale = exports.IndeedeeFemale = exports.ScreamTail = exports.UrshifuSingle = exports.UrshifuRapid = exports.Kubfu = exports.Rillaboom = exports.Thwackey = exports.Grookey = exports.IronValiant = exports.ZacianCrowned = exports.Zacian = exports.Unfezant = exports.Tranquill = exports.Pidove = exports.Eelektross = exports.Eelektrik = exports.Tynamo = exports.Ceruledge = exports.Armarouge = exports.Charcadet = exports.Lurantis = exports.Fomantis = exports.Archaludon = exports.Duraludon = exports.Veluza = exports.Pecharunt = exports.AlcremieRainbowSwirl = exports.AlcremieCaramelSwirl = exports.AlcremieRubySwirl = exports.AlcremieSalted = exports.AlcremieLemon = exports.AlcremieMint = exports.AlcremieMatcha = exports.AlcremieRuby = exports.AlcremieVanilla = exports.Milcery = exports.Dachsbun = exports.Fidough = exports.Swalot = exports.Gulpin = exports.Slurpuff = exports.Swirlix = exports.Scovillain = exports.Capsakid = void 0;
exports.Chewtle = exports.Runerigus = exports.GalarianYamask = exports.Cofagrigus = exports.Yamask = exports.Buzzwole = exports.Pachirisu = exports.Orbeetle = exports.Dottler = exports.Blipbug = exports.Lokix = exports.Nymble = exports.Chesnaught = exports.Quilladin = exports.Chespin = exports.Arboliva = exports.Dolliv = exports.Smoliv = exports.Dudunsparse = exports.Dunsparce = exports.Sandaconda = exports.Silicobra = exports.FalinksTrooper = exports.FalinksBrass = exports.Dedenne = exports.Togedemaru = exports.Excadrill = exports.Drilbur = exports.Emolga = exports.Ledian = exports.Ledyba = exports.Celesteela = exports.Revavroom = exports.Varoom = exports.Furfrou = exports.Eldegoss = exports.Gossifleur = exports.Masquerain = exports.Surskit = exports.Fezandipiti = exports.Munkidori = exports.Okidogi = exports.MeowsticFemale = exports.MeowsticMale = exports.Espurr = exports.Cinccino = exports.Minccino = exports.Purugly = exports.Glameow = exports.Delcatty = void 0;
exports.VivillonFancy = exports.VivillonJungle = exports.VivillonOcean = exports.VivillonSun = exports.VivillonSavanna = exports.VivillonMonsoon = exports.VivillonRiver = exports.VivillonSandstorm = exports.VivillonHighPlains = exports.VivillonArchipelago = exports.VivillonMarine = exports.VivillonModern = exports.VivillonElegant = exports.VivillonGarden = exports.VivillonContinental = exports.VivillonTundra = exports.VivillonPolar = exports.VivillonIcySnow = exports.Vivillon = exports.Spewpa = exports.Scatterbug = exports.Diggersby = exports.Bunnelby = exports.Gogoat = exports.Skiddo = exports.Mudsdale = exports.Mudbray = exports.Pincurchin = exports.Bellibolt = exports.Tadbulb = exports.IronThorns = exports.Orthworm = exports.WalkingWake = exports.FlutterMane = exports.Klinklang = exports.Klang = exports.Klink = exports.BasculegionFemale = exports.BasculegionMale = exports.BasculinWhite = exports.BasculinBlue = exports.BasculinRed = exports.Golisopod = exports.Wimpod = exports.ChiYu = exports.Grapploct = exports.Clobbopus = exports.Houndstone = exports.Greavard = exports.Drednaw = void 0;
exports.PokemonClasses = exports.SlitherWing = exports.Spidops = exports.Tarountula = exports.Komala = exports.Quaquaval = exports.Quaxwell = exports.Quaxly = exports.Greedent = exports.Skwovet = exports.Crustle = exports.Dwebble = exports.EiscueNoice = exports.Eiscue = exports.Escavalier = exports.Karrablast = exports.HisuiAvalugg = exports.Avalugg = exports.Bergmite = exports.Cetitan = exports.Cetoddle = exports.TatsugiriStretchy = exports.TatsugiriDroopy = exports.TatsugiriCurly = exports.Dondozo = exports.Toxapex = exports.Mareanie = exports.PalafinHero = exports.Palafin = exports.Finizen = exports.GreatTusk = exports.Boltund = exports.Yamper = exports.Dubwool = exports.Wooloo = exports.OinkologneFemale = exports.OinkologneMale = exports.Lechonk = exports.VivillonPokeball = void 0;
const schema_1 = require("@colyseus/schema");
const config_1 = require("../../config");
const evolution_rules_1 = require("../../core/evolution-rules");
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Dungeon_1 = require("../../types/enum/Dungeon");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const array_1 = require("../../utils/array");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const number_1 = require("../../utils/number");
const schemas_1 = require("../../utils/schemas");
const effects_1 = require("../effects");
const pokemon_factory_1 = __importDefault(require("../pokemon-factory"));
class Pokemon extends schema_1.Schema {
    constructor(name, shiny = false, emotion = types_1.Emotion.NORMAL) {
        super();
        this.types = new schema_1.SetSchema();
        this.rarity = Game_1.Rarity.SPECIAL;
        this.evolution = Pokemon_1.Pkm.DEFAULT;
        this.positionX = -1;
        this.positionY = -1;
        this.speed = config_1.DEFAULT_SPEED;
        this.def = 1;
        this.speDef = 1;
        this.atk = 1;
        this.hp = 10;
        this.maxHP = 10;
        this.shield = 0;
        this.critChance = config_1.DEFAULT_CRIT_CHANCE;
        this.critPower = config_1.DEFAULT_CRIT_POWER;
        this.range = 1;
        this.stars = 1;
        this.pp = 0;
        this.maxPP = 100;
        this.ap = 0;
        this.luck = 0;
        this.skill = Ability_1.Ability.DEFAULT;
        this.tm = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.NONE;
        this.items = new schema_1.SetSchema();
        this.dishes = new schema_1.SetSchema();
        this.action = Game_1.PokemonActionState.IDLE;
        this.stacks = 0;
        this.stacksRequired = 0;
        this.supercharged = false;
        this.dodge = 0;
        this.deathCount = 0;
        this.killCount = 0;
        this.evolutions = [];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3);
        this.additional = false;
        this.regional = false;
        this.canHoldItems = true;
        this.canBeBenched = true;
        this.canBeSold = true;
        this.id = crypto.randomUUID();
        this.name = name;
        this.index = Pokemon_1.PkmIndex[name];
        this.shiny = shiny;
        this.emotion = emotion;
    }
    get final() {
        return (!this.hasEvolution ||
            (this.evolutionRule instanceof evolution_rules_1.CountEvolutionRule === false &&
                this.passive !== Passive_1.Passive.CORSOLA &&
                this.passive !== Passive_1.Passive.AVALUGG));
    }
    get canBePlaced() {
        return ![Pokemon_1.Pkm.EGG].includes(this.name);
    }
    get canBeCloned() {
        return (this.rarity !== Game_1.Rarity.UNIQUE &&
            this.rarity !== Game_1.Rarity.LEGENDARY &&
            this.rarity !== Game_1.Rarity.HATCH &&
            this.passive !== Passive_1.Passive.INANIMATE &&
            ![Pokemon_1.Pkm.DITTO, Pokemon_1.Pkm.EGG].includes(this.name));
    }
    get canEat() {
        return (this.passive !== Passive_1.Passive.INANIMATE &&
            !Pokemon_1.Unowns.includes(this.name) &&
            (this.dishes.size === 0 ||
                (this.items.has(Item_1.Item.BIG_EATER_BELT) && this.dishes.size === 1)));
    }
    get hasEvolution() {
        return this.evolution !== Pokemon_1.Pkm.DEFAULT || this.evolutions.length > 0;
    }
    get doesCountForTeamSize() {
        return (this.passive !== Passive_1.Passive.INANIMATE &&
            this.items.has(Item_1.Item.GOLD_BOW) === false);
    }
    onChangePosition(x, y, player, state, doNotRemoveItems = false) {
        if (y === 0 && !doNotRemoveItems) {
            const itemsToRemove = (0, schemas_1.schemaValues)(this.items).filter((item) => {
                return ((0, array_1.isIn)(Item_1.RemovableItems, item) ||
                    ((state === null || state === void 0 ? void 0 : state.specialGameRule) === SpecialGameRule_1.SpecialGameRule.SLAMINGO &&
                        item !== Item_1.Item.RARE_CANDY));
            });
            player.items.push(...itemsToRemove);
            this.removeItems(itemsToRemove, player);
        }
    }
    onItemGiven(item, player) {
    }
    onItemRemoved(item, player) {
    }
    onAcquired(player) {
    }
    afterSell(player) {
    }
    afterEvolve(params) {
    }
    beforeSimulationStart(params) {
    }
    onSpawn(params) {
    }
    isInRegion(map, state) {
        var _a;
        if (map === "town")
            return false;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        const basePkm = Pokemon_1.PkmFamily[this.name];
        const originalVariantPkm = Object.keys(Pokemon_1.PkmRegionalVariants).find((p) => Pokemon_1.PkmRegionalVariants[p].includes(basePkm));
        let originalVariant = null;
        if (originalVariantPkm) {
            originalVariant = new exports.PokemonClasses[originalVariantPkm](originalVariantPkm);
            if ((originalVariant === null || originalVariant === void 0 ? void 0 : originalVariant.additional) === true &&
                state &&
                state.additionalPokemons.includes(originalVariantPkm) === false) {
                return false;
            }
        }
        if (originalVariant) {
            const commonTypes = (0, schemas_1.schemaValues)(originalVariant.types).filter((t) => this.types.has(t));
            if (commonTypes.some((t) => regionSynergies.includes(t))) {
                return false;
            }
        }
        return regionSynergies.some((s) => this.types.has(s));
    }
    addItem(item, player) {
        this.addItems([item], player);
    }
    addItems(items, player) {
        if (this.canHoldItems === false)
            return;
        for (const item of items) {
            this.items.add(item);
            this.onItemGiven(item, player);
        }
        player.updateSynergies();
    }
    removeItem(item, player) {
        this.removeItems([item], player);
    }
    removeItems(items, player) {
        for (const item of items) {
            this.items.delete(item);
        }
        const nativeTypes = new exports.PokemonClasses[this.name](this.name).types;
        for (const item of items) {
            const synergyRemoved = Item_1.SynergyGivenByItem[item];
            const otherSynergyItemsHeld = (0, schemas_1.schemaValues)(this.items).filter((i) => Item_1.SynergyGivenByItem[i] === synergyRemoved);
            if (synergyRemoved && otherSynergyItemsHeld.length === 0) {
                if (nativeTypes.has(synergyRemoved) === false) {
                    this.types.delete(synergyRemoved);
                }
                if (this.passive === Passive_1.Passive.RKS_SYSTEM) {
                    const memory = Item_1.MemoryDiscsBySynergy[synergyRemoved];
                    if (player.items.includes(memory) === false && memory) {
                        player.items.push(memory);
                    }
                }
            }
        }
        for (const item of items) {
            this.onItemRemoved(item, player);
        }
    }
    applyStat(stat, value) {
        switch (stat) {
            case Game_1.Stat.ATK:
                this.addAttack(value);
                break;
            case Game_1.Stat.DEF:
                this.addDefense(value);
                break;
            case Game_1.Stat.SPE_DEF:
                this.addSpecialDefense(value);
                break;
            case Game_1.Stat.AP:
                this.addAbilityPower(value);
                break;
            case Game_1.Stat.PP:
                this.addPP(value);
                break;
            case Game_1.Stat.SPEED:
                this.addSpeed(value);
                break;
            case Game_1.Stat.CRIT_CHANCE:
                this.addCritChance(value);
                break;
            case Game_1.Stat.CRIT_POWER:
                this.addCritPower(value);
                break;
            case Game_1.Stat.SHIELD:
                this.addShield(value);
                break;
            case Game_1.Stat.HP:
                this.addMaxHP(value);
                break;
            case Game_1.Stat.LUCK:
                this.addLuck(value);
                break;
        }
    }
    addPP(value) {
        this.pp = (0, number_1.clamp)(this.pp + value, 0, this.maxPP * 2 - 1);
    }
    addCritChance(value) {
        this.critChance += value;
        if (this.critChance > 100) {
            const overCritChance = Math.round(this.critChance - 100);
            this.addCritPower(overCritChance);
            this.critChance = 100;
        }
    }
    addCritPower(value) {
        this.critPower = (0, number_1.min)(0)(this.critPower + value / 100);
    }
    addShield(value) {
        this.shield = (0, number_1.min)(0)(this.shield + value);
    }
    addDodgeChance(value) {
        this.dodge = (0, number_1.clamp)(this.dodge + value, 0, 0.9);
    }
    addAbilityPower(value) {
        this.ap = (0, number_1.min)(-100)(this.ap + value);
    }
    addLuck(value) {
        this.luck = (0, number_1.clamp)(this.luck + value, -100, +100);
    }
    addDefense(value) {
        this.def = (0, number_1.min)(0)(this.def + value);
    }
    addSpecialDefense(value) {
        this.speDef = (0, number_1.min)(0)(this.speDef + value);
    }
    addAttack(value) {
        this.atk = (0, number_1.min)(1)(this.atk + value);
    }
    addSpeed(value) {
        this.speed = (0, number_1.clamp)(this.speed + value, 0, 300);
    }
    addMaxHP(amount) {
        this.hp = (0, number_1.min)(1)(this.hp + amount);
        this.maxHP = this.hp;
    }
}
exports.Pokemon = Pokemon;
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], Pokemon.prototype, "types", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "rarity", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "index", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "evolution", void 0);
__decorate([
    (0, schema_1.type)("int8")
], Pokemon.prototype, "positionX", void 0);
__decorate([
    (0, schema_1.type)("int8")
], Pokemon.prototype, "positionY", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "speed", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "def", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "speDef", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Pokemon.prototype, "atk", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Pokemon.prototype, "hp", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Pokemon.prototype, "maxHP", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Pokemon.prototype, "shield", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "critChance", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Pokemon.prototype, "critPower", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "range", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "stars", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "pp", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "maxPP", void 0);
__decorate([
    (0, schema_1.type)("int16")
], Pokemon.prototype, "ap", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "luck", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "skill", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "tm", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "passive", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], Pokemon.prototype, "items", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], Pokemon.prototype, "dishes", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Pokemon.prototype, "shiny", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "emotion", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "action", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "stacks", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "stacksRequired", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Pokemon.prototype, "supercharged", void 0);
class Ditto extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 50;
        this.atk = 5;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.TRANSFORM;
        this.passive = Passive_1.Passive.DITTO;
    }
}
exports.Ditto = Ditto;
class Substitute extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 1;
        this.speed = 28;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.canHoldItems = false;
    }
}
exports.Substitute = Substitute;
class Egg extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 30;
        this.atk = 1;
        this.speed = 41;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.EGG;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.canHoldItems = false;
    }
}
exports.Egg = Egg;
class Electrike extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MANECTRIC;
        this.hp = 80;
        this.atk = 6;
        this.speed = 70;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDER_FANG;
        this.additional = true;
    }
}
exports.Electrike = Electrike;
class Manectric extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 14;
        this.speed = 70;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDER_FANG;
        this.additional = true;
    }
}
exports.Manectric = Manectric;
class MegaManectric extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 27;
        this.speed = 70;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
    }
}
exports.MegaManectric = MegaManectric;
class Shuppet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BANETTE;
        this.hp = 100;
        this.atk = 10;
        this.speed = 46;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_CLONE;
        this.additional = true;
    }
}
exports.Shuppet = Shuppet;
class Banette extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.speed = 46;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_CLONE;
        this.additional = true;
    }
}
exports.Banette = Banette;
class MegaBanette extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.speed = 46;
        this.def = 8;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
    }
}
exports.MegaBanette = MegaBanette;
class Riolu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LUCARIO;
        this.hp = 65;
        this.atk = 6;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AURASPHERE;
        this.additional = true;
    }
}
exports.Riolu = Riolu;
class Lucario extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.speed = 54;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AURASPHERE;
        this.additional = true;
    }
}
exports.Lucario = Lucario;
class Crabrawler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CRABOMINABLE;
        this.hp = 90;
        this.atk = 10;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_HAMMER;
        this.additional = true;
        this.passive = Passive_1.Passive.BERRY_EATER;
    }
}
exports.Crabrawler = Crabrawler;
class Crabominable extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 220;
        this.atk = 24;
        this.speed = 39;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_HAMMER;
        this.additional = true;
        this.passive = Passive_1.Passive.BERRY_EATER;
    }
}
exports.Crabominable = Crabominable;
class Cutiefly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RIBOMBEE;
        this.hp = 75;
        this.atk = 5;
        this.speed = 65;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 40;
        this.range = 2;
        this.skill = Ability_1.Ability.POLLEN_PUFF;
        this.regional = true;
    }
}
exports.Cutiefly = Cutiefly;
class Ribombee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 10;
        this.speed = 65;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 40;
        this.range = 2;
        this.skill = Ability_1.Ability.POLLEN_PUFF;
        this.regional = true;
    }
}
exports.Ribombee = Ribombee;
class Nickit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIELD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.THIEVUL;
        this.hp = 75;
        this.atk = 7;
        this.speed = 54;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THIEF;
        this.additional = true;
    }
}
exports.Nickit = Nickit;
class Thievul extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIELD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 17;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THIEF;
        this.additional = true;
    }
}
exports.Thievul = Thievul;
class Swablu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALTARIA;
        this.hp = 100;
        this.atk = 9;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HYPER_VOICE;
        this.additional = true;
    }
}
exports.Swablu = Swablu;
class Altaria extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 170;
        this.atk = 15;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HYPER_VOICE;
        this.additional = true;
    }
}
exports.Altaria = Altaria;
class MegaAltaria extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 260;
        this.atk = 24;
        this.speed = 51;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DEFAULT;
    }
}
exports.MegaAltaria = MegaAltaria;
class Scyther extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 17;
        this.speed = 59;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.X_SCISSOR;
    }
}
exports.Scyther = Scyther;
class Scizor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 22;
        this.speed = 42;
        this.def = 14;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BULLET_PUNCH;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.STEEL) ||
            regionSynergies.includes(Synergy_1.Synergy.ARTIFICIAL) ||
            regionSynergies.includes(Synergy_1.Synergy.FIGHTING));
    }
}
exports.Scizor = Scizor;
class Kleavor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 22;
        this.speed = 55;
        this.def = 14;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STONE_AXE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.ROCK) ||
            regionSynergies.includes(Synergy_1.Synergy.FOSSIL) ||
            regionSynergies.includes(Synergy_1.Synergy.DARK));
    }
}
exports.Kleavor = Kleavor;
class Bounsweet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STEENEE;
        this.hp = 85;
        this.atk = 10;
        this.speed = 48;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.TROP_KICK;
    }
}
exports.Bounsweet = Bounsweet;
class Steenee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TSAREENA;
        this.hp = 160;
        this.atk = 19;
        this.speed = 48;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.TROP_KICK;
    }
}
exports.Steenee = Steenee;
class Tsareena extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 320;
        this.atk = 33;
        this.speed = 48;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.TROP_KICK;
    }
}
exports.Tsareena = Tsareena;
class Buneary extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LOPUNNY;
        this.hp = 60;
        this.atk = 6;
        this.speed = 59;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.regional = true;
    }
}
exports.Buneary = Buneary;
class Lopunny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 120;
        this.atk = 13;
        this.speed = 59;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.regional = true;
    }
}
exports.Lopunny = Lopunny;
class MegaLopunny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 26;
        this.speed = 59;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.regional = true;
    }
}
exports.MegaLopunny = MegaLopunny;
class Onix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STEELIX;
        this.hp = 100;
        this.atk = 7;
        this.speed = 35;
        this.def = 20;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_TAIL;
        this.additional = true;
    }
}
exports.Onix = Onix;
class Steelix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 13;
        this.speed = 35;
        this.def = 40;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_TAIL;
        this.additional = true;
    }
}
exports.Steelix = Steelix;
class MegaSteelix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 350;
        this.atk = 22;
        this.speed = 35;
        this.def = 60;
        this.speDef = 30;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.additional = true;
    }
}
exports.MegaSteelix = MegaSteelix;
class Numel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CAMERUPT;
        this.hp = 120;
        this.atk = 10;
        this.speed = 38;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.ERUPTION;
        this.regional = true;
    }
}
exports.Numel = Numel;
class Camerupt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 210;
        this.atk = 15;
        this.speed = 38;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.ERUPTION;
        this.regional = true;
    }
}
exports.Camerupt = Camerupt;
class MegaCamerupt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 330;
        this.atk = 24;
        this.speed = 38;
        this.def = 20;
        this.speDef = 20;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.regional = true;
    }
}
exports.MegaCamerupt = MegaCamerupt;
class Meditite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MEDICHAM;
        this.hp = 80;
        this.atk = 9;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MEDITATE;
        this.additional = true;
    }
}
exports.Meditite = Meditite;
class Medicham extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 16;
        this.speed = 51;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MEDITATE;
        this.additional = true;
    }
}
exports.Medicham = Medicham;
class Elekid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ELECTABUZZ;
        this.hp = 110;
        this.atk = 5;
        this.speed = 55;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHOCKWAVE;
    }
}
exports.Elekid = Elekid;
class Electabuzz extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ELECTIVIRE;
        this.hp = 190;
        this.atk = 15;
        this.speed = 55;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHOCKWAVE;
    }
}
exports.Electabuzz = Electabuzz;
class Electivire extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 350;
        this.atk = 26;
        this.speed = 55;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHOCKWAVE;
    }
}
exports.Electivire = Electivire;
class Gible extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GABITE;
        this.hp = 100;
        this.atk = 5;
        this.speed = 58;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
    }
}
exports.Gible = Gible;
class Gabite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GARCHOMP;
        this.hp = 160;
        this.atk = 12;
        this.speed = 58;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
    }
}
exports.Gabite = Gabite;
class Garchomp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 240;
        this.atk = 28;
        this.speed = 58;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
    }
}
exports.Garchomp = Garchomp;
class Roggenrola extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BOLDORE;
        this.hp = 90;
        this.atk = 4;
        this.speed = 37;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_ARTILLERY;
    }
}
exports.Roggenrola = Roggenrola;
class Boldore extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GIGALITH;
        this.hp = 170;
        this.atk = 7;
        this.speed = 37;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 110;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_ARTILLERY;
    }
}
exports.Boldore = Boldore;
class Gigalith extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 280;
        this.atk = 17;
        this.speed = 37;
        this.def = 16;
        this.speDef = 14;
        this.maxPP = 110;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_ARTILLERY;
    }
}
exports.Gigalith = Gigalith;
class Beldum extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.METANG;
        this.hp = 110;
        this.atk = 8;
        this.speed = 47;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METEOR_MASH;
    }
}
exports.Beldum = Beldum;
class Metang extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.METAGROSS;
        this.hp = 190;
        this.atk = 15;
        this.speed = 47;
        this.def = 18;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METEOR_MASH;
    }
}
exports.Metang = Metang;
class Metagross extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 320;
        this.atk = 28;
        this.speed = 47;
        this.def = 24;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METEOR_MASH;
    }
}
exports.Metagross = Metagross;
class Tympole extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PALPITOAD;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 80;
        this.atk = 7;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Tympole = Tympole;
class Palpitoad extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SEISMITOAD;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 130;
        this.atk = 16;
        this.speed = 49;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Palpitoad = Palpitoad;
class Seismitoad extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 210;
        this.atk = 21;
        this.speed = 49;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
    }
}
exports.Seismitoad = Seismitoad;
class Bagon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SHELGON;
        this.hp = 70;
        this.atk = 5;
        this.speed = 57;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_CLAW;
        this.regional = true;
    }
}
exports.Bagon = Bagon;
class Shelgon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SALAMENCE;
        this.hp = 130;
        this.atk = 11;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_CLAW;
        this.regional = true;
    }
}
exports.Shelgon = Shelgon;
class Salamence extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 225;
        this.atk = 20;
        this.speed = 57;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_CLAW;
        this.regional = true;
    }
}
exports.Salamence = Salamence;
class Ralts extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KIRLIA;
        this.hp = 90;
        this.atk = 6;
        this.speed = 51;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FUTURE_SIGHT;
    }
}
exports.Ralts = Ralts;
class Kirlia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.GARDEVOIR, Pokemon_1.Pkm.GALLADE];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            var _a, _b;
            const fairyCount = (_a = player.synergies.get(Synergy_1.Synergy.FAIRY)) !== null && _a !== void 0 ? _a : 0;
            const fightingCount = (_b = player.synergies.get(Synergy_1.Synergy.FIGHTING)) !== null && _b !== void 0 ? _b : 0;
            return fightingCount >= fairyCount ? Pokemon_1.Pkm.GALLADE : Pokemon_1.Pkm.GARDEVOIR;
        });
        this.hp = 130;
        this.atk = 15;
        this.speed = 51;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FUTURE_SIGHT;
        this.passive = Passive_1.Passive.KIRLIA;
    }
}
exports.Kirlia = Kirlia;
class Gardevoir extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 230;
        this.atk = 26;
        this.speed = 51;
        this.def = 8;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FUTURE_SIGHT;
    }
}
exports.Gardevoir = Gardevoir;
class Gallade extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 260;
        this.atk = 38;
        this.speed = 51;
        this.def = 10;
        this.speDef = 20;
        this.maxPP = 95;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYCHO_CUT;
    }
}
exports.Gallade = Gallade;
class Fuecoco extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CROCALOR;
        this.hp = 110;
        this.atk = 5;
        this.speed = 46;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.TORCH_SONG;
    }
}
exports.Fuecoco = Fuecoco;
class Crocalor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SKELEDIRGE;
        this.hp = 170;
        this.atk = 13;
        this.speed = 46;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.TORCH_SONG;
    }
}
exports.Crocalor = Crocalor;
class Skeledirge extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 350;
        this.atk = 24;
        this.speed = 46;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 3;
        this.skill = Ability_1.Ability.TORCH_SONG;
    }
}
exports.Skeledirge = Skeledirge;
class Budew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ROSELIA;
        this.hp = 90;
        this.atk = 5;
        this.speed = 54;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PETAL_DANCE;
    }
}
exports.Budew = Budew;
class Roselia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ROSERADE;
        this.hp = 130;
        this.atk = 15;
        this.speed = 54;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PETAL_DANCE;
    }
}
exports.Roselia = Roselia;
class Roserade extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 230;
        this.atk = 17;
        this.speed = 54;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PETAL_DANCE;
    }
}
exports.Roserade = Roserade;
class Slakoth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VIGOROTH;
        this.hp = 130;
        this.atk = 5;
        this.speed = 57;
        this.def = 10;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLACK_OFF;
        this.regional = true;
    }
}
exports.Slakoth = Slakoth;
class Vigoroth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SLAKING;
        this.hp = 220;
        this.atk = 16;
        this.speed = 57;
        this.def = 10;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLACK_OFF;
        this.passive = Passive_1.Passive.VIGOROTH;
        this.regional = true;
    }
}
exports.Vigoroth = Vigoroth;
class Slaking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 380;
        this.atk = 30;
        this.speed = 57;
        this.def = 14;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLACK_OFF;
        this.passive = Passive_1.Passive.SLAKING;
        this.regional = true;
    }
}
exports.Slaking = Slaking;
class Honedge extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DOUBLADE;
        this.hp = 75;
        this.atk = 6;
        this.speed = 44;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
    }
}
exports.Honedge = Honedge;
class Doublade extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AEGISLASH;
        this.hp = 120;
        this.atk = 13;
        this.speed = 44;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
    }
}
exports.Doublade = Doublade;
class Aegislash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 210;
        this.atk = 23;
        this.speed = 44;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
        this.passive = Passive_1.Passive.AEGISLASH;
    }
}
exports.Aegislash = Aegislash;
class AegislashBlade extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 210;
        this.atk = 34;
        this.speed = 44;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
        this.passive = Passive_1.Passive.AEGISLASH;
    }
}
exports.AegislashBlade = AegislashBlade;
class Oshawott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DEWOTT;
        this.hp = 108;
        this.atk = 8;
        this.speed = 47;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_TAIL;
    }
}
exports.Oshawott = Oshawott;
class Dewott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.SAMUROTT, Pokemon_1.Pkm.HISUI_SAMUROTT];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.HISUI_SAMUROTT))
                return Pokemon_1.Pkm.HISUI_SAMUROTT;
            else
                return Pokemon_1.Pkm.SAMUROTT;
        });
        this.hp = 170;
        this.atk = 15;
        this.speed = 47;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_TAIL;
    }
}
exports.Dewott = Dewott;
class Samurott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 290;
        this.atk = 32;
        this.speed = 47;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_TAIL;
    }
}
exports.Samurott = Samurott;
class HisuiSamurott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 280;
        this.atk = 36;
        this.speed = 47;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CEASELESS_EDGE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.HisuiSamurott = HisuiSamurott;
class Larvitar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PUPITAR;
        this.hp = 75;
        this.atk = 7;
        this.speed = 45;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
    }
}
exports.Larvitar = Larvitar;
class Pupitar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TYRANITAR;
        this.hp = 130;
        this.atk = 14;
        this.speed = 45;
        this.def = 12;
        this.speDef = 11;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
    }
}
exports.Pupitar = Pupitar;
class Tyranitar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 210;
        this.atk = 28;
        this.speed = 47;
        this.def = 16;
        this.speDef = 14;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
    }
}
exports.Tyranitar = Tyranitar;
class JangmoO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HAKAMO_O;
        this.hp = 100;
        this.atk = 6;
        this.speed = 52;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CLANGOROUS_SOUL;
        this.regional = true;
    }
}
exports.JangmoO = JangmoO;
class HakamoO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KOMMO_O;
        this.hp = 160;
        this.atk = 12;
        this.speed = 52;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CLANGOROUS_SOUL;
        this.regional = true;
    }
}
exports.HakamoO = HakamoO;
class KommoO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 280;
        this.atk = 23;
        this.speed = 52;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CLANGOROUS_SOUL;
        this.regional = true;
    }
}
exports.KommoO = KommoO;
class Gastly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HAUNTER;
        this.hp = 90;
        this.atk = 12;
        this.speed = 60;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.NIGHTMARE;
    }
}
exports.Gastly = Gastly;
class Haunter extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GENGAR;
        this.hp = 180;
        this.atk = 22;
        this.speed = 60;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.NIGHTMARE;
    }
}
exports.Haunter = Haunter;
class Gengar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 350;
        this.atk = 35;
        this.speed = 60;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.NIGHTMARE;
    }
}
exports.Gengar = Gengar;
class Abra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KADABRA;
        this.hp = 90;
        this.atk = 4;
        this.speed = 63;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
    }
}
exports.Abra = Abra;
class Kadabra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ALAKAZAM;
        this.hp = 130;
        this.atk = 8;
        this.speed = 63;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
    }
}
exports.Kadabra = Kadabra;
class Alakazam extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 19;
        this.speed = 63;
        this.def = 8;
        this.speDef = 16;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
    }
}
exports.Alakazam = Alakazam;
class Litwick extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LAMPENT;
        this.hp = 50;
        this.atk = 4;
        this.speed = 51;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HEX;
    }
}
exports.Litwick = Litwick;
class Lampent extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CHANDELURE;
        this.hp = 90;
        this.atk = 9;
        this.speed = 51;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HEX;
    }
}
exports.Lampent = Lampent;
class Chandelure extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 160;
        this.atk = 14;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HEX;
    }
}
exports.Chandelure = Chandelure;
class Porygon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PORYGON_2;
        this.hp = 100;
        this.atk = 13;
        this.speed = 54;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TRI_ATTACK;
        this.passive = Passive_1.Passive.CONVERSION;
    }
}
exports.Porygon = Porygon;
class Porygon2 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PORYGON_Z;
        this.hp = 200;
        this.atk = 23;
        this.speed = 54;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.TRI_ATTACK;
        this.passive = Passive_1.Passive.CONVERSION;
    }
}
exports.Porygon2 = Porygon2;
class PorygonZ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 33;
        this.speed = 54;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 60;
        this.range = 2;
        this.skill = Ability_1.Ability.TRI_ATTACK;
        this.passive = Passive_1.Passive.CONVERSION;
    }
}
exports.PorygonZ = PorygonZ;
class Sewaddle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SWADLOON;
        this.hp = 60;
        this.atk = 5;
        this.speed = 54;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MANTIS_BLADES;
    }
}
exports.Sewaddle = Sewaddle;
class Swadloon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.LEAVANNY;
        this.hp = 110;
        this.atk = 11;
        this.speed = 54;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MANTIS_BLADES;
    }
}
exports.Swadloon = Swadloon;
class Leavanny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 190;
        this.atk = 23;
        this.speed = 54;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MANTIS_BLADES;
    }
}
exports.Leavanny = Leavanny;
class Turtwig extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GROTLE;
        this.hp = 80;
        this.atk = 5;
        this.speed = 43;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BULLDOZE;
    }
}
exports.Turtwig = Turtwig;
class Grotle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TORTERRA;
        this.hp = 150;
        this.atk = 9;
        this.speed = 43;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BULLDOZE;
    }
}
exports.Grotle = Grotle;
class Torterra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 280;
        this.atk = 21;
        this.speed = 43;
        this.def = 16;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BULLDOZE;
    }
}
exports.Torterra = Torterra;
class Deino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ZWEILOUS;
        this.hp = 80;
        this.atk = 5;
        this.speed = 56;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_HARVEST;
    }
}
exports.Deino = Deino;
class Zweilous extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HYDREIGON;
        this.hp = 130;
        this.atk = 11;
        this.speed = 56;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_HARVEST;
    }
}
exports.Zweilous = Zweilous;
class Hydreigon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 20;
        this.speed = 56;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_HARVEST;
    }
}
exports.Hydreigon = Hydreigon;
class Poliwag extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.POLIWHIRL;
        this.hp = 65;
        this.atk = 5;
        this.speed = 54;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SOAK;
    }
}
exports.Poliwag = Poliwag;
class Poliwhirl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.POLITOED, Pokemon_1.Pkm.POLIWRATH];
        this.hp = 120;
        this.atk = 8;
        this.speed = 54;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SOAK;
        this.passive = Passive_1.Passive.TADPOLE;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (Math.max(...(0, schemas_1.schemaValues)(player.board)
                .filter((pkm) => pkm.index === this.index)
                .map((v) => v.positionY)) === 3) {
                return Pokemon_1.Pkm.POLIWRATH;
            }
            else {
                return Pokemon_1.Pkm.POLITOED;
            }
        });
    }
}
exports.Poliwhirl = Poliwhirl;
class Politoed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 17;
        this.speed = 54;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.SOAK;
    }
}
exports.Politoed = Politoed;
class Poliwrath extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 17;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRABHAMMER;
    }
}
exports.Poliwrath = Poliwrath;
class Magby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MAGMAR;
        this.hp = 80;
        this.atk = 6;
        this.speed = 52;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FLAMETHROWER;
    }
}
exports.Magby = Magby;
class Magmar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MAGMORTAR;
        this.hp = 140;
        this.atk = 15;
        this.speed = 52;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FLAMETHROWER;
    }
}
exports.Magmar = Magmar;
class Magmortar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 280;
        this.atk = 28;
        this.speed = 52;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FLAMETHROWER;
    }
}
exports.Magmortar = Magmortar;
class Solosis extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DUOSION;
        this.hp = 100;
        this.atk = 6;
        this.speed = 35;
        this.def = 4;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYCHIC;
    }
}
exports.Solosis = Solosis;
class Duosion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.REUNICLUS;
        this.hp = 200;
        this.atk = 10;
        this.speed = 35;
        this.def = 6;
        this.speDef = 7;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYCHIC;
    }
}
exports.Duosion = Duosion;
class Reuniclus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 20;
        this.speed = 35;
        this.def = 8;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYCHIC;
    }
}
exports.Reuniclus = Reuniclus;
class Shinx extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LUXIO;
        this.hp = 120;
        this.atk = 13;
        this.speed = 47;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
    }
}
exports.Shinx = Shinx;
class Luxio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.LUXRAY;
        this.hp = 210;
        this.atk = 26;
        this.speed = 47;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
    }
}
exports.Luxio = Luxio;
class Luxray extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 41;
        this.speed = 47;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
    }
}
exports.Luxray = Luxray;
class Cubone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.MAROWAK, Pokemon_1.Pkm.ALOLAN_MAROWAK];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.ALOLAN_MAROWAK))
                return Pokemon_1.Pkm.ALOLAN_MAROWAK;
            else
                return Pokemon_1.Pkm.MAROWAK;
        });
        this.hp = 110;
        this.atk = 11;
        this.speed = 36;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BONEMERANG;
        this.additional = true;
    }
}
exports.Cubone = Cubone;
class Marowak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 22;
        this.speed = 36;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BONEMERANG;
        this.additional = true;
    }
}
exports.Marowak = Marowak;
class AlolanMarowak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 22;
        this.speed = 36;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_BONE;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.CUBONE)) &&
            regionSynergies.includes(Synergy_1.Synergy.FIRE));
    }
}
exports.AlolanMarowak = AlolanMarowak;
class Axew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON]);
        this.rarity = Game_1.Rarity.HATCH;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FRAXURE;
        this.hp = 80;
        this.atk = 9;
        this.speed = 62;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Axew = Axew;
class Fraxure extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON]);
        this.rarity = Game_1.Rarity.HATCH;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HAXORUS;
        this.hp = 130;
        this.atk = 18;
        this.speed = 62;
        this.def = 10;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Fraxure = Fraxure;
class Haxorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 62;
        this.def = 15;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
    }
}
exports.Haxorus = Haxorus;
class Dratini extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRAGONAIR;
        this.hp = 90;
        this.atk = 7;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TWISTER;
    }
}
exports.Dratini = Dratini;
class Dragonair extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DRAGONITE;
        this.hp = 150;
        this.atk = 15;
        this.speed = 51;
        this.def = 13;
        this.speDef = 13;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TWISTER;
    }
}
exports.Dragonair = Dragonair;
class Dragonite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 290;
        this.atk = 28;
        this.speed = 51;
        this.def = 20;
        this.speDef = 20;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TWISTER;
    }
}
exports.Dragonite = Dragonite;
class Goomy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.SLIGOO, Pokemon_1.Pkm.HISUI_SLIGGOO];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.HISUI_SLIGGOO))
                return Pokemon_1.Pkm.HISUI_SLIGGOO;
            else
                return Pokemon_1.Pkm.SLIGOO;
        });
        this.hp = 65;
        this.atk = 4;
        this.speed = 35;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACID_ARMOR;
    }
}
exports.Goomy = Goomy;
class Sligoo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GOODRA;
        this.hp = 120;
        this.atk = 8;
        this.speed = 35;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACID_ARMOR;
    }
}
exports.Sligoo = Sligoo;
class Goodra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 16;
        this.speed = 35;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACID_ARMOR;
    }
}
exports.Goodra = Goodra;
class HisuiSliggoo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HISUI_GOODRA;
        this.hp = 110;
        this.atk = 8;
        this.speed = 35;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELTER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.STEEL);
    }
}
exports.HisuiSliggoo = HisuiSliggoo;
class HisuiGoodra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 35;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELTER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.STEEL);
    }
}
exports.HisuiGoodra = HisuiGoodra;
class Lotad extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LOMBRE;
        this.hp = 60;
        this.atk = 6;
        this.speed = 47;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.TORMENT;
        this.regional = true;
    }
}
exports.Lotad = Lotad;
class Lombre extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.LUDICOLO;
        this.hp = 110;
        this.atk = 12;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.TORMENT;
        this.regional = true;
    }
}
exports.Lombre = Lombre;
class Ludicolo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 22;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.TORMENT;
        this.regional = true;
    }
}
exports.Ludicolo = Ludicolo;
class Togepi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TOGETIC;
        this.hp = 80;
        this.atk = 5;
        this.speed = 51;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WISH;
    }
}
exports.Togepi = Togepi;
class Togetic extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TOGEKISS;
        this.hp = 150;
        this.atk = 10;
        this.speed = 51;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WISH;
    }
}
exports.Togetic = Togetic;
class Togekiss extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 260;
        this.atk = 24;
        this.speed = 51;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WISH;
    }
}
exports.Togekiss = Togekiss;
class Rhyhorn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ROCK
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RHYDON;
        this.hp = 120;
        this.atk = 14;
        this.speed = 38;
        this.def = 12;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_DRILL;
    }
}
exports.Rhyhorn = Rhyhorn;
class Rhydon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ROCK
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.RHYPERIOR;
        this.hp = 240;
        this.atk = 23;
        this.speed = 38;
        this.def = 20;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_DRILL;
    }
}
exports.Rhydon = Rhydon;
class Rhyperior extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ROCK
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 380;
        this.atk = 36;
        this.speed = 38;
        this.def = 30;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_DRILL;
    }
}
exports.Rhyperior = Rhyperior;
class Aron extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LAIRON;
        this.hp = 60;
        this.atk = 4;
        this.speed = 41;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAVY_SLAM;
    }
}
exports.Aron = Aron;
class Lairon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AGGRON;
        this.hp = 100;
        this.atk = 9;
        this.speed = 41;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAVY_SLAM;
    }
}
exports.Lairon = Lairon;
class Aggron extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 170;
        this.atk = 20;
        this.speed = 41;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAVY_SLAM;
    }
}
exports.Aggron = Aggron;
class Whismur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LOUDRED;
        this.hp = 90;
        this.atk = 6;
        this.speed = 47;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.UPROAR;
    }
}
exports.Whismur = Whismur;
class Loudred extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.EXPLOUD;
        this.hp = 150;
        this.atk = 14;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.UPROAR;
    }
}
exports.Loudred = Loudred;
class Exploud extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 300;
        this.atk = 24;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.UPROAR;
    }
}
exports.Exploud = Exploud;
class Swinub extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PILOSWINE;
        this.hp = 65;
        this.atk = 4;
        this.speed = 51;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICICLE_CRASH;
    }
}
exports.Swinub = Swinub;
class Piloswine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MAMOSWINE;
        this.hp = 120;
        this.atk = 8;
        this.speed = 51;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICICLE_CRASH;
    }
}
exports.Piloswine = Piloswine;
class Mamoswine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 13;
        this.speed = 51;
        this.def = 16;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICICLE_CRASH;
    }
}
exports.Mamoswine = Mamoswine;
class Snover extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ABOMASNOW;
        this.hp = 90;
        this.atk = 10;
        this.speed = 44;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHEER_COLD;
        this.regional = true;
    }
}
exports.Snover = Snover;
class Abomasnow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHEER_COLD;
        this.regional = true;
    }
}
exports.Abomasnow = Abomasnow;
class MegaAbomasnow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.speed = 44;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.regional = true;
    }
}
exports.MegaAbomasnow = MegaAbomasnow;
class Snorunt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GLALIE;
        this.hp = 90;
        this.atk = 9;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ICY_WIND;
    }
}
exports.Snorunt = Snorunt;
class Glalie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.FROSLASS;
        this.hp = 170;
        this.atk = 17;
        this.speed = 60;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.ICY_WIND;
    }
}
exports.Glalie = Glalie;
class Froslass extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 320;
        this.atk = 31;
        this.speed = 60;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ICY_WIND;
    }
}
exports.Froslass = Froslass;
class Vanillite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VANILLISH;
        this.hp = 70;
        this.atk = 6;
        this.speed = 50;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ICICLE_MISSILE;
    }
}
exports.Vanillite = Vanillite;
class Vanillish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VANILLUXE;
        this.hp = 130;
        this.atk = 12;
        this.speed = 50;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ICICLE_MISSILE;
    }
}
exports.Vanillish = Vanillish;
class Vanilluxe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 24;
        this.speed = 50;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ICICLE_MISSILE;
    }
}
exports.Vanilluxe = Vanilluxe;
class Trapinch extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VIBRAVA;
        this.hp = 70;
        this.atk = 7;
        this.speed = 57;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_TAIL;
    }
}
exports.Trapinch = Trapinch;
class Vibrava extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.FLYGON;
        this.hp = 120;
        this.atk = 12;
        this.speed = 57;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_TAIL;
    }
}
exports.Vibrava = Vibrava;
class Flygon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 23;
        this.speed = 57;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_TAIL;
    }
}
exports.Flygon = Flygon;
class Pichu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PIKACHU;
        this.hp = 60;
        this.atk = 5;
        this.speed = 54;
        this.def = 1;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
    }
}
exports.Pichu = Pichu;
class Pikachu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.RAICHU, Pokemon_1.Pkm.ALOLAN_RAICHU];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.ALOLAN_RAICHU))
                return Pokemon_1.Pkm.ALOLAN_RAICHU;
            else
                return Pokemon_1.Pkm.RAICHU;
        });
        this.hp = 120;
        this.atk = 8;
        this.speed = 54;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
    }
    onItemGiven(item, player) {
        if (item === Item_1.Item.SURFBOARD) {
            player.transformPokemon(this, Pokemon_1.Pkm.PIKACHU_SURFER);
        }
    }
}
exports.Pikachu = Pikachu;
class Raichu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 17;
        this.speed = 54;
        this.def = 7;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
    }
}
exports.Raichu = Raichu;
class AlolanRaichu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 17;
        this.speed = 54;
        this.def = 7;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
        this.passive = Passive_1.Passive.SURGE_SURFER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.PSYCHIC);
    }
}
exports.AlolanRaichu = AlolanRaichu;
class Bulbasaur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.IVYSAUR;
        this.hp = 80;
        this.atk = 5;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
    }
}
exports.Bulbasaur = Bulbasaur;
class Ivysaur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VENUSAUR;
        this.hp = 130;
        this.atk = 9;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
    }
}
exports.Ivysaur = Ivysaur;
class Venusaur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 17;
        this.speed = 51;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
    }
}
exports.Venusaur = Venusaur;
class Igglybuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.JIGGLYPUFF;
        this.hp = 65;
        this.atk = 5;
        this.speed = 39;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.SING;
    }
}
exports.Igglybuff = Igglybuff;
class Jigglypuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.WIGGLYTUFF;
        this.hp = 120;
        this.atk = 10;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.SING;
    }
}
exports.Jigglypuff = Jigglypuff;
class Wigglytuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 19;
        this.speed = 39;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.SING;
    }
}
exports.Wigglytuff = Wigglytuff;
class Duskull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DUSCLOPS;
        this.hp = 70;
        this.atk = 6;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_BALL;
    }
}
exports.Duskull = Duskull;
class Dusclops extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DUSKNOIR;
        this.hp = 140;
        this.atk = 12;
        this.speed = 39;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_BALL;
    }
}
exports.Dusclops = Dusclops;
class Dusknoir extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 26;
        this.speed = 39;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_BALL;
    }
}
exports.Dusknoir = Dusknoir;
class Magnemite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MAGNETON;
        this.hp = 80;
        this.atk = 5;
        this.speed = 44;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_BOMB;
    }
}
exports.Magnemite = Magnemite;
class Magneton extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MAGNEZONE;
        this.hp = 150;
        this.atk = 9;
        this.speed = 44;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_BOMB;
    }
}
exports.Magneton = Magneton;
class Magnezone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.speed = 44;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_BOMB;
    }
}
exports.Magnezone = Magnezone;
class Horsea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SEADRA;
        this.hp = 70;
        this.atk = 6;
        this.speed = 52;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLPOOL;
    }
}
exports.Horsea = Horsea;
class Seadra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KINGDRA;
        this.hp = 140;
        this.atk = 11;
        this.speed = 52;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLPOOL;
    }
}
exports.Seadra = Seadra;
class Kingdra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 21;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLPOOL;
    }
}
exports.Kingdra = Kingdra;
class Flabebe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolutions = [
            Pokemon_1.Pkm.FLOETTE,
            Pokemon_1.Pkm.FLOETTE_YELLOW,
            Pokemon_1.Pkm.FLOETTE_ORANGE,
            Pokemon_1.Pkm.FLOETTE_BLUE,
            Pokemon_1.Pkm.FLOETTE_WHITE
        ];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (pokemon.name === Pokemon_1.Pkm.FLABEBE_YELLOW)
                return Pokemon_1.Pkm.FLOETTE_YELLOW;
            if (pokemon.name === Pokemon_1.Pkm.FLABEBE_ORANGE)
                return Pokemon_1.Pkm.FLOETTE_ORANGE;
            if (pokemon.name === Pokemon_1.Pkm.FLABEBE_BLUE)
                return Pokemon_1.Pkm.FLOETTE_BLUE;
            if (pokemon.name === Pokemon_1.Pkm.FLABEBE_WHITE)
                return Pokemon_1.Pkm.FLOETTE_WHITE;
            return Pokemon_1.Pkm.FLOETTE;
        });
        this.hp = 60;
        this.atk = 6;
        this.speed = 49;
        this.def = 2;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_WIND;
        this.passive = Passive_1.Passive.FLABEBE_COLOR;
    }
}
exports.Flabebe = Flabebe;
class Floette extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolutions = [
            Pokemon_1.Pkm.FLORGES,
            Pokemon_1.Pkm.FLORGES_YELLOW,
            Pokemon_1.Pkm.FLORGES_ORANGE,
            Pokemon_1.Pkm.FLORGES_BLUE,
            Pokemon_1.Pkm.FLORGES_WHITE
        ];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (pokemon.name === Pokemon_1.Pkm.FLOETTE_YELLOW)
                return Pokemon_1.Pkm.FLORGES_YELLOW;
            if (pokemon.name === Pokemon_1.Pkm.FLOETTE_ORANGE)
                return Pokemon_1.Pkm.FLORGES_ORANGE;
            if (pokemon.name === Pokemon_1.Pkm.FLOETTE_BLUE)
                return Pokemon_1.Pkm.FLORGES_BLUE;
            if (pokemon.name === Pokemon_1.Pkm.FLOETTE_WHITE)
                return Pokemon_1.Pkm.FLORGES_WHITE;
            return Pokemon_1.Pkm.FLORGES;
        });
        this.hp = 120;
        this.atk = 10;
        this.speed = 49;
        this.def = 2;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_WIND;
        this.passive = Passive_1.Passive.FLABEBE_COLOR;
    }
}
exports.Floette = Floette;
class Florges extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 19;
        this.speed = 49;
        this.def = 4;
        this.speDef = 14;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_WIND;
        this.passive = Passive_1.Passive.FLABEBE_COLOR;
    }
}
exports.Florges = Florges;
class Chikorita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BAYLEEF;
        this.hp = 70;
        this.atk = 6;
        this.speed = 51;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SWEET_SCENT;
    }
}
exports.Chikorita = Chikorita;
class Bayleef extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGANIUM;
        this.hp = 140;
        this.atk = 10;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SWEET_SCENT;
    }
}
exports.Bayleef = Bayleef;
class Meganium extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 220;
        this.atk = 22;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SWEET_SCENT;
    }
}
exports.Meganium = Meganium;
class Venipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WHIRLIPEDE;
        this.hp = 90;
        this.atk = 12;
        this.speed = 72;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STEAMROLLER;
    }
}
exports.Venipede = Venipede;
class Whirlipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SCOLIPEDE;
        this.hp = 180;
        this.atk = 24;
        this.speed = 72;
        this.def = 10;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STEAMROLLER;
    }
}
exports.Whirlipede = Whirlipede;
class Scolipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 36;
        this.speed = 72;
        this.def = 14;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STEAMROLLER;
    }
}
exports.Scolipede = Scolipede;
class Spheal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SEALEO;
        this.hp = 80;
        this.atk = 6;
        this.speed = 46;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
    }
}
exports.Spheal = Spheal;
class Sealeo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.WALREIN;
        this.hp = 150;
        this.atk = 12;
        this.speed = 46;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
    }
}
exports.Sealeo = Sealeo;
class Walrein extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 300;
        this.atk = 24;
        this.speed = 46;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
    }
}
exports.Walrein = Walrein;
class NidoranF extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NIDORINA;
        this.hp = 70;
        this.atk = 5;
        this.speed = 49;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.NidoranF = NidoranF;
class Nidorina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.NIDOQUEEN;
        this.hp = 130;
        this.atk = 10;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.Nidorina = Nidorina;
class Nidoqueen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 230;
        this.atk = 20;
        this.speed = 49;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.Nidoqueen = Nidoqueen;
class NidoranM extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NIDORINO;
        this.hp = 70;
        this.atk = 5;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_ATTACK;
    }
}
exports.NidoranM = NidoranM;
class Nidorino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.NIDOKING;
        this.hp = 140;
        this.atk = 9;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_ATTACK;
    }
}
exports.Nidorino = Nidorino;
class Nidoking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_ATTACK;
    }
}
exports.Nidoking = Nidoking;
class Machop extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MACHOKE;
        this.hp = 70;
        this.atk = 6;
        this.speed = 43;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
    }
}
exports.Machop = Machop;
class Machoke extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MACHAMP;
        this.hp = 130;
        this.atk = 12;
        this.speed = 43;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
    }
}
exports.Machoke = Machoke;
class Machamp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 23;
        this.speed = 43;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
    }
}
exports.Machamp = Machamp;
class Piplup extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PRINPLUP;
        this.hp = 60;
        this.atk = 6;
        this.speed = 44;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WAVE_SPLASH;
    }
}
exports.Piplup = Piplup;
class Prinplup extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.EMPOLEON;
        this.hp = 130;
        this.atk = 12;
        this.speed = 44;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WAVE_SPLASH;
    }
}
exports.Prinplup = Prinplup;
class Empoleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 240;
        this.atk = 24;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WAVE_SPLASH;
    }
}
exports.Empoleon = Empoleon;
class Chimchar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MONFERNO;
        this.hp = 60;
        this.atk = 4;
        this.speed = 60;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TORMENT;
        this.regional = true;
    }
}
exports.Chimchar = Chimchar;
class Monferno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.INFERNAPE;
        this.hp = 100;
        this.atk = 10;
        this.speed = 60;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TORMENT;
        this.regional = true;
    }
}
exports.Monferno = Monferno;
class Infernape extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TORMENT;
        this.regional = true;
    }
}
exports.Infernape = Infernape;
class Mudkip extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MARSHTOMP;
        this.hp = 70;
        this.atk = 5;
        this.speed = 46;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_BUBBLE;
        this.passive = Passive_1.Passive.WATER_SPRING;
        this.regional = true;
    }
    beforeSimulationStart({ opponentEffects }) {
        opponentEffects.add(Effect_1.EffectEnum.WATER_SPRING);
    }
}
exports.Mudkip = Mudkip;
class Marshtomp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SWAMPERT;
        this.hp = 140;
        this.atk = 9;
        this.speed = 46;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_BUBBLE;
        this.passive = Passive_1.Passive.WATER_SPRING;
        this.regional = true;
    }
    beforeSimulationStart({ opponentEffects }) {
        opponentEffects.add(Effect_1.EffectEnum.WATER_SPRING);
    }
}
exports.Marshtomp = Marshtomp;
class Swampert extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 215;
        this.atk = 20;
        this.speed = 46;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_BUBBLE;
        this.passive = Passive_1.Passive.WATER_SPRING;
        this.regional = true;
    }
    beforeSimulationStart({ opponentEffects }) {
        opponentEffects.add(Effect_1.EffectEnum.WATER_SPRING);
    }
}
exports.Swampert = Swampert;
class Torchic extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.COMBUSKEN;
        this.hp = 80;
        this.atk = 6;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAZE_KICK;
    }
}
exports.Torchic = Torchic;
class Combusken extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BLAZIKEN;
        this.hp = 150;
        this.atk = 11;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAZE_KICK;
    }
}
exports.Combusken = Combusken;
class Blaziken extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 23;
        this.speed = 51;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAZE_KICK;
    }
}
exports.Blaziken = Blaziken;
class Treecko extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GROVYLE;
        this.hp = 70;
        this.atk = 4;
        this.speed = 63;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
    }
}
exports.Treecko = Treecko;
class Grovyle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SCEPTILE;
        this.hp = 120;
        this.atk = 12;
        this.speed = 63;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
    }
}
exports.Grovyle = Grovyle;
class Sceptile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 23;
        this.speed = 63;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
    }
}
exports.Sceptile = Sceptile;
class Cyndaquil extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.QUILAVA;
        this.hp = 70;
        this.atk = 7;
        this.speed = 51;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHEEL_OF_FIRE;
    }
}
exports.Cyndaquil = Cyndaquil;
class Quilava extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.TYPHLOSION, Pokemon_1.Pkm.HISUIAN_TYPHLOSION];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.HISUIAN_TYPHLOSION))
                return Pokemon_1.Pkm.HISUIAN_TYPHLOSION;
            else
                return Pokemon_1.Pkm.TYPHLOSION;
        });
        this.hp = 120;
        this.atk = 12;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHEEL_OF_FIRE;
    }
}
exports.Quilava = Quilava;
class Typhlosion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 230;
        this.atk = 24;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHEEL_OF_FIRE;
    }
}
exports.Typhlosion = Typhlosion;
class HisuianTyphlosion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 230;
        this.atk = 24;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.INFERNAL_PARADE;
        this.passive = Passive_1.Passive.HISUIAN_TYPHLOSION;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.GHOST);
    }
}
exports.HisuianTyphlosion = HisuianTyphlosion;
class Slowpoke extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.SLOWBRO, Pokemon_1.Pkm.SLOWKING];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player, stageLevel) => {
            var _a, _b;
            const psychicCount = (_a = player.synergies.get(Synergy_1.Synergy.PSYCHIC)) !== null && _a !== void 0 ? _a : 0;
            const waterCount = (_b = player.synergies.get(Synergy_1.Synergy.WATER)) !== null && _b !== void 0 ? _b : 0;
            return psychicCount >= waterCount ? Pokemon_1.Pkm.SLOWKING : Pokemon_1.Pkm.SLOWBRO;
        });
        this.hp = 80;
        this.atk = 7;
        this.speed = 35;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.YAWN;
        this.additional = true;
        this.passive = Passive_1.Passive.SLOWPOKE;
    }
}
exports.Slowpoke = Slowpoke;
class Slowbro extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 12;
        this.speed = 35;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.YAWN;
        this.additional = true;
    }
}
exports.Slowbro = Slowbro;
class Slowking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 11;
        this.speed = 35;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.WISE_YAWN;
        this.additional = true;
    }
}
exports.Slowking = Slowking;
class GalarianSlowpoke extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.GALARIAN_SLOWBRO, Pokemon_1.Pkm.GALARIAN_SLOWKING];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player, stageLevel) => {
            var _a, _b;
            const psychicCount = (_a = player.synergies.get(Synergy_1.Synergy.PSYCHIC)) !== null && _a !== void 0 ? _a : 0;
            const waterCount = (_b = player.synergies.get(Synergy_1.Synergy.POISON)) !== null && _b !== void 0 ? _b : 0;
            return psychicCount >= waterCount
                ? Pokemon_1.Pkm.GALARIAN_SLOWKING
                : Pokemon_1.Pkm.GALARIAN_SLOWBRO;
        });
        this.hp = 80;
        this.atk = 7;
        this.speed = 35;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EERIE_SPELL;
        this.regional = true;
        this.additional = true;
        this.passive = Passive_1.Passive.GALARIAN_SLOWPOKE;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.SLOWPOKE)) &&
            regionSynergies.includes(Synergy_1.Synergy.POISON));
    }
}
exports.GalarianSlowpoke = GalarianSlowpoke;
class GalarianSlowbro extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 12;
        this.speed = 35;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELL_SIDE_ARM;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.SLOWPOKE)) &&
            regionSynergies.includes(Synergy_1.Synergy.POISON));
    }
}
exports.GalarianSlowbro = GalarianSlowbro;
class GalarianSlowking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 11;
        this.speed = 35;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.EERIE_SPELL;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.SLOWPOKE)) &&
            regionSynergies.includes(Synergy_1.Synergy.POISON));
    }
}
exports.GalarianSlowking = GalarianSlowking;
class Psyduck extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOLDUCK;
        this.hp = 75;
        this.atk = 7;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYSHOCK;
        this.passive = Passive_1.Passive.PSYDUCK;
        this.additional = true;
    }
}
exports.Psyduck = Psyduck;
class Golduck extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 14;
        this.speed = 52;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYSHOCK;
        this.passive = Passive_1.Passive.PSYDUCK;
        this.additional = true;
    }
}
exports.Golduck = Golduck;
class Squirtle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WARTORTLE;
        this.hp = 60;
        this.atk = 5;
        this.speed = 50;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
    }
}
exports.Squirtle = Squirtle;
class Wartortle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BLASTOISE;
        this.hp = 120;
        this.atk = 9;
        this.speed = 50;
        this.def = 7;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
    }
}
exports.Wartortle = Wartortle;
class Blastoise extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 50;
        this.def = 10;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
    }
}
exports.Blastoise = Blastoise;
class Bellsprout extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WEEPINBELL;
        this.hp = 60;
        this.atk = 6;
        this.speed = 47;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.INGRAIN;
    }
}
exports.Bellsprout = Bellsprout;
class Weepinbell extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VICTREEBEL;
        this.hp = 130;
        this.atk = 12;
        this.speed = 47;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.INGRAIN;
    }
}
exports.Weepinbell = Weepinbell;
class Victreebel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 47;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.INGRAIN;
    }
}
exports.Victreebel = Victreebel;
class Geodude extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GRAVELER;
        this.hp = 70;
        this.atk = 4;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
    }
}
exports.Geodude = Geodude;
class Graveler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GOLEM;
        this.hp = 120;
        this.atk = 10;
        this.speed = 39;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
    }
}
exports.Graveler = Graveler;
class Golem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.speed = 39;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
    }
}
exports.Golem = Golem;
class Totodile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CROCONAW;
        this.hp = 75;
        this.atk = 7;
        this.speed = 50;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
    }
}
exports.Totodile = Totodile;
class Croconaw extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.FERALIGATR;
        this.hp = 130;
        this.atk = 14;
        this.speed = 50;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
    }
}
exports.Croconaw = Croconaw;
class Feraligatr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 27;
        this.speed = 50;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
    }
}
exports.Feraligatr = Feraligatr;
class Azurill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MARILL;
        this.hp = 50;
        this.atk = 5;
        this.speed = 41;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
    }
}
exports.Azurill = Azurill;
class Marill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AZUMARILL;
        this.hp = 110;
        this.atk = 9;
        this.speed = 41;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
    }
}
exports.Marill = Marill;
class Azumarill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 21;
        this.speed = 41;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
    }
}
exports.Azumarill = Azumarill;
class Zubat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOLBAT;
        this.hp = 50;
        this.atk = 4;
        this.speed = 67;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_LIFE;
    }
}
exports.Zubat = Zubat;
class Golbat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CROBAT;
        this.hp = 100;
        this.atk = 7;
        this.speed = 67;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_LIFE;
    }
}
exports.Golbat = Golbat;
class Crobat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 67;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_LIFE;
    }
}
exports.Crobat = Crobat;
class Mareep extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLAFFY;
        this.hp = 60;
        this.atk = 5;
        this.speed = 43;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER_SHOCK;
    }
}
exports.Mareep = Mareep;
class Flaffy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AMPHAROS;
        this.hp = 110;
        this.atk = 9;
        this.speed = 43;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER_SHOCK;
    }
}
exports.Flaffy = Flaffy;
class Ampharos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.speed = 43;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER_SHOCK;
    }
}
exports.Ampharos = Ampharos;
class Cleffa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLEFAIRY;
        this.hp = 70;
        this.atk = 5;
        this.speed = 44;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METRONOME;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.BABY) ||
            regionSynergies.includes(Synergy_1.Synergy.LIGHT));
    }
}
exports.Cleffa = Cleffa;
class Clefairy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CLEFABLE;
        this.hp = 150;
        this.atk = 11;
        this.speed = 44;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METRONOME;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.BABY) ||
            regionSynergies.includes(Synergy_1.Synergy.LIGHT));
    }
}
exports.Clefairy = Clefairy;
class Clefable extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.speed = 44;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.METRONOME;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.BABY) ||
            regionSynergies.includes(Synergy_1.Synergy.LIGHT));
    }
}
exports.Clefable = Clefable;
class Caterpie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.METAPOD;
        this.hp = 60;
        this.atk = 5;
        this.speed = 47;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
    }
}
exports.Caterpie = Caterpie;
class Metapod extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BUTTERFREE;
        this.hp = 110;
        this.atk = 9;
        this.speed = 47;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
    }
}
exports.Metapod = Metapod;
class Butterfree extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 47;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
    }
}
exports.Butterfree = Butterfree;
class Weedle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KAKUNA;
        this.hp = 60;
        this.atk = 5;
        this.speed = 49;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
    }
}
exports.Weedle = Weedle;
class Kakuna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BEEDRILL;
        this.hp = 110;
        this.atk = 10;
        this.speed = 35;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
    }
}
exports.Kakuna = Kakuna;
class Beedrill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 170;
        this.atk = 17;
        this.speed = 49;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
    }
}
exports.Beedrill = Beedrill;
class Pidgey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PIDGEOTTO;
        this.hp = 60;
        this.atk = 4;
        this.speed = 57;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HURRICANE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 0;
    }
}
exports.Pidgey = Pidgey;
class Pidgeotto extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PIDGEOT;
        this.hp = 110;
        this.atk = 8;
        this.speed = 57;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HURRICANE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 0;
    }
}
exports.Pidgeotto = Pidgeotto;
class Pidgeot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 57;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HURRICANE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 0;
    }
}
exports.Pidgeot = Pidgeot;
class Hoppip extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SKIPLOOM;
        this.hp = 50;
        this.atk = 5;
        this.speed = 60;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ACROBATICS;
    }
}
exports.Hoppip = Hoppip;
class Skiploom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.JUMPLUFF;
        this.hp = 100;
        this.atk = 10;
        this.speed = 60;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ACROBATICS;
    }
}
exports.Skiploom = Skiploom;
class Jumpluff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 150;
        this.atk = 15;
        this.speed = 60;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ACROBATICS;
    }
}
exports.Jumpluff = Jumpluff;
class Seedot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NUZLEAF;
        this.hp = 60;
        this.atk = 6;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAZOR_LEAF;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.Seedot = Seedot;
class Nuzleaf extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SHIFTRY;
        this.hp = 120;
        this.atk = 9;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAZOR_LEAF;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.Nuzleaf = Nuzleaf;
class Shiftry extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 21;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAZOR_LEAF;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.Shiftry = Shiftry;
class Sprigatito extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLORAGATO;
        this.hp = 55;
        this.atk = 5;
        this.speed = 63;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FLOWER_TRICK;
    }
}
exports.Sprigatito = Sprigatito;
class Floragato extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEOWSCARADA;
        this.hp = 105;
        this.atk = 8;
        this.speed = 63;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FLOWER_TRICK;
    }
}
exports.Floragato = Floragato;
class Meowscarada extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 63;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FLOWER_TRICK;
    }
}
exports.Meowscarada = Meowscarada;
class Charmander extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CHARMELEON;
        this.hp = 60;
        this.atk = 4;
        this.speed = 57;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAST_BURN;
    }
}
exports.Charmander = Charmander;
class Charmeleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CHARIZARD;
        this.hp = 120;
        this.atk = 8;
        this.speed = 57;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAST_BURN;
    }
}
exports.Charmeleon = Charmeleon;
class Charizard extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.speed = 57;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAST_BURN;
    }
}
exports.Charizard = Charizard;
class Magikarp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GYARADOS;
        this.hp = 30;
        this.atk = 1;
        this.speed = 51;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.SPLASH;
        this.passive = Passive_1.Passive.MAGIKARP;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(8);
    }
}
exports.Magikarp = Magikarp;
class Gyarados extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 300;
        this.atk = 28;
        this.speed = 51;
        this.def = 10;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.FISHERMAN);
    }
}
exports.Gyarados = Gyarados;
class PikachuSurfer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FAIRY
        ]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 120;
        this.atk = 8;
        this.speed = 54;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SURF;
        this.passive = Passive_1.Passive.PIKACHU_SURFER;
    }
    onItemRemoved(item, player) {
        if (item === Item_1.Item.SURFBOARD) {
            player.transformPokemon(this, Pokemon_1.Pkm.PIKACHU);
        }
    }
}
exports.PikachuSurfer = PikachuSurfer;
class Rattata extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RATICATE;
        this.hp = 50;
        this.atk = 4;
        this.speed = 56;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AGILITY;
    }
}
exports.Rattata = Rattata;
class Raticate extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.hp = 110;
        this.atk = 9;
        this.speed = 56;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AGILITY;
    }
}
exports.Raticate = Raticate;
class AlolanRattata extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_RATICATE;
        this.hp = 60;
        this.atk = 6;
        this.speed = 50;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.TAIL_WHIP;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.AlolanRattata = AlolanRattata;
class AlolanRaticate extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 14;
        this.speed = 50;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.TAIL_WHIP;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.AlolanRaticate = AlolanRaticate;
class Spearow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FEAROW;
        this.hp = 50;
        this.atk = 4;
        this.speed = 57;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PECK;
    }
}
exports.Spearow = Spearow;
class Fearow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.hp = 120;
        this.atk = 8;
        this.speed = 57;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PECK;
    }
}
exports.Fearow = Fearow;
class Meloetta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 23;
        this.speed = 54;
        this.def = 8;
        this.speDef = 12;
        this.maxPP = 60;
        this.range = 4;
        this.skill = Ability_1.Ability.RELIC_SONG;
        this.passive = Passive_1.Passive.MELOETTA;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state);
        if (y === 3) {
            player.transformPokemon(this, Pokemon_1.Pkm.PIROUETTE_MELOETTA);
        }
    }
}
exports.Meloetta = Meloetta;
class PirouetteMeloetta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 23;
        this.speed = 82;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.U_TURN;
        this.passive = Passive_1.Passive.MELOETTA;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state);
        if (y !== 3) {
            player.transformPokemon(this, Pokemon_1.Pkm.MELOETTA);
        }
    }
}
exports.PirouetteMeloetta = PirouetteMeloetta;
class Lugia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.evolution = Pokemon_1.Pkm.SHADOW_LUGIA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.speed = 60;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SKY_ATTACK;
    }
}
exports.Lugia = Lugia;
class ShadowLugia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.DARK
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.speed = 60;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SKY_ATTACK_SHADOW;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.ShadowLugia = ShadowLugia;
class Giratina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 32;
        this.speed = 54;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_FORCE;
    }
}
exports.Giratina = Giratina;
class OriginGiratina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 32;
        this.speed = 54;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_CLAW;
    }
}
exports.OriginGiratina = OriginGiratina;
class Zapdos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 27;
        this.speed = 57;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER;
        this.passive = Passive_1.Passive.STORM;
    }
}
exports.Zapdos = Zapdos;
class GalarianZapdos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 27;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDEROUS_KICK;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.FIGHTING) ||
            regionSynergies.includes(Synergy_1.Synergy.WILD) ||
            regionSynergies.includes(Synergy_1.Synergy.FIELD));
    }
}
exports.GalarianZapdos = GalarianZapdos;
class Zeraora extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 71;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PLASMA_FIST;
    }
}
exports.Zeraora = Zeraora;
class Stantler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYSHIELD_BASH;
        this.passive = Passive_1.Passive.STANTLER;
        this.evolution = Pokemon_1.Pkm.WYRDEER;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player, stageLevel) => {
            return player.map !== this.originalMap && stageLevel >= 20;
        });
        this.originalMap = "town";
    }
    onAcquired(player) {
        this.originalMap = player.map;
    }
}
exports.Stantler = Stantler;
class Wyrdeer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 250;
        this.atk = 21;
        this.speed = 42;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYSHIELD_BASH;
    }
}
exports.Wyrdeer = Wyrdeer;
class Miltank extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 13;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROLLOUT;
    }
}
exports.Miltank = Miltank;
class Yveltal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 22;
        this.speed = 57;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEATH_WING;
    }
}
exports.Yveltal = Yveltal;
class Moltres extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 28;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.OVERHEAT;
        this.passive = Passive_1.Passive.DROUGHT;
    }
}
exports.Moltres = Moltres;
class GalarianMoltres extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 28;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIERY_WRATH;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.DARK) ||
            regionSynergies.includes(Synergy_1.Synergy.PSYCHIC) ||
            regionSynergies.includes(Synergy_1.Synergy.GHOST));
    }
}
exports.GalarianMoltres = GalarianMoltres;
class Pinsir extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 20;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
    }
}
exports.Pinsir = Pinsir;
class Articuno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 28;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 2;
        this.skill = Ability_1.Ability.BLIZZARD;
        this.passive = Passive_1.Passive.SNOW;
    }
}
exports.Articuno = Articuno;
class GalarianArticuno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 27;
        this.speed = 55;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FREEZING_GLARE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.PSYCHIC) ||
            regionSynergies.includes(Synergy_1.Synergy.FAIRY) ||
            regionSynergies.includes(Synergy_1.Synergy.DARK));
    }
}
exports.GalarianArticuno = GalarianArticuno;
class Dialga extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 23;
        this.speed = 54;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR_OF_TIME;
    }
}
exports.Dialga = Dialga;
class Palkia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 22;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SPACIAL_REND;
    }
}
exports.Palkia = Palkia;
class Meltan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 50;
        this.atk = 5;
        this.speed = 40;
        this.def = 8;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.MAGNET_PULL;
        this.passive = Passive_1.Passive.MELTAN;
    }
}
exports.Meltan = Meltan;
class Melmetal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 320;
        this.atk = 35;
        this.speed = 36;
        this.def = 14;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_IRON_BASH;
        this.passive = Passive_1.Passive.MELMETAL;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.MYSTERY_BOX) === false) {
            player.items.push(Item_1.Item.MYSTERY_BOX);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.MYSTERY_BOX);
    }
}
exports.Melmetal = Melmetal;
class Suicune extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 28;
        this.speed = 52;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
    }
}
exports.Suicune = Suicune;
class Raikou extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.speed = 62;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 130;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
    }
}
exports.Raikou = Raikou;
class Entei extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 27;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 130;
        this.range = 1;
        this.skill = Ability_1.Ability.FLAME_CHARGE;
    }
}
exports.Entei = Entei;
class Regice extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.speed = 41;
        this.def = 15;
        this.speDef = 20;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAIL;
    }
}
exports.Regice = Regice;
class Seviper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 22;
        this.speed = 46;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
    }
}
exports.Seviper = Seviper;
class Lunatone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.COSMIC_POWER_MOON;
        this.passive = Passive_1.Passive.NIGHT;
    }
}
exports.Lunatone = Lunatone;
class Solrock extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.COSMIC_POWER_SUN;
        this.passive = Passive_1.Passive.DROUGHT_OR_ZENITH;
    }
}
exports.Solrock = Solrock;
class Regirock extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.speed = 41;
        this.def = 20;
        this.speDef = 15;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STEALTH_ROCKS;
    }
}
exports.Regirock = Regirock;
class Tauros extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 60;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAGING_BULL;
    }
}
exports.Tauros = Tauros;
class TaurosCombatBreed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 60;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAGING_BULL;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return (regionSynergies.includes(Synergy_1.Synergy.FIGHTING) ||
            regionSynergies.includes(Synergy_1.Synergy.ROCK));
    }
}
exports.TaurosCombatBreed = TaurosCombatBreed;
class TaurosBlazeBreed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 60;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAGING_BULL;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return (regionSynergies.includes(Synergy_1.Synergy.FIRE) ||
            regionSynergies.includes(Synergy_1.Synergy.LIGHT));
    }
}
exports.TaurosBlazeBreed = TaurosBlazeBreed;
class TaurosAquaBreed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 60;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAGING_BULL;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return (regionSynergies.includes(Synergy_1.Synergy.WATER) ||
            regionSynergies.includes(Synergy_1.Synergy.AQUATIC));
    }
}
exports.TaurosAquaBreed = TaurosAquaBreed;
class Heracross extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 21;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CLOSE_COMBAT;
        this.passive = Passive_1.Passive.GUTS;
    }
}
exports.Heracross = Heracross;
class Zangoose extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 18;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FACADE;
        this.passive = Passive_1.Passive.TOXIC_BOOST;
    }
}
exports.Zangoose = Zangoose;
class Registeel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.speed = 41;
        this.def = 15;
        this.speDef = 15;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_HEAD;
    }
}
exports.Registeel = Registeel;
class Regigigas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 400;
        this.atk = 30;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUSH_GRIP;
        this.passive = Passive_1.Passive.SLOW_START;
    }
}
exports.Regigigas = Regigigas;
class Kyogre extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.PRIMAL_KYOGRE;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.BLUE_ORB]);
        this.hp = 300;
        this.atk = 18;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ORIGIN_PULSE;
        this.passive = Passive_1.Passive.PRIMAL;
    }
}
exports.Kyogre = Kyogre;
class Groudon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.PRIMAL_GROUDON;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.RED_ORB]);
        this.hp = 300;
        this.atk = 20;
        this.speed = 54;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PRECIPICE_BLADES;
        this.passive = Passive_1.Passive.PRIMAL;
    }
}
exports.Groudon = Groudon;
class Rayquaza extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.MEGA_RAYQUAZA;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.GREEN_ORB]);
        this.hp = 300;
        this.atk = 27;
        this.speed = 55;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.DRACO_METEOR;
        this.passive = Passive_1.Passive.PRIMAL;
    }
}
exports.Rayquaza = Rayquaza;
class Eevee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 60;
        this.atk = 5;
        this.speed = 43;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.passive = Passive_1.Passive.EEVEE;
        this.evolutions = [
            Pokemon_1.Pkm.VAPOREON,
            Pokemon_1.Pkm.JOLTEON,
            Pokemon_1.Pkm.FLAREON,
            Pokemon_1.Pkm.ESPEON,
            Pokemon_1.Pkm.UMBREON,
            Pokemon_1.Pkm.LEAFEON,
            Pokemon_1.Pkm.SYLVEON,
            Pokemon_1.Pkm.GLACEON
        ];
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([
            Item_1.Item.WATER_STONE,
            Item_1.Item.FIRE_STONE,
            Item_1.Item.THUNDER_STONE,
            Item_1.Item.DUSK_STONE,
            Item_1.Item.MOON_STONE,
            Item_1.Item.LEAF_STONE,
            Item_1.Item.DAWN_STONE,
            Item_1.Item.ICE_STONE
        ], (pokemon, player, item) => {
            switch (item) {
                case Item_1.Item.WATER_STONE:
                    return Pokemon_1.Pkm.VAPOREON;
                case Item_1.Item.FIRE_STONE:
                    return Pokemon_1.Pkm.FLAREON;
                case Item_1.Item.THUNDER_STONE:
                    return Pokemon_1.Pkm.JOLTEON;
                case Item_1.Item.DUSK_STONE:
                    return Pokemon_1.Pkm.UMBREON;
                case Item_1.Item.MOON_STONE:
                    return Pokemon_1.Pkm.SYLVEON;
                case Item_1.Item.LEAF_STONE:
                    return Pokemon_1.Pkm.LEAFEON;
                case Item_1.Item.DAWN_STONE:
                    return Pokemon_1.Pkm.ESPEON;
                case Item_1.Item.ICE_STONE:
                default:
                    return Pokemon_1.Pkm.GLACEON;
            }
        });
    }
}
exports.Eevee = Eevee;
class Vaporeon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.speed = 43;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Vaporeon = Vaporeon;
class Jolteon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 8;
        this.speed = 83;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Jolteon = Jolteon;
class Flareon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.speed = 43;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Flareon = Flareon;
class Espeon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 8;
        this.speed = 70;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Espeon = Espeon;
class Umbreon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.speed = 43;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Umbreon = Umbreon;
class Leafeon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 9;
        this.speed = 61;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Leafeon = Leafeon;
class Sylveon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.speed = 43;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Sylveon = Sylveon;
class Glaceon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.speed = 43;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
    }
}
exports.Glaceon = Glaceon;
class Volcanion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 20;
        this.speed = 47;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.STEAM_ERUPTION;
    }
}
exports.Volcanion = Volcanion;
class Darkrai extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 22;
        this.speed = 65;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_VOID;
    }
}
exports.Darkrai = Darkrai;
class Larvesta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VOLCARONA;
        this.hp = 100;
        this.atk = 11;
        this.speed = 57;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FIERY_DANCE;
        this.regional = true;
    }
}
exports.Larvesta = Larvesta;
class Volcarona extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 21;
        this.speed = 57;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FIERY_DANCE;
        this.regional = true;
    }
}
exports.Volcarona = Volcarona;
class Chatot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.CHATTER;
    }
}
exports.Chatot = Chatot;
class Farfetchd extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.NORMAL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.RAZOR_WIND;
    }
}
exports.Farfetchd = Farfetchd;
class GalarianFarfetchd extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a, _b;
        const regionSynergies = (_b = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies) !== null && _b !== void 0 ? _b : [];
        return (regionSynergies.includes(Synergy_1.Synergy.FIGHTING) ||
            regionSynergies.includes(Synergy_1.Synergy.DARK));
    }
}
exports.GalarianFarfetchd = GalarianFarfetchd;
class Kecleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.speed = 38;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.passive = Passive_1.Passive.PROTEAN2;
    }
}
exports.Kecleon = Kecleon;
function updateCastform(pokemon, weather, player) {
    let weatherForm = Pokemon_1.Pkm.CASTFORM;
    if (weather === Weather_1.Weather.SNOW) {
        weatherForm = Pokemon_1.Pkm.CASTFORM_HAIL;
    }
    else if (weather === Weather_1.Weather.RAIN) {
        weatherForm = Pokemon_1.Pkm.CASTFORM_RAIN;
    }
    else if (weather === Weather_1.Weather.DROUGHT || weather === Weather_1.Weather.ZENITH) {
        weatherForm = Pokemon_1.Pkm.CASTFORM_SUN;
    }
    if (pokemon.name === weatherForm)
        return;
    if (!player)
        return;
    player.transformPokemon(pokemon, weatherForm);
}
class Castform extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
    }
    beforeSimulationStart({ isGhostBattle, weather, player }) {
        if (!isGhostBattle) {
            updateCastform(this, weather, player);
        }
    }
}
exports.Castform = Castform;
class CastformSun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
    }
    beforeSimulationStart({ isGhostBattle, weather, player }) {
        if (!isGhostBattle) {
            updateCastform(this, weather, player);
        }
    }
}
exports.CastformSun = CastformSun;
class CastformRain extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
    }
    beforeSimulationStart({ isGhostBattle, weather, player }) {
        if (!isGhostBattle) {
            updateCastform(this, weather, player);
        }
    }
}
exports.CastformRain = CastformRain;
class CastformHail extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
    }
    beforeSimulationStart({ isGhostBattle, weather, player }) {
        if (!isGhostBattle) {
            updateCastform(this, weather, player);
        }
    }
}
exports.CastformHail = CastformHail;
class Landorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 27;
        this.speed = 57;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SANDSEAR_STORM;
        this.passive = Passive_1.Passive.LANDORUS;
    }
}
exports.Landorus = Landorus;
class Thundurus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 26;
        this.speed = 61;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.WILDBOLT_STORM;
        this.passive = Passive_1.Passive.THUNDURUS;
    }
}
exports.Thundurus = Thundurus;
class Tornadus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 26;
        this.speed = 61;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.BLEAKWIND_STORM;
        this.passive = Passive_1.Passive.TORNADUS;
    }
}
exports.Tornadus = Tornadus;
class Enamorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 26;
        this.speed = 59;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SPRINGTIDE_STORM;
        this.passive = Passive_1.Passive.ENAMORUS;
    }
}
exports.Enamorus = Enamorus;
class Keldeo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.speed = 60;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SECRET_SWORD;
    }
}
exports.Keldeo = Keldeo;
class Terrakion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.speed = 60;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SACRED_SWORD_CAVERN;
    }
}
exports.Terrakion = Terrakion;
class Virizion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.speed = 60;
        this.def = 8;
        this.speDef = 16;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SACRED_SWORD_GRASS;
    }
}
exports.Virizion = Virizion;
class Cobalion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.speed = 60;
        this.def = 16;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SACRED_SWORD_IRON;
    }
}
exports.Cobalion = Cobalion;
class Mawile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.speed = 47;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
    }
}
exports.Mawile = Mawile;
class Phione extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 125;
        this.atk = 10;
        this.speed = 57;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.TAKE_HEART;
    }
}
exports.Phione = Phione;
class Manaphy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HEART_SWAP;
        this.passive = Passive_1.Passive.MANAPHY;
    }
}
exports.Manaphy = Manaphy;
class Rotom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 10;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 85;
        this.range = 3;
        this.passive = Passive_1.Passive.ROTOM;
        this.skill = Ability_1.Ability.PLASMA_FISSION;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ELECTRIC)) ||
            (regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ARTIFICIAL)));
    }
    onAcquired(player) {
        if (!player.items.includes(Item_1.Item.ROTOM_CATALOG)) {
            player.items.push(Item_1.Item.ROTOM_CATALOG);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.ROTOM_CATALOG);
    }
}
exports.Rotom = Rotom;
class RotomHeat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.FIRE
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 13;
        this.speed = 54;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.passive = Passive_1.Passive.ROTOM;
        this.skill = Ability_1.Ability.SUPER_HEAT;
    }
    onAcquired(player) {
        if (!player.items.includes(Item_1.Item.ROTOM_CATALOG)) {
            player.items.push(Item_1.Item.ROTOM_CATALOG);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.ROTOM_CATALOG);
    }
}
exports.RotomHeat = RotomHeat;
class RotomWash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.WATER
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 12;
        this.speed = 54;
        this.def = 7;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.passive = Passive_1.Passive.ROTOM;
        this.skill = Ability_1.Ability.POWER_WASH;
    }
    onAcquired(player) {
        if (!player.items.includes(Item_1.Item.ROTOM_CATALOG)) {
            player.items.push(Item_1.Item.ROTOM_CATALOG);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.ROTOM_CATALOG);
    }
}
exports.RotomWash = RotomWash;
class RotomFrost extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.ICE
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 11;
        this.speed = 54;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 110;
        this.range = 2;
        this.passive = Passive_1.Passive.ROTOM;
        this.skill = Ability_1.Ability.DEEP_FREEZE;
    }
    onAcquired(player) {
        if (!player.items.includes(Item_1.Item.ROTOM_CATALOG)) {
            player.items.push(Item_1.Item.ROTOM_CATALOG);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.ROTOM_CATALOG);
    }
}
exports.RotomFrost = RotomFrost;
class RotomFan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 10;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 3;
        this.passive = Passive_1.Passive.ROTOM;
        this.skill = Ability_1.Ability.PLASMA_TEMPEST;
    }
    onAcquired(player) {
        if (!player.items.includes(Item_1.Item.ROTOM_CATALOG)) {
            player.items.push(Item_1.Item.ROTOM_CATALOG);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.ROTOM_CATALOG);
    }
}
exports.RotomFan = RotomFan;
class RotomMow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GRASS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 14;
        this.speed = 54;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.passive = Passive_1.Passive.ROTOM;
        this.skill = Ability_1.Ability.TRIMMING_MOWER;
    }
    onAcquired(player) {
        if (!player.items.includes(Item_1.Item.ROTOM_CATALOG)) {
            player.items.push(Item_1.Item.ROTOM_CATALOG);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.ROTOM_CATALOG);
    }
}
exports.RotomMow = RotomMow;
class RotomDrone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 12;
        this.speed = 54;
        this.def = 7;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.passive = Passive_1.Passive.ROTOM;
        this.skill = Ability_1.Ability.PLASMA_FLASH;
    }
    onAcquired(player) {
        if (!player.items.includes(Item_1.Item.ROTOM_CATALOG)) {
            player.items.push(Item_1.Item.ROTOM_CATALOG);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.ROTOM_CATALOG);
    }
}
exports.RotomDrone = RotomDrone;
class Spiritomb extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 18;
        this.speed = 36;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 108;
        this.range = 1;
        this.skill = Ability_1.Ability.SOUL_TRAP;
        this.passive = Passive_1.Passive.SPIRITOMB;
    }
}
exports.Spiritomb = Spiritomb;
class Absol extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 25;
        this.speed = 52;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NIGHT_SLASH;
    }
}
exports.Absol = Absol;
class Delibird extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 19;
        this.speed = 49;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PRESENT;
    }
}
exports.Delibird = Delibird;
class IronBundle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 13;
        this.speed = 69;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AURORA_BEAM;
    }
}
exports.IronBundle = IronBundle;
class Lapras extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ICE, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 225;
        this.atk = 12;
        this.speed = 38;
        this.def = 7;
        this.speDef = 9;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIVE;
    }
}
exports.Lapras = Lapras;
class Latias extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 120;
        this.atk = 9;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.MIST_BALL;
        this.passive = Passive_1.Passive.SHARED_VISION;
    }
}
exports.Latias = Latias;
class Latios extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 120;
        this.atk = 9;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.LUSTER_PURGE;
        this.passive = Passive_1.Passive.SHARED_VISION;
    }
}
exports.Latios = Latios;
class Uxie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 55;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.KNOWLEDGE_THIEF;
    }
}
exports.Uxie = Uxie;
class Mesprit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.SONG_OF_DESIRE;
    }
}
exports.Mesprit = Mesprit;
class Azelf extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 62;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.NASTY_PLOT;
    }
}
exports.Azelf = Azelf;
class Mew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 64;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.passive = Passive_1.Passive.SYNCHRO;
    }
}
exports.Mew = Mew;
class Mewtwo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 25;
        this.speed = 67;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.PSYSTRIKE;
    }
}
exports.Mewtwo = Mewtwo;
class ShadowMewtwo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.DARK
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 25;
        this.speed = 67;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.PSYSTRIKE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.ShadowMewtwo = ShadowMewtwo;
class Marshadow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 23;
        this.speed = 65;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 125;
        this.range = 1;
        this.skill = Ability_1.Ability.SPECTRAL_THIEF;
    }
}
exports.Marshadow = Marshadow;
class Kyurem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 55;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.GLACIATE;
    }
}
exports.Kyurem = Kyurem;
class Reshiram extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 28;
        this.speed = 54;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.BLUE_FLARE;
    }
}
exports.Reshiram = Reshiram;
class Zekrom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 28;
        this.speed = 54;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FUSION_BOLT;
    }
}
exports.Zekrom = Zekrom;
class Celebi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FLORA
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.TIME_TRAVEL;
        this.passive = Passive_1.Passive.CELEBI;
    }
}
exports.Celebi = Celebi;
class Victini extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 27;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SEARING_SHOT;
        this.passive = Passive_1.Passive.VICTINI;
    }
    beforeSimulationStart({ opponentEffects }) {
        opponentEffects.add(Effect_1.EffectEnum.VICTINI_PASSIVE);
    }
}
exports.Victini = Victini;
class Jirachi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 27;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.DOOM_DESIRE;
        this.passive = Passive_1.Passive.GOOD_LUCK;
    }
    beforeSimulationStart({ teamEffects }) {
        teamEffects.add(Effect_1.EffectEnum.GOOD_LUCK);
    }
}
exports.Jirachi = Jirachi;
class Arceus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 21;
        this.speed = 63;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.JUDGEMENT;
        this.passive = Passive_1.Passive.PROTEAN3;
    }
}
exports.Arceus = Arceus;
class Deoxys extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.speed = 73;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYCHO_BOOST;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.METEORITE);
    }
}
exports.Deoxys = Deoxys;
class DeoxysDefense extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 15;
        this.speed = 45;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PROTECT;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.METEORITE);
    }
}
exports.DeoxysDefense = DeoxysDefense;
class DeoxysAttack extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.speed = 73;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.METEORITE);
    }
}
exports.DeoxysAttack = DeoxysAttack;
class DeoxysSpeed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 15;
        this.speed = 90;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 2;
        this.skill = Ability_1.Ability.EXTREME_SPEED;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.METEORITE);
    }
}
exports.DeoxysSpeed = DeoxysSpeed;
class Shaymin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.SHAYMIN_SKY;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.GRACIDEA_FLOWER]);
        this.hp = 200;
        this.atk = 25;
        this.speed = 57;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SEED_FLARE;
        this.passive = Passive_1.Passive.SHAYMIN;
    }
}
exports.Shaymin = Shaymin;
class ShayminSky extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 300;
        this.atk = 28;
        this.speed = 66;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SEED_FLARE;
        this.passive = Passive_1.Passive.ZENITH;
    }
}
exports.ShayminSky = ShayminSky;
class Cresselia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 14;
        this.speed = 52;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.LUNAR_BLESSING;
    }
}
exports.Cresselia = Cresselia;
class Heatran extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 280;
        this.atk = 19;
        this.speed = 50;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGMA_STORM;
    }
}
exports.Heatran = Heatran;
class HooH extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.speed = 50;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_BLAST;
    }
}
exports.HooH = HooH;
class RoaringMoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.DARK, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 25;
        this.speed = 61;
        this.def = 6;
        this.speDef = 9;
        this.maxPP = 130;
        this.range = 3;
        this.skill = Ability_1.Ability.SCALE_SHOT;
    }
}
exports.RoaringMoon = RoaringMoon;
class Torkoal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.speed = 31;
        this.def = 16;
        this.speDef = 4;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.SMOKE_SCREEN;
    }
}
exports.Torkoal = Torkoal;
class Heatmor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.speed = 46;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRE_LASH;
    }
}
exports.Heatmor = Heatmor;
class Cryogonal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 59;
        this.def = 4;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FREEZE_DRY;
    }
}
exports.Cryogonal = Cryogonal;
class Drampa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 12;
        this.speed = 37;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.DRAGON_PULSE;
        this.passive = Passive_1.Passive.DRAMPA;
    }
}
exports.Drampa = Drampa;
class PrimalGroudon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FIRE
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 400;
        this.atk = 18;
        this.speed = 54;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PRECIPICE_BLADES;
        this.passive = Passive_1.Passive.DROUGHT_OR_SANDSTORM;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.PRIMAL);
    }
}
exports.PrimalGroudon = PrimalGroudon;
class PrimalKyogre extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 400;
        this.atk = 18;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.ORIGIN_PULSE;
        this.passive = Passive_1.Passive.RAIN_OR_STORM;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.PRIMAL);
    }
}
exports.PrimalKyogre = PrimalKyogre;
class MegaRayquaza extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 400;
        this.atk = 27;
        this.speed = 55;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 2;
        this.skill = Ability_1.Ability.DRACO_METEOR;
        this.passive = Passive_1.Passive.AIRLOCK;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.PRIMAL);
    }
}
exports.MegaRayquaza = MegaRayquaza;
class Oddish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GLOOM;
        this.hp = 80;
        this.atk = 8;
        this.speed = 41;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STUN_SPORE;
    }
}
exports.Oddish = Oddish;
class Gloom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VILEPLUME;
        this.hp = 150;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STUN_SPORE;
    }
}
exports.Gloom = Gloom;
class Vileplume extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 250;
        this.atk = 24;
        this.speed = 41;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STUN_SPORE;
    }
}
exports.Vileplume = Vileplume;
class Bellossom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 4;
        this.hp = 300;
        this.atk = 30;
        this.speed = 41;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 10;
        this.range = 1;
        this.skill = Ability_1.Ability.PETAL_BLIZZARD;
    }
}
exports.Bellossom = Bellossom;
class Amaura extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.AURORUS;
        this.hp = 130;
        this.atk = 7;
        this.speed = 44;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAIL;
        this.additional = true;
    }
}
exports.Amaura = Amaura;
class Aurorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 280;
        this.atk = 18;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAIL;
        this.additional = true;
    }
}
exports.Aurorus = Aurorus;
class Carbink extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DIANCIE;
        this.hp = 125;
        this.atk = 7;
        this.speed = 41;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIAMOND_STORM;
        this.additional = true;
    }
}
exports.Carbink = Carbink;
class Diancie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 300;
        this.atk = 10;
        this.speed = 41;
        this.def = 16;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIAMOND_STORM;
        this.additional = true;
    }
}
exports.Diancie = Diancie;
class Sunkern extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SUNFLORA;
        this.hp = 80;
        this.atk = 9;
        this.speed = 35;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SOLAR_BEAM;
        this.additional = true;
    }
}
exports.Sunkern = Sunkern;
class Sunflora extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 20;
        this.speed = 35;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.SOLAR_BEAM;
        this.additional = true;
    }
}
exports.Sunflora = Sunflora;
class Mankey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PRIMEAPE;
        this.hp = 120;
        this.atk = 7;
        this.speed = 54;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.THRASH;
    }
}
exports.Mankey = Mankey;
class Primeape extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ANNIHILAPE;
        this.evolutionRule = new evolution_rules_1.StackBasedEvolutionRule();
        this.stacksRequired = 10;
        this.hp = 240;
        this.atk = 20;
        this.speed = 54;
        this.def = 12;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.THRASH;
        this.passive = Passive_1.Passive.PRIMEAPE;
    }
}
exports.Primeape = Primeape;
class Annihilape extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 320;
        this.atk = 30;
        this.speed = 54;
        this.def = 12;
        this.speDef = 14;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.THRASH;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.ANNIHILATOR);
        this.atk -= 30 - 20;
    }
}
exports.Annihilape = Annihilape;
class Anorith extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARMALDO;
        this.hp = 60;
        this.atk = 6;
        this.speed = 39;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HARDEN;
        this.additional = true;
    }
}
exports.Anorith = Anorith;
class Armaldo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 16;
        this.speed = 39;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HARDEN;
        this.additional = true;
    }
}
exports.Armaldo = Armaldo;
class Wynaut extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.BABY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WOBBUFFET;
        this.hp = 110;
        this.atk = 8;
        this.speed = 36;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COUNTER;
        this.passive = Passive_1.Passive.WOBBUFFET;
        this.additional = true;
    }
}
exports.Wynaut = Wynaut;
class Wobbuffet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 280;
        this.atk = 20;
        this.speed = 36;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COUNTER;
        this.passive = Passive_1.Passive.WOBBUFFET;
        this.additional = true;
    }
}
exports.Wobbuffet = Wobbuffet;
class Munna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MUSHARNA;
        this.hp = 80;
        this.atk = 9;
        this.speed = 34;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MOON_DREAM;
        this.passive = Passive_1.Passive.DREAM_CATCHER;
        this.additional = true;
    }
}
exports.Munna = Munna;
class Musharna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 240;
        this.atk = 18;
        this.speed = 34;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MOON_DREAM;
        this.passive = Passive_1.Passive.DREAM_CATCHER;
        this.additional = true;
    }
}
exports.Musharna = Musharna;
class Archen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARCHEOPS;
        this.hp = 70;
        this.atk = 4;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SMASH;
        this.additional = true;
    }
}
exports.Archen = Archen;
class Archeops extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 10;
        this.speed = 60;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_SMASH;
        this.additional = true;
    }
}
exports.Archeops = Archeops;
class Gligar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GLISCOR;
        this.hp = 100;
        this.atk = 11;
        this.speed = 55;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_JAB;
        this.passive = Passive_1.Passive.GLISCOR;
        this.additional = true;
    }
}
exports.Gligar = Gligar;
class Gliscor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 170;
        this.atk = 22;
        this.speed = 55;
        this.def = 12;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_JAB;
        this.passive = Passive_1.Passive.GLISCOR;
        this.additional = true;
    }
}
exports.Gliscor = Gliscor;
class Shieldon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BASTIODON;
        this.hp = 90;
        this.atk = 7;
        this.speed = 35;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_DEFENSE;
        this.additional = true;
    }
}
exports.Shieldon = Shieldon;
class Bastiodon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 250;
        this.atk = 11;
        this.speed = 35;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_DEFENSE;
        this.additional = true;
    }
}
exports.Bastiodon = Bastiodon;
class Mienfoo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MIENSHAO;
        this.hp = 80;
        this.atk = 9;
        this.speed = 59;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAIN_PUNCH;
        this.additional = true;
    }
}
exports.Mienfoo = Mienfoo;
class Mienshao extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 175;
        this.atk = 18;
        this.speed = 59;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAIN_PUNCH;
        this.additional = true;
    }
}
exports.Mienshao = Mienshao;
class Lileep extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CRADILY;
        this.hp = 70;
        this.atk = 7;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
    }
}
exports.Lileep = Lileep;
class Cradily extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 22;
        this.speed = 39;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
    }
}
exports.Cradily = Cradily;
class Cranidos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RAMPARDOS;
        this.hp = 60;
        this.atk = 7;
        this.speed = 44;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.additional = true;
    }
}
exports.Cranidos = Cranidos;
class Rampardos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 15;
        this.speed = 44;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.additional = true;
    }
}
exports.Rampardos = Rampardos;
class Kabuto extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KABUTOPS;
        this.hp = 80;
        this.atk = 8;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PROTECT;
        this.additional = true;
    }
}
exports.Kabuto = Kabuto;
class Kabutops extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 22;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASHING_CLAW;
        this.additional = true;
    }
}
exports.Kabutops = Kabutops;
class Omanyte extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.OMASTAR;
        this.hp = 70;
        this.atk = 6;
        this.speed = 43;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_TOMB;
        this.additional = true;
    }
}
exports.Omanyte = Omanyte;
class Omastar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 43;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_TOMB;
        this.additional = true;
    }
}
exports.Omastar = Omastar;
class Clamperl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.hp = 100;
        this.atk = 8;
        this.speed = 35;
        this.def = 10;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_DEFENSE;
        this.passive = Passive_1.Passive.BIVALVE;
        this.additional = true;
        this.evolutions = [Pokemon_1.Pkm.HUNTAIL, Pokemon_1.Pkm.GOREBYSS];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            var _a, _b;
            const psychicCount = (_a = player.synergies.get(Synergy_1.Synergy.PSYCHIC)) !== null && _a !== void 0 ? _a : 0;
            const darkCount = (_b = player.synergies.get(Synergy_1.Synergy.DARK)) !== null && _b !== void 0 ? _b : 0;
            return darkCount >= psychicCount ? Pokemon_1.Pkm.HUNTAIL : Pokemon_1.Pkm.GOREBYSS;
        });
    }
}
exports.Clamperl = Clamperl;
class Gorebyss extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 18;
        this.speed = 35;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AQUA_RING;
        this.additional = true;
    }
}
exports.Gorebyss = Gorebyss;
class Huntail extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.WATER, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 140;
        this.atk = 30;
        this.speed = 35;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.CAVERNOUS_CHOMP;
        this.additional = true;
    }
}
exports.Huntail = Huntail;
class Relicanth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.WATER, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 13;
        this.speed = 43;
        this.def = 14;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_TOMB;
    }
}
exports.Relicanth = Relicanth;
class Tyrunt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TYRANTRUM;
        this.hp = 70;
        this.atk = 8;
        this.speed = 48;
        this.def = 8;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_HEAD;
        this.additional = true;
    }
}
exports.Tyrunt = Tyrunt;
class Tyrantrum extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.speed = 48;
        this.def = 12;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_HEAD;
        this.additional = true;
    }
}
exports.Tyrantrum = Tyrantrum;
class Aerodactyl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 67;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
    }
}
exports.Aerodactyl = Aerodactyl;
class Genesect extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 57;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 4;
        this.skill = Ability_1.Ability.LOCK_ON;
    }
}
exports.Genesect = Genesect;
class Hatenna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HATTREM;
        this.hp = 75;
        this.atk = 7;
        this.speed = 34;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAGIC_POWDER;
    }
}
exports.Hatenna = Hatenna;
class Hattrem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HATTERENE;
        this.hp = 130;
        this.atk = 12;
        this.speed = 34;
        this.def = 8;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAGIC_POWDER;
    }
}
exports.Hattrem = Hattrem;
class Hatterene extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 240;
        this.atk = 25;
        this.speed = 34;
        this.def = 10;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAGIC_POWDER;
    }
}
exports.Hatterene = Hatterene;
class Fennekin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRAIXEN;
        this.hp = 50;
        this.atk = 4;
        this.speed = 58;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MYSTICAL_FIRE;
    }
}
exports.Fennekin = Fennekin;
class Braixen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DELPHOX;
        this.hp = 100;
        this.atk = 8;
        this.speed = 58;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MYSTICAL_FIRE;
    }
}
exports.Braixen = Braixen;
class Delphox extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 58;
        this.def = 2;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MYSTICAL_FIRE;
    }
}
exports.Delphox = Delphox;
class Regieleki extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.speed = 89;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER_CAGE;
    }
}
exports.Regieleki = Regieleki;
class Regidrago extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 350;
        this.atk = 25;
        this.speed = 51;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRACO_ENERGY;
    }
}
exports.Regidrago = Regidrago;
class Guzzlord extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.speed = 39;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
        this.passive = Passive_1.Passive.GUZZLORD;
    }
}
exports.Guzzlord = Guzzlord;
class Eternatus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 18;
        this.speed = 67;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 125;
        this.range = 1;
        this.skill = Ability_1.Ability.DYNAMAX_CANNON;
    }
}
exports.Eternatus = Eternatus;
class Nincada extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NINJASK;
        this.hp = 130;
        this.atk = 10;
        this.speed = 76;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.WONDER_GUARD;
        this.passive = Passive_1.Passive.NINCADA;
        this.additional = true;
    }
}
exports.Nincada = Nincada;
class Ninjask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 14;
        this.speed = 76;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AERIAL_ACE;
        this.additional = true;
    }
    onAcquired(player) {
        const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
        if (x !== null) {
            const pokemon = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SHEDINJA, player);
            pokemon.positionX = x;
            pokemon.positionY = 0;
            player.board.set(pokemon.id, pokemon);
        }
    }
}
exports.Ninjask = Ninjask;
class Shedinja extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 100;
        this.atk = 14;
        this.speed = 38;
        this.def = 0;
        this.speDef = 0;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WONDER_GUARD;
        this.passive = Passive_1.Passive.WONDER_GUARD;
        this.additional = true;
    }
}
exports.Shedinja = Shedinja;
class Happiny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CHANSEY;
        this.hp = 150;
        this.atk = 8;
        this.speed = 43;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SOFT_BOILED;
    }
}
exports.Happiny = Happiny;
class Chansey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BLISSEY;
        this.hp = 300;
        this.atk = 21;
        this.speed = 43;
        this.def = 12;
        this.speDef = 20;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SOFT_BOILED;
    }
}
exports.Chansey = Chansey;
class Blissey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 480;
        this.atk = 26;
        this.speed = 43;
        this.def = 20;
        this.speDef = 30;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SOFT_BOILED;
    }
}
exports.Blissey = Blissey;
class TapuKoko extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 67;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ELECTRIC_SURGE;
        this.passive = Passive_1.Passive.ELECTRIC_TERRAIN;
        this.regional = true;
    }
    isInRegion(map) {
        var _a, _b;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (_b = regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ELECTRIC)) !== null && _b !== void 0 ? _b : false;
    }
}
exports.TapuKoko = TapuKoko;
class TapuLele extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 55;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PSYCHIC_SURGE;
        this.passive = Passive_1.Passive.PSYCHIC_TERRAIN;
        this.regional = true;
    }
    isInRegion(map) {
        var _a, _b;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (_b = regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.PSYCHIC)) !== null && _b !== void 0 ? _b : false;
    }
}
exports.TapuLele = TapuLele;
class Xerneas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.speed = 57;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.GEOMANCY;
    }
}
exports.Xerneas = Xerneas;
class TapuFini extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.MISTY_SURGE;
        this.passive = Passive_1.Passive.MISTY_TERRAIN;
        this.regional = true;
    }
    isInRegion(map) {
        var _a, _b;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (_b = regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.FAIRY)) !== null && _b !== void 0 ? _b : false;
    }
}
exports.TapuFini = TapuFini;
class TapuBulu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GRASSY_SURGE;
        this.passive = Passive_1.Passive.GRASSY_TERRAIN;
        this.regional = true;
    }
    isInRegion(map) {
        var _a, _b;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (_b = regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.GRASS)) !== null && _b !== void 0 ? _b : false;
    }
}
exports.TapuBulu = TapuBulu;
class Stakataka extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 20;
        this.speed = 29;
        this.def = 30;
        this.speDef = 30;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_DEFENSE;
        this.passive = Passive_1.Passive.WALL_OF_STONE;
    }
}
exports.Stakataka = Stakataka;
class Blacephalon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 25;
        this.speed = 69;
        this.def = 5;
        this.speDef = 9;
        this.maxPP = 150;
        this.range = 3;
        this.skill = Ability_1.Ability.MIND_BLOWN;
    }
}
exports.Blacephalon = Blacephalon;
class Houndour extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HOUNDOOM;
        this.hp = 90;
        this.atk = 7;
        this.speed = 55;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.BEAT_UP;
        this.additional = true;
    }
}
exports.Houndour = Houndour;
class Houndoom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 175;
        this.atk = 24;
        this.speed = 55;
        this.def = 10;
        this.speDef = 14;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.BEAT_UP;
        this.additional = true;
    }
}
exports.Houndoom = Houndoom;
class MegaHoundoom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 280;
        this.atk = 35;
        this.speed = 55;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.additional = true;
    }
}
exports.MegaHoundoom = MegaHoundoom;
class Cacnea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CACTURNE;
        this.hp = 85;
        this.atk = 7;
        this.speed = 43;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_BLOCK;
        this.additional = true;
    }
}
exports.Cacnea = Cacnea;
class Cacturne extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 21;
        this.speed = 43;
        this.def = 12;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_BLOCK;
        this.additional = true;
    }
}
exports.Cacturne = Cacturne;
class Pumpkaboo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOURGEIST;
        this.hp = 80;
        this.atk = 10;
        this.speed = 52;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TRICK_OR_TREAT;
        this.additional = true;
    }
}
exports.Pumpkaboo = Pumpkaboo;
class Gourgeist extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 22;
        this.speed = 52;
        this.def = 20;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TRICK_OR_TREAT;
        this.additional = true;
    }
}
exports.Gourgeist = Gourgeist;
class Natu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.XATU;
        this.hp = 90;
        this.atk = 5;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGIC_BOUNCE;
        this.additional = true;
    }
}
exports.Natu = Natu;
class Xatu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 15;
        this.speed = 60;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGIC_BOUNCE;
        this.additional = true;
    }
}
exports.Xatu = Xatu;
class Noibat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NOIVERN;
        this.hp = 65;
        this.atk = 4;
        this.speed = 64;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.RAZOR_WIND;
        this.additional = true;
    }
}
exports.Noibat = Noibat;
class Noivern extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 135;
        this.atk = 10;
        this.speed = 64;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.RAZOR_WIND;
        this.additional = true;
    }
}
exports.Noivern = Noivern;
class Shellder extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLOYSTER;
        this.hp = 70;
        this.atk = 5;
        this.speed = 47;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELL_SMASH;
        this.additional = true;
    }
}
exports.Shellder = Shellder;
class Cloyster extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 11;
        this.speed = 47;
        this.def = 16;
        this.speDef = 4;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELL_SMASH;
        this.additional = true;
    }
}
exports.Cloyster = Cloyster;
class Buizel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLOATZEL;
        this.hp = 90;
        this.atk = 8;
        this.speed = 62;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.additional = true;
    }
}
exports.Buizel = Buizel;
class Floatzel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 21;
        this.speed = 62;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.additional = true;
    }
}
exports.Floatzel = Floatzel;
class Ponyta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RAPIDASH;
        this.hp = 90;
        this.atk = 11;
        this.speed = 59;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.FLAME_CHARGE;
        this.additional = true;
    }
}
exports.Ponyta = Ponyta;
class Rapidash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 21;
        this.speed = 59;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.FLAME_CHARGE;
        this.additional = true;
    }
}
exports.Rapidash = Rapidash;
class GalarianPonyta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GALARIAN_RAPIDASH;
        this.hp = 90;
        this.atk = 8;
        this.speed = 59;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PASTEL_VEIL;
        this.regional = true;
        this.additional = true;
    }
}
exports.GalarianPonyta = GalarianPonyta;
class GalarianRapidash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 18;
        this.speed = 59;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PASTEL_VEIL;
        this.regional = true;
        this.additional = true;
    }
}
exports.GalarianRapidash = GalarianRapidash;
class Makuhita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HARIYAMA;
        this.hp = 80;
        this.atk = 8;
        this.speed = 41;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DYNAMIC_PUNCH;
        this.additional = true;
    }
}
exports.Makuhita = Makuhita;
class Hariyama extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 23;
        this.speed = 41;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DYNAMIC_PUNCH;
        this.additional = true;
    }
}
exports.Hariyama = Hariyama;
class Sentret extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FURRET;
        this.hp = 80;
        this.atk = 6;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HELPING_HAND;
        this.additional = true;
    }
}
exports.Sentret = Sentret;
class Furret extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 15;
        this.speed = 54;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HELPING_HAND;
        this.additional = true;
    }
}
exports.Furret = Furret;
class Joltik extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GALVANTULA;
        this.hp = 80;
        this.atk = 7;
        this.speed = 60;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ELECTRO_WEB;
        this.additional = true;
    }
}
exports.Joltik = Joltik;
class Galvantula extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 17;
        this.speed = 60;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ELECTRO_WEB;
        this.additional = true;
    }
}
exports.Galvantula = Galvantula;
class Paras extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PARASECT;
        this.hp = 90;
        this.atk = 7;
        this.speed = 35;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.ABSORB;
        this.additional = true;
    }
}
exports.Paras = Paras;
class Parasect extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 18;
        this.speed = 35;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.ABSORB;
        this.additional = true;
    }
}
exports.Parasect = Parasect;
class Corphish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CRAWDAUNT;
        this.hp = 85;
        this.atk = 6;
        this.speed = 43;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRABHAMMER;
        this.additional = true;
    }
}
exports.Corphish = Corphish;
class Crawdaunt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 16;
        this.speed = 43;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRABHAMMER;
        this.additional = true;
    }
}
exports.Crawdaunt = Crawdaunt;
class Meowth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PERSIAN;
        this.hp = 80;
        this.atk = 7;
        this.speed = 62;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PAYDAY;
        this.additional = true;
    }
}
exports.Meowth = Meowth;
class Persian extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 17;
        this.speed = 62;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PAYDAY;
        this.additional = true;
    }
}
exports.Persian = Persian;
class AlolanMeowth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_PERSIAN;
        this.hp = 80;
        this.atk = 7;
        this.speed = 62;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.PICKUP;
        this.regional = true;
        this.additional = true;
    }
}
exports.AlolanMeowth = AlolanMeowth;
class AlolanPersian extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 17;
        this.speed = 62;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.PICKUP;
        this.regional = true;
        this.additional = true;
    }
}
exports.AlolanPersian = AlolanPersian;
class Hoothoot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NOCTOWL;
        this.hp = 75;
        this.atk = 5;
        this.speed = 47;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPNOSIS;
        this.additional = true;
    }
}
exports.Hoothoot = Hoothoot;
class Noctowl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 10;
        this.speed = 47;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPNOSIS;
        this.additional = true;
    }
}
exports.Noctowl = Noctowl;
class Munchlax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SNORLAX;
        this.hp = 120;
        this.atk = 9;
        this.speed = 35;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BODY_SLAM;
        this.passive = Passive_1.Passive.GLUTTON;
        this.additional = true;
    }
}
exports.Munchlax = Munchlax;
class Snorlax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 300;
        this.atk = 21;
        this.speed = 35;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BODY_SLAM;
        this.passive = Passive_1.Passive.GLUTTON;
        this.additional = true;
    }
}
exports.Snorlax = Snorlax;
class Poipole extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.NAGANADEL;
        this.evolutionRule = new evolution_rules_1.StackBasedEvolutionRule();
        this.stacksRequired = 20;
        this.hp = 160;
        this.atk = 10;
        this.speed = 64;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.FELL_STINGER;
        this.passive = Passive_1.Passive.POIPOLE;
    }
}
exports.Poipole = Poipole;
class Naganadel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.POISON, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 280;
        this.atk = 20;
        this.speed = 64;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.FELL_STINGER;
        this.passive = Passive_1.Passive.NAGANADEL;
    }
    onAcquired(player) {
        this.atk -= 10;
    }
}
exports.Naganadel = Naganadel;
class Growlithe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARCANINE;
        this.hp = 75;
        this.atk = 5;
        this.speed = 55;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRE_FANG;
        this.additional = true;
    }
}
exports.Growlithe = Growlithe;
class Arcanine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 13;
        this.speed = 55;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRE_FANG;
        this.additional = true;
    }
}
exports.Arcanine = Arcanine;
class HisuiGrowlithe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HISUI_ARCANINE;
        this.hp = 75;
        this.atk = 5;
        this.speed = 54;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_EDGE;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GROWLITHE)) &&
            regionSynergies.includes(Synergy_1.Synergy.ROCK));
    }
}
exports.HisuiGrowlithe = HisuiGrowlithe;
class HisuiArcanine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 11;
        this.speed = 54;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_EDGE;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GROWLITHE)) &&
            regionSynergies.includes(Synergy_1.Synergy.ROCK));
    }
}
exports.HisuiArcanine = HisuiArcanine;
class Smoochum extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.JYNX;
        this.hp = 60;
        this.atk = 5;
        this.speed = 61;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.LOVELY_KISS;
        this.additional = true;
    }
}
exports.Smoochum = Smoochum;
class Jynx extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 11;
        this.speed = 61;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.LOVELY_KISS;
        this.additional = true;
    }
}
exports.Jynx = Jynx;
class MimeJr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MR_MIME;
        this.hp = 60;
        this.atk = 5;
        this.speed = 54;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MIMIC;
        this.additional = true;
    }
}
exports.MimeJr = MimeJr;
class MrMime extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 11;
        this.speed = 54;
        this.def = 4;
        this.speDef = 7;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MIMIC;
        this.additional = true;
    }
}
exports.MrMime = MrMime;
class Salandit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SALAZZLE;
        this.hp = 70;
        this.atk = 6;
        this.speed = 63;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_LASH;
        this.additional = true;
    }
}
exports.Salandit = Salandit;
class Salazzle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 14;
        this.speed = 63;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_LASH;
        this.additional = true;
    }
}
exports.Salazzle = Salazzle;
class Venonat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VENOMOTH;
        this.hp = 50;
        this.atk = 6;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.additional = true;
    }
}
exports.Venonat = Venonat;
class Venomoth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 10;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.additional = true;
    }
}
exports.Venomoth = Venomoth;
class Voltorb extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ELECTRODE;
        this.hp = 60;
        this.atk = 7;
        this.speed = 73;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
    }
}
exports.Voltorb = Voltorb;
class Electrode extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 73;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
    }
}
exports.Electrode = Electrode;
class HisuiVoltorb extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HISUI_ELECTRODE;
        this.hp = 60;
        this.atk = 7;
        this.speed = 73;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CHLOROBLAST;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.VOLTORB)) &&
            (regionSynergies.includes(Synergy_1.Synergy.GRASS) ||
                regionSynergies.includes(Synergy_1.Synergy.FOSSIL)));
    }
}
exports.HisuiVoltorb = HisuiVoltorb;
class HisuiElectrode extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 73;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CHLOROBLAST;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.VOLTORB)) &&
            (regionSynergies.includes(Synergy_1.Synergy.GRASS) ||
                regionSynergies.includes(Synergy_1.Synergy.FOSSIL)));
    }
}
exports.HisuiElectrode = HisuiElectrode;
class Slugma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MAGCARGO;
        this.hp = 70;
        this.atk = 7;
        this.speed = 35;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LAVA_PLUME;
        this.additional = true;
    }
}
exports.Slugma = Slugma;
class Magcargo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 16;
        this.speed = 35;
        this.def = 16;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LAVA_PLUME;
        this.additional = true;
    }
}
exports.Magcargo = Magcargo;
class Sneasel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WEAVILE;
        this.hp = 85;
        this.atk = 8;
        this.speed = 65;
        this.def = 2;
        this.speDef = 6;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASHING_CLAW;
        this.additional = true;
    }
}
exports.Sneasel = Sneasel;
class Weavile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 22;
        this.speed = 65;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASHING_CLAW;
        this.additional = true;
    }
}
exports.Weavile = Weavile;
class HisuiSneasel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SNEASLER;
        this.hp = 85;
        this.atk = 8;
        this.speed = 63;
        this.def = 2;
        this.speDef = 6;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIRE_CLAW;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.SNEASEL)) &&
            (regionSynergies.includes(Synergy_1.Synergy.FIGHTING) ||
                regionSynergies.includes(Synergy_1.Synergy.POISON)));
    }
}
exports.HisuiSneasel = HisuiSneasel;
class Sneasler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 19;
        this.speed = 63;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIRE_CLAW;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.SNEASEL)) &&
            (regionSynergies.includes(Synergy_1.Synergy.FIGHTING) ||
                regionSynergies.includes(Synergy_1.Synergy.POISON)));
    }
}
exports.Sneasler = Sneasler;
class Seel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DEWGONG;
        this.hp = 80;
        this.atk = 7;
        this.speed = 47;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AURORA_BEAM;
        this.additional = true;
    }
}
exports.Seel = Seel;
class Dewgong extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 16;
        this.speed = 47;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AURORA_BEAM;
        this.additional = true;
    }
}
exports.Dewgong = Dewgong;
class Croagunk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TOXICROAK;
        this.hp = 75;
        this.atk = 6;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.CROSS_POISON;
        this.additional = true;
    }
}
exports.Croagunk = Croagunk;
class Toxicroak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 13;
        this.speed = 52;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.CROSS_POISON;
        this.additional = true;
    }
}
exports.Toxicroak = Toxicroak;
class Chinchou extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LANTURN;
        this.hp = 60;
        this.atk = 7;
        this.speed = 43;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ELECTRO_BALL;
        this.additional = true;
    }
}
exports.Chinchou = Chinchou;
class Lanturn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 16;
        this.speed = 43;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ELECTRO_BALL;
        this.additional = true;
    }
}
exports.Lanturn = Lanturn;
class Poochyena extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MIGHTYENA;
        this.hp = 80;
        this.atk = 9;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWL;
    }
}
exports.Poochyena = Poochyena;
class Mightyena extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 19;
        this.speed = 47;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWL;
    }
}
exports.Mightyena = Mightyena;
class Bronzor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRONZONG;
        this.hp = 100;
        this.atk = 6;
        this.speed = 36;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFENSE_CURL;
        this.additional = true;
    }
}
exports.Bronzor = Bronzor;
class Bronzong extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 12;
        this.speed = 36;
        this.def = 18;
        this.speDef = 14;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFENSE_CURL;
        this.additional = true;
    }
}
exports.Bronzong = Bronzong;
class Drifloon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRIFBLIM;
        this.hp = 100;
        this.atk = 5;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TAILWIND;
        this.additional = true;
    }
}
exports.Drifloon = Drifloon;
class Drifblim extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 250;
        this.atk = 9;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TAILWIND;
        this.additional = true;
    }
}
exports.Drifblim = Drifblim;
class Shroomish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRELOOM;
        this.hp = 70;
        this.atk = 7;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
    }
}
exports.Shroomish = Shroomish;
class Breloom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
    }
}
exports.Breloom = Breloom;
class Tentacool extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TENTACRUEL;
        this.hp = 65;
        this.atk = 4;
        this.speed = 57;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.TOXIC;
        this.additional = true;
    }
}
exports.Tentacool = Tentacool;
class Tentacruel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 9;
        this.speed = 57;
        this.def = 6;
        this.speDef = 14;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.TOXIC;
        this.additional = true;
    }
}
exports.Tentacruel = Tentacruel;
class Snubull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GRANBULL;
        this.hp = 115;
        this.atk = 13;
        this.speed = 39;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR;
        this.additional = true;
    }
}
exports.Snubull = Snubull;
class Granbull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 265;
        this.atk = 30;
        this.speed = 39;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR;
        this.additional = true;
    }
}
exports.Granbull = Granbull;
class TypeNull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SILVALLY;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([...Item_1.SynergyItems], (pokemon, player, item) => {
            switch (Item_1.SynergyGivenByItem[item]) {
                case Synergy_1.Synergy.BUG:
                    return Pokemon_1.Pkm.SILVALLY_BUG;
                case Synergy_1.Synergy.DARK:
                    return Pokemon_1.Pkm.SILVALLY_DARK;
                case Synergy_1.Synergy.DRAGON:
                case Synergy_1.Synergy.FOSSIL:
                    return Pokemon_1.Pkm.SILVALLY_DRAGON;
                case Synergy_1.Synergy.ELECTRIC:
                    return Pokemon_1.Pkm.SILVALLY_ELECTRIC;
                case Synergy_1.Synergy.FAIRY:
                case Synergy_1.Synergy.AMORPHOUS:
                    return Pokemon_1.Pkm.SILVALLY_FAIRY;
                case Synergy_1.Synergy.FIGHTING:
                case Synergy_1.Synergy.WILD:
                    return Pokemon_1.Pkm.SILVALLY_FIGHTING;
                case Synergy_1.Synergy.FIRE:
                case Synergy_1.Synergy.GOURMET:
                    return Pokemon_1.Pkm.SILVALLY_FIRE;
                case Synergy_1.Synergy.FLYING:
                    return Pokemon_1.Pkm.SILVALLY_FLYING;
                case Synergy_1.Synergy.GHOST:
                    return Pokemon_1.Pkm.SILVALLY_GHOST;
                case Synergy_1.Synergy.GRASS:
                case Synergy_1.Synergy.FLORA:
                    return Pokemon_1.Pkm.SILVALLY_GRASS;
                case Synergy_1.Synergy.GROUND:
                    return Pokemon_1.Pkm.SILVALLY_GROUND;
                case Synergy_1.Synergy.ICE:
                    return Pokemon_1.Pkm.SILVALLY_ICE;
                case Synergy_1.Synergy.POISON:
                case Synergy_1.Synergy.MONSTER:
                    return Pokemon_1.Pkm.SILVALLY_POISON;
                case Synergy_1.Synergy.PSYCHIC:
                    return Pokemon_1.Pkm.SILVALLY_PSYCHIC;
                case Synergy_1.Synergy.ROCK:
                    return Pokemon_1.Pkm.SILVALLY_ROCK;
                case Synergy_1.Synergy.STEEL:
                case Synergy_1.Synergy.ARTIFICIAL:
                    return Pokemon_1.Pkm.SILVALLY_STEEL;
                case Synergy_1.Synergy.WATER:
                case Synergy_1.Synergy.AQUATIC:
                    return Pokemon_1.Pkm.SILVALLY_WATER;
                case Synergy_1.Synergy.FIELD:
                default:
                    return Pokemon_1.Pkm.SILVALLY;
            }
        });
        this.hp = 260;
        this.atk = 20;
        this.speed = 55;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.passive = Passive_1.Passive.TYPE_NULL;
    }
}
exports.TypeNull = TypeNull;
class Silvally extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.speed = 55;
        this.def = 15;
        this.speDef = 15;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MULTI_ATTACK;
        this.passive = Passive_1.Passive.RKS_SYSTEM;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state, true);
        if (y === 0) {
            const itemsToRemove = (0, schemas_1.schemaValues)(this.items).filter((item) => {
                return ((0, array_1.isIn)(Item_1.RemovableItems, item) ||
                    ((state === null || state === void 0 ? void 0 : state.specialGameRule) === SpecialGameRule_1.SpecialGameRule.SLAMINGO &&
                        item !== Item_1.Item.RARE_CANDY) ||
                    (0, array_1.isIn)(Item_1.SynergyItems, item));
            });
            player.items.push(...itemsToRemove);
            this.removeItems(itemsToRemove, player);
        }
    }
}
exports.Silvally = Silvally;
class Applin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.GRASS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.APPLETUN, Pokemon_1.Pkm.FLAPPLE, Pokemon_1.Pkm.DIPPLIN];
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.SWEET_APPLE, Item_1.Item.TART_APPLE, Item_1.Item.SIRUPY_APPLE], (pokemon, player, item_) => {
            const item = item_;
            if (item === Item_1.Item.SWEET_APPLE) {
                return Pokemon_1.Pkm.APPLETUN;
            }
            if (item === Item_1.Item.TART_APPLE) {
                return Pokemon_1.Pkm.FLAPPLE;
            }
            return Pokemon_1.Pkm.DIPPLIN;
        });
        this.hp = 160;
        this.atk = 12;
        this.speed = 31;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.NUTRIENTS;
        this.passive = Passive_1.Passive.APPLIN;
    }
}
exports.Applin = Applin;
class Dipplin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.GRASS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.evolution = Pokemon_1.Pkm.HYDRAPPLE;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.SIRUPY_APPLE]);
        this.stars = 3;
        this.hp = 180;
        this.atk = 14;
        this.speed = 31;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 60;
        this.range = 3;
        this.skill = Ability_1.Ability.SYRUP_BOMB;
        this.passive = Passive_1.Passive.DIPPLIN;
    }
    onAcquired() {
        this.dishes.delete(Item_1.Item.SIRUPY_APPLE);
        this.items.delete(Item_1.Item.SIRUPY_APPLE);
    }
}
exports.Dipplin = Dipplin;
class Appletun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.GRASS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 15;
        this.speed = 31;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.APPLE_ACID;
    }
    onAcquired() {
        this.dishes.delete(Item_1.Item.SWEET_APPLE);
        this.items.delete(Item_1.Item.SWEET_APPLE);
    }
}
exports.Appletun = Appletun;
class Flapple extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.GRASS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 50;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.GRAV_APPLE;
    }
    onAcquired() {
        this.dishes.delete(Item_1.Item.TART_APPLE);
        this.items.delete(Item_1.Item.TART_APPLE);
    }
}
exports.Flapple = Flapple;
class Hydrapple extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.GRASS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 170;
        this.atk = 21;
        this.speed = 31;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FICKLE_BEAM;
    }
    onAcquired() {
        this.dishes.delete(Item_1.Item.SIRUPY_APPLE);
        this.items.delete(Item_1.Item.SIRUPY_APPLE);
    }
}
exports.Hydrapple = Hydrapple;
class Staryu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STARMIE;
        this.hp = 80;
        this.atk = 6;
        this.speed = 62;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYBEAM;
        this.additional = true;
    }
}
exports.Staryu = Staryu;
class Starmie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 17;
        this.speed = 62;
        this.def = 8;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYBEAM;
        this.additional = true;
    }
}
exports.Starmie = Starmie;
class Vulpix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NINETALES;
        this.hp = 75;
        this.atk = 6;
        this.speed = 57;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_SPIN;
        this.additional = true;
    }
}
exports.Vulpix = Vulpix;
class Ninetales extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.speed = 57;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_SPIN;
        this.additional = true;
    }
}
exports.Ninetales = Ninetales;
class AlolanVulpix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_NINETALES;
        this.hp = 75;
        this.atk = 6;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AURORA_VEIL;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.VULPIX)) &&
            (regionSynergies.includes(Synergy_1.Synergy.ICE) ||
                regionSynergies.includes(Synergy_1.Synergy.FAIRY)));
    }
}
exports.AlolanVulpix = AlolanVulpix;
class AlolanNinetales extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 17;
        this.speed = 60;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AURORA_VEIL;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.VULPIX)) &&
            (regionSynergies.includes(Synergy_1.Synergy.ICE) ||
                regionSynergies.includes(Synergy_1.Synergy.FAIRY)));
    }
}
exports.AlolanNinetales = AlolanNinetales;
class Snom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FROSMOTH;
        this.hp = 70;
        this.atk = 8;
        this.speed = 46;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.POWDER_SNOW;
        this.additional = true;
    }
}
exports.Snom = Snom;
class Frosmoth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.speed = 46;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.POWDER_SNOW;
        this.additional = true;
    }
}
exports.Frosmoth = Frosmoth;
class Wailmer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WAILORD;
        this.hp = 180;
        this.atk = 6;
        this.speed = 44;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIVE;
        this.additional = true;
    }
}
exports.Wailmer = Wailmer;
class Wailord extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 400;
        this.atk = 11;
        this.speed = 44;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIVE;
        this.additional = true;
    }
}
exports.Wailord = Wailord;
class Dreepy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRAKLOAK;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 90;
        this.atk = 5;
        this.speed = 71;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRAGON_DARTS;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Dreepy = Dreepy;
class Drakloak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DRAGAPULT;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 140;
        this.atk = 12;
        this.speed = 71;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRAGON_DARTS;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Drakloak = Drakloak;
class Dragapult extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 21;
        this.speed = 71;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRAGON_DARTS;
    }
}
exports.Dragapult = Dragapult;
class Snivy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SERVINE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 90;
        this.atk = 4;
        this.speed = 61;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Snivy = Snivy;
class Servine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SERPERIOR;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 160;
        this.atk = 11;
        this.speed = 61;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Servine = Servine;
class Serperior extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 240;
        this.atk = 21;
        this.speed = 61;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
    }
}
exports.Serperior = Serperior;
class Starly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STARAVIA;
        this.hp = 65;
        this.atk = 5;
        this.speed = 57;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BRAVE_BIRD;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 1;
    }
}
exports.Starly = Starly;
class Staravia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.STARAPTOR;
        this.hp = 120;
        this.atk = 9;
        this.speed = 57;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BRAVE_BIRD;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 1;
    }
}
exports.Staravia = Staravia;
class Staraptor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 19;
        this.speed = 57;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BRAVE_BIRD;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 1;
    }
}
exports.Staraptor = Staraptor;
class Scorbunny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RABOOT;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 75;
        this.atk = 5;
        this.speed = 63;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 2;
        this.skill = Ability_1.Ability.PYRO_BALL;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Scorbunny = Scorbunny;
class Raboot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CINDERACE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 130;
        this.atk = 10;
        this.speed = 63;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 50;
        this.range = 2;
        this.skill = Ability_1.Ability.PYRO_BALL;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Raboot = Raboot;
class Cinderace extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 17;
        this.speed = 63;
        this.def = 9;
        this.speDef = 9;
        this.maxPP = 50;
        this.range = 2;
        this.skill = Ability_1.Ability.PYRO_BALL;
    }
}
exports.Cinderace = Cinderace;
class AlolanGeodude extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_GRAVELER;
        this.hp = 70;
        this.atk = 4;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.ELECTRIC);
    }
}
exports.AlolanGeodude = AlolanGeodude;
class AlolanGraveler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ALOLAN_GOLEM;
        this.hp = 120;
        this.atk = 10;
        this.speed = 39;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.ELECTRIC);
    }
}
exports.AlolanGraveler = AlolanGraveler;
class AlolanGolem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.speed = 39;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.ELECTRIC);
    }
}
exports.AlolanGolem = AlolanGolem;
class Popplio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRIONNE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 65;
        this.atk = 5;
        this.speed = 44;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SPARKLING_ARIA;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Popplio = Popplio;
class Brionne extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PRIMARINA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 130;
        this.atk = 10;
        this.speed = 44;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SPARKLING_ARIA;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Brionne = Brionne;
class Primarina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 20;
        this.speed = 44;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SPARKLING_ARIA;
    }
}
exports.Primarina = Primarina;
class Gothita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOTHORITA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 70;
        this.atk = 5;
        this.speed = 46;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FAKE_TEARS;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Gothita = Gothita;
class Gothorita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GOTHITELLE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 120;
        this.atk = 12;
        this.speed = 46;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FAKE_TEARS;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Gothorita = Gothorita;
class Gothitelle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 20;
        this.speed = 46;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FAKE_TEARS;
    }
}
exports.Gothitelle = Gothitelle;
class Sandshrew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SANDSLASH;
        this.hp = 90;
        this.atk = 5;
        this.speed = 46;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROLLOUT;
        this.additional = true;
    }
}
exports.Sandshrew = Sandshrew;
class Sandslash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 13;
        this.speed = 46;
        this.def = 10;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROLLOUT;
        this.additional = true;
    }
}
exports.Sandslash = Sandslash;
class AlolanSandshrew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_SANDSLASH;
        this.hp = 90;
        this.atk = 5;
        this.speed = 46;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
        this.additional = true;
        this.regional = true;
    }
}
exports.AlolanSandshrew = AlolanSandshrew;
class AlolanSandslash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 13;
        this.speed = 46;
        this.def = 10;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
        this.additional = true;
        this.regional = true;
    }
}
exports.AlolanSandslash = AlolanSandslash;
class Nosepass extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PROBOPASS;
        this.hp = 70;
        this.atk = 5;
        this.speed = 38;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_RISE;
        this.additional = true;
    }
}
exports.Nosepass = Nosepass;
class Probopass extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 11;
        this.speed = 38;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_RISE;
        this.additional = true;
    }
}
exports.Probopass = Probopass;
class Woobat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SWOOBAT;
        this.hp = 60;
        this.atk = 4;
        this.speed = 62;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.ATTRACT;
        this.additional = true;
    }
}
exports.Woobat = Woobat;
class Swoobat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 10;
        this.speed = 62;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.ATTRACT;
        this.additional = true;
    }
}
exports.Swoobat = Swoobat;
class Pineco extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FORRETRESS;
        this.hp = 75;
        this.atk = 5;
        this.speed = 38;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
    }
}
exports.Pineco = Pineco;
class Forretress extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 200;
        this.atk = 9;
        this.speed = 38;
        this.def = 14;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
    }
}
exports.Forretress = Forretress;
class UnownA extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_A;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownA = UnownA;
class UnownB extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_B;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownB = UnownB;
class UnownC extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_C;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownC = UnownC;
class UnownD extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_D;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownD = UnownD;
class UnownE extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_E;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownE = UnownE;
class UnownF extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_F;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownF = UnownF;
class UnownG extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_G;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownG = UnownG;
class UnownH extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_H;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownH = UnownH;
class UnownI extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_I;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownI = UnownI;
class UnownJ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_J;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownJ = UnownJ;
class UnownK extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_K;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownK = UnownK;
class UnownL extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_L;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownL = UnownL;
class UnownM extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_M;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownM = UnownM;
class UnownN extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_N;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownN = UnownN;
class UnownO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_O;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownO = UnownO;
class UnownP extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_P;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownP = UnownP;
class UnownQ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 200;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_Q;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownQ = UnownQ;
class UnownR extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_R;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownR = UnownR;
class UnownS extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_S;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownS = UnownS;
class UnownT extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_T;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownT = UnownT;
class UnownU extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_U;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownU = UnownU;
class UnownV extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_V;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownV = UnownV;
class UnownW extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_W;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownW = UnownW;
class UnownX extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_X;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownX = UnownX;
class UnownY extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_Y;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownY = UnownY;
class UnownZ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_Z;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownZ = UnownZ;
class UnownQuestion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_QM;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownQuestion = UnownQuestion;
class UnownExclamation extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.speed = 40;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_EM;
        this.passive = Passive_1.Passive.UNOWN;
        this.canHoldItems = false;
    }
}
exports.UnownExclamation = UnownExclamation;
class Diglett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DUGTRIO;
        this.hp = 75;
        this.atk = 5;
        this.speed = 63;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.additional = true;
    }
}
exports.Diglett = Diglett;
class Dugtrio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 12;
        this.speed = 63;
        this.def = 10;
        this.speDef = 8;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.additional = true;
    }
}
exports.Dugtrio = Dugtrio;
class Wiglett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WUGTRIO;
        this.hp = 80;
        this.atk = 5;
        this.speed = 55;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TRIPLE_DIVE;
        this.additional = true;
    }
}
exports.Wiglett = Wiglett;
class Wugtrio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 165;
        this.atk = 12;
        this.speed = 55;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TRIPLE_DIVE;
        this.additional = true;
    }
}
exports.Wugtrio = Wugtrio;
class AlolanDiglett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_DUGTRIO;
        this.hp = 70;
        this.atk = 7;
        this.speed = 60;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.DIGLETT)) &&
            regionSynergies.includes(Synergy_1.Synergy.STEEL));
    }
}
exports.AlolanDiglett = AlolanDiglett;
class AlolanDugtrio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 16;
        this.speed = 60;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.DIGLETT)) &&
            regionSynergies.includes(Synergy_1.Synergy.STEEL));
    }
}
exports.AlolanDugtrio = AlolanDugtrio;
class Rowlet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DARTIX;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 70;
        this.atk = 5;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SPIRIT_SHACKLE;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Rowlet = Rowlet;
class Dartix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DECIDUEYE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 130;
        this.atk = 9;
        this.speed = 47;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SPIRIT_SHACKLE;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Dartix = Dartix;
class Decidueye extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 18;
        this.speed = 47;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SPIRIT_SHACKLE;
    }
}
exports.Decidueye = Decidueye;
class Zorua extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ZOROARK;
        this.hp = 70;
        this.atk = 7;
        this.speed = 59;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.additional = true;
    }
}
exports.Zorua = Zorua;
class Zoroark extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 16;
        this.speed = 59;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.additional = true;
    }
}
exports.Zoroark = Zoroark;
class HisuiZorua extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HISUI_ZOROARK;
        this.hp = 70;
        this.atk = 7;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.ZORUA)) &&
            regionSynergies.includes(Synergy_1.Synergy.GHOST));
    }
}
exports.HisuiZorua = HisuiZorua;
class HisuiZoroark extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 16;
        this.speed = 60;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.ZORUA)) &&
            regionSynergies.includes(Synergy_1.Synergy.GHOST));
    }
}
exports.HisuiZoroark = HisuiZoroark;
class Grimer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MUK;
        this.hp = 80;
        this.atk = 4;
        this.speed = 41;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.additional = true;
    }
}
exports.Grimer = Grimer;
class Muk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 9;
        this.speed = 41;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.additional = true;
    }
}
exports.Muk = Muk;
class AlolanGrimer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_MUK;
        this.hp = 70;
        this.atk = 6;
        this.speed = 41;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GRIMER)) &&
            regionSynergies.includes(Synergy_1.Synergy.DARK));
    }
}
exports.AlolanGrimer = AlolanGrimer;
class AlolanMuk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 41;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GRIMER)) &&
            regionSynergies.includes(Synergy_1.Synergy.DARK));
    }
}
exports.AlolanMuk = AlolanMuk;
class Ekans extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARBOK;
        this.hp = 60;
        this.atk = 8;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.additional = true;
    }
}
exports.Ekans = Ekans;
class Arbok extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 17;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.additional = true;
    }
}
exports.Arbok = Arbok;
class Carvanha extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SHARPEDO;
        this.hp = 85;
        this.atk = 11;
        this.speed = 55;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
        this.additional = true;
    }
}
exports.Carvanha = Carvanha;
class Sharpedo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 26;
        this.speed = 55;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
        this.additional = true;
    }
}
exports.Sharpedo = Sharpedo;
class Froakie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FROGADIER;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 80;
        this.atk = 6;
        this.speed = 64;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.WATER_SHURIKEN;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Froakie = Froakie;
class Frogadier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GRENINJA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 140;
        this.atk = 12;
        this.speed = 64;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.WATER_SHURIKEN;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Frogadier = Frogadier;
class Greninja extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 200;
        this.atk = 19;
        this.speed = 64;
        this.def = 8;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.WATER_SHURIKEN;
    }
}
exports.Greninja = Greninja;
class Chingling extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CHIMECHO;
        this.evolutionRule = new evolution_rules_1.StackBasedEvolutionRule();
        this.stacksRequired = 30;
        this.hp = 150;
        this.atk = 10;
        this.speed = 46;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.ECHO;
        this.passive = Passive_1.Passive.CHINGLING;
    }
}
exports.Chingling = Chingling;
class Chimecho extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 46;
        this.def = 8;
        this.speDef = 9;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.ECHO;
        this.passive = Passive_1.Passive.CHIMECHO;
    }
}
exports.Chimecho = Chimecho;
class Tyrogue extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 11;
        this.speed = 36;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MACH_PUNCH;
        this.passive = Passive_1.Passive.TYROGUE;
        this.evolutions = [Pokemon_1.Pkm.HITMONTOP, Pokemon_1.Pkm.HITMONLEE, Pokemon_1.Pkm.HITMONCHAN];
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([...Item_1.CraftableItems, ...Item_1.ItemComponents], (pokemon, player, item_) => {
            const item = item_;
            if (item === Item_1.Item.CHARCOAL ||
                item === Item_1.Item.MAGNET ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.CHARCOAL)) ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.MAGNET))) {
                return Pokemon_1.Pkm.HITMONLEE;
            }
            if (item === Item_1.Item.HEART_SCALE ||
                item === Item_1.Item.NEVER_MELT_ICE ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.HEART_SCALE)) ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.NEVER_MELT_ICE))) {
                return Pokemon_1.Pkm.HITMONCHAN;
            }
            return Pokemon_1.Pkm.HITMONTOP;
        });
    }
}
exports.Tyrogue = Tyrogue;
class Hitmontop extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.speed = 45;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TRIPLE_KICK;
    }
}
exports.Hitmontop = Hitmontop;
class Hitmonlee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 24;
        this.speed = 56;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAWASHI_GERI;
    }
}
exports.Hitmonlee = Hitmonlee;
class Hitmonchan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.speed = 49;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MEGA_PUNCH;
    }
}
exports.Hitmonchan = Hitmonchan;
class Mimikyu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 14;
        this.speed = 56;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_SNEAK;
        this.passive = Passive_1.Passive.MIMIKYU;
    }
}
exports.Mimikyu = Mimikyu;
class MimikyuBusted extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 24;
        this.speed = 56;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_SNEAK;
        this.passive = Passive_1.Passive.MIMIKYU_BUSTED;
    }
}
exports.MimikyuBusted = MimikyuBusted;
class Bonsley extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SUDOWOODO;
        this.hp = 125;
        this.atk = 9;
        this.speed = 35;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WOOD_HAMMER;
        this.passive = Passive_1.Passive.SUDOWOODO;
        this.additional = true;
    }
}
exports.Bonsley = Bonsley;
class Sudowoodo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 22;
        this.speed = 35;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WOOD_HAMMER;
        this.passive = Passive_1.Passive.SUDOWOODO;
        this.additional = true;
    }
}
exports.Sudowoodo = Sudowoodo;
class Combee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VESPIQUEEN;
        this.hp = 80;
        this.atk = 10;
        this.speed = 38;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_ORDER;
        this.additional = true;
    }
}
exports.Combee = Combee;
class Vespiqueen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 20;
        this.speed = 38;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_ORDER;
        this.additional = true;
    }
}
exports.Vespiqueen = Vespiqueen;
class Shuckle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 5;
        this.speed = 27;
        this.def = 40;
        this.speDef = 40;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.BIDE;
    }
}
exports.Shuckle = Shuckle;
class Tepig extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PIGNITE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 75;
        this.atk = 7;
        this.speed = 46;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAT_CRASH;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Tepig = Tepig;
class Pignite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.EMBOAR;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 150;
        this.atk = 12;
        this.speed = 46;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAT_CRASH;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Pignite = Pignite;
class Emboar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 230;
        this.atk = 20;
        this.speed = 46;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAT_CRASH;
    }
}
exports.Emboar = Emboar;
class Wurmple extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.hp = 110;
        this.atk = 12;
        this.speed = 31;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ENTANGLING_THREAD;
        this.evolutions = [Pokemon_1.Pkm.SILCOON, Pokemon_1.Pkm.CASCOON];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.CASCOON))
                return Pokemon_1.Pkm.CASCOON;
            else
                return Pokemon_1.Pkm.SILCOON;
        });
    }
}
exports.Wurmple = Wurmple;
class Silcoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BEAUTIFLY;
        this.hp = 200;
        this.atk = 23;
        this.speed = 20;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKY_SHIELD;
    }
}
exports.Silcoon = Silcoon;
class Beautifly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 250;
        this.atk = 35;
        this.speed = 42;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SILVER_WIND;
    }
}
exports.Beautifly = Beautifly;
class Cascoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DUSTOX;
        this.hp = 200;
        this.atk = 23;
        this.speed = 20;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKY_SHIELD;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.Cascoon = Cascoon;
class Dustox extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 250;
        this.atk = 35;
        this.speed = 42;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_POWDER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.Dustox = Dustox;
class Tinkatink extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TINKATUFF;
        this.hp = 100;
        this.atk = 10;
        this.speed = 55;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.GIGATON_HAMMER;
    }
}
exports.Tinkatink = Tinkatink;
class Tinkatuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TINKATON;
        this.hp = 200;
        this.atk = 20;
        this.speed = 55;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.GIGATON_HAMMER;
    }
}
exports.Tinkatuff = Tinkatuff;
class Tinkaton extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 300;
        this.atk = 40;
        this.speed = 55;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.GIGATON_HAMMER;
    }
}
exports.Tinkaton = Tinkaton;
class Maractus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 175;
        this.atk = 16;
        this.speed = 44;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKY_SHIELD;
    }
}
exports.Maractus = Maractus;
class Plusle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 140;
        this.atk = 12;
        this.speed = 61;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.LINK_CABLE;
    }
}
exports.Plusle = Plusle;
class Minun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 140;
        this.atk = 12;
        this.speed = 61;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.LINK_CABLE;
    }
}
exports.Minun = Minun;
class Spectrier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 280;
        this.atk = 25;
        this.speed = 67;
        this.def = 10;
        this.speDef = 20;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ASTRAL_BARRAGE;
        this.passive = Passive_1.Passive.GRIM_NEIGH;
    }
}
exports.Spectrier = Spectrier;
class Glastrier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 280;
        this.atk = 30;
        this.speed = 22;
        this.def = 20;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GLACIAL_LANCE;
        this.passive = Passive_1.Passive.CHILLING_NEIGH;
    }
}
exports.Glastrier = Glastrier;
class Kartana extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 35;
        this.speed = 60;
        this.def = 20;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
        this.passive = Passive_1.Passive.BEAST_BOOST_ATK;
    }
}
exports.Kartana = Kartana;
class Dhelmise extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 19;
        this.speed = 38;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ANCHOR_SHOT;
    }
}
exports.Dhelmise = Dhelmise;
class Tropius extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.speed = 41;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWTH;
    }
}
exports.Tropius = Tropius;
class Carnivine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FLORA
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 21;
        this.speed = 29;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWER_WHIP;
    }
}
exports.Carnivine = Carnivine;
class Sableye extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.RED_ORB]);
        this.evolution = Pokemon_1.Pkm.MEGA_SABLEYE;
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 13;
        this.speed = 41;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KNOCK_OFF;
        this.passive = Passive_1.Passive.SABLEYE;
    }
}
exports.Sableye = Sableye;
class MegaSableye extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 200;
        this.atk = 13;
        this.speed = 31;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KNOCK_OFF;
        this.passive = Passive_1.Passive.MEGA_SABLEYE;
    }
}
exports.MegaSableye = MegaSableye;
class Koffing extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.WEEZING, Pokemon_1.Pkm.GALARIAN_WEEZING];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.GALARIAN_WEEZING))
                return Pokemon_1.Pkm.GALARIAN_WEEZING;
            else
                return Pokemon_1.Pkm.WEEZING;
        });
        this.hp = 65;
        this.atk = 5;
        this.speed = 44;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SMOG;
        this.additional = true;
    }
}
exports.Koffing = Koffing;
class Weezing extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 155;
        this.atk = 10;
        this.speed = 44;
        this.def = 12;
        this.speDef = 7;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SMOG;
        this.additional = true;
    }
}
exports.Weezing = Weezing;
class GalarianWeezing extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.FAIRY
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 155;
        this.atk = 10;
        this.speed = 44;
        this.def = 12;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STRANGE_STEAM;
        this.additional = true;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.FAIRY);
    }
}
exports.GalarianWeezing = GalarianWeezing;
class Clauncher extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLAWITZER;
        this.hp = 80;
        this.atk = 7;
        this.speed = 44;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 180;
        this.range = 4;
        this.skill = Ability_1.Ability.WATER_PULSE;
        this.passive = Passive_1.Passive.MEGA_LAUNCHER;
        this.additional = true;
    }
}
exports.Clauncher = Clauncher;
class Clawitzer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 19;
        this.speed = 44;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 180;
        this.range = 4;
        this.skill = Ability_1.Ability.WATER_PULSE;
        this.passive = Passive_1.Passive.MEGA_LAUNCHER;
        this.additional = true;
    }
}
exports.Clawitzer = Clawitzer;
class Yanma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.YANMEGA;
        this.hp = 70;
        this.atk = 8;
        this.speed = 55;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.AERIAL_ACE;
        this.passive = Passive_1.Passive.CLEAR_WING;
        this.additional = true;
    }
}
exports.Yanma = Yanma;
class Yanmega extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 15;
        this.speed = 55;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.AERIAL_ACE;
        this.passive = Passive_1.Passive.CLEAR_WING;
        this.additional = true;
    }
}
exports.Yanmega = Yanmega;
class Helioptile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HELIOLISK;
        this.hp = 75;
        this.atk = 7;
        this.speed = 60;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.PARABOLIC_CHARGE;
        this.passive = Passive_1.Passive.DRY_SKIN;
        this.additional = true;
    }
}
exports.Helioptile = Helioptile;
class Heliolisk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 170;
        this.atk = 17;
        this.speed = 60;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.PARABOLIC_CHARGE;
        this.passive = Passive_1.Passive.DRY_SKIN;
        this.additional = true;
    }
}
exports.Heliolisk = Heliolisk;
class Exeggcute extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.EXEGGUTOR, Pokemon_1.Pkm.ALOLAN_EXEGGUTOR];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.ALOLAN_EXEGGUTOR))
                return Pokemon_1.Pkm.ALOLAN_EXEGGUTOR;
            else
                return Pokemon_1.Pkm.EXEGGUTOR;
        });
        this.hp = 110;
        this.atk = 9;
        this.speed = 38;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.EGG_BOMB;
        this.additional = true;
    }
}
exports.Exeggcute = Exeggcute;
class Exeggutor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 300;
        this.atk = 22;
        this.speed = 38;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EGG_BOMB;
        this.additional = true;
    }
}
exports.Exeggutor = Exeggutor;
class AlolanExeggutor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLORA,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 350;
        this.atk = 26;
        this.speed = 38;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EGG_BOMB;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.EXEGGCUTE)) &&
            regionSynergies.includes(Synergy_1.Synergy.DRAGON));
    }
}
exports.AlolanExeggutor = AlolanExeggutor;
class Bidoof extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BIBAREL;
        this.hp = 70;
        this.atk = 7;
        this.speed = 48;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SUPER_FANG;
        this.additional = true;
    }
}
exports.Bidoof = Bidoof;
class Bibarel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 16;
        this.speed = 48;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SUPER_FANG;
        this.additional = true;
    }
}
exports.Bibarel = Bibarel;
class Spinda extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TEETER_DANCE;
        this.passive = Passive_1.Passive.SPOT_PANDA;
    }
}
exports.Spinda = Spinda;
class Baltoy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLAYDOL;
        this.hp = 80;
        this.atk = 8;
        this.speed = 49;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.CONFUSION;
        this.additional = true;
    }
}
exports.Baltoy = Baltoy;
class Claydol extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 15;
        this.speed = 49;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.CONFUSION;
        this.additional = true;
    }
}
exports.Claydol = Claydol;
class Purrloin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LIEPARD;
        this.hp = 70;
        this.atk = 7;
        this.speed = 59;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FAKE_OUT;
        this.additional = true;
    }
}
exports.Purrloin = Purrloin;
class Liepard extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 19;
        this.speed = 59;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FAKE_OUT;
        this.additional = true;
    }
}
exports.Liepard = Liepard;
class Pancham extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PANGORO;
        this.hp = 80;
        this.atk = 8;
        this.speed = 42;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ARM_THRUST;
        this.passive = Passive_1.Passive.PARTING_SHOT;
        this.additional = true;
    }
}
exports.Pancham = Pancham;
class Pangoro extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 210;
        this.atk = 22;
        this.speed = 42;
        this.def = 8;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ARM_THRUST;
        this.passive = Passive_1.Passive.PARTING_SHOT;
        this.additional = true;
    }
}
exports.Pangoro = Pangoro;
class Barboach extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WHISCASH;
        this.hp = 120;
        this.atk = 9;
        this.speed = 44;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FISSURE;
        this.passive = Passive_1.Passive.AQUA_VEIL;
        this.additional = true;
    }
}
exports.Barboach = Barboach;
class Whiscash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 22;
        this.speed = 44;
        this.def = 8;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FISSURE;
        this.passive = Passive_1.Passive.AQUA_VEIL;
        this.additional = true;
    }
}
exports.Whiscash = Whiscash;
class Scraggy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SCRAFTY;
        this.hp = 70;
        this.atk = 8;
        this.speed = 44;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ASSURANCE;
        this.passive = Passive_1.Passive.MOXIE;
        this.additional = true;
    }
}
exports.Scraggy = Scraggy;
class Scrafty extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 18;
        this.speed = 44;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ASSURANCE;
        this.passive = Passive_1.Passive.MOXIE;
        this.additional = true;
    }
}
exports.Scrafty = Scrafty;
class Finneon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LUMINEON;
        this.hp = 80;
        this.atk = 6;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.AQUA_RING;
        this.additional = true;
    }
}
exports.Finneon = Finneon;
class Lumineon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 17;
        this.speed = 54;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.AQUA_RING;
        this.additional = true;
    }
}
exports.Lumineon = Lumineon;
class Stunky extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SKUNTANK;
        this.hp = 125;
        this.atk = 9;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_GAS;
        this.passive = Passive_1.Passive.STENCH;
        this.additional = true;
    }
}
exports.Stunky = Stunky;
class Skuntank extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 280;
        this.atk = 21;
        this.speed = 52;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_GAS;
        this.passive = Passive_1.Passive.STENCH;
        this.additional = true;
    }
}
exports.Skuntank = Skuntank;
class Illumise extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 130;
        this.atk = 12;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STRUGGLE_BUG;
        this.passive = Passive_1.Passive.ILLUMISE_VOLBEAT;
    }
}
exports.Illumise = Illumise;
class Volbeat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 130;
        this.atk = 12;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.TAIL_GLOW;
        this.passive = Passive_1.Passive.ILLUMISE_VOLBEAT;
    }
}
exports.Volbeat = Volbeat;
class Necrozma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 29;
        this.speed = 50;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.PRISMATIC_LASER;
        this.passive = Passive_1.Passive.PRISM;
    }
    onChangePosition(x, y, player, state) {
        var _a;
        super.onChangePosition(x, y, player, state);
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if ((x === player.lightX && y === player.lightY && hasLight) ||
            this.items.has(Item_1.Item.SHINY_STONE)) {
            player.transformPokemon(this, Pokemon_1.Pkm.ULTRA_NECROZMA);
        }
    }
    onItemGiven(item, player) {
        if (item === Item_1.Item.SHINY_STONE) {
            player.transformPokemon(this, Pokemon_1.Pkm.ULTRA_NECROZMA);
        }
    }
}
exports.Necrozma = Necrozma;
class UltraNecrozma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 300;
        this.atk = 29;
        this.speed = 50;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.PRISMATIC_LASER;
        this.passive = Passive_1.Passive.PRISM;
    }
    onChangePosition(x, y, player, state) {
        var _a;
        super.onChangePosition(x, y, player, state);
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if ((x !== player.lightX || y !== player.lightY || !hasLight) &&
            !this.items.has(Item_1.Item.SHINY_STONE)) {
            player.transformPokemon(this, Pokemon_1.Pkm.NECROZMA);
        }
    }
}
exports.UltraNecrozma = UltraNecrozma;
class Cherubi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLORA,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.CHERRIM, Pokemon_1.Pkm.CHERRIM_SUNLIGHT];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            var _a;
            const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
                config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
            if (pokemon.positionX === player.lightX &&
                pokemon.positionY === player.lightY &&
                hasLight) {
                return Pokemon_1.Pkm.CHERRIM_SUNLIGHT;
            }
            return Pokemon_1.Pkm.CHERRIM;
        });
        this.hp = 90;
        this.atk = 6;
        this.speed = 52;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 65;
        this.range = 3;
        this.skill = Ability_1.Ability.NATURAL_GIFT;
        this.regional = true;
    }
}
exports.Cherubi = Cherubi;
class Cherrim extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLORA,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 15;
        this.speed = 52;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 65;
        this.range = 3;
        this.skill = Ability_1.Ability.NATURAL_GIFT;
        this.passive = Passive_1.Passive.BLOSSOM;
        this.regional = true;
    }
    onChangePosition(x, y, player, state) {
        var _a;
        super.onChangePosition(x, y, player, state);
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if ((x === player.lightX && y === player.lightY && hasLight) ||
            this.items.has(Item_1.Item.SHINY_STONE)) {
            player.transformPokemon(this, Pokemon_1.Pkm.CHERRIM_SUNLIGHT);
        }
    }
    onItemGiven(item, player) {
        if (item === Item_1.Item.SHINY_STONE) {
            player.transformPokemon(this, Pokemon_1.Pkm.CHERRIM_SUNLIGHT);
        }
    }
}
exports.Cherrim = Cherrim;
class CherrimSunlight extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLORA,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.speed = 52;
        this.def = 6;
        this.speDef = 9;
        this.maxPP = 65;
        this.range = 3;
        this.skill = Ability_1.Ability.NATURAL_GIFT;
        this.passive = Passive_1.Passive.BLOSSOM;
        this.regional = true;
    }
    onChangePosition(x, y, player, state) {
        var _a;
        super.onChangePosition(x, y, player, state);
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if ((x !== player.lightX || y !== player.lightY || !hasLight) &&
            !this.items.has(Item_1.Item.SHINY_STONE)) {
            player.transformPokemon(this, Pokemon_1.Pkm.CHERRIM);
        }
    }
}
exports.CherrimSunlight = CherrimSunlight;
class Misdreavus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MISMAGIUS;
        this.hp = 80;
        this.atk = 6;
        this.speed = 59;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.NIGHT_SHADE;
        this.additional = true;
    }
}
exports.Misdreavus = Misdreavus;
class Mismagius extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 18;
        this.speed = 59;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.NIGHT_SHADE;
        this.additional = true;
    }
}
exports.Mismagius = Mismagius;
class Doduo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DODRIO;
        this.hp = 90;
        this.atk = 10;
        this.speed = 60;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.DRILL_PECK;
        this.regional = true;
    }
}
exports.Doduo = Doduo;
class Dodrio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 185;
        this.atk = 24;
        this.speed = 60;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.DRILL_PECK;
        this.regional = true;
    }
}
exports.Dodrio = Dodrio;
class Kricketot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KRICKETUNE;
        this.hp = 80;
        this.atk = 7;
        this.speed = 46;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SCREECH;
        this.additional = true;
    }
}
exports.Kricketot = Kricketot;
class Kricketune extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 18;
        this.speed = 46;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SCREECH;
        this.additional = true;
    }
}
exports.Kricketune = Kricketune;
class Hippopotas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HIPPODOWN;
        this.hp = 120;
        this.atk = 11;
        this.speed = 40;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SAND_TOMB;
        this.additional = true;
        this.passive = Passive_1.Passive.SAND_STREAM;
    }
}
exports.Hippopotas = Hippopotas;
class Hippodown extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 270;
        this.atk = 23;
        this.speed = 40;
        this.def = 14;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SAND_TOMB;
        this.additional = true;
        this.passive = Passive_1.Passive.SAND_STREAM;
    }
}
exports.Hippodown = Hippodown;
class Ducklett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SWANNA;
        this.hp = 105;
        this.atk = 11;
        this.speed = 56;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FEATHER_DANCE;
        this.additional = true;
    }
}
exports.Ducklett = Ducklett;
class Swanna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 210;
        this.atk = 21;
        this.speed = 56;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FEATHER_DANCE;
        this.additional = true;
    }
}
exports.Swanna = Swanna;
class Wingull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PELIPPER;
        this.hp = 90;
        this.atk = 10;
        this.speed = 46;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLWIND;
        this.additional = true;
        this.passive = Passive_1.Passive.DRIZZLE;
    }
}
exports.Wingull = Wingull;
class Pelipper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 24;
        this.speed = 46;
        this.def = 14;
        this.speDef = 8;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLWIND;
        this.additional = true;
        this.passive = Passive_1.Passive.DRIZZLE;
    }
}
exports.Pelipper = Pelipper;
class Murkrow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HONCHKROW;
        this.hp = 110;
        this.atk = 9;
        this.speed = 48;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.BAD_LUCK;
        this.additional = true;
    }
}
exports.Murkrow = Murkrow;
class Honchkrow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 23;
        this.speed = 48;
        this.def = 16;
        this.speDef = 10;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.BAD_LUCK;
        this.additional = true;
    }
}
exports.Honchkrow = Honchkrow;
class Zigzagoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LINOONE;
        this.hp = 80;
        this.atk = 7;
        this.speed = 57;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASH;
        this.passive = Passive_1.Passive.PICKUP;
    }
}
exports.Zigzagoon = Zigzagoon;
class Linoone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 19;
        this.speed = 57;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASH;
        this.passive = Passive_1.Passive.PICKUP;
    }
}
exports.Linoone = Linoone;
class GalarianZigzagoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GALARIAN_LINOONE;
        this.hp = 80;
        this.atk = 6;
        this.speed = 55;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASH;
        this.regional = true;
    }
}
exports.GalarianZigzagoon = GalarianZigzagoon;
class GalarianLinoone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.OBSTAGOON;
        this.hp = 170;
        this.atk = 16;
        this.speed = 55;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASH;
        this.regional = true;
    }
}
exports.GalarianLinoone = GalarianLinoone;
class Obstagoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 22;
        this.speed = 55;
        this.def = 14;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OBSTRUCT;
        this.regional = true;
    }
}
exports.Obstagoon = Obstagoon;
class Phantump extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TREVENANT;
        this.hp = 90;
        this.atk = 8;
        this.speed = 43;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POLTERGEIST;
        this.additional = true;
    }
}
exports.Phantump = Phantump;
class Trevenant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 18;
        this.speed = 43;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POLTERGEIST;
        this.additional = true;
    }
}
exports.Trevenant = Trevenant;
class Qwilfish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 13;
        this.speed = 52;
        this.def = 15;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STOCKPILE;
        this.passive = Passive_1.Passive.QWILFISH;
    }
}
exports.Qwilfish = Qwilfish;
class HisuianQwilfish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.OVERQWIL;
        this.evolutionRule = new evolution_rules_1.StackBasedEvolutionRule();
        this.stacksRequired = 20;
        this.hp = 175;
        this.atk = 13;
        this.speed = 52;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BARB_BARRAGE;
        this.passive = Passive_1.Passive.HISUIAN_QWILFISH;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.HisuianQwilfish = HisuianQwilfish;
class Overqwil extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 250;
        this.atk = 18;
        this.speed = 52;
        this.def = 15;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BARB_BARRAGE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.Overqwil = Overqwil;
class Xurkitree extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.CHARGE_BEAM;
        this.passive = Passive_1.Passive.SPECIAL_ATTACK;
    }
}
exports.Xurkitree = Xurkitree;
class Nihilego extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.speed = 58;
        this.def = 2;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ACID_SPRAY;
        this.passive = Passive_1.Passive.BEAST_BOOST_AP;
    }
}
exports.Nihilego = Nihilego;
class Tandemaus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 14;
        this.speed = 61;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POPULATION_BOMB;
        this.evolution = Pokemon_1.Pkm.MAUSHOLD_THREE;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player, stageLevel) => stageLevel >= 14);
        this.passive = Passive_1.Passive.FAMILY;
    }
}
exports.Tandemaus = Tandemaus;
class MausholdThree extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.speed = 61;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POPULATION_BOMB;
        this.evolution = Pokemon_1.Pkm.MAUSHOLD_FOUR;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player, stageLevel) => stageLevel >= 20);
        this.passive = Passive_1.Passive.FAMILY;
    }
}
exports.MausholdThree = MausholdThree;
class MausholdFour extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 240;
        this.atk = 21;
        this.speed = 61;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POPULATION_BOMB;
    }
}
exports.MausholdFour = MausholdFour;
class Morpeko extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.speed = 56;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.AURA_WHEEL;
        this.passive = Passive_1.Passive.HUNGER_SWITCH;
    }
}
exports.Morpeko = Morpeko;
class MorpekoHangry extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.speed = 56;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.AURA_WHEEL;
        this.passive = Passive_1.Passive.HUNGER_SWITCH;
    }
}
exports.MorpekoHangry = MorpekoHangry;
class Minior extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_DOWN;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.Minior = Minior;
class MiniorKernelBlue extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelBlue = MiniorKernelBlue;
class MiniorKernelRed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelRed = MiniorKernelRed;
class MiniorKernelOrange extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelOrange = MiniorKernelOrange;
class MiniorKernelGreen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 44;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelGreen = MiniorKernelGreen;
class Hoopa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 15;
        this.speed = 47;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.UNBOUND;
    }
}
exports.Hoopa = Hoopa;
class HoopaUnbound extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 280;
        this.atk = 25;
        this.speed = 47;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPERSPACE_FURY;
    }
}
exports.HoopaUnbound = HoopaUnbound;
class Gimmighoul extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 9;
        this.speed = 52;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.GOLD_RUSH;
        this.evolution = Pokemon_1.Pkm.GHOLDENGO;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player) => player.money >= 99);
        this.passive = Passive_1.Passive.GIMMIGHOUL;
    }
}
exports.Gimmighoul = Gimmighoul;
class Gholdengo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 20;
        this.speed = 52;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.MAKE_IT_RAIN;
        this.passive = Passive_1.Passive.GHOLDENGO;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.GOLDEN);
    }
}
exports.Gholdengo = Gholdengo;
class Sobble extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.evolution = Pokemon_1.Pkm.DRIZZILE;
        this.stars = 1;
        this.hp = 120;
        this.atk = 12;
        this.speed = 63;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SNIPE_SHOT;
    }
}
exports.Sobble = Sobble;
class Drizzile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.evolution = Pokemon_1.Pkm.INTELEON;
        this.stars = 2;
        this.hp = 200;
        this.atk = 22;
        this.speed = 63;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SNIPE_SHOT;
    }
}
exports.Drizzile = Drizzile;
class Inteleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 360;
        this.atk = 34;
        this.speed = 63;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SNIPE_SHOT;
    }
}
exports.Inteleon = Inteleon;
class Comfey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 13;
        this.speed = 64;
        this.def = 8;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FLORAL_HEALING;
        this.passive = Passive_1.Passive.COMFEY;
        this.canHoldItems = false;
    }
}
exports.Comfey = Comfey;
class Lillipup extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.evolution = Pokemon_1.Pkm.HERDIER;
        this.stars = 1;
        this.hp = 60;
        this.atk = 6;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RETALIATE;
    }
}
exports.Lillipup = Lillipup;
class Herdier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.evolution = Pokemon_1.Pkm.STOUTLAND;
        this.stars = 2;
        this.hp = 120;
        this.atk = 11;
        this.speed = 51;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RETALIATE;
    }
}
exports.Herdier = Herdier;
class Stoutland extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 21;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RETALIATE;
    }
}
exports.Stoutland = Stoutland;
class Pheromosa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 73;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.LUNGE;
    }
}
exports.Pheromosa = Pheromosa;
class Dracovish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 20;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FISHIOUS_REND;
    }
}
exports.Dracovish = Dracovish;
class Dracozolt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 20;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BOLT_BEAK;
    }
}
exports.Dracozolt = Dracozolt;
class Arctozolt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 22;
        this.speed = 43;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDER_FANG;
    }
}
exports.Arctozolt = Arctozolt;
class Arctovish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 22;
        this.speed = 43;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_FANG;
    }
}
exports.Arctovish = Arctovish;
class Bruxish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.speed = 54;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYCHIC_FANGS;
    }
}
exports.Bruxish = Bruxish;
class Corsola extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.hp = 125;
        this.atk = 9;
        this.speed = 35;
        this.def = 2;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RECOVER;
        this.passive = Passive_1.Passive.CORSOLA;
        this.evolution = Pokemon_1.Pkm.GALAR_CORSOLA;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon) => pokemon.deathCount > 0);
        this.regional = true;
    }
}
exports.Corsola = Corsola;
class GalarCorsola extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GHOST]);
        this.evolution = Pokemon_1.Pkm.CURSOLA;
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.hp = 125;
        this.atk = 9;
        this.speed = 35;
        this.def = 2;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CURSE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return false;
    }
}
exports.GalarCorsola = GalarCorsola;
class Cursola extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 28;
        this.speed = 35;
        this.def = 6;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CURSE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return false;
    }
}
exports.Cursola = Cursola;
class Smeargle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 19;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SKETCH;
    }
    onSpawn({ entity }) {
        if (entity.player) {
            const allyOnTheLeft = entity.player.getPokemonAt(this.positionX - 1, this.positionY);
            if (allyOnTheLeft && entity.skill === Ability_1.Ability.SKETCH) {
                entity.maxPP = allyOnTheLeft.maxPP;
                entity.skill = allyOnTheLeft.skill;
                entity.stars = allyOnTheLeft.stars;
            }
        }
    }
}
exports.Smeargle = Smeargle;
class Toxel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BABY,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.TOXTRICITY;
        this.stars = 1;
        this.hp = 80;
        this.atk = 8;
        this.speed = 49;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.OVERDRIVE;
        this.regional = true;
    }
}
exports.Toxel = Toxel;
class Toxtricity extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 20;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.OVERDRIVE;
        this.regional = true;
    }
}
exports.Toxtricity = Toxtricity;
class Cyclizar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 17;
        this.speed = 64;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHED_TAIL;
    }
}
exports.Cyclizar = Cyclizar;
class Pawniard extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BISHARP;
        this.hp = 130;
        this.atk = 18;
        this.speed = 41;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.KOWTOW_CLEAVE;
    }
}
exports.Pawniard = Pawniard;
class Bisharp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KINGAMBIT;
        this.hp = 250;
        this.atk = 31;
        this.speed = 41;
        this.def = 16;
        this.speDef = 8;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.KOWTOW_CLEAVE;
    }
}
exports.Bisharp = Bisharp;
class Kingambit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 44;
        this.speed = 41;
        this.def = 24;
        this.speDef = 12;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.KOWTOW_CLEAVE;
    }
}
exports.Kingambit = Kingambit;
class Feebas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.evolution = Pokemon_1.Pkm.MILOTIC;
        this.stars = 1;
        this.hp = 60;
        this.atk = 5;
        this.speed = 51;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPLASH;
        this.passive = Passive_1.Passive.FEEBAS;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(6);
    }
}
exports.Feebas = Feebas;
class Milotic extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 300;
        this.atk = 15;
        this.speed = 51;
        this.def = 8;
        this.speDef = 14;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.ATTRACT;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.SIREN);
    }
}
exports.Milotic = Milotic;
class Dewpider extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.additional = true;
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARAQUANID;
        this.hp = 60;
        this.atk = 6;
        this.speed = 38;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STICKY_WEB;
        this.passive = Passive_1.Passive.WATER_BUBBLE;
    }
}
exports.Dewpider = Dewpider;
class Araquanid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.additional = true;
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 13;
        this.speed = 38;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STICKY_WEB;
        this.passive = Passive_1.Passive.WATER_BUBBLE;
    }
}
exports.Araquanid = Araquanid;
class Lickitung extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LICKILICKY;
        this.hp = 70;
        this.atk = 5;
        this.speed = 41;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.LICK;
    }
}
exports.Lickitung = Lickitung;
class Lickilicky extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 10;
        this.speed = 41;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.LICK;
    }
}
exports.Lickilicky = Lickilicky;
class Kangaskhan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.speed = 54;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIZZY_PUNCH;
    }
}
exports.Kangaskhan = Kangaskhan;
class Teddiursa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.URSARING;
        this.hp = 150;
        this.atk = 13;
        this.speed = 41;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FURY_SWIPES;
    }
}
exports.Teddiursa = Teddiursa;
class Ursaring extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.URSALUNA;
        this.hp = 280;
        this.atk = 24;
        this.speed = 41;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FURY_SWIPES;
    }
}
exports.Ursaring = Ursaring;
class Ursaluna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 450;
        this.atk = 29;
        this.speed = 41;
        this.def = 24;
        this.speDef = 20;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FURY_SWIPES;
        this.passive = Passive_1.Passive.BLOODMOON;
    }
    beforeSimulationStart({ weather, player }) {
        if (weather === Weather_1.Weather.BLOODMOON) {
            player.transformPokemon(this, Pokemon_1.Pkm.URSALUNA_BLOODMOON);
        }
    }
}
exports.Ursaluna = Ursaluna;
class UrsalunaBloodmoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 380;
        this.atk = 38;
        this.speed = 41;
        this.def = 28;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLOOD_MOON;
    }
    beforeSimulationStart({ weather, player }) {
        if (weather !== Weather_1.Weather.BLOODMOON) {
            player.transformPokemon(this, Pokemon_1.Pkm.URSALUNA);
        }
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.BLOODY);
    }
}
exports.UrsalunaBloodmoon = UrsalunaBloodmoon;
class Aipom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.AMBIPOM;
        this.hp = 70;
        this.atk = 6;
        this.speed = 62;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TICKLE;
    }
}
exports.Aipom = Aipom;
class Ambipom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 12;
        this.speed = 62;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TICKLE;
    }
}
exports.Ambipom = Ambipom;
class DeerlingSpring extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SAWSBUCK_SPRING;
        this.hp = 80;
        this.atk = 8;
        this.speed = 55;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.DeerlingSpring = DeerlingSpring;
class DeerlingSummer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SAWSBUCK_SUMMER;
        this.hp = 80;
        this.atk = 8;
        this.speed = 55;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.DeerlingSummer = DeerlingSummer;
class DeerlingAutumn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.WILD]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SAWSBUCK_AUTUMN;
        this.hp = 80;
        this.atk = 8;
        this.speed = 55;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.DeerlingAutumn = DeerlingAutumn;
class DeerlingWinter extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SAWSBUCK_WINTER;
        this.hp = 80;
        this.atk = 8;
        this.speed = 55;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.DeerlingWinter = DeerlingWinter;
class SawsbuckSpring extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 2;
        this.hp = 180;
        this.atk = 22;
        this.speed = 55;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.SawsbuckSpring = SawsbuckSpring;
class SawsbuckSummer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 2;
        this.hp = 180;
        this.atk = 22;
        this.speed = 55;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.SawsbuckSummer = SawsbuckSummer;
class SawsbuckAutumn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.WILD]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 2;
        this.hp = 180;
        this.atk = 22;
        this.speed = 55;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.SawsbuckAutumn = SawsbuckAutumn;
class SawsbuckWinter extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 2;
        this.hp = 180;
        this.atk = 22;
        this.speed = 55;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HORN_LEECH;
        this.passive = Passive_1.Passive.SEASONAL;
    }
}
exports.SawsbuckWinter = SawsbuckWinter;
class Patrat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WATCHOG;
        this.hp = 80;
        this.atk = 8;
        this.speed = 50;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DETECT;
        this.additional = true;
    }
}
exports.Patrat = Patrat;
class Watchog extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 17;
        this.speed = 50;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DETECT;
        this.additional = true;
    }
}
exports.Watchog = Watchog;
class Taillow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SWELLOW;
        this.hp = 70;
        this.atk = 7;
        this.speed = 80;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AIR_SLASH;
    }
}
exports.Taillow = Taillow;
class Swellow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 16;
        this.speed = 80;
        this.def = 11;
        this.speDef = 9;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AIR_SLASH;
    }
}
exports.Swellow = Swellow;
class Spinarak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARIADOS;
        this.hp = 60;
        this.atk = 6;
        this.speed = 38;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
    }
}
exports.Spinarak = Spinarak;
class Ariados extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 15;
        this.speed = 38;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
    }
}
exports.Ariados = Ariados;
class Rockruff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LYCANROC_DUSK;
        this.hp = 90;
        this.atk = 12;
        this.speed = 61;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
    }
}
exports.Rockruff = Rockruff;
function updateLycanroc(pokemon, weather, player) {
    let weatherForm;
    if (weather === Weather_1.Weather.NIGHT) {
        weatherForm = Pokemon_1.Pkm.LYCANROC_NIGHT;
    }
    else if (weather === Weather_1.Weather.ZENITH) {
        weatherForm = Pokemon_1.Pkm.LYCANROC_DAY;
    }
    if (!weatherForm || pokemon.name === weatherForm)
        return;
    player.transformPokemon(pokemon, weatherForm);
}
class LycanrocDusk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 22;
        this.speed = 61;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
        this.passive = Passive_1.Passive.LYCANROC;
    }
    beforeSimulationStart({ weather, player }) {
        updateLycanroc(this, weather, player);
    }
}
exports.LycanrocDusk = LycanrocDusk;
class LycanrocNight extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 22;
        this.speed = 61;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
        this.passive = Passive_1.Passive.LYCANROC;
    }
    beforeSimulationStart({ weather, player }) {
        updateLycanroc(this, weather, player);
    }
}
exports.LycanrocNight = LycanrocNight;
class LycanrocDay extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 22;
        this.speed = 61;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
        this.passive = Passive_1.Passive.LYCANROC;
    }
    beforeSimulationStart({ weather, player }) {
        updateLycanroc(this, weather, player);
    }
}
exports.LycanrocDay = LycanrocDay;
class Druddigon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 19;
        this.speed = 40;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
    }
}
exports.Druddigon = Druddigon;
class Cosmog extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.evolution = Pokemon_1.Pkm.COSMOEM;
        this.evolutionRule = new evolution_rules_1.StackBasedEvolutionRule();
        this.stacksRequired = 8;
        this.stars = 1;
        this.hp = 140;
        this.atk = 5;
        this.speed = 37;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.passive = Passive_1.Passive.COSMOG;
    }
}
exports.Cosmog = Cosmog;
class Cosmoem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.SOLGALEO, Pokemon_1.Pkm.LUNALA];
        this.evolutionRule = new evolution_rules_1.StackBasedEvolutionRule((pokemon, player) => {
            if (pokemon.positionX === player.lightX &&
                pokemon.positionY === player.lightY &&
                effects_1.SynergyEffects[Synergy_1.Synergy.LIGHT].some((e) => player.effects.has(e)))
                return Pokemon_1.Pkm.SOLGALEO;
            else
                return Pokemon_1.Pkm.LUNALA;
        });
        this.stacksRequired = 8;
        this.hp = 220;
        this.atk = 5;
        this.speed = 37;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.passive = Passive_1.Passive.COSMOEM;
    }
    onAcquired(player) {
        this.stacks = -1;
        this.hp -= 10;
        this.hp -= 80;
        this.maxHP = this.hp;
    }
}
exports.Cosmoem = Cosmoem;
class Solgaleo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.STEEL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 27;
        this.speed = 56;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.SUNSTEEL_STRIKE;
    }
    onAcquired(player) {
        this.hp -= 80;
        this.maxHP = this.hp;
        player.titles.add(types_1.Title.STARGAZER);
    }
}
exports.Solgaleo = Solgaleo;
class Lunala extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 27;
        this.speed = 56;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 4;
        this.skill = Ability_1.Ability.MOONGEIST_BEAM;
    }
    onAcquired(player) {
        this.hp -= 80;
        this.maxHP = this.hp;
        player.titles.add(types_1.Title.STARGAZER);
    }
}
exports.Lunala = Lunala;
class Magearna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.speed = 46;
        this.def = 8;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FLEUR_CANNON;
        this.passive = Passive_1.Passive.SOUL_HEART;
    }
}
exports.Magearna = Magearna;
class Impidimp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MORGREM;
        this.hp = 60;
        this.atk = 6;
        this.speed = 44;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIRIT_BREAK;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.HUMAN);
    }
}
exports.Impidimp = Impidimp;
class Morgrem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GRIMMSNARL;
        this.hp = 110;
        this.atk = 12;
        this.speed = 44;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIRIT_BREAK;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.HUMAN);
    }
}
exports.Morgrem = Morgrem;
class Grimmsnarl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 26;
        this.speed = 44;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIRIT_BREAK;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.HUMAN);
    }
}
exports.Grimmsnarl = Grimmsnarl;
class Drowzee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HYPNO;
        this.hp = 100;
        this.atk = 7;
        this.speed = 46;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DREAM_EATER;
        this.regional = true;
    }
}
exports.Drowzee = Drowzee;
class Hypno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 14;
        this.speed = 46;
        this.def = 8;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DREAM_EATER;
        this.regional = true;
    }
}
exports.Hypno = Hypno;
class Wattrel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KILOWATTREL;
        this.hp = 90;
        this.atk = 7;
        this.speed = 65;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.SPARK;
        this.additional = true;
        this.passive = Passive_1.Passive.WIND_POWER;
    }
}
exports.Wattrel = Wattrel;
class Kilowattrel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 16;
        this.speed = 65;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.SPARK;
        this.additional = true;
        this.passive = Passive_1.Passive.WIND_POWER;
    }
}
exports.Kilowattrel = Kilowattrel;
const burmyDivergentEvolutionRule = (cloakType, wormadam) => new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player, stageLevel) => {
    var _a;
    const copies = (0, schemas_1.schemaValues)(player.board).filter((p) => p.index === pokemon.index && !p.items.has(Item_1.Item.EVIOLITE));
    if (copies.length >= 3)
        return true;
    return (((_a = config_1.RegionDetails[player.map]) === null || _a === void 0 ? void 0 : _a.synergies.includes(cloakType)) === false &&
        stageLevel >= 20);
}, (pokemon, player) => {
    const copies = (0, schemas_1.schemaValues)(player.board).filter((p) => p.index === pokemon.index && !p.items.has(Item_1.Item.EVIOLITE));
    if (copies.length >= 3)
        return wormadam;
    return Pokemon_1.Pkm.MOTHIM;
});
exports.burmyDivergentEvolutionRule = burmyDivergentEvolutionRule;
class BurmyPlant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.WORMADAM_PLANT, Pokemon_1.Pkm.MOTHIM];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, () => Pokemon_1.Pkm.WORMADAM_PLANT);
        this.hp = 70;
        this.atk = 7;
        this.speed = 46;
        this.def = 2;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.passive = Passive_1.Passive.BURMY;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.GRASS);
    }
}
exports.BurmyPlant = BurmyPlant;
class BurmySandy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.WORMADAM_SANDY, Pokemon_1.Pkm.MOTHIM];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, () => Pokemon_1.Pkm.WORMADAM_SANDY);
        this.hp = 70;
        this.atk = 7;
        this.speed = 46;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.passive = Passive_1.Passive.BURMY;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.BurmySandy = BurmySandy;
class BurmyTrash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolutions = [Pokemon_1.Pkm.WORMADAM_TRASH, Pokemon_1.Pkm.MOTHIM];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, () => Pokemon_1.Pkm.WORMADAM_TRASH);
        this.hp = 70;
        this.atk = 7;
        this.speed = 46;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.passive = Passive_1.Passive.BURMY;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.ARTIFICIAL) &&
            !regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.BurmyTrash = BurmyTrash;
class WormadamPlant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 13;
        this.speed = 46;
        this.def = 3;
        this.speDef = 9;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.GRASS);
    }
}
exports.WormadamPlant = WormadamPlant;
class WormadamSandy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 13;
        this.speed = 46;
        this.def = 9;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.WormadamSandy = WormadamSandy;
class WormadamTrash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 13;
        this.speed = 46;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.ARTIFICIAL) &&
            !regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.WormadamTrash = WormadamTrash;
class Mothim extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 13;
        this.speed = 46;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return false;
    }
}
exports.Mothim = Mothim;
class Wooper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.QUAGSIRE;
        this.stars = 1;
        this.hp = 80;
        this.atk = 8;
        this.speed = 31;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_SHOT;
        this.additional = true;
    }
}
exports.Wooper = Wooper;
class Quagsire extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 21;
        this.speed = 31;
        this.def = 15;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_SHOT;
        this.additional = true;
    }
}
exports.Quagsire = Quagsire;
class PaldeaWooper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.CLODSIRE;
        this.stars = 1;
        this.hp = 80;
        this.atk = 6;
        this.speed = 31;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RECOVER;
        this.additional = true;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.PaldeaWooper = PaldeaWooper;
class Clodsire extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 12;
        this.speed = 31;
        this.def = 10;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RECOVER;
        this.additional = true;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.Clodsire = Clodsire;
class Tangela extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolution = Pokemon_1.Pkm.TANGROWTH;
        this.stars = 1;
        this.hp = 100;
        this.atk = 4;
        this.speed = 41;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.VINE_WHIP;
        this.additional = true;
    }
}
exports.Tangela = Tangela;
class Tangrowth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 190;
        this.atk = 14;
        this.speed = 41;
        this.def = 12;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.VINE_WHIP;
        this.additional = true;
    }
}
exports.Tangrowth = Tangrowth;
class Phanpy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.DONPHAN;
        this.stars = 1;
        this.hp = 80;
        this.atk = 5;
        this.speed = 41;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAPID_SPIN;
    }
}
exports.Phanpy = Phanpy;
class Donphan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 10;
        this.speed = 41;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAPID_SPIN;
    }
}
exports.Donphan = Donphan;
class Spoink extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.GRUMPIG;
        this.stars = 1;
        this.hp = 100;
        this.atk = 5;
        this.speed = 51;
        this.def = 8;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BOUNCE;
        this.regional = true;
    }
}
exports.Spoink = Spoink;
class Grumpig extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 240;
        this.atk = 9;
        this.speed = 51;
        this.def = 12;
        this.speDef = 20;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BOUNCE;
        this.regional = true;
    }
}
exports.Grumpig = Grumpig;
class Sinistea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.POLTEAGEIST;
        this.hp = 60;
        this.atk = 4;
        this.speed = 47;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TEA_TIME;
        this.additional = true;
    }
}
exports.Sinistea = Sinistea;
class Polteageist extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 9;
        this.speed = 47;
        this.def = 5;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TEA_TIME;
        this.additional = true;
    }
}
exports.Polteageist = Polteageist;
class Ferroseed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.evolution = Pokemon_1.Pkm.FERROTHORN;
        this.stars = 1;
        this.hp = 100;
        this.atk = 8;
        this.speed = 31;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKES;
        this.additional = true;
    }
}
exports.Ferroseed = Ferroseed;
class Ferrothorn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 16;
        this.speed = 31;
        this.def = 28;
        this.speDef = 28;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKES;
        this.additional = true;
    }
}
exports.Ferrothorn = Ferrothorn;
class Golett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.GOLURK;
        this.stars = 1;
        this.hp = 80;
        this.atk = 7;
        this.speed = 43;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_PUNCH;
        this.additional = true;
    }
}
exports.Golett = Golett;
class Golurk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 21;
        this.speed = 43;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_PUNCH;
        this.additional = true;
    }
}
exports.Golurk = Golurk;
class Trubbish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.evolution = Pokemon_1.Pkm.GARBODOR;
        this.stars = 1;
        this.hp = 110;
        this.atk = 8;
        this.speed = 49;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUNK_SHOT;
        this.passive = Passive_1.Passive.RECYCLE;
        this.additional = true;
    }
}
exports.Trubbish = Trubbish;
class Garbodor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 230;
        this.atk = 14;
        this.speed = 49;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUNK_SHOT;
        this.passive = Passive_1.Passive.RECYCLE;
        this.additional = true;
    }
}
exports.Garbodor = Garbodor;
class Grubbin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CHARJABUG;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 75;
        this.atk = 5;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Grubbin = Grubbin;
class Charjabug extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VIKAVOLT;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 130;
        this.atk = 13;
        this.speed = 39;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Charjabug = Charjabug;
class Vikavolt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 24;
        this.speed = 39;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
    }
}
exports.Vikavolt = Vikavolt;
class ShellosWestSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GASTRODON_WEST_SEA;
        this.hp = 120;
        this.atk = 9;
        this.speed = 38;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MUDDY_WATER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.WATER) ||
            regionSynergies.includes(Synergy_1.Synergy.GROUND));
    }
}
exports.ShellosWestSea = ShellosWestSea;
class GastrodonWestSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 270;
        this.atk = 19;
        this.speed = 38;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MUDDY_WATER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.WATER) ||
            regionSynergies.includes(Synergy_1.Synergy.GROUND));
    }
}
exports.GastrodonWestSea = GastrodonWestSea;
class ShellosEastSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GASTRODON_EAST_SEA;
        this.hp = 120;
        this.atk = 9;
        this.speed = 38;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ANCIENT_POWER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((regionSynergies.includes(Synergy_1.Synergy.AQUATIC) ||
            regionSynergies.includes(Synergy_1.Synergy.ROCK)) &&
            !(regionSynergies.includes(Synergy_1.Synergy.GROUND) ||
                regionSynergies.includes(Synergy_1.Synergy.WATER)));
    }
}
exports.ShellosEastSea = ShellosEastSea;
class GastrodonEastSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 270;
        this.atk = 19;
        this.speed = 38;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ANCIENT_POWER;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((regionSynergies.includes(Synergy_1.Synergy.AQUATIC) ||
            regionSynergies.includes(Synergy_1.Synergy.ROCK)) &&
            !(regionSynergies.includes(Synergy_1.Synergy.GROUND) ||
                regionSynergies.includes(Synergy_1.Synergy.WATER)));
    }
}
exports.GastrodonEastSea = GastrodonEastSea;
class Rufflet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRAVIARY;
        this.hp = 70;
        this.atk = 7;
        this.speed = 51;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUSH_CLAW;
        this.regional = true;
    }
}
exports.Rufflet = Rufflet;
class Braviary extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 15;
        this.speed = 51;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUSH_CLAW;
        this.regional = true;
    }
}
exports.Braviary = Braviary;
class Klefki extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 15;
        this.speed = 49;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_LOCK;
    }
}
exports.Klefki = Klefki;
class Hawlucha extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 17;
        this.speed = 63;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FLYING_PRESS;
    }
}
exports.Hawlucha = Hawlucha;
class Stonjourner extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 47;
        this.def = 20;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GRAVITY;
        this.passive = Passive_1.Passive.STONJOURNER;
    }
}
exports.Stonjourner = Stonjourner;
class Cramorant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 19;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.GULP_MISSILE;
    }
}
exports.Cramorant = Cramorant;
class Arrokuda extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 10;
        this.speed = 46;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 140;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
    }
}
exports.Arrokuda = Arrokuda;
class Durant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 19;
        this.speed = 60;
        this.def = 12;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.INFESTATION;
        this.passive = Passive_1.Passive.DURANT;
    }
}
exports.Durant = Durant;
class Wishiwashi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WISHIWASHI_SCHOOL;
        this.hp = 50;
        this.atk = 11;
        this.speed = 38;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.passive = Passive_1.Passive.WISHIWASHI;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3);
    }
}
exports.Wishiwashi = Wishiwashi;
class WishiwashiSchool extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.WISHIWASHI_SCHOOL;
        this.hp = 300;
        this.atk = 22;
        this.speed = 35;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SCHOOLING;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.FEARSOME);
    }
}
exports.WishiwashiSchool = WishiwashiSchool;
class Pawmi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PAWMO;
        this.hp = 80;
        this.atk = 6;
        this.speed = 59;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_SHOCK;
    }
}
exports.Pawmi = Pawmi;
class Pawmo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PAWMOT;
        this.hp = 150;
        this.atk = 13;
        this.speed = 59;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_SHOCK;
    }
}
exports.Pawmo = Pawmo;
class Pawmot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 31;
        this.speed = 59;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_SHOCK;
    }
}
exports.Pawmot = Pawmot;
class Pyukumuku extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 10;
        this.speed = 27;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PURIFY;
        this.passive = Passive_1.Passive.PYUKUMUKU;
    }
}
exports.Pyukumuku = Pyukumuku;
class Goldeen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SEAKING;
        this.hp = 90;
        this.atk = 8;
        this.speed = 47;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WATERFALL;
        this.additional = true;
    }
}
exports.Goldeen = Goldeen;
class Seaking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 250;
        this.atk = 16;
        this.speed = 47;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WATERFALL;
        this.additional = true;
    }
}
exports.Seaking = Seaking;
class Luvdisc extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 14;
        this.speed = 56;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 60;
        this.range = 3;
        this.skill = Ability_1.Ability.CHARM;
        this.passive = Passive_1.Passive.LUVDISC;
    }
}
exports.Luvdisc = Luvdisc;
class Audino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.speed = 41;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.ENTRAINMENT;
    }
}
exports.Audino = Audino;
class Petilil extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolutions = [Pokemon_1.Pkm.LILIGANT, Pokemon_1.Pkm.HISUIAN_LILLIGANT];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.HISUIAN_LILLIGANT))
                return Pokemon_1.Pkm.HISUIAN_LILLIGANT;
            else
                return Pokemon_1.Pkm.LILIGANT;
        });
        this.stars = 1;
        this.hp = 85;
        this.atk = 5;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AROMATHERAPY;
        this.additional = true;
    }
}
exports.Petilil = Petilil;
class Lilligant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 10;
        this.speed = 54;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AROMATHERAPY;
        this.additional = true;
    }
}
exports.Lilligant = Lilligant;
class HisuianLilligant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 14;
        this.speed = 59;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.VICTORY_DANCE;
        this.additional = true;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.PETILIL)) &&
            regionSynergies.includes(Synergy_1.Synergy.FIGHTING));
    }
}
exports.HisuianLilligant = HisuianLilligant;
class Mantyke extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BABY, Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.evolution = Pokemon_1.Pkm.MANTINE;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player) => {
            for (const p of player.board.values()) {
                if (p.name === Pokemon_1.Pkm.REMORAID &&
                    !(0, board_1.isOnBench)(p) &&
                    !(0, board_1.isOnBench)(pokemon) &&
                    (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, p.positionX, p.positionY) === 1) {
                    return true;
                }
            }
            return false;
        });
        this.stars = 2;
        this.hp = 160;
        this.atk = 6;
        this.speed = 47;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.BOUNCE;
        this.passive = Passive_1.Passive.MANTYKE;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state);
        this.evolutionRule.tryEvolve(this, player, 0);
    }
}
exports.Mantyke = Mantyke;
class Mantine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 12;
        this.speed = 47;
        this.def = 8;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.BOUNCE;
        this.passive = Passive_1.Passive.MANTINE;
    }
}
exports.Mantine = Mantine;
class Remoraid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.evolution = Pokemon_1.Pkm.OCTILLERY;
        this.stars = 1;
        this.hp = 60;
        this.atk = 13;
        this.speed = 39;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state);
        for (const pokemon of player.board.values()) {
            if (pokemon.name === Pokemon_1.Pkm.MANTYKE) {
                pokemon.evolutionRule.tryEvolve(pokemon, player, 0);
            }
        }
    }
}
exports.Remoraid = Remoraid;
class Octillery extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 150;
        this.atk = 26;
        this.speed = 39;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.OCTAZOOKA;
    }
}
exports.Octillery = Octillery;
class Sigilyph extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 56;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PSYCHO_SHIFT;
    }
}
exports.Sigilyph = Sigilyph;
class Frigibax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARCTIBAX;
        this.hp = 150;
        this.atk = 15;
        this.speed = 53;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GLAIVE_RUSH;
    }
}
exports.Frigibax = Frigibax;
class Arctibax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BAXCALIBUR;
        this.hp = 270;
        this.atk = 30;
        this.speed = 53;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GLAIVE_RUSH;
    }
}
exports.Arctibax = Arctibax;
class Baxcalibur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 45;
        this.speed = 53;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GLAIVE_RUSH;
    }
}
exports.Baxcalibur = Baxcalibur;
class Sandile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KROKOROK;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 80;
        this.atk = 6;
        this.speed = 54;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Sandile = Sandile;
class Krokorok extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KROOKODILE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 150;
        this.atk = 12;
        this.speed = 54;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Krokorok = Krokorok;
class Krookodile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 220;
        this.atk = 20;
        this.speed = 54;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
    }
}
exports.Krookodile = Krookodile;
class Binacle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BARBARACLE;
        this.hp = 80;
        this.atk = 9;
        this.speed = 47;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.STONE_EDGE;
        this.additional = true;
    }
}
exports.Binacle = Binacle;
class Barbaracle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 21;
        this.speed = 47;
        this.def = 16;
        this.speDef = 8;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.STONE_EDGE;
        this.additional = true;
    }
}
exports.Barbaracle = Barbaracle;
class Skarmory extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 18;
        this.speed = 47;
        this.def = 16;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR;
        this.passive = Passive_1.Passive.SKARMORY;
    }
}
exports.Skarmory = Skarmory;
function ogerponOnAcquired(player, currentMask) {
    Item_1.OgerponMasks.forEach((mask) => {
        if (!player.items.includes(mask) && mask !== currentMask) {
            player.items.push(mask);
        }
    });
    if (currentMask && player.items.includes(currentMask)) {
        (0, array_1.removeInArray)(player.items, currentMask);
    }
}
function ogerponOnSell(player) {
    Item_1.OgerponMasks.forEach((mask) => {
        (0, array_1.removeInArray)(player.items, mask);
    });
}
class OgerponTeal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_TEAL;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.FLORA);
    }
}
exports.OgerponTeal = OgerponTeal;
class OgerponTealMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.TEAL_MASK);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_TEAL;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.FLORA);
    }
}
exports.OgerponTealMask = OgerponTealMask;
class OgerponWellspring extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_WELLSPRING;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.AQUATIC);
    }
}
exports.OgerponWellspring = OgerponWellspring;
class OgerponWellspringMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.WELLSPRING_MASK);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_WELLSPRING;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.AQUATIC);
    }
}
exports.OgerponWellspringMask = OgerponWellspringMask;
class OgerponHearthflame extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_HEARTHFLAME;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.FIRE);
    }
}
exports.OgerponHearthflame = OgerponHearthflame;
class OgerponHearthflameMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.HEARTHFLAME_MASK);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_HEARTHFLAME;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.FIRE);
    }
}
exports.OgerponHearthflameMask = OgerponHearthflameMask;
class OgerponCornerstone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_CORNERSTONE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ROCK);
    }
}
exports.OgerponCornerstone = OgerponCornerstone;
class OgerponCornerstoneMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 27;
        this.speed = 70;
        this.def = 14;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.CORNERSTONE_MASK);
        this.afterSell = (player) => ogerponOnSell(player);
        this.passive = Passive_1.Passive.OGERPON_CORNERSTONE;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ROCK);
    }
}
exports.OgerponCornerstoneMask = OgerponCornerstoneMask;
class IronHands extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.ELECTRIC
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 20;
        this.speed = 41;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FORCE_PALM;
    }
}
exports.IronHands = IronHands;
class Rookidee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CORVISQUIRE;
        this.hp = 80;
        this.atk = 8;
        this.speed = 46;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STEEL_WING;
        this.regional = true;
    }
}
exports.Rookidee = Rookidee;
class Corvisquire extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CORVIKNIGHT;
        this.hp = 150;
        this.atk = 14;
        this.speed = 46;
        this.def = 13;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STEEL_WING;
        this.regional = true;
    }
}
exports.Corvisquire = Corvisquire;
class Corviknight extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 28;
        this.speed = 46;
        this.def = 18;
        this.speDef = 12;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STEEL_WING;
        this.regional = true;
    }
}
exports.Corviknight = Corviknight;
class Turtonator extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.speed = 37;
        this.def = 24;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELL_TRAP;
    }
}
exports.Turtonator = Turtonator;
class Sandygast extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PALOSSAND;
        this.hp = 60;
        this.atk = 6;
        this.speed = 36;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SHORE_UP;
        this.additional = true;
    }
}
exports.Sandygast = Sandygast;
class Palossand extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 11;
        this.speed = 36;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SHORE_UP;
        this.additional = true;
    }
}
exports.Palossand = Palossand;
class Skorupi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRAPION;
        this.hp = 80;
        this.atk = 9;
        this.speed = 55;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_STING;
        this.additional = true;
    }
}
exports.Skorupi = Skorupi;
class Drapion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 16;
        this.speed = 55;
        this.def = 16;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_STING;
        this.additional = true;
    }
}
exports.Drapion = Drapion;
class Darumaka extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DARMANITAN;
        this.hp = 80;
        this.atk = 11;
        this.speed = 55;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
    }
}
exports.Darumaka = Darumaka;
class Darmanitan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 24;
        this.speed = 61;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.passive = Passive_1.Passive.DARMANITAN;
    }
}
exports.Darmanitan = Darmanitan;
class DarmanitanZen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 14;
        this.speed = 41;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 5;
        this.skill = Ability_1.Ability.TRANSE;
        this.passive = Passive_1.Passive.DARMANITAN_ZEN;
    }
}
exports.DarmanitanZen = DarmanitanZen;
class GalarianDarumaka extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GALARIAN_DARMANITAN;
        this.hp = 80;
        this.atk = 11;
        this.speed = 55;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ICE);
    }
}
exports.GalarianDarumaka = GalarianDarumaka;
class GalarianDarmanitan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 24;
        this.speed = 61;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.passive = Passive_1.Passive.GALARIAN_DARMANITAN;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ICE);
    }
}
exports.GalarianDarmanitan = GalarianDarmanitan;
class GalarianDarmanitanZen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 30;
        this.speed = 1;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TRANSE;
        this.passive = Passive_1.Passive.GALARIAN_DARMANITAN_ZEN;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies === null || regionSynergies === void 0 ? void 0 : regionSynergies.includes(Synergy_1.Synergy.ICE);
    }
}
exports.GalarianDarmanitanZen = GalarianDarmanitanZen;
class Krabby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KINGLER;
        this.hp = 80;
        this.atk = 6;
        this.speed = 49;
        this.def = 8;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.VISE_GRIP;
        this.additional = true;
    }
}
exports.Krabby = Krabby;
class Kingler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 16;
        this.speed = 49;
        this.def = 14;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.VISE_GRIP;
        this.additional = true;
    }
}
exports.Kingler = Kingler;
class Zygarde10 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 26;
        this.speed = 62;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LANDS_WRATH;
        this.passive = Passive_1.Passive.ZYGARDE;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.ZYGARDE_CUBE) === false) {
            player.items.push(Item_1.Item.ZYGARDE_CUBE);
        }
    }
}
exports.Zygarde10 = Zygarde10;
class Zygarde50 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 23;
        this.speed = 55;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.THOUSAND_ARROWS;
        this.passive = Passive_1.Passive.ZYGARDE;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.ZYGARDE_CUBE) === false) {
            player.items.push(Item_1.Item.ZYGARDE_CUBE);
        }
    }
}
exports.Zygarde50 = Zygarde50;
class Zygarde100 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 350;
        this.atk = 28;
        this.speed = 50;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.CORE_ENFORCER;
    }
}
exports.Zygarde100 = Zygarde100;
class Sizzlipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CENTISKORCH;
        this.hp = 75;
        this.atk = 9;
        this.speed = 46;
        this.def = 2;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BURN_UP;
        this.regional = true;
    }
}
exports.Sizzlipede = Sizzlipede;
class Centiskorch extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 18;
        this.speed = 46;
        this.def = 2;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BURN_UP;
        this.regional = true;
    }
}
exports.Centiskorch = Centiskorch;
class Stufful extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BEWEAR;
        this.hp = 100;
        this.atk = 8;
        this.speed = 44;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POWER_HUG;
        this.additional = true;
    }
}
exports.Stufful = Stufful;
class Bewear extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 260;
        this.atk = 25;
        this.speed = 44;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POWER_HUG;
        this.additional = true;
    }
}
exports.Bewear = Bewear;
class Glimmet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GLIMMORA;
        this.hp = 80;
        this.atk = 6;
        this.speed = 53;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.MORTAL_SPIN;
        this.additional = true;
        this.passive = Passive_1.Passive.GLIMMORA;
    }
}
exports.Glimmet = Glimmet;
class Glimmora extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 11;
        this.speed = 53;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.MORTAL_SPIN;
        this.additional = true;
        this.passive = Passive_1.Passive.GLIMMORA;
    }
}
exports.Glimmora = Glimmora;
class Fletchling extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLETCHINDER;
        this.hp = 120;
        this.atk = 12;
        this.speed = 65;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRESTARTER;
        this.passive = Passive_1.Passive.GALE_WINGS;
    }
}
exports.Fletchling = Fletchling;
class Fletchinder extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TALONFLAME;
        this.hp = 230;
        this.atk = 25;
        this.speed = 65;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRESTARTER;
        this.passive = Passive_1.Passive.GALE_WINGS;
    }
}
exports.Fletchinder = Fletchinder;
class Talonflame extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 340;
        this.atk = 37;
        this.speed = 65;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRESTARTER;
        this.passive = Passive_1.Passive.GALE_WINGS;
    }
}
exports.Talonflame = Talonflame;
class Vullaby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MANDIBUZZ;
        this.hp = 90;
        this.atk = 10;
        this.speed = 51;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BONE_ARMOR;
        this.additional = true;
    }
}
exports.Vullaby = Vullaby;
class Mandibuzz extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 210;
        this.atk = 19;
        this.speed = 51;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BONE_ARMOR;
        this.additional = true;
    }
}
exports.Mandibuzz = Mandibuzz;
class Inkay extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MALAMAR;
        this.hp = 90;
        this.atk = 9;
        this.speed = 48;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TOPSY_TURVY;
        this.additional = true;
    }
}
exports.Inkay = Inkay;
class Malamar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 230;
        this.atk = 19;
        this.speed = 48;
        this.def = 10;
        this.speDef = 24;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TOPSY_TURVY;
        this.additional = true;
    }
}
exports.Malamar = Malamar;
class Timburr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GURDURR;
        this.hp = 140;
        this.atk = 15;
        this.speed = 39;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COLUMN_CRUSH;
        this.passive = Passive_1.Passive.PILLAR;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state);
        player.updatePillars();
    }
    afterSell(player) {
        player.updatePillars();
    }
    afterEvolve(player) {
        player.updatePillars();
    }
}
exports.Timburr = Timburr;
class Gurdurr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CONKELDURR;
        this.hp = 280;
        this.atk = 26;
        this.speed = 39;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COLUMN_CRUSH;
        this.passive = Passive_1.Passive.PILLAR;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state);
        player.updatePillars();
    }
    afterSell(player) {
        player.updatePillars();
    }
    afterEvolve(player) {
        player.updatePillars();
    }
}
exports.Gurdurr = Gurdurr;
class Conkeldurr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 36;
        this.speed = 39;
        this.def = 16;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COLUMN_CRUSH;
        this.passive = Passive_1.Passive.PILLAR;
    }
    onChangePosition(x, y, player, state) {
        super.onChangePosition(x, y, player, state);
        player.updatePillars();
    }
    afterSell(player) {
        player.updatePillars();
    }
}
exports.Conkeldurr = Conkeldurr;
class PillarWood extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 0;
        this.speed = 0;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 10;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.INANIMATE;
        this.canHoldItems = false;
        this.canBeSold = false;
    }
}
exports.PillarWood = PillarWood;
class PillarIron extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 200;
        this.atk = 0;
        this.speed = 0;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 10;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.INANIMATE;
        this.canHoldItems = false;
        this.canBeSold = false;
    }
}
exports.PillarIron = PillarIron;
class PillarConcrete extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 300;
        this.atk = 0;
        this.speed = 0;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 10;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.INANIMATE;
        this.canHoldItems = false;
        this.canBeSold = false;
    }
}
exports.PillarConcrete = PillarConcrete;
class Elgyem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BEHEEYEM;
        this.hp = 70;
        this.atk = 8;
        this.speed = 38;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.WONDER_ROOM;
        this.additional = true;
    }
}
exports.Elgyem = Elgyem;
class Beheeyem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 18;
        this.speed = 38;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.WONDER_ROOM;
        this.additional = true;
    }
}
exports.Beheeyem = Beheeyem;
class Litten extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TORRACAT;
        this.hp = 95;
        this.atk = 8;
        this.speed = 44;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DARK_LARIAT;
    }
}
exports.Litten = Litten;
class Torracat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.INCINEROAR;
        this.hp = 180;
        this.atk = 15;
        this.speed = 44;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DARK_LARIAT;
    }
}
exports.Torracat = Torracat;
class Incineroar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.speed = 44;
        this.def = 16;
        this.speDef = 16;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DARK_LARIAT;
    }
}
exports.Incineroar = Incineroar;
class Skrelp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRAGALGE;
        this.hp = 60;
        this.atk = 7;
        this.speed = 39;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
        this.additional = true;
    }
}
exports.Skrelp = Skrelp;
class Dragalge extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.WATER
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 15;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
        this.additional = true;
    }
}
exports.Dragalge = Dragalge;
class Cubchoo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BEARTIC;
        this.hp = 90;
        this.atk = 10;
        this.speed = 41;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FROST_BREATH;
        this.additional = true;
    }
}
exports.Cubchoo = Cubchoo;
class Beartic extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 26;
        this.speed = 41;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FROST_BREATH;
        this.additional = true;
    }
}
exports.Beartic = Beartic;
class Nacli extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NACLSTACK;
        this.hp = 80;
        this.atk = 7;
        this.speed = 36;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SALT_CURE;
    }
}
exports.Nacli = Nacli;
class Naclstack extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GARGANACL;
        this.hp = 160;
        this.atk = 13;
        this.speed = 36;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SALT_CURE;
    }
}
exports.Naclstack = Naclstack;
class Garganacl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 280;
        this.atk = 24;
        this.speed = 36;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SALT_CURE;
    }
}
exports.Garganacl = Garganacl;
class Capsakid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SCOVILLAIN;
        this.hp = 60;
        this.atk = 6;
        this.speed = 49;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SPICY_EXTRACT;
        this.additional = true;
    }
}
exports.Capsakid = Capsakid;
class Scovillain extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 49;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SPICY_EXTRACT;
        this.additional = true;
    }
}
exports.Scovillain = Scovillain;
class Swirlix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SLURPUFF;
        this.hp = 80;
        this.atk = 9;
        this.speed = 48;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SWEET_SCENT;
        this.additional = true;
    }
}
exports.Swirlix = Swirlix;
class Slurpuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 21;
        this.speed = 48;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SWEET_SCENT;
        this.additional = true;
    }
}
exports.Slurpuff = Slurpuff;
class Gulpin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SWALOT;
        this.hp = 120;
        this.atk = 7;
        this.speed = 43;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SWALLOW;
        this.additional = true;
    }
}
exports.Gulpin = Gulpin;
class Swalot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 280;
        this.atk = 15;
        this.speed = 43;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SWALLOW;
        this.additional = true;
    }
}
exports.Swalot = Swalot;
class Fidough extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DACHSBUN;
        this.hp = 75;
        this.atk = 7;
        this.speed = 55;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWL;
        this.passive = Passive_1.Passive.WELL_BAKED;
        this.additional = true;
    }
}
exports.Fidough = Fidough;
class Dachsbun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GOURMET,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 15;
        this.speed = 55;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWL;
        this.passive = Passive_1.Passive.WELL_BAKED;
        this.additional = true;
    }
}
exports.Dachsbun = Dachsbun;
const alcremieByFlavor = {
    [Item_1.Item.VANILLA_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_VANILLA,
    [Item_1.Item.RUBY_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_RUBY,
    [Item_1.Item.MATCHA_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_MATCHA,
    [Item_1.Item.MINT_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_MINT,
    [Item_1.Item.LEMON_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_LEMON,
    [Item_1.Item.SALTED_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_SALTED,
    [Item_1.Item.RUBY_SWIRL_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL,
    [Item_1.Item.CARAMEL_SWIRL_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL,
    [Item_1.Item.RAINBOW_SWIRL_FLAVOR]: Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL
};
class Milcery extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolutions = [
            Pokemon_1.Pkm.ALCREMIE_VANILLA,
            Pokemon_1.Pkm.ALCREMIE_RUBY,
            Pokemon_1.Pkm.ALCREMIE_MATCHA,
            Pokemon_1.Pkm.ALCREMIE_MINT,
            Pokemon_1.Pkm.ALCREMIE_LEMON,
            Pokemon_1.Pkm.ALCREMIE_SALTED,
            Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL,
            Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL,
            Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL
        ];
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([...Item_1.Flavors], (pokemon, player, item) => alcremieByFlavor[item]);
        this.hp = 150;
        this.atk = 10;
        this.speed = 41;
        this.def = 2;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.CREAM;
    }
}
exports.Milcery = Milcery;
function alcremieOnAcquired(player) {
    const flavor = Object.keys(alcremieByFlavor).find((flavor) => alcremieByFlavor[flavor] === this.name);
    (0, array_1.removeInArray)(player.items, flavor);
    this.items.delete(flavor);
}
class AlcremieVanilla extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.VANILLA_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieVanilla = AlcremieVanilla;
class AlcremieRuby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.RUBY_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieRuby = AlcremieRuby;
class AlcremieMatcha extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.MATCHA_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieMatcha = AlcremieMatcha;
class AlcremieMint extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.MINT_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieMint = AlcremieMint;
class AlcremieLemon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.LEMON_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieLemon = AlcremieLemon;
class AlcremieSalted extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.SALTED_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieSalted = AlcremieSalted;
class AlcremieRubySwirl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.RUBY_SWIRL_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieRubySwirl = AlcremieRubySwirl;
class AlcremieCaramelSwirl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.CARAMEL_SWIRL_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieCaramelSwirl = AlcremieCaramelSwirl;
class AlcremieRainbowSwirl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.speed = 41;
        this.def = 6;
        this.speDef = 12;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.DECORATE;
        this.passive = Passive_1.Passive.RAINBOW_SWIRL_CREAM;
        this.onAcquired = alcremieOnAcquired;
    }
}
exports.AlcremieRainbowSwirl = AlcremieRainbowSwirl;
class Pecharunt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.speed = 55;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 3;
        this.skill = Ability_1.Ability.MALIGNANT_CHAIN;
    }
}
exports.Pecharunt = Pecharunt;
class Veluza extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 20;
        this.speed = 45;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FILLET_AWAY;
    }
}
exports.Veluza = Veluza;
class Duraludon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ARCHALUDON;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([...Item_1.Tools]);
        this.hp = 180;
        this.atk = 18;
        this.speed = 52;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ELECTRO_SHOT;
        this.passive = Passive_1.Passive.DURALUDON;
    }
}
exports.Duraludon = Duraludon;
class Archaludon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ELECTRIC
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 20;
        this.speed = 52;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ELECTRO_SHOT;
    }
}
exports.Archaludon = Archaludon;
class Fomantis extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLORA,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LURANTIS;
        this.hp = 70;
        this.atk = 8;
        this.speed = 47;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SOLAR_BLADE;
        this.additional = true;
    }
}
exports.Fomantis = Fomantis;
class Lurantis extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLORA,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.speed = 47;
        this.def = 9;
        this.speDef = 9;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SOLAR_BLADE;
        this.additional = true;
    }
}
exports.Lurantis = Lurantis;
class Charcadet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.ARMAROUGE, Pokemon_1.Pkm.CERULEDGE];
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.AUSPICIOUS_ARMOR, Item_1.Item.MALICIOUS_ARMOR], (pokemon, player, item_) => {
            const item = item_;
            if (item === Item_1.Item.AUSPICIOUS_ARMOR) {
                return Pokemon_1.Pkm.ARMAROUGE;
            }
            if (item === Item_1.Item.MALICIOUS_ARMOR) {
                return Pokemon_1.Pkm.CERULEDGE;
            }
            return Pokemon_1.Pkm.ARMAROUGE;
        });
        this.hp = 150;
        this.atk = 15;
        this.speed = 33;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FLAME_CHARGE;
        this.passive = Passive_1.Passive.CHARCADET;
    }
    afterSell(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.MALICIOUS_ARMOR);
        (0, array_1.removeInArray)(player.items, Item_1.Item.AUSPICIOUS_ARMOR);
    }
}
exports.Charcadet = Charcadet;
class Armarouge extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 51;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ARMOR_CANNON;
        this.onAcquired = (player) => {
            this.items.delete(Item_1.Item.AUSPICIOUS_ARMOR);
        };
    }
}
exports.Armarouge = Armarouge;
class Ceruledge extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.speed = 51;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BITTER_BLADE;
        this.onAcquired = (player) => {
            this.items.delete(Item_1.Item.MALICIOUS_ARMOR);
        };
    }
}
exports.Ceruledge = Ceruledge;
class Tynamo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.EELEKTRIK;
        this.hp = 50;
        this.atk = 6;
        this.speed = 41;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SUCTION_HEAL;
        this.regional = true;
    }
}
exports.Tynamo = Tynamo;
class Eelektrik extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.EELEKTROSS;
        this.hp = 150;
        this.atk = 12;
        this.speed = 41;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SUCTION_HEAL;
        this.regional = true;
    }
}
exports.Eelektrik = Eelektrik;
class Eelektross extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 24;
        this.speed = 41;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SUCTION_HEAL;
        this.regional = true;
    }
}
exports.Eelektross = Eelektross;
class Pidove extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TRANQUILL;
        this.hp = 60;
        this.atk = 5;
        this.speed = 64;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROOST;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 2;
    }
}
exports.Pidove = Pidove;
class Tranquill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.UNFEZANT;
        this.hp = 110;
        this.atk = 9;
        this.speed = 64;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROOST;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 2;
    }
}
exports.Tranquill = Tranquill;
class Unfezant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 64;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROOST;
        this.regional = true;
    }
    isInRegion(map, state) {
        return Object.keys(Dungeon_1.DungeonPMDO).indexOf(map) % 3 === 2;
    }
}
exports.Unfezant = Unfezant;
class Zacian extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.evolution = Pokemon_1.Pkm.ZACIAN_CROWNED;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.RUSTED_SWORD]);
        this.stars = 3;
        this.hp = 260;
        this.atk = 22;
        this.speed = 69;
        this.def = 11;
        this.speDef = 11;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BEHEMOTH_BLADE;
        this.passive = Passive_1.Passive.ZACIAN;
    }
}
exports.Zacian = Zacian;
class ZacianCrowned extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.WILD, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 260;
        this.atk = 22;
        this.speed = 69;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BEHEMOTH_BLADE;
    }
}
exports.ZacianCrowned = ZacianCrowned;
class IronValiant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.speed = 76;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.LASER_BLADE;
    }
}
exports.IronValiant = IronValiant;
class Grookey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.THWACKEY;
        this.hp = 120;
        this.atk = 17;
        this.speed = 58;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.DRUM_BEATING;
        this.passive = Passive_1.Passive.DRUMMER;
    }
}
exports.Grookey = Grookey;
class Thwackey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.RILLABOOM;
        this.hp = 250;
        this.atk = 29;
        this.speed = 58;
        this.def = 14;
        this.speDef = 11;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.DRUM_BEATING;
        this.passive = Passive_1.Passive.DRUMMER;
    }
}
exports.Thwackey = Thwackey;
class Rillaboom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 40;
        this.speed = 58;
        this.def = 20;
        this.speDef = 16;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.DRUM_BEATING;
        this.passive = Passive_1.Passive.DRUMMER;
    }
}
exports.Rillaboom = Rillaboom;
class Kubfu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolutions = [Pokemon_1.Pkm.URSHIFU_RAPID, Pokemon_1.Pkm.URSHIFU_SINGLE];
        this.evolutionRule = Object.assign(new evolution_rules_1.ItemEvolutionRule([Item_1.Item.SCROLL_OF_WATERS, Item_1.Item.SCROLL_OF_DARKNESS], (pokemon, player, item) => {
            return item === Item_1.Item.SCROLL_OF_WATERS
                ? Pokemon_1.Pkm.URSHIFU_RAPID
                : Pokemon_1.Pkm.URSHIFU_SINGLE;
        }));
        this.stacksRequired = 10;
        this.hp = 150;
        this.atk = 15;
        this.speed = 50;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.MACH_PUNCH;
        this.passive = Passive_1.Passive.KUBFU;
    }
}
exports.Kubfu = Kubfu;
class UrshifuRapid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.speed = 50;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SURGING_STRIKES;
    }
    onAcquired(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.SCROLL_OF_WATERS);
        (0, array_1.removeInArray)(player.items, Item_1.Item.SCROLL_OF_DARKNESS);
        this.items.delete(Item_1.Item.SCROLL_OF_WATERS);
    }
}
exports.UrshifuRapid = UrshifuRapid;
class UrshifuSingle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.speed = 50;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WICKED_BLOW;
    }
    onAcquired(player) {
        (0, array_1.removeInArray)(player.items, Item_1.Item.SCROLL_OF_WATERS);
        (0, array_1.removeInArray)(player.items, Item_1.Item.SCROLL_OF_DARKNESS);
        this.items.delete(Item_1.Item.SCROLL_OF_DARKNESS);
    }
}
exports.UrshifuSingle = UrshifuSingle;
class ScreamTail extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 210;
        this.atk = 16;
        this.speed = 71;
        this.def = 12;
        this.speDef = 12;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BOOMBURST;
    }
}
exports.ScreamTail = ScreamTail;
class IndeedeeFemale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 9;
        this.speed = 61;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FOLLOW_ME;
    }
}
exports.IndeedeeFemale = IndeedeeFemale;
class IndeedeeMale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 160;
        this.atk = 13;
        this.speed = 61;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AFTER_YOU;
    }
}
exports.IndeedeeMale = IndeedeeMale;
class Cottonee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WHIMSICOTT;
        this.hp = 60;
        this.atk = 5;
        this.speed = 74;
        this.def = 4;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.COTTON_SPORE;
        this.additional = true;
    }
}
exports.Cottonee = Cottonee;
class Whimsicott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 11;
        this.speed = 74;
        this.def = 9;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.COTTON_SPORE;
        this.additional = true;
    }
}
exports.Whimsicott = Whimsicott;
class Girafarig extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.evolution = Pokemon_1.Pkm.FARIGIRAF;
        this.stars = 1;
        this.hp = 90;
        this.atk = 11;
        this.speed = 39;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TWIN_BEAM;
        this.additional = true;
    }
}
exports.Girafarig = Girafarig;
class Farigiraf extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 210;
        this.atk = 24;
        this.speed = 39;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TWIN_BEAM;
        this.additional = true;
    }
}
exports.Farigiraf = Farigiraf;
class Skitty extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolution = Pokemon_1.Pkm.DELCATTY;
        this.stars = 1;
        this.hp = 65;
        this.atk = 6;
        this.speed = 32;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISARMING_VOICE;
        this.additional = true;
    }
}
exports.Skitty = Skitty;
class Delcatty extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 14;
        this.speed = 32;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISARMING_VOICE;
        this.additional = true;
    }
}
exports.Delcatty = Delcatty;
class Glameow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolution = Pokemon_1.Pkm.PURUGLY;
        this.stars = 1;
        this.hp = 65;
        this.atk = 6;
        this.speed = 70;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SWAGGER;
        this.additional = true;
    }
}
exports.Glameow = Glameow;
class Purugly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 70;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SWAGGER;
        this.additional = true;
    }
}
exports.Purugly = Purugly;
class Minccino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolution = Pokemon_1.Pkm.CINCCINO;
        this.stars = 1;
        this.hp = 60;
        this.atk = 5;
        this.speed = 74;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ENCORE;
        this.additional = true;
    }
}
exports.Minccino = Minccino;
class Cinccino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 12;
        this.speed = 74;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ENCORE;
        this.additional = true;
    }
}
exports.Cinccino = Cinccino;
class Espurr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolutions = [Pokemon_1.Pkm.MEOWSTIC_MALE, Pokemon_1.Pkm.MEOWSTIC_FEMALE];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player, stageLevel) => {
            var _a, _b;
            const psychicCount = (_a = player.synergies.get(Synergy_1.Synergy.PSYCHIC)) !== null && _a !== void 0 ? _a : 0;
            const fieldCount = (_b = player.synergies.get(Synergy_1.Synergy.FIELD)) !== null && _b !== void 0 ? _b : 0;
            return psychicCount >= fieldCount
                ? Pokemon_1.Pkm.MEOWSTIC_MALE
                : Pokemon_1.Pkm.MEOWSTIC_FEMALE;
        });
        this.stars = 1;
        this.hp = 80;
        this.atk = 3;
        this.speed = 66;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.REFLECT;
        this.passive = Passive_1.Passive.ESPURR;
    }
}
exports.Espurr = Espurr;
class MeowsticMale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 8;
        this.speed = 66;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.REFLECT;
    }
}
exports.MeowsticMale = MeowsticMale;
class MeowsticFemale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 8;
        this.speed = 66;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STORED_POWER;
    }
}
exports.MeowsticFemale = MeowsticFemale;
class Okidogi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 28;
        this.speed = 51;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CHAIN_CRAZED;
    }
}
exports.Okidogi = Okidogi;
class Munkidori extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 22;
        this.speed = 68;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MIND_BEND;
    }
}
exports.Munkidori = Munkidori;
class Fezandipiti extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 22;
        this.speed = 63;
        this.def = 10;
        this.speDef = 14;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DISARMING_VOICE;
    }
}
exports.Fezandipiti = Fezandipiti;
class Surskit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MASQUERAIN;
        this.hp = 70;
        this.atk = 6;
        this.speed = 51;
        this.def = 4;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.additional = true;
    }
}
exports.Surskit = Surskit;
class Masquerain extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 51;
        this.def = 6;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SILVER_WIND;
        this.additional = true;
    }
}
exports.Masquerain = Masquerain;
class Gossifleur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ELDEGOSS;
        this.hp = 70;
        this.atk = 5;
        this.speed = 50;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COTTON_GUARD;
        this.regional = true;
    }
}
exports.Gossifleur = Gossifleur;
class Eldegoss extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 9;
        this.speed = 50;
        this.def = 10;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COTTON_GUARD;
        this.regional = true;
    }
}
exports.Eldegoss = Eldegoss;
class Furfrou extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 65;
        this.def = 8;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.COTTON_GUARD;
        this.passive = Passive_1.Passive.FUR_COAT;
        this.stacksRequired = 5;
    }
}
exports.Furfrou = Furfrou;
class Varoom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.REVAVROOM;
        this.hp = 70;
        this.atk = 6;
        this.speed = 40;
        this.def = 3;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIN_OUT;
        this.regional = true;
        this.passive = Passive_1.Passive.ACCELERATION;
    }
}
exports.Varoom = Varoom;
class Revavroom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.speed = 40;
        this.def = 7;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIN_OUT;
        this.regional = true;
        this.passive = Passive_1.Passive.ACCELERATION;
    }
}
exports.Revavroom = Revavroom;
class Celesteela extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.speed = 40;
        this.def = 15;
        this.speDef = 15;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ULTRA_THRUSTERS;
    }
}
exports.Celesteela = Celesteela;
class Ledyba extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LEDIAN;
        this.hp = 60;
        this.atk = 5;
        this.speed = 55;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MACH_PUNCH;
        this.additional = true;
    }
}
exports.Ledyba = Ledyba;
class Ledian extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 9;
        this.speed = 55;
        this.def = 4;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MACH_PUNCH;
        this.additional = true;
    }
}
exports.Ledian = Ledian;
class Emolga extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 20;
        this.speed = 66;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ELECTRO_BALL;
    }
}
exports.Emolga = Emolga;
class Drilbur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.EXCADRILL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 8;
        this.speed = 56;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRILL_RUN;
        this.additional = true;
    }
}
exports.Drilbur = Drilbur;
class Excadrill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 19;
        this.speed = 56;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRILL_RUN;
        this.additional = true;
    }
}
exports.Excadrill = Excadrill;
class Togedemaru extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.speed = 50;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ZING_ZAP;
    }
}
exports.Togedemaru = Togedemaru;
class Dedenne extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.speed = 50;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 95;
        this.range = 1;
        this.skill = Ability_1.Ability.STATIC_SHOCK;
    }
}
exports.Dedenne = Dedenne;
class FalinksBrass extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 14;
        this.speed = 50;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NO_RETREAT;
        this.passive = Passive_1.Passive.FALINKS;
    }
    onAcquired(player) {
        player.effects.add(Effect_1.EffectEnum.FALINKS_BRASS);
    }
    afterSell(player) {
        player.effects.delete(Effect_1.EffectEnum.FALINKS_BRASS);
    }
}
exports.FalinksBrass = FalinksBrass;
class FalinksTrooper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 30;
        this.atk = 1;
        this.speed = 50;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TACKLE;
    }
    onAcquired(player) {
        player.effects.update(player.synergies, player.board);
    }
    afterSell(player) {
        player.effects.update(player.synergies, player.board);
    }
}
exports.FalinksTrooper = FalinksTrooper;
class Silicobra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SANDACONDA;
        this.hp = 80;
        this.atk = 10;
        this.speed = 48;
        this.def = 7;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SAND_SPIT;
        this.additional = true;
    }
}
exports.Silicobra = Silicobra;
class Sandaconda extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 21;
        this.speed = 48;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SAND_SPIT;
        this.additional = true;
    }
}
exports.Sandaconda = Sandaconda;
class Dunsparce extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.evolution = Pokemon_1.Pkm.DUDUNSPARCE;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player) => {
            const nbHoles = player.groundHoles.filter((hole) => hole === 5).length;
            pokemon.stacks = nbHoles;
            return nbHoles >= 10;
        });
        this.stacksRequired = 10;
        this.stars = 3;
        this.hp = 220;
        this.atk = 15;
        this.speed = 35;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPER_DRILL;
        this.passive = Passive_1.Passive.DUNSPARCE;
    }
}
exports.Dunsparce = Dunsparce;
class Dudunsparse extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 260;
        this.atk = 20;
        this.speed = 35;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPER_DRILL;
    }
}
exports.Dudunsparse = Dudunsparse;
class Smoliv extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DOLLIV;
        this.hp = 60;
        this.atk = 5;
        this.speed = 25;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.TERRAIN_PULSE;
    }
}
exports.Smoliv = Smoliv;
class Dolliv extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ARBOLIVA;
        this.hp = 110;
        this.atk = 10;
        this.speed = 25;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.TERRAIN_PULSE;
    }
}
exports.Dolliv = Dolliv;
class Arboliva extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.speed = 25;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.TERRAIN_PULSE;
    }
}
exports.Arboliva = Arboliva;
class Chespin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.QUILLADIN;
        this.hp = 60;
        this.atk = 7;
        this.speed = 41;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKY_SHIELD;
    }
}
exports.Chespin = Chespin;
class Quilladin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CHESNAUGHT;
        this.hp = 120;
        this.atk = 12;
        this.speed = 41;
        this.def = 9;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKY_SHIELD;
    }
}
exports.Quilladin = Quilladin;
class Chesnaught extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 23;
        this.speed = 41;
        this.def = 15;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKY_SHIELD;
    }
}
exports.Chesnaught = Chesnaught;
class Nymble extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LOKIX;
        this.hp = 80;
        this.atk = 8;
        this.speed = 60;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AXE_KICK;
        this.additional = true;
    }
}
exports.Nymble = Nymble;
class Lokix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 18;
        this.speed = 60;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AXE_KICK;
        this.additional = true;
    }
}
exports.Lokix = Lokix;
class Blipbug extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DOTTLER;
        this.hp = 60;
        this.atk = 4;
        this.speed = 58;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPANDING_FORCE;
        this.regional = true;
    }
}
exports.Blipbug = Blipbug;
class Dottler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ORBEETLE;
        this.hp = 110;
        this.atk = 8;
        this.speed = 58;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPANDING_FORCE;
        this.regional = true;
    }
}
exports.Dottler = Dottler;
class Orbeetle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 170;
        this.atk = 15;
        this.speed = 58;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPANDING_FORCE;
        this.regional = true;
    }
}
exports.Orbeetle = Orbeetle;
class Pachirisu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 14;
        this.speed = 61;
        this.def = 7;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
        this.passive = Passive_1.Passive.PACHIRISU;
    }
}
exports.Pachirisu = Pachirisu;
class Buzzwole extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.speed = 50;
        this.def = 15;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BULK_UP;
    }
}
exports.Buzzwole = Buzzwole;
class Yamask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.COFAGRIGUS;
        this.hp = 70;
        this.atk = 6;
        this.speed = 45;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SPITE;
        this.additional = true;
    }
}
exports.Yamask = Yamask;
class Cofagrigus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 15;
        this.speed = 45;
        this.def = 14;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SPITE;
        this.additional = true;
    }
}
exports.Cofagrigus = Cofagrigus;
class GalarianYamask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RUNERIGUS;
        this.hp = 65;
        this.atk = 5;
        this.speed = 45;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 95;
        this.range = 2;
        this.skill = Ability_1.Ability.GRUDGE;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.YAMASK)) &&
            regionSynergies.includes(Synergy_1.Synergy.MONSTER));
    }
}
exports.GalarianYamask = GalarianYamask;
class Runerigus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 140;
        this.atk = 14;
        this.speed = 45;
        this.def = 9;
        this.speDef = 7;
        this.maxPP = 95;
        this.range = 2;
        this.skill = Ability_1.Ability.GRUDGE;
        this.regional = true;
        this.additional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.YAMASK)) &&
            regionSynergies.includes(Synergy_1.Synergy.MONSTER));
    }
}
exports.Runerigus = Runerigus;
class Chewtle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DREDNAW;
        this.hp = 80;
        this.atk = 9;
        this.speed = 49;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.JAW_LOCK;
        this.additional = true;
    }
}
exports.Chewtle = Chewtle;
class Drednaw extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.speed = 49;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.JAW_LOCK;
        this.additional = true;
    }
}
exports.Drednaw = Drednaw;
class Greavard extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HOUNDSTONE;
        this.hp = 65;
        this.atk = 6;
        this.speed = 55;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 140;
        this.range = 1;
        this.skill = Ability_1.Ability.LAST_RESPECTS;
        this.additional = true;
        this.passive = Passive_1.Passive.LAST_RESPECTS;
    }
}
exports.Greavard = Greavard;
class Houndstone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 135;
        this.atk = 12;
        this.speed = 55;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 140;
        this.range = 1;
        this.skill = Ability_1.Ability.LAST_RESPECTS;
        this.additional = true;
        this.passive = Passive_1.Passive.LAST_RESPECTS;
    }
}
exports.Houndstone = Houndstone;
class Clobbopus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GRAPPLOCT;
        this.hp = 70;
        this.atk = 6;
        this.speed = 27;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.OCTOLOCK;
        this.additional = true;
    }
}
exports.Clobbopus = Clobbopus;
class Grapploct extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 14;
        this.speed = 27;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.OCTOLOCK;
        this.additional = true;
    }
}
exports.Grapploct = Grapploct;
class ChiYu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 28;
        this.speed = 57;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.BURNING_JEALOUSY;
        this.passive = Passive_1.Passive.BEADS_OF_RUIN;
    }
}
exports.ChiYu = ChiYu;
class Wimpod extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.WATER, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOLISOPOD;
        this.hp = 90;
        this.atk = 8;
        this.speed = 38;
        this.def = 7;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRST_IMPRESSION;
        this.additional = true;
        this.passive = Passive_1.Passive.EMERGENCY_EXIT;
    }
}
exports.Wimpod = Wimpod;
class Golisopod extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.WATER, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.speed = 38;
        this.def = 14;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRST_IMPRESSION;
        this.additional = true;
        this.passive = Passive_1.Passive.EMERGENCY_EXIT;
    }
}
exports.Golisopod = Golisopod;
const basculinOnAcquired = (player) => {
    ;
    [Pokemon_1.Pkm.BASCULIN_BLUE, Pokemon_1.Pkm.BASCULIN_RED, Pokemon_1.Pkm.BASCULIN_WHITE].every((basculin) => (0, schemas_1.schemaValues)(player.board).find((e) => e.name === basculin)) && player.titles.add(types_1.Title.AQUARIOPHILE);
};
class BasculinRed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.WILD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 160;
        this.atk = 15;
        this.speed = 56;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BARED_FANGS;
        this.passive = Passive_1.Passive.BASCULIN_RED_BLUE;
        this.onAcquired = basculinOnAcquired;
    }
}
exports.BasculinRed = BasculinRed;
class BasculinBlue extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.WILD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 160;
        this.atk = 15;
        this.speed = 56;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BARED_FANGS;
        this.passive = Passive_1.Passive.BASCULIN_RED_BLUE;
        this.onAcquired = basculinOnAcquired;
    }
}
exports.BasculinBlue = BasculinBlue;
class BasculinWhite extends Pokemon {
    constructor() {
        super(...arguments);
        this.killCount = 0;
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 160;
        this.atk = 15;
        this.speed = 56;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GRUDGE_DIVE;
        this.passive = Passive_1.Passive.BASCULIN_WHITE;
        this.evolutions = [Pokemon_1.Pkm.BASCULEGION_MALE, Pokemon_1.Pkm.BASCULEGION_FEMALE];
        this.evolutionRule = new evolution_rules_1.StackBasedEvolutionRule((pokemon) => {
            return pokemon.deathCount >= 5
                ? Pokemon_1.Pkm.BASCULEGION_FEMALE
                : Pokemon_1.Pkm.BASCULEGION_MALE;
        });
        this.stacksRequired = 5;
        this.onAcquired = basculinOnAcquired;
    }
}
exports.BasculinWhite = BasculinWhite;
class BasculegionMale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 210;
        this.atk = 25;
        this.speed = 56;
        this.def = 8;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GRUDGE_DIVE;
    }
}
exports.BasculegionMale = BasculegionMale;
class BasculegionFemale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 190;
        this.atk = 19;
        this.speed = 56;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.GRUDGE_DIVE;
    }
}
exports.BasculegionFemale = BasculegionFemale;
class Klink extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KLANG;
        this.hp = 50;
        this.atk = 4;
        this.speed = 35;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.GEAR_GRIND;
        this.passive = Passive_1.Passive.GEARS;
    }
}
exports.Klink = Klink;
class Klang extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KLINKLANG;
        this.hp = 100;
        this.atk = 7;
        this.speed = 35;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.GEAR_GRIND;
        this.passive = Passive_1.Passive.GEARS;
    }
}
exports.Klang = Klang;
class Klinklang extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 150;
        this.atk = 14;
        this.speed = 35;
        this.def = 9;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.GEAR_GRIND;
        this.passive = Passive_1.Passive.GEARS;
    }
}
exports.Klinklang = Klinklang;
class FlutterMane extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 17;
        this.speed = 59;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.MOONBLAST;
    }
}
exports.FlutterMane = FlutterMane;
class WalkingWake extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.speed = 70;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HYDRO_STEAM;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.DRAGON) ||
            regionSynergies.includes(Synergy_1.Synergy.FOSSIL) ||
            regionSynergies.includes(Synergy_1.Synergy.MONSTER));
    }
}
exports.WalkingWake = WalkingWake;
class Orthworm extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 185;
        this.atk = 12;
        this.speed = 40;
        this.def = 14;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PUMMELING_PAYBACK;
        this.passive = Passive_1.Passive.ORTHWORM;
    }
}
exports.Orthworm = Orthworm;
class IronThorns extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.speed = 30;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SURGE;
    }
}
exports.IronThorns = IronThorns;
class Tadbulb extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BELLIBOLT;
        this.hp = 85;
        this.atk = 5;
        this.speed = 29;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SUPERCELL_SLAM;
        this.passive = Passive_1.Passive.TADBULB;
        this.additional = true;
    }
}
exports.Tadbulb = Tadbulb;
class Bellibolt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 10;
        this.speed = 29;
        this.def = 10;
        this.speDef = 9;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SUPERCELL_SLAM;
        this.passive = Passive_1.Passive.TADBULB;
        this.additional = true;
    }
}
exports.Bellibolt = Bellibolt;
class Pincurchin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 15;
        this.speed = 30;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPARK;
        this.passive = Passive_1.Passive.PINCURCHIN;
    }
}
exports.Pincurchin = Pincurchin;
class Mudbray extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MUDSDALE;
        this.hp = 120;
        this.atk = 12;
        this.speed = 35;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 45;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_HORSEPOWER;
        this.passive = Passive_1.Passive.STAMINA;
        this.additional = true;
    }
}
exports.Mudbray = Mudbray;
class Mudsdale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 26;
        this.speed = 35;
        this.def = 12;
        this.speDef = 8;
        this.maxPP = 45;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_HORSEPOWER;
        this.passive = Passive_1.Passive.STAMINA;
        this.additional = true;
    }
}
exports.Mudsdale = Mudsdale;
class Skiddo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOGOAT;
        this.hp = 140;
        this.atk = 8;
        this.speed = 44;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CITY_SHUTTLE;
        this.additional = true;
    }
}
exports.Skiddo = Skiddo;
class Gogoat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 300;
        this.atk = 22;
        this.speed = 44;
        this.def = 10;
        this.speDef = 12;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CITY_SHUTTLE;
        this.additional = true;
    }
}
exports.Gogoat = Gogoat;
class Bunnelby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DIGGERSBY;
        this.hp = 80;
        this.atk = 7;
        this.speed = 50;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EAR_DIG;
        this.additional = true;
    }
}
exports.Bunnelby = Bunnelby;
class Diggersby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 15;
        this.speed = 50;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EAR_DIG;
        this.additional = true;
    }
}
exports.Diggersby = Diggersby;
class Scatterbug extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SPEWPA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule();
        this.hp = 70;
        this.atk = 4;
        this.speed = 52;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
        this.passive = Passive_1.Passive.HATCH;
    }
}
exports.Scatterbug = Scatterbug;
class Spewpa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolutions = [
            Pokemon_1.Pkm.VIVILLON,
            Pokemon_1.Pkm.VIVILLON_ICY_SNOW,
            Pokemon_1.Pkm.VIVILLON_POLAR,
            Pokemon_1.Pkm.VIVILLON_TUNDRA,
            Pokemon_1.Pkm.VIVILLON_CONTINENTAL,
            Pokemon_1.Pkm.VIVILLON_GARDEN,
            Pokemon_1.Pkm.VIVILLON_ELEGANT,
            Pokemon_1.Pkm.VIVILLON_MODERN,
            Pokemon_1.Pkm.VIVILLON_MARINE,
            Pokemon_1.Pkm.VIVILLON_ARCHIPELAGO,
            Pokemon_1.Pkm.VIVILLON_HIGH_PLAINS,
            Pokemon_1.Pkm.VIVILLON_SANDSTORM,
            Pokemon_1.Pkm.VIVILLON_RIVER,
            Pokemon_1.Pkm.VIVILLON_MONSOON,
            Pokemon_1.Pkm.VIVILLON_SAVANNA,
            Pokemon_1.Pkm.VIVILLON_SUN,
            Pokemon_1.Pkm.VIVILLON_OCEAN,
            Pokemon_1.Pkm.VIVILLON_JUNGLE,
            Pokemon_1.Pkm.VIVILLON_FANCY,
            Pokemon_1.Pkm.VIVILLON_POKE_BALL
        ];
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule((pokemon, player) => {
            return (0, config_1.getAltFormForPlayer)(Pokemon_1.Pkm.VIVILLON, player);
        });
        this.hp = 125;
        this.atk = 11;
        this.speed = 52;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
        this.passive = Passive_1.Passive.SPEWPA;
    }
}
exports.Spewpa = Spewpa;
class Vivillon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.Vivillon = Vivillon;
class VivillonIcySnow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.NORMAL
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonIcySnow = VivillonIcySnow;
class VivillonPolar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonPolar = VivillonPolar;
class VivillonTundra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonTundra = VivillonTundra;
class VivillonContinental extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonContinental = VivillonContinental;
class VivillonGarden extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.GRASS
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonGarden = VivillonGarden;
class VivillonElegant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonElegant = VivillonElegant;
class VivillonModern extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonModern = VivillonModern;
class VivillonMarine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.WATER
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonMarine = VivillonMarine;
class VivillonArchipelago extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonArchipelago = VivillonArchipelago;
class VivillonHighPlains extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonHighPlains = VivillonHighPlains;
class VivillonSandstorm extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonSandstorm = VivillonSandstorm;
class VivillonRiver extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonRiver = VivillonRiver;
class VivillonMonsoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.STEEL
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonMonsoon = VivillonMonsoon;
class VivillonSavanna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.ELECTRIC
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonSavanna = VivillonSavanna;
class VivillonSun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonSun = VivillonSun;
class VivillonOcean extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonOcean = VivillonOcean;
class VivillonJungle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonJungle = VivillonJungle;
class VivillonFancy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.FAIRY
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonFancy = VivillonFancy;
class VivillonPokeball extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 19;
        this.speed = 52;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.POWDER;
    }
}
exports.VivillonPokeball = VivillonPokeball;
class Lechonk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolution = Pokemon_1.Pkm.OINKOLOGNE_MALE;
        this.stars = 1;
        this.hp = 75;
        this.atk = 6;
        this.speed = 41;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LINGERING_AROMA;
        this.additional = true;
    }
}
exports.Lechonk = Lechonk;
class OinkologneMale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 15;
        this.speed = 41;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LINGERING_AROMA;
        this.additional = true;
    }
}
exports.OinkologneMale = OinkologneMale;
class OinkologneFemale extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GOURMET
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 185;
        this.atk = 13;
        this.speed = 50;
        this.def = 9;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.LINGERING_AROMA;
        this.additional = true;
    }
}
exports.OinkologneFemale = OinkologneFemale;
class Wooloo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DUBWOOL;
        this.hp = 60;
        this.atk = 5;
        this.speed = 56;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.passive = Passive_1.Passive.FUR_COAT;
        this.stacksRequired = 10;
        this.additional = true;
    }
}
exports.Wooloo = Wooloo;
class Dubwool extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 14;
        this.speed = 56;
        this.def = 8;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.passive = Passive_1.Passive.FUR_COAT;
        this.stacksRequired = 10;
        this.additional = true;
    }
}
exports.Dubwool = Dubwool;
class Yamper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BOLTUND;
        this.hp = 60;
        this.atk = 6;
        this.speed = 77;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ELECTRIFY;
        this.additional = true;
    }
}
exports.Yamper = Yamper;
class Boltund extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 14;
        this.speed = 77;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ELECTRIFY;
        this.additional = true;
    }
}
exports.Boltund = Boltund;
class GreatTusk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 185;
        this.atk = 20;
        this.speed = 56;
        this.def = 10;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADLONG_RUSH;
    }
}
exports.GreatTusk = GreatTusk;
class Finizen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.PALAFIN;
        this.hp = 200;
        this.atk = 12;
        this.speed = 64;
        this.def = 7;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.JET_PUNCH;
        this.passive = Passive_1.Passive.FINIZEN;
    }
}
exports.Finizen = Finizen;
class Palafin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.speed = 64;
        this.def = 7;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.JET_PUNCH;
        this.passive = Passive_1.Passive.FINIZEN;
    }
}
exports.Palafin = Palafin;
class PalafinHero extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 200;
        this.atk = 30;
        this.speed = 80;
        this.def = 12;
        this.speDef = 11;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.JET_PUNCH;
    }
}
exports.PalafinHero = PalafinHero;
class Mareanie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TOXAPEX;
        this.hp = 60;
        this.atk = 6;
        this.speed = 35;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BANEFUL_BUNKER;
        this.additional = true;
    }
}
exports.Mareanie = Mareanie;
class Toxapex extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 120;
        this.atk = 12;
        this.speed = 35;
        this.def = 20;
        this.speDef = 20;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BANEFUL_BUNKER;
        this.additional = true;
    }
}
exports.Toxapex = Toxapex;
class Dondozo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 15;
        this.speed = 30;
        this.def = 20;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ORDER_UP;
    }
}
exports.Dondozo = Dondozo;
class TatsugiriCurly extends Pokemon {
    constructor() {
        super(...arguments);
        this.canHoldItems = false;
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 18;
        this.speed = 50;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SOAK;
        this.passive = Passive_1.Passive.COMMANDER;
    }
}
exports.TatsugiriCurly = TatsugiriCurly;
class TatsugiriDroopy extends Pokemon {
    constructor() {
        super(...arguments);
        this.canHoldItems = false;
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 10;
        this.speed = 50;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SOAK;
        this.passive = Passive_1.Passive.COMMANDER;
    }
}
exports.TatsugiriDroopy = TatsugiriDroopy;
class TatsugiriStretchy extends Pokemon {
    constructor() {
        super(...arguments);
        this.canHoldItems = false;
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 10;
        this.speed = 75;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SOAK;
        this.passive = Passive_1.Passive.COMMANDER;
    }
}
exports.TatsugiriStretchy = TatsugiriStretchy;
class Cetoddle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CETITAN;
        this.hp = 90;
        this.atk = 5;
        this.speed = 48;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_SPINNER;
        this.regional = true;
    }
}
exports.Cetoddle = Cetoddle;
class Cetitan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 190;
        this.atk = 10;
        this.speed = 48;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_SPINNER;
        this.regional = true;
    }
}
exports.Cetitan = Cetitan;
class Bergmite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.AVALUGG;
        this.evolutions = [Pokemon_1.Pkm.AVALUGG, Pokemon_1.Pkm.HISUI_AVALUGG];
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (_pokemon, player) => {
            return player.regionalPokemons.includes(Pokemon_1.Pkm.HISUI_AVALUGG)
                ? Pokemon_1.Pkm.HISUI_AVALUGG
                : Pokemon_1.Pkm.AVALUGG;
        });
        this.hp = 90;
        this.atk = 5;
        this.speed = 28;
        this.def = 10;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MOUNTAIN_GALE;
        this.additional = true;
    }
}
exports.Bergmite = Bergmite;
class Avalugg extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 15;
        this.speed = 28;
        this.def = 20;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MOUNTAIN_GALE;
        this.additional = true;
        this.passive = Passive_1.Passive.AVALUGG;
    }
}
exports.Avalugg = Avalugg;
class HisuiAvalugg extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 17;
        this.speed = 38;
        this.def = 20;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MOUNTAIN_GALE;
        this.passive = Passive_1.Passive.AVALUGG;
        this.additional = true;
        this.regional = true;
    }
    isInRegion(map) {
        var _a;
        const regionSynergies = (_a = config_1.RegionDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.ROCK);
    }
}
exports.HisuiAvalugg = HisuiAvalugg;
class Karrablast extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ESCAVALIER;
        this.hp = 70;
        this.atk = 15;
        this.speed = 42;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TWINEEDLE;
        this.additional = true;
    }
}
exports.Karrablast = Karrablast;
class Escavalier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 30;
        this.speed = 21;
        this.def = 15;
        this.speDef = 25;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TWINEEDLE;
        this.additional = true;
    }
}
exports.Escavalier = Escavalier;
class Eiscue extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 175;
        this.atk = 12;
        this.speed = 32;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.passive = Passive_1.Passive.EISCUE_ICE_FACE;
    }
}
exports.Eiscue = Eiscue;
class EiscueNoice extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 175;
        this.atk = 12;
        this.speed = 83;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.passive = Passive_1.Passive.EISCUE_NOICE;
    }
}
exports.EiscueNoice = EiscueNoice;
class Dwebble extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CRUSTLE;
        this.hp = 90;
        this.atk = 12;
        this.speed = 30;
        this.def = 15;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_WRECKER;
        this.additional = true;
    }
}
exports.Dwebble = Dwebble;
class Crustle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 170;
        this.atk = 26;
        this.speed = 30;
        this.def = 25;
        this.speDef = 15;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_WRECKER;
        this.additional = true;
    }
}
exports.Crustle = Crustle;
class Skwovet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GREEDENT;
        this.hp = 90;
        this.atk = 7;
        this.speed = 28;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STUFF_CHEEKS;
        this.additional = true;
    }
}
exports.Skwovet = Skwovet;
class Greedent extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GOURMET]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 16;
        this.speed = 28;
        this.def = 10;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STUFF_CHEEKS;
        this.additional = true;
    }
}
exports.Greedent = Greedent;
class Quaxly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.QUAXWELL;
        this.hp = 60;
        this.atk = 6;
        this.speed = 55;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_STEP;
    }
}
exports.Quaxly = Quaxly;
class Quaxwell extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.QUAQUAVAL;
        this.hp = 120;
        this.atk = 12;
        this.speed = 55;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_STEP;
    }
}
exports.Quaxwell = Quaxwell;
class Quaquaval extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 24;
        this.speed = 55;
        this.def = 8;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_STEP;
    }
}
exports.Quaquaval = Quaquaval;
class Komala extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 20;
        this.speed = 45;
        this.def = 7;
        this.speDef = 13;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SNORE;
        this.passive = Passive_1.Passive.COMATOSE;
    }
}
exports.Komala = Komala;
class Tarountula extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SPIDOPS;
        this.hp = 65;
        this.atk = 6;
        this.speed = 30;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SILK_TRAP;
        this.additional = true;
    }
}
exports.Tarountula = Tarountula;
class Spidops extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 135;
        this.atk = 12;
        this.speed = 30;
        this.def = 9;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SILK_TRAP;
        this.additional = true;
    }
}
exports.Spidops = Spidops;
class SlitherWing extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 20;
        this.speed = 45;
        this.def = 6;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SKITTER_SMACK;
    }
}
exports.SlitherWing = SlitherWing;
exports.PokemonClasses = {
    [Pokemon_1.Pkm.DEFAULT]: Pokemon,
    [Pokemon_1.Pkm.DITTO]: Ditto,
    [Pokemon_1.Pkm.BULBASAUR]: Bulbasaur,
    [Pokemon_1.Pkm.IVYSAUR]: Ivysaur,
    [Pokemon_1.Pkm.VENUSAUR]: Venusaur,
    [Pokemon_1.Pkm.CHARMANDER]: Charmander,
    [Pokemon_1.Pkm.CHARMELEON]: Charmeleon,
    [Pokemon_1.Pkm.CHARIZARD]: Charizard,
    [Pokemon_1.Pkm.SQUIRTLE]: Squirtle,
    [Pokemon_1.Pkm.WARTORTLE]: Wartortle,
    [Pokemon_1.Pkm.BLASTOISE]: Blastoise,
    [Pokemon_1.Pkm.SLOWPOKE]: Slowpoke,
    [Pokemon_1.Pkm.SLOWBRO]: Slowbro,
    [Pokemon_1.Pkm.SLOWKING]: Slowking,
    [Pokemon_1.Pkm.GEODUDE]: Geodude,
    [Pokemon_1.Pkm.GRAVELER]: Graveler,
    [Pokemon_1.Pkm.GOLEM]: Golem,
    [Pokemon_1.Pkm.AZURILL]: Azurill,
    [Pokemon_1.Pkm.MARILL]: Marill,
    [Pokemon_1.Pkm.AZUMARILL]: Azumarill,
    [Pokemon_1.Pkm.ZUBAT]: Zubat,
    [Pokemon_1.Pkm.GOLBAT]: Golbat,
    [Pokemon_1.Pkm.CROBAT]: Crobat,
    [Pokemon_1.Pkm.AMPHAROS]: Ampharos,
    [Pokemon_1.Pkm.MAREEP]: Mareep,
    [Pokemon_1.Pkm.FLAFFY]: Flaffy,
    [Pokemon_1.Pkm.CLEFFA]: Cleffa,
    [Pokemon_1.Pkm.CLEFAIRY]: Clefairy,
    [Pokemon_1.Pkm.CLEFABLE]: Clefable,
    [Pokemon_1.Pkm.IGGLYBUFF]: Igglybuff,
    [Pokemon_1.Pkm.JIGGLYPUFF]: Jigglypuff,
    [Pokemon_1.Pkm.WIGGLYTUFF]: Wigglytuff,
    [Pokemon_1.Pkm.CATERPIE]: Caterpie,
    [Pokemon_1.Pkm.METAPOD]: Metapod,
    [Pokemon_1.Pkm.BUTTERFREE]: Butterfree,
    [Pokemon_1.Pkm.WEEDLE]: Weedle,
    [Pokemon_1.Pkm.KAKUNA]: Kakuna,
    [Pokemon_1.Pkm.BEEDRILL]: Beedrill,
    [Pokemon_1.Pkm.PIDGEY]: Pidgey,
    [Pokemon_1.Pkm.PIDGEOTTO]: Pidgeotto,
    [Pokemon_1.Pkm.PIDGEOT]: Pidgeot,
    [Pokemon_1.Pkm.HOPPIP]: Hoppip,
    [Pokemon_1.Pkm.SKIPLOOM]: Skiploom,
    [Pokemon_1.Pkm.JUMPLUFF]: Jumpluff,
    [Pokemon_1.Pkm.SEEDOT]: Seedot,
    [Pokemon_1.Pkm.NUZLEAF]: Nuzleaf,
    [Pokemon_1.Pkm.SHIFTRY]: Shiftry,
    [Pokemon_1.Pkm.STARLY]: Starly,
    [Pokemon_1.Pkm.STARAVIA]: Staravia,
    [Pokemon_1.Pkm.STARAPTOR]: Staraptor,
    [Pokemon_1.Pkm.CHIKORITA]: Chikorita,
    [Pokemon_1.Pkm.BAYLEEF]: Bayleef,
    [Pokemon_1.Pkm.MEGANIUM]: Meganium,
    [Pokemon_1.Pkm.CYNDAQUIL]: Cyndaquil,
    [Pokemon_1.Pkm.QUILAVA]: Quilava,
    [Pokemon_1.Pkm.TYPHLOSION]: Typhlosion,
    [Pokemon_1.Pkm.TOTODILE]: Totodile,
    [Pokemon_1.Pkm.CROCONAW]: Croconaw,
    [Pokemon_1.Pkm.FERALIGATR]: Feraligatr,
    [Pokemon_1.Pkm.TREECKO]: Treecko,
    [Pokemon_1.Pkm.GROVYLE]: Grovyle,
    [Pokemon_1.Pkm.SCEPTILE]: Sceptile,
    [Pokemon_1.Pkm.TORCHIC]: Torchic,
    [Pokemon_1.Pkm.COMBUSKEN]: Combusken,
    [Pokemon_1.Pkm.BLAZIKEN]: Blaziken,
    [Pokemon_1.Pkm.MUDKIP]: Mudkip,
    [Pokemon_1.Pkm.MARSHTOMP]: Marshtomp,
    [Pokemon_1.Pkm.SWAMPERT]: Swampert,
    [Pokemon_1.Pkm.TURTWIG]: Turtwig,
    [Pokemon_1.Pkm.GROTLE]: Grotle,
    [Pokemon_1.Pkm.TORTERRA]: Torterra,
    [Pokemon_1.Pkm.CHIMCHAR]: Chimchar,
    [Pokemon_1.Pkm.MONFERNO]: Monferno,
    [Pokemon_1.Pkm.INFERNAPE]: Infernape,
    [Pokemon_1.Pkm.PIPLUP]: Piplup,
    [Pokemon_1.Pkm.PRINPLUP]: Prinplup,
    [Pokemon_1.Pkm.EMPOLEON]: Empoleon,
    [Pokemon_1.Pkm.NIDORANF]: NidoranF,
    [Pokemon_1.Pkm.NIDORINA]: Nidorina,
    [Pokemon_1.Pkm.NIDOQUEEN]: Nidoqueen,
    [Pokemon_1.Pkm.NIDORANM]: NidoranM,
    [Pokemon_1.Pkm.NIDORINO]: Nidorino,
    [Pokemon_1.Pkm.NIDOKING]: Nidoking,
    [Pokemon_1.Pkm.PICHU]: Pichu,
    [Pokemon_1.Pkm.PIKACHU]: Pikachu,
    [Pokemon_1.Pkm.RAICHU]: Raichu,
    [Pokemon_1.Pkm.MACHOP]: Machop,
    [Pokemon_1.Pkm.MACHOKE]: Machoke,
    [Pokemon_1.Pkm.MACHAMP]: Machamp,
    [Pokemon_1.Pkm.HORSEA]: Horsea,
    [Pokemon_1.Pkm.SEADRA]: Seadra,
    [Pokemon_1.Pkm.KINGDRA]: Kingdra,
    [Pokemon_1.Pkm.TRAPINCH]: Trapinch,
    [Pokemon_1.Pkm.VIBRAVA]: Vibrava,
    [Pokemon_1.Pkm.FLYGON]: Flygon,
    [Pokemon_1.Pkm.SPHEAL]: Spheal,
    [Pokemon_1.Pkm.SEALEO]: Sealeo,
    [Pokemon_1.Pkm.WALREIN]: Walrein,
    [Pokemon_1.Pkm.ARON]: Aron,
    [Pokemon_1.Pkm.LAIRON]: Lairon,
    [Pokemon_1.Pkm.AGGRON]: Aggron,
    [Pokemon_1.Pkm.MAGNEMITE]: Magnemite,
    [Pokemon_1.Pkm.MAGNETON]: Magneton,
    [Pokemon_1.Pkm.MAGNEZONE]: Magnezone,
    [Pokemon_1.Pkm.RHYHORN]: Rhyhorn,
    [Pokemon_1.Pkm.RHYDON]: Rhydon,
    [Pokemon_1.Pkm.RHYPERIOR]: Rhyperior,
    [Pokemon_1.Pkm.TOGEPI]: Togepi,
    [Pokemon_1.Pkm.TOGETIC]: Togetic,
    [Pokemon_1.Pkm.TOGEKISS]: Togekiss,
    [Pokemon_1.Pkm.DUSKULL]: Duskull,
    [Pokemon_1.Pkm.DUSCLOPS]: Dusclops,
    [Pokemon_1.Pkm.DUSKNOIR]: Dusknoir,
    [Pokemon_1.Pkm.LOTAD]: Lotad,
    [Pokemon_1.Pkm.LOMBRE]: Lombre,
    [Pokemon_1.Pkm.LUDICOLO]: Ludicolo,
    [Pokemon_1.Pkm.SHINX]: Shinx,
    [Pokemon_1.Pkm.LUXIO]: Luxio,
    [Pokemon_1.Pkm.LUXRAY]: Luxray,
    [Pokemon_1.Pkm.POLIWAG]: Poliwag,
    [Pokemon_1.Pkm.POLIWHIRL]: Poliwhirl,
    [Pokemon_1.Pkm.POLITOED]: Politoed,
    [Pokemon_1.Pkm.ABRA]: Abra,
    [Pokemon_1.Pkm.KADABRA]: Kadabra,
    [Pokemon_1.Pkm.ALAKAZAM]: Alakazam,
    [Pokemon_1.Pkm.GASTLY]: Gastly,
    [Pokemon_1.Pkm.HAUNTER]: Haunter,
    [Pokemon_1.Pkm.GENGAR]: Gengar,
    [Pokemon_1.Pkm.DRATINI]: Dratini,
    [Pokemon_1.Pkm.DRAGONAIR]: Dragonair,
    [Pokemon_1.Pkm.DRAGONITE]: Dragonite,
    [Pokemon_1.Pkm.LARVITAR]: Larvitar,
    [Pokemon_1.Pkm.PUPITAR]: Pupitar,
    [Pokemon_1.Pkm.TYRANITAR]: Tyranitar,
    [Pokemon_1.Pkm.SLAKOTH]: Slakoth,
    [Pokemon_1.Pkm.VIGOROTH]: Vigoroth,
    [Pokemon_1.Pkm.SLAKING]: Slaking,
    [Pokemon_1.Pkm.RALTS]: Ralts,
    [Pokemon_1.Pkm.KIRLIA]: Kirlia,
    [Pokemon_1.Pkm.GARDEVOIR]: Gardevoir,
    [Pokemon_1.Pkm.BAGON]: Bagon,
    [Pokemon_1.Pkm.SHELGON]: Shelgon,
    [Pokemon_1.Pkm.SALAMENCE]: Salamence,
    [Pokemon_1.Pkm.BELDUM]: Beldum,
    [Pokemon_1.Pkm.METANG]: Metang,
    [Pokemon_1.Pkm.METAGROSS]: Metagross,
    [Pokemon_1.Pkm.GIBLE]: Gible,
    [Pokemon_1.Pkm.GABITE]: Gabite,
    [Pokemon_1.Pkm.GARCHOMP]: Garchomp,
    [Pokemon_1.Pkm.ELEKID]: Elekid,
    [Pokemon_1.Pkm.ELECTABUZZ]: Electabuzz,
    [Pokemon_1.Pkm.ELECTIVIRE]: Electivire,
    [Pokemon_1.Pkm.MAGBY]: Magby,
    [Pokemon_1.Pkm.MAGMAR]: Magmar,
    [Pokemon_1.Pkm.MAGMORTAR]: Magmortar,
    [Pokemon_1.Pkm.MUNCHLAX]: Munchlax,
    [Pokemon_1.Pkm.SNORLAX]: Snorlax,
    [Pokemon_1.Pkm.GROWLITHE]: Growlithe,
    [Pokemon_1.Pkm.ARCANINE]: Arcanine,
    [Pokemon_1.Pkm.HISUI_GROWLITHE]: HisuiGrowlithe,
    [Pokemon_1.Pkm.HISUI_ARCANINE]: HisuiArcanine,
    [Pokemon_1.Pkm.ONIX]: Onix,
    [Pokemon_1.Pkm.STEELIX]: Steelix,
    [Pokemon_1.Pkm.SCYTHER]: Scyther,
    [Pokemon_1.Pkm.SCIZOR]: Scizor,
    [Pokemon_1.Pkm.KLEAVOR]: Kleavor,
    [Pokemon_1.Pkm.RIOLU]: Riolu,
    [Pokemon_1.Pkm.LUCARIO]: Lucario,
    [Pokemon_1.Pkm.MAGIKARP]: Magikarp,
    [Pokemon_1.Pkm.RATTATA]: Rattata,
    [Pokemon_1.Pkm.ALOLAN_RATTATA]: AlolanRattata,
    [Pokemon_1.Pkm.RATICATE]: Raticate,
    [Pokemon_1.Pkm.ALOLAN_RATICATE]: AlolanRaticate,
    [Pokemon_1.Pkm.SPEAROW]: Spearow,
    [Pokemon_1.Pkm.FEAROW]: Fearow,
    [Pokemon_1.Pkm.GYARADOS]: Gyarados,
    [Pokemon_1.Pkm.LUGIA]: Lugia,
    [Pokemon_1.Pkm.SHADOW_LUGIA]: ShadowLugia,
    [Pokemon_1.Pkm.ZAPDOS]: Zapdos,
    [Pokemon_1.Pkm.MOLTRES]: Moltres,
    [Pokemon_1.Pkm.ARTICUNO]: Articuno,
    [Pokemon_1.Pkm.GALARIAN_ARTICUNO]: GalarianArticuno,
    [Pokemon_1.Pkm.GALARIAN_ZAPDOS]: GalarianZapdos,
    [Pokemon_1.Pkm.GALARIAN_MOLTRES]: GalarianMoltres,
    [Pokemon_1.Pkm.DIALGA]: Dialga,
    [Pokemon_1.Pkm.PALKIA]: Palkia,
    [Pokemon_1.Pkm.SUICUNE]: Suicune,
    [Pokemon_1.Pkm.RAIKOU]: Raikou,
    [Pokemon_1.Pkm.ENTEI]: Entei,
    [Pokemon_1.Pkm.KYOGRE]: Kyogre,
    [Pokemon_1.Pkm.GROUDON]: Groudon,
    [Pokemon_1.Pkm.RAYQUAZA]: Rayquaza,
    [Pokemon_1.Pkm.MEGA_RAYQUAZA]: MegaRayquaza,
    [Pokemon_1.Pkm.REGICE]: Regice,
    [Pokemon_1.Pkm.REGIROCK]: Regirock,
    [Pokemon_1.Pkm.REGISTEEL]: Registeel,
    [Pokemon_1.Pkm.REGIGIGAS]: Regigigas,
    [Pokemon_1.Pkm.GIRATINA]: Giratina,
    [Pokemon_1.Pkm.EEVEE]: Eevee,
    [Pokemon_1.Pkm.VAPOREON]: Vaporeon,
    [Pokemon_1.Pkm.JOLTEON]: Jolteon,
    [Pokemon_1.Pkm.FLAREON]: Flareon,
    [Pokemon_1.Pkm.ESPEON]: Espeon,
    [Pokemon_1.Pkm.UMBREON]: Umbreon,
    [Pokemon_1.Pkm.LEAFEON]: Leafeon,
    [Pokemon_1.Pkm.SYLVEON]: Sylveon,
    [Pokemon_1.Pkm.GLACEON]: Glaceon,
    [Pokemon_1.Pkm.MEDITITE]: Meditite,
    [Pokemon_1.Pkm.MEDICHAM]: Medicham,
    [Pokemon_1.Pkm.NUMEL]: Numel,
    [Pokemon_1.Pkm.CAMERUPT]: Camerupt,
    [Pokemon_1.Pkm.DARKRAI]: Darkrai,
    [Pokemon_1.Pkm.LITWICK]: Litwick,
    [Pokemon_1.Pkm.LAMPENT]: Lampent,
    [Pokemon_1.Pkm.CHANDELURE]: Chandelure,
    [Pokemon_1.Pkm.BELLSPROUT]: Bellsprout,
    [Pokemon_1.Pkm.WEEPINBELL]: Weepinbell,
    [Pokemon_1.Pkm.VICTREEBEL]: Victreebel,
    [Pokemon_1.Pkm.SWINUB]: Swinub,
    [Pokemon_1.Pkm.PILOSWINE]: Piloswine,
    [Pokemon_1.Pkm.MAMOSWINE]: Mamoswine,
    [Pokemon_1.Pkm.SNORUNT]: Snorunt,
    [Pokemon_1.Pkm.GLALIE]: Glalie,
    [Pokemon_1.Pkm.FROSLASS]: Froslass,
    [Pokemon_1.Pkm.SNOVER]: Snover,
    [Pokemon_1.Pkm.ABOMASNOW]: Abomasnow,
    [Pokemon_1.Pkm.VANILLITE]: Vanillite,
    [Pokemon_1.Pkm.VANILLISH]: Vanillish,
    [Pokemon_1.Pkm.VANILLUXE]: Vanilluxe,
    [Pokemon_1.Pkm.LARVESTA]: Larvesta,
    [Pokemon_1.Pkm.VOLCARONA]: Volcarona,
    [Pokemon_1.Pkm.LANDORUS]: Landorus,
    [Pokemon_1.Pkm.THUNDURUS]: Thundurus,
    [Pokemon_1.Pkm.TORNADUS]: Tornadus,
    [Pokemon_1.Pkm.ENAMORUS]: Enamorus,
    [Pokemon_1.Pkm.KELDEO]: Keldeo,
    [Pokemon_1.Pkm.TERRAKION]: Terrakion,
    [Pokemon_1.Pkm.VIRIZION]: Virizion,
    [Pokemon_1.Pkm.COBALION]: Cobalion,
    [Pokemon_1.Pkm.MANAPHY]: Manaphy,
    [Pokemon_1.Pkm.PHIONE]: Phione,
    [Pokemon_1.Pkm.SPIRITOMB]: Spiritomb,
    [Pokemon_1.Pkm.ABSOL]: Absol,
    [Pokemon_1.Pkm.LAPRAS]: Lapras,
    [Pokemon_1.Pkm.LATIAS]: Latias,
    [Pokemon_1.Pkm.LATIOS]: Latios,
    [Pokemon_1.Pkm.MESPRIT]: Mesprit,
    [Pokemon_1.Pkm.AZELF]: Azelf,
    [Pokemon_1.Pkm.UXIE]: Uxie,
    [Pokemon_1.Pkm.MEWTWO]: Mewtwo,
    [Pokemon_1.Pkm.SHADOW_MEWTWO]: ShadowMewtwo,
    [Pokemon_1.Pkm.KYUREM]: Kyurem,
    [Pokemon_1.Pkm.RESHIRAM]: Reshiram,
    [Pokemon_1.Pkm.ZEKROM]: Zekrom,
    [Pokemon_1.Pkm.CELEBI]: Celebi,
    [Pokemon_1.Pkm.VICTINI]: Victini,
    [Pokemon_1.Pkm.JIRACHI]: Jirachi,
    [Pokemon_1.Pkm.ARCEUS]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_BUG]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_DARK]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_DRAGON]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_ELECTRIC]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_FIGHTING]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_FIRE]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_FLYING]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_GHOST]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_GRASS]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_GROUND]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_ICE]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_POISON]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_PSYCHIC]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_ROCK]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_STEEL]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_WATER]: Arceus,
    [Pokemon_1.Pkm.ARCEUS_FAIRY]: Arceus,
    [Pokemon_1.Pkm.SHAYMIN]: Shaymin,
    [Pokemon_1.Pkm.SHAYMIN_SKY]: ShayminSky,
    [Pokemon_1.Pkm.CRESSELIA]: Cresselia,
    [Pokemon_1.Pkm.HEATRAN]: Heatran,
    [Pokemon_1.Pkm.HO_OH]: HooH,
    [Pokemon_1.Pkm.ROTOM]: Rotom,
    [Pokemon_1.Pkm.ROTOM_HEAT]: RotomHeat,
    [Pokemon_1.Pkm.ROTOM_WASH]: RotomWash,
    [Pokemon_1.Pkm.ROTOM_FROST]: RotomFrost,
    [Pokemon_1.Pkm.ROTOM_FAN]: RotomFan,
    [Pokemon_1.Pkm.ROTOM_MOW]: RotomMow,
    [Pokemon_1.Pkm.ROTOM_DRONE]: RotomDrone,
    [Pokemon_1.Pkm.AERODACTYL]: Aerodactyl,
    [Pokemon_1.Pkm.SWABLU]: Swablu,
    [Pokemon_1.Pkm.CARVANHA]: Carvanha,
    [Pokemon_1.Pkm.PRIMAL_KYOGRE]: PrimalKyogre,
    [Pokemon_1.Pkm.PRIMAL_GROUDON]: PrimalGroudon,
    [Pokemon_1.Pkm.MEOWTH]: Meowth,
    [Pokemon_1.Pkm.PERSIAN]: Persian,
    [Pokemon_1.Pkm.ALOLAN_MEOWTH]: AlolanMeowth,
    [Pokemon_1.Pkm.ALOLAN_PERSIAN]: AlolanPersian,
    [Pokemon_1.Pkm.DEINO]: Deino,
    [Pokemon_1.Pkm.ZWEILOUS]: Zweilous,
    [Pokemon_1.Pkm.HYDREIGON]: Hydreigon,
    [Pokemon_1.Pkm.SANDILE]: Sandile,
    [Pokemon_1.Pkm.KROKOROK]: Krokorok,
    [Pokemon_1.Pkm.KROOKODILE]: Krookodile,
    [Pokemon_1.Pkm.SOLOSIS]: Solosis,
    [Pokemon_1.Pkm.DUOSION]: Duosion,
    [Pokemon_1.Pkm.REUNICLUS]: Reuniclus,
    [Pokemon_1.Pkm.ODDISH]: Oddish,
    [Pokemon_1.Pkm.GLOOM]: Gloom,
    [Pokemon_1.Pkm.VILEPLUME]: Vileplume,
    [Pokemon_1.Pkm.BELLOSSOM]: Bellossom,
    [Pokemon_1.Pkm.AMAURA]: Amaura,
    [Pokemon_1.Pkm.AURORUS]: Aurorus,
    [Pokemon_1.Pkm.ANORITH]: Anorith,
    [Pokemon_1.Pkm.ARMALDO]: Armaldo,
    [Pokemon_1.Pkm.ARCHEN]: Archen,
    [Pokemon_1.Pkm.ARCHEOPS]: Archeops,
    [Pokemon_1.Pkm.SHIELDON]: Shieldon,
    [Pokemon_1.Pkm.BASTIODON]: Bastiodon,
    [Pokemon_1.Pkm.LILEEP]: Lileep,
    [Pokemon_1.Pkm.CRADILY]: Cradily,
    [Pokemon_1.Pkm.OMANYTE]: Omanyte,
    [Pokemon_1.Pkm.OMASTAR]: Omastar,
    [Pokemon_1.Pkm.CRANIDOS]: Cranidos,
    [Pokemon_1.Pkm.RAMPARDOS]: Rampardos,
    [Pokemon_1.Pkm.TYRUNT]: Tyrunt,
    [Pokemon_1.Pkm.TYRANTRUM]: Tyrantrum,
    [Pokemon_1.Pkm.KABUTO]: Kabuto,
    [Pokemon_1.Pkm.KABUTOPS]: Kabutops,
    [Pokemon_1.Pkm.BUDEW]: Budew,
    [Pokemon_1.Pkm.ROSELIA]: Roselia,
    [Pokemon_1.Pkm.ROSERADE]: Roserade,
    [Pokemon_1.Pkm.BUNEARY]: Buneary,
    [Pokemon_1.Pkm.LOPUNNY]: Lopunny,
    [Pokemon_1.Pkm.AXEW]: Axew,
    [Pokemon_1.Pkm.FRAXURE]: Fraxure,
    [Pokemon_1.Pkm.HAXORUS]: Haxorus,
    [Pokemon_1.Pkm.VENIPEDE]: Venipede,
    [Pokemon_1.Pkm.WHIRLIPEDE]: Whirlipede,
    [Pokemon_1.Pkm.SCOLIPEDE]: Scolipede,
    [Pokemon_1.Pkm.PORYGON]: Porygon,
    [Pokemon_1.Pkm.PORYGON_2]: Porygon2,
    [Pokemon_1.Pkm.PORYGON_Z]: PorygonZ,
    [Pokemon_1.Pkm.ELECTRIKE]: Electrike,
    [Pokemon_1.Pkm.MANECTRIC]: Manectric,
    [Pokemon_1.Pkm.SHUPPET]: Shuppet,
    [Pokemon_1.Pkm.BANETTE]: Banette,
    [Pokemon_1.Pkm.HONEDGE]: Honedge,
    [Pokemon_1.Pkm.DOUBLADE]: Doublade,
    [Pokemon_1.Pkm.AEGISLASH]: Aegislash,
    [Pokemon_1.Pkm.AEGISLASH_BLADE]: AegislashBlade,
    [Pokemon_1.Pkm.CUBONE]: Cubone,
    [Pokemon_1.Pkm.MAROWAK]: Marowak,
    [Pokemon_1.Pkm.ALOLAN_MAROWAK]: AlolanMarowak,
    [Pokemon_1.Pkm.WHISMUR]: Whismur,
    [Pokemon_1.Pkm.LOUDRED]: Loudred,
    [Pokemon_1.Pkm.EXPLOUD]: Exploud,
    [Pokemon_1.Pkm.TYMPOLE]: Tympole,
    [Pokemon_1.Pkm.PALPITOAD]: Palpitoad,
    [Pokemon_1.Pkm.SEISMITOAD]: Seismitoad,
    [Pokemon_1.Pkm.SEWADDLE]: Sewaddle,
    [Pokemon_1.Pkm.SWADLOON]: Swadloon,
    [Pokemon_1.Pkm.LEAVANNY]: Leavanny,
    [Pokemon_1.Pkm.FLABEBE]: Flabebe,
    [Pokemon_1.Pkm.FLABEBE_BLUE]: Flabebe,
    [Pokemon_1.Pkm.FLABEBE_ORANGE]: Flabebe,
    [Pokemon_1.Pkm.FLABEBE_WHITE]: Flabebe,
    [Pokemon_1.Pkm.FLABEBE_YELLOW]: Flabebe,
    [Pokemon_1.Pkm.FLOETTE]: Floette,
    [Pokemon_1.Pkm.FLOETTE_BLUE]: Floette,
    [Pokemon_1.Pkm.FLOETTE_ORANGE]: Floette,
    [Pokemon_1.Pkm.FLOETTE_WHITE]: Floette,
    [Pokemon_1.Pkm.FLOETTE_YELLOW]: Floette,
    [Pokemon_1.Pkm.FLORGES]: Florges,
    [Pokemon_1.Pkm.FLORGES_BLUE]: Florges,
    [Pokemon_1.Pkm.FLORGES_ORANGE]: Florges,
    [Pokemon_1.Pkm.FLORGES_WHITE]: Florges,
    [Pokemon_1.Pkm.FLORGES_YELLOW]: Florges,
    [Pokemon_1.Pkm.JANGMO_O]: JangmoO,
    [Pokemon_1.Pkm.HAKAMO_O]: HakamoO,
    [Pokemon_1.Pkm.KOMMO_O]: KommoO,
    [Pokemon_1.Pkm.MELOETTA]: Meloetta,
    [Pokemon_1.Pkm.PIROUETTE_MELOETTA]: PirouetteMeloetta,
    [Pokemon_1.Pkm.ALTARIA]: Altaria,
    [Pokemon_1.Pkm.CASTFORM]: Castform,
    [Pokemon_1.Pkm.CASTFORM_SUN]: CastformSun,
    [Pokemon_1.Pkm.CASTFORM_RAIN]: CastformRain,
    [Pokemon_1.Pkm.CASTFORM_HAIL]: CastformHail,
    [Pokemon_1.Pkm.CORPHISH]: Corphish,
    [Pokemon_1.Pkm.CRAWDAUNT]: Crawdaunt,
    [Pokemon_1.Pkm.JOLTIK]: Joltik,
    [Pokemon_1.Pkm.GALVANTULA]: Galvantula,
    [Pokemon_1.Pkm.GENESECT]: Genesect,
    [Pokemon_1.Pkm.DIANCIE]: Diancie,
    [Pokemon_1.Pkm.HATENNA]: Hatenna,
    [Pokemon_1.Pkm.HATTREM]: Hattrem,
    [Pokemon_1.Pkm.HATTERENE]: Hatterene,
    [Pokemon_1.Pkm.FENNEKIN]: Fennekin,
    [Pokemon_1.Pkm.BRAIXEN]: Braixen,
    [Pokemon_1.Pkm.DELPHOX]: Delphox,
    [Pokemon_1.Pkm.MAKUHITA]: Makuhita,
    [Pokemon_1.Pkm.HARIYAMA]: Hariyama,
    [Pokemon_1.Pkm.REGIELEKI]: Regieleki,
    [Pokemon_1.Pkm.REGIDRAGO]: Regidrago,
    [Pokemon_1.Pkm.GUZZLORD]: Guzzlord,
    [Pokemon_1.Pkm.ETERNATUS]: Eternatus,
    [Pokemon_1.Pkm.PONYTA]: Ponyta,
    [Pokemon_1.Pkm.RAPIDASH]: Rapidash,
    [Pokemon_1.Pkm.GALARIAN_PONYTA]: GalarianPonyta,
    [Pokemon_1.Pkm.GALARIAN_RAPIDASH]: GalarianRapidash,
    [Pokemon_1.Pkm.NINCADA]: Nincada,
    [Pokemon_1.Pkm.NINJASK]: Ninjask,
    [Pokemon_1.Pkm.SHEDINJA]: Shedinja,
    [Pokemon_1.Pkm.NOIBAT]: Noibat,
    [Pokemon_1.Pkm.NOIVERN]: Noivern,
    [Pokemon_1.Pkm.PUMPKABOO]: Pumpkaboo,
    [Pokemon_1.Pkm.GOURGEIST]: Gourgeist,
    [Pokemon_1.Pkm.CACNEA]: Cacnea,
    [Pokemon_1.Pkm.CACTURNE]: Cacturne,
    [Pokemon_1.Pkm.RELICANTH]: Relicanth,
    [Pokemon_1.Pkm.TAUROS]: Tauros,
    [Pokemon_1.Pkm.TAUROS_AQUA_BREED]: TaurosAquaBreed,
    [Pokemon_1.Pkm.TAUROS_BLAZE_BREED]: TaurosBlazeBreed,
    [Pokemon_1.Pkm.TAUROS_COMBAT_BREED]: TaurosCombatBreed,
    [Pokemon_1.Pkm.HAPPINY]: Happiny,
    [Pokemon_1.Pkm.CHANSEY]: Chansey,
    [Pokemon_1.Pkm.BLISSEY]: Blissey,
    [Pokemon_1.Pkm.TAPU_KOKO]: TapuKoko,
    [Pokemon_1.Pkm.TAPU_LELE]: TapuLele,
    [Pokemon_1.Pkm.STAKATAKA]: Stakataka,
    [Pokemon_1.Pkm.BLACEPHALON]: Blacephalon,
    [Pokemon_1.Pkm.HOUNDOUR]: Houndour,
    [Pokemon_1.Pkm.HOUNDOOM]: Houndoom,
    [Pokemon_1.Pkm.CLAMPERL]: Clamperl,
    [Pokemon_1.Pkm.HUNTAIL]: Huntail,
    [Pokemon_1.Pkm.GOREBYSS]: Gorebyss,
    [Pokemon_1.Pkm.SMOOCHUM]: Smoochum,
    [Pokemon_1.Pkm.JYNX]: Jynx,
    [Pokemon_1.Pkm.SALANDIT]: Salandit,
    [Pokemon_1.Pkm.SALAZZLE]: Salazzle,
    [Pokemon_1.Pkm.VENONAT]: Venonat,
    [Pokemon_1.Pkm.VENOMOTH]: Venomoth,
    [Pokemon_1.Pkm.VOLTORB]: Voltorb,
    [Pokemon_1.Pkm.ELECTRODE]: Electrode,
    [Pokemon_1.Pkm.SLUGMA]: Slugma,
    [Pokemon_1.Pkm.MAGCARGO]: Magcargo,
    [Pokemon_1.Pkm.SNEASEL]: Sneasel,
    [Pokemon_1.Pkm.WEAVILE]: Weavile,
    [Pokemon_1.Pkm.CROAGUNK]: Croagunk,
    [Pokemon_1.Pkm.TOXICROAK]: Toxicroak,
    [Pokemon_1.Pkm.CHINCHOU]: Chinchou,
    [Pokemon_1.Pkm.LANTURN]: Lanturn,
    [Pokemon_1.Pkm.POOCHYENA]: Poochyena,
    [Pokemon_1.Pkm.MIGHTYENA]: Mightyena,
    [Pokemon_1.Pkm.BRONZOR]: Bronzor,
    [Pokemon_1.Pkm.BRONZONG]: Bronzong,
    [Pokemon_1.Pkm.DRIFLOON]: Drifloon,
    [Pokemon_1.Pkm.DRIFBLIM]: Drifblim,
    [Pokemon_1.Pkm.SHROOMISH]: Shroomish,
    [Pokemon_1.Pkm.BRELOOM]: Breloom,
    [Pokemon_1.Pkm.TENTACOOL]: Tentacool,
    [Pokemon_1.Pkm.TENTACRUEL]: Tentacruel,
    [Pokemon_1.Pkm.SNUBULL]: Snubull,
    [Pokemon_1.Pkm.GRANBULL]: Granbull,
    [Pokemon_1.Pkm.SEVIPER]: Seviper,
    [Pokemon_1.Pkm.VULPIX]: Vulpix,
    [Pokemon_1.Pkm.NINETALES]: Ninetales,
    [Pokemon_1.Pkm.ALOLAN_VULPIX]: AlolanVulpix,
    [Pokemon_1.Pkm.ALOLAN_NINETALES]: AlolanNinetales,
    [Pokemon_1.Pkm.MAWILE]: Mawile,
    [Pokemon_1.Pkm.BUIZEL]: Buizel,
    [Pokemon_1.Pkm.FLOATZEL]: Floatzel,
    [Pokemon_1.Pkm.KECLEON]: Kecleon,
    [Pokemon_1.Pkm.CARBINK]: Carbink,
    [Pokemon_1.Pkm.CHATOT]: Chatot,
    [Pokemon_1.Pkm.GOOMY]: Goomy,
    [Pokemon_1.Pkm.SLIGOO]: Sligoo,
    [Pokemon_1.Pkm.GOODRA]: Goodra,
    [Pokemon_1.Pkm.HISUI_SLIGGOO]: HisuiSliggoo,
    [Pokemon_1.Pkm.HISUI_GOODRA]: HisuiGoodra,
    [Pokemon_1.Pkm.MEW]: Mew,
    [Pokemon_1.Pkm.BOUNSWEET]: Bounsweet,
    [Pokemon_1.Pkm.STEENEE]: Steenee,
    [Pokemon_1.Pkm.TSAREENA]: Tsareena,
    [Pokemon_1.Pkm.VOLCANION]: Volcanion,
    [Pokemon_1.Pkm.APPLIN]: Applin,
    [Pokemon_1.Pkm.APPLETUN]: Appletun,
    [Pokemon_1.Pkm.FLAPPLE]: Flapple,
    [Pokemon_1.Pkm.DIPPLIN]: Dipplin,
    [Pokemon_1.Pkm.HYDRAPPLE]: Hydrapple,
    [Pokemon_1.Pkm.OSHAWOTT]: Oshawott,
    [Pokemon_1.Pkm.DEWOTT]: Dewott,
    [Pokemon_1.Pkm.SAMUROTT]: Samurott,
    [Pokemon_1.Pkm.HISUI_SAMUROTT]: HisuiSamurott,
    [Pokemon_1.Pkm.SNOM]: Snom,
    [Pokemon_1.Pkm.FROSMOTH]: Frosmoth,
    [Pokemon_1.Pkm.WAILMER]: Wailmer,
    [Pokemon_1.Pkm.WAILORD]: Wailord,
    [Pokemon_1.Pkm.DREEPY]: Dreepy,
    [Pokemon_1.Pkm.DRAKLOAK]: Drakloak,
    [Pokemon_1.Pkm.DRAGAPULT]: Dragapult,
    [Pokemon_1.Pkm.SNIVY]: Snivy,
    [Pokemon_1.Pkm.SERVINE]: Servine,
    [Pokemon_1.Pkm.SERPERIOR]: Serperior,
    [Pokemon_1.Pkm.POPPLIO]: Popplio,
    [Pokemon_1.Pkm.BRIONNE]: Brionne,
    [Pokemon_1.Pkm.PRIMARINA]: Primarina,
    [Pokemon_1.Pkm.GOTHITA]: Gothita,
    [Pokemon_1.Pkm.GOTHORITA]: Gothorita,
    [Pokemon_1.Pkm.GOTHITELLE]: Gothitelle,
    [Pokemon_1.Pkm.SCORBUNNY]: Scorbunny,
    [Pokemon_1.Pkm.RABOOT]: Raboot,
    [Pokemon_1.Pkm.CINDERACE]: Cinderace,
    [Pokemon_1.Pkm.SANDSHREW]: Sandshrew,
    [Pokemon_1.Pkm.SANDSLASH]: Sandslash,
    [Pokemon_1.Pkm.ALOLAN_SANDSHREW]: AlolanSandshrew,
    [Pokemon_1.Pkm.ALOLAN_SANDSLASH]: AlolanSandslash,
    [Pokemon_1.Pkm.FARFETCH_D]: Farfetchd,
    [Pokemon_1.Pkm.GALARIAN_FARFETCH_D]: GalarianFarfetchd,
    [Pokemon_1.Pkm.UNOWN_A]: UnownA,
    [Pokemon_1.Pkm.UNOWN_B]: UnownB,
    [Pokemon_1.Pkm.UNOWN_C]: UnownC,
    [Pokemon_1.Pkm.UNOWN_D]: UnownD,
    [Pokemon_1.Pkm.UNOWN_E]: UnownE,
    [Pokemon_1.Pkm.UNOWN_F]: UnownF,
    [Pokemon_1.Pkm.UNOWN_G]: UnownG,
    [Pokemon_1.Pkm.UNOWN_H]: UnownH,
    [Pokemon_1.Pkm.UNOWN_I]: UnownI,
    [Pokemon_1.Pkm.UNOWN_J]: UnownJ,
    [Pokemon_1.Pkm.UNOWN_K]: UnownK,
    [Pokemon_1.Pkm.UNOWN_L]: UnownL,
    [Pokemon_1.Pkm.UNOWN_M]: UnownM,
    [Pokemon_1.Pkm.UNOWN_N]: UnownN,
    [Pokemon_1.Pkm.UNOWN_O]: UnownO,
    [Pokemon_1.Pkm.UNOWN_P]: UnownP,
    [Pokemon_1.Pkm.UNOWN_Q]: UnownQ,
    [Pokemon_1.Pkm.UNOWN_R]: UnownR,
    [Pokemon_1.Pkm.UNOWN_S]: UnownS,
    [Pokemon_1.Pkm.UNOWN_T]: UnownT,
    [Pokemon_1.Pkm.UNOWN_U]: UnownU,
    [Pokemon_1.Pkm.UNOWN_V]: UnownV,
    [Pokemon_1.Pkm.UNOWN_W]: UnownW,
    [Pokemon_1.Pkm.UNOWN_X]: UnownX,
    [Pokemon_1.Pkm.UNOWN_Y]: UnownY,
    [Pokemon_1.Pkm.UNOWN_Z]: UnownZ,
    [Pokemon_1.Pkm.UNOWN_QUESTION]: UnownQuestion,
    [Pokemon_1.Pkm.UNOWN_EXCLAMATION]: UnownExclamation,
    [Pokemon_1.Pkm.EGG]: Egg,
    [Pokemon_1.Pkm.TAPU_FINI]: TapuFini,
    [Pokemon_1.Pkm.TAPU_BULU]: TapuBulu,
    [Pokemon_1.Pkm.DIGLETT]: Diglett,
    [Pokemon_1.Pkm.ALOLAN_DIGLETT]: AlolanDiglett,
    [Pokemon_1.Pkm.DUGTRIO]: Dugtrio,
    [Pokemon_1.Pkm.ALOLAN_DUGTRIO]: AlolanDugtrio,
    [Pokemon_1.Pkm.ROWLET]: Rowlet,
    [Pokemon_1.Pkm.DARTIX]: Dartix,
    [Pokemon_1.Pkm.DECIDUEYE]: Decidueye,
    [Pokemon_1.Pkm.ZORUA]: Zorua,
    [Pokemon_1.Pkm.ZOROARK]: Zoroark,
    [Pokemon_1.Pkm.HISUI_ZORUA]: HisuiZorua,
    [Pokemon_1.Pkm.HISUI_ZOROARK]: HisuiZoroark,
    [Pokemon_1.Pkm.FROAKIE]: Froakie,
    [Pokemon_1.Pkm.FROGADIER]: Frogadier,
    [Pokemon_1.Pkm.GRENINJA]: Greninja,
    [Pokemon_1.Pkm.TYROGUE]: Tyrogue,
    [Pokemon_1.Pkm.HITMONLEE]: Hitmonlee,
    [Pokemon_1.Pkm.HITMONCHAN]: Hitmonchan,
    [Pokemon_1.Pkm.HITMONTOP]: Hitmontop,
    [Pokemon_1.Pkm.MIMIKYU]: Mimikyu,
    [Pokemon_1.Pkm.MIMIKYU_BUSTED]: MimikyuBusted,
    [Pokemon_1.Pkm.GRIMER]: Grimer,
    [Pokemon_1.Pkm.MUK]: Muk,
    [Pokemon_1.Pkm.ALOLAN_GRIMER]: AlolanGrimer,
    [Pokemon_1.Pkm.ALOLAN_MUK]: AlolanMuk,
    [Pokemon_1.Pkm.SHARPEDO]: Sharpedo,
    [Pokemon_1.Pkm.PINECO]: Pineco,
    [Pokemon_1.Pkm.FORRETRESS]: Forretress,
    [Pokemon_1.Pkm.SEEL]: Seel,
    [Pokemon_1.Pkm.DEWGONG]: Dewgong,
    [Pokemon_1.Pkm.ALOLAN_GEODUDE]: AlolanGeodude,
    [Pokemon_1.Pkm.ALOLAN_GRAVELER]: AlolanGraveler,
    [Pokemon_1.Pkm.ALOLAN_GOLEM]: AlolanGolem,
    [Pokemon_1.Pkm.EKANS]: Ekans,
    [Pokemon_1.Pkm.ARBOK]: Arbok,
    [Pokemon_1.Pkm.MIME_JR]: MimeJr,
    [Pokemon_1.Pkm.MR_MIME]: MrMime,
    [Pokemon_1.Pkm.ORIGIN_GIRATINA]: OriginGiratina,
    [Pokemon_1.Pkm.MELMETAL]: Melmetal,
    [Pokemon_1.Pkm.HOOPA]: Hoopa,
    [Pokemon_1.Pkm.HOOPA_UNBOUND]: HoopaUnbound,
    [Pokemon_1.Pkm.ZERAORA]: Zeraora,
    [Pokemon_1.Pkm.XERNEAS]: Xerneas,
    [Pokemon_1.Pkm.YVELTAL]: Yveltal,
    [Pokemon_1.Pkm.MARSHADOW]: Marshadow,
    [Pokemon_1.Pkm.HOOTHOOT]: Hoothoot,
    [Pokemon_1.Pkm.NOCTOWL]: Noctowl,
    [Pokemon_1.Pkm.BONSLEY]: Bonsley,
    [Pokemon_1.Pkm.SUDOWOODO]: Sudowoodo,
    [Pokemon_1.Pkm.COMBEE]: Combee,
    [Pokemon_1.Pkm.VESPIQUEEN]: Vespiqueen,
    [Pokemon_1.Pkm.SHUCKLE]: Shuckle,
    [Pokemon_1.Pkm.TEPIG]: Tepig,
    [Pokemon_1.Pkm.PIGNITE]: Pignite,
    [Pokemon_1.Pkm.EMBOAR]: Emboar,
    [Pokemon_1.Pkm.WYNAUT]: Wynaut,
    [Pokemon_1.Pkm.WOBBUFFET]: Wobbuffet,
    [Pokemon_1.Pkm.LUNATONE]: Lunatone,
    [Pokemon_1.Pkm.SOLROCK]: Solrock,
    [Pokemon_1.Pkm.POLIWRATH]: Poliwrath,
    [Pokemon_1.Pkm.WURMPLE]: Wurmple,
    [Pokemon_1.Pkm.SILCOON]: Silcoon,
    [Pokemon_1.Pkm.BEAUTIFLY]: Beautifly,
    [Pokemon_1.Pkm.CASCOON]: Cascoon,
    [Pokemon_1.Pkm.DUSTOX]: Dustox,
    [Pokemon_1.Pkm.TINKATINK]: Tinkatink,
    [Pokemon_1.Pkm.TINKATUFF]: Tinkatuff,
    [Pokemon_1.Pkm.TINKATON]: Tinkaton,
    [Pokemon_1.Pkm.PARAS]: Paras,
    [Pokemon_1.Pkm.PARASECT]: Parasect,
    [Pokemon_1.Pkm.MILTANK]: Miltank,
    [Pokemon_1.Pkm.MANKEY]: Mankey,
    [Pokemon_1.Pkm.PRIMEAPE]: Primeape,
    [Pokemon_1.Pkm.ANNIHILAPE]: Annihilape,
    [Pokemon_1.Pkm.SUNKERN]: Sunkern,
    [Pokemon_1.Pkm.SUNFLORA]: Sunflora,
    [Pokemon_1.Pkm.MARACTUS]: Maractus,
    [Pokemon_1.Pkm.PLUSLE]: Plusle,
    [Pokemon_1.Pkm.MINUN]: Minun,
    [Pokemon_1.Pkm.PINSIR]: Pinsir,
    [Pokemon_1.Pkm.NATU]: Natu,
    [Pokemon_1.Pkm.XATU]: Xatu,
    [Pokemon_1.Pkm.GLIGAR]: Gligar,
    [Pokemon_1.Pkm.GLISCOR]: Gliscor,
    [Pokemon_1.Pkm.SHELLDER]: Shellder,
    [Pokemon_1.Pkm.CLOYSTER]: Cloyster,
    [Pokemon_1.Pkm.SENTRET]: Sentret,
    [Pokemon_1.Pkm.FURRET]: Furret,
    [Pokemon_1.Pkm.SPECTRIER]: Spectrier,
    [Pokemon_1.Pkm.GLASTRIER]: Glastrier,
    [Pokemon_1.Pkm.TORKOAL]: Torkoal,
    [Pokemon_1.Pkm.DELIBIRD]: Delibird,
    [Pokemon_1.Pkm.IRON_BUNDLE]: IronBundle,
    [Pokemon_1.Pkm.KARTANA]: Kartana,
    [Pokemon_1.Pkm.CHINGLING]: Chingling,
    [Pokemon_1.Pkm.CHIMECHO]: Chimecho,
    [Pokemon_1.Pkm.ALOLAN_RAICHU]: AlolanRaichu,
    [Pokemon_1.Pkm.DHELMISE]: Dhelmise,
    [Pokemon_1.Pkm.KOFFING]: Koffing,
    [Pokemon_1.Pkm.WEEZING]: Weezing,
    [Pokemon_1.Pkm.GALARIAN_WEEZING]: GalarianWeezing,
    [Pokemon_1.Pkm.STARYU]: Staryu,
    [Pokemon_1.Pkm.STARMIE]: Starmie,
    [Pokemon_1.Pkm.NOSEPASS]: Nosepass,
    [Pokemon_1.Pkm.PROBOPASS]: Probopass,
    [Pokemon_1.Pkm.WOOBAT]: Woobat,
    [Pokemon_1.Pkm.SWOOBAT]: Swoobat,
    [Pokemon_1.Pkm.CLAUNCHER]: Clauncher,
    [Pokemon_1.Pkm.CLAWITZER]: Clawitzer,
    [Pokemon_1.Pkm.YANMA]: Yanma,
    [Pokemon_1.Pkm.YANMEGA]: Yanmega,
    [Pokemon_1.Pkm.HELIOPTILE]: Helioptile,
    [Pokemon_1.Pkm.HELIOLISK]: Heliolisk,
    [Pokemon_1.Pkm.BIDOOF]: Bidoof,
    [Pokemon_1.Pkm.BIBAREL]: Bibarel,
    [Pokemon_1.Pkm.SPINDA]: Spinda,
    [Pokemon_1.Pkm.BALTOY]: Baltoy,
    [Pokemon_1.Pkm.CLAYDOL]: Claydol,
    [Pokemon_1.Pkm.HERACROSS]: Heracross,
    [Pokemon_1.Pkm.PURRLOIN]: Purrloin,
    [Pokemon_1.Pkm.LIEPARD]: Liepard,
    [Pokemon_1.Pkm.BARBOACH]: Barboach,
    [Pokemon_1.Pkm.WHISCASH]: Whiscash,
    [Pokemon_1.Pkm.SCRAGGY]: Scraggy,
    [Pokemon_1.Pkm.SCRAFTY]: Scrafty,
    [Pokemon_1.Pkm.FINNEON]: Finneon,
    [Pokemon_1.Pkm.LUMINEON]: Lumineon,
    [Pokemon_1.Pkm.STUNKY]: Stunky,
    [Pokemon_1.Pkm.SKUNTANK]: Skuntank,
    [Pokemon_1.Pkm.ILLUMISE]: Illumise,
    [Pokemon_1.Pkm.VOLBEAT]: Volbeat,
    [Pokemon_1.Pkm.NECROZMA]: Necrozma,
    [Pokemon_1.Pkm.ULTRA_NECROZMA]: UltraNecrozma,
    [Pokemon_1.Pkm.CHERUBI]: Cherubi,
    [Pokemon_1.Pkm.CHERRIM]: Cherrim,
    [Pokemon_1.Pkm.CHERRIM_SUNLIGHT]: CherrimSunlight,
    [Pokemon_1.Pkm.MISDREAVUS]: Misdreavus,
    [Pokemon_1.Pkm.MISMAGIUS]: Mismagius,
    [Pokemon_1.Pkm.DODUO]: Doduo,
    [Pokemon_1.Pkm.DODRIO]: Dodrio,
    [Pokemon_1.Pkm.XURKITREE]: Xurkitree,
    [Pokemon_1.Pkm.TANDEMAUS]: Tandemaus,
    [Pokemon_1.Pkm.MAUSHOLD_THREE]: MausholdThree,
    [Pokemon_1.Pkm.MAUSHOLD_FOUR]: MausholdFour,
    [Pokemon_1.Pkm.KRICKETOT]: Kricketot,
    [Pokemon_1.Pkm.KRICKETUNE]: Kricketune,
    [Pokemon_1.Pkm.HIPPOPOTAS]: Hippopotas,
    [Pokemon_1.Pkm.HIPPODOWN]: Hippodown,
    [Pokemon_1.Pkm.WINGULL]: Wingull,
    [Pokemon_1.Pkm.PELIPPER]: Pelipper,
    [Pokemon_1.Pkm.NIHILEGO]: Nihilego,
    [Pokemon_1.Pkm.SOBBLE]: Sobble,
    [Pokemon_1.Pkm.DRIZZILE]: Drizzile,
    [Pokemon_1.Pkm.INTELEON]: Inteleon,
    [Pokemon_1.Pkm.TROPIUS]: Tropius,
    [Pokemon_1.Pkm.EXEGGCUTE]: Exeggcute,
    [Pokemon_1.Pkm.EXEGGUTOR]: Exeggutor,
    [Pokemon_1.Pkm.ALOLAN_EXEGGUTOR]: AlolanExeggutor,
    [Pokemon_1.Pkm.COMFEY]: Comfey,
    [Pokemon_1.Pkm.CARNIVINE]: Carnivine,
    [Pokemon_1.Pkm.QWILFISH]: Qwilfish,
    [Pokemon_1.Pkm.HISUIAN_QWILFISH]: HisuianQwilfish,
    [Pokemon_1.Pkm.OVERQWIL]: Overqwil,
    [Pokemon_1.Pkm.HISUIAN_TYPHLOSION]: HisuianTyphlosion,
    [Pokemon_1.Pkm.LILLIPUP]: Lillipup,
    [Pokemon_1.Pkm.HERDIER]: Herdier,
    [Pokemon_1.Pkm.STOUTLAND]: Stoutland,
    [Pokemon_1.Pkm.ZIGZAGOON]: Zigzagoon,
    [Pokemon_1.Pkm.LINOONE]: Linoone,
    [Pokemon_1.Pkm.GALARIAN_ZIGZAGOON]: GalarianZigzagoon,
    [Pokemon_1.Pkm.GALARIAN_LINOONE]: GalarianLinoone,
    [Pokemon_1.Pkm.OBSTAGOON]: Obstagoon,
    [Pokemon_1.Pkm.PHEROMOSA]: Pheromosa,
    [Pokemon_1.Pkm.SABLEYE]: Sableye,
    [Pokemon_1.Pkm.MEGA_SABLEYE]: MegaSableye,
    [Pokemon_1.Pkm.DRACOVISH]: Dracovish,
    [Pokemon_1.Pkm.DRACOZOLT]: Dracozolt,
    [Pokemon_1.Pkm.ARCTOVISH]: Arctovish,
    [Pokemon_1.Pkm.ARCTOZOLT]: Arctozolt,
    [Pokemon_1.Pkm.CORSOLA]: Corsola,
    [Pokemon_1.Pkm.GALAR_CORSOLA]: GalarCorsola,
    [Pokemon_1.Pkm.CURSOLA]: Cursola,
    [Pokemon_1.Pkm.GIMMIGHOUL]: Gimmighoul,
    [Pokemon_1.Pkm.GHOLDENGO]: Gholdengo,
    [Pokemon_1.Pkm.PHANTUMP]: Phantump,
    [Pokemon_1.Pkm.TREVENANT]: Trevenant,
    [Pokemon_1.Pkm.SMEARGLE]: Smeargle,
    [Pokemon_1.Pkm.TOXEL]: Toxel,
    [Pokemon_1.Pkm.TOXTRICITY]: Toxtricity,
    [Pokemon_1.Pkm.BRUXISH]: Bruxish,
    [Pokemon_1.Pkm.SUBSTITUTE]: Substitute,
    [Pokemon_1.Pkm.CYCLIZAR]: Cyclizar,
    [Pokemon_1.Pkm.PAWNIARD]: Pawniard,
    [Pokemon_1.Pkm.BISHARP]: Bisharp,
    [Pokemon_1.Pkm.KINGAMBIT]: Kingambit,
    [Pokemon_1.Pkm.MINIOR]: Minior,
    [Pokemon_1.Pkm.MINIOR_KERNEL_RED]: MiniorKernelRed,
    [Pokemon_1.Pkm.MINIOR_KERNEL_BLUE]: MiniorKernelBlue,
    [Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE]: MiniorKernelOrange,
    [Pokemon_1.Pkm.MINIOR_KERNEL_GREEN]: MiniorKernelGreen,
    [Pokemon_1.Pkm.FEEBAS]: Feebas,
    [Pokemon_1.Pkm.MILOTIC]: Milotic,
    [Pokemon_1.Pkm.MORPEKO]: Morpeko,
    [Pokemon_1.Pkm.MORPEKO_HANGRY]: MorpekoHangry,
    [Pokemon_1.Pkm.KANGASKHAN]: Kangaskhan,
    [Pokemon_1.Pkm.TEDDIURSA]: Teddiursa,
    [Pokemon_1.Pkm.URSARING]: Ursaring,
    [Pokemon_1.Pkm.URSALUNA]: Ursaluna,
    [Pokemon_1.Pkm.URSALUNA_BLOODMOON]: UrsalunaBloodmoon,
    [Pokemon_1.Pkm.AIPOM]: Aipom,
    [Pokemon_1.Pkm.AMBIPOM]: Ambipom,
    [Pokemon_1.Pkm.DEERLING_SPRING]: DeerlingSpring,
    [Pokemon_1.Pkm.DEERLING_SUMMER]: DeerlingSummer,
    [Pokemon_1.Pkm.DEERLING_AUTUMN]: DeerlingAutumn,
    [Pokemon_1.Pkm.DEERLING_WINTER]: DeerlingWinter,
    [Pokemon_1.Pkm.SAWSBUCK_SPRING]: SawsbuckSpring,
    [Pokemon_1.Pkm.SAWSBUCK_SUMMER]: SawsbuckSummer,
    [Pokemon_1.Pkm.SAWSBUCK_AUTUMN]: SawsbuckAutumn,
    [Pokemon_1.Pkm.SAWSBUCK_WINTER]: SawsbuckWinter,
    [Pokemon_1.Pkm.LICKITUNG]: Lickitung,
    [Pokemon_1.Pkm.LICKILICKY]: Lickilicky,
    [Pokemon_1.Pkm.PATRAT]: Patrat,
    [Pokemon_1.Pkm.WATCHOG]: Watchog,
    [Pokemon_1.Pkm.SPINARAK]: Spinarak,
    [Pokemon_1.Pkm.ARIADOS]: Ariados,
    [Pokemon_1.Pkm.TYPE_NULL]: TypeNull,
    [Pokemon_1.Pkm.SILVALLY]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_FIGHTING]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_FLYING]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_POISON]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_GROUND]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_ROCK]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_BUG]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_GHOST]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_STEEL]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_FIRE]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_WATER]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_GRASS]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_ELECTRIC]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_PSYCHIC]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_ICE]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_DRAGON]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_DARK]: Silvally,
    [Pokemon_1.Pkm.SILVALLY_FAIRY]: Silvally,
    [Pokemon_1.Pkm.DEWPIDER]: Dewpider,
    [Pokemon_1.Pkm.ARAQUANID]: Araquanid,
    [Pokemon_1.Pkm.ROCKRUFF]: Rockruff,
    [Pokemon_1.Pkm.LYCANROC_DAY]: LycanrocDay,
    [Pokemon_1.Pkm.LYCANROC_DUSK]: LycanrocDusk,
    [Pokemon_1.Pkm.LYCANROC_NIGHT]: LycanrocNight,
    [Pokemon_1.Pkm.DRUDDIGON]: Druddigon,
    [Pokemon_1.Pkm.COSMOG]: Cosmog,
    [Pokemon_1.Pkm.COSMOEM]: Cosmoem,
    [Pokemon_1.Pkm.SOLGALEO]: Solgaleo,
    [Pokemon_1.Pkm.LUNALA]: Lunala,
    [Pokemon_1.Pkm.MAGEARNA]: Magearna,
    [Pokemon_1.Pkm.IMPIDIMP]: Impidimp,
    [Pokemon_1.Pkm.MORGREM]: Morgrem,
    [Pokemon_1.Pkm.GRIMMSNARL]: Grimmsnarl,
    [Pokemon_1.Pkm.DEOXYS]: Deoxys,
    [Pokemon_1.Pkm.DEOXYS_DEFENSE]: DeoxysDefense,
    [Pokemon_1.Pkm.DEOXYS_ATTACK]: DeoxysAttack,
    [Pokemon_1.Pkm.DEOXYS_SPEED]: DeoxysSpeed,
    [Pokemon_1.Pkm.CRABRAWLER]: Crabrawler,
    [Pokemon_1.Pkm.CRABOMINABLE]: Crabominable,
    [Pokemon_1.Pkm.CUTIEFLY]: Cutiefly,
    [Pokemon_1.Pkm.RIBOMBEE]: Ribombee,
    [Pokemon_1.Pkm.ZANGOOSE]: Zangoose,
    [Pokemon_1.Pkm.NICKIT]: Nickit,
    [Pokemon_1.Pkm.THIEVUL]: Thievul,
    [Pokemon_1.Pkm.DROWZEE]: Drowzee,
    [Pokemon_1.Pkm.HYPNO]: Hypno,
    [Pokemon_1.Pkm.WATTREL]: Wattrel,
    [Pokemon_1.Pkm.KILOWATTREL]: Kilowattrel,
    [Pokemon_1.Pkm.STANTLER]: Stantler,
    [Pokemon_1.Pkm.BURMY_PLANT]: BurmyPlant,
    [Pokemon_1.Pkm.BURMY_SANDY]: BurmySandy,
    [Pokemon_1.Pkm.BURMY_TRASH]: BurmyTrash,
    [Pokemon_1.Pkm.WORMADAM_PLANT]: WormadamPlant,
    [Pokemon_1.Pkm.WORMADAM_SANDY]: WormadamSandy,
    [Pokemon_1.Pkm.WORMADAM_TRASH]: WormadamTrash,
    [Pokemon_1.Pkm.MOTHIM]: Mothim,
    [Pokemon_1.Pkm.WOOPER]: Wooper,
    [Pokemon_1.Pkm.QUAGSIRE]: Quagsire,
    [Pokemon_1.Pkm.PALDEA_WOOPER]: PaldeaWooper,
    [Pokemon_1.Pkm.CLODSIRE]: Clodsire,
    [Pokemon_1.Pkm.FUECOCO]: Fuecoco,
    [Pokemon_1.Pkm.CROCALOR]: Crocalor,
    [Pokemon_1.Pkm.SKELEDIRGE]: Skeledirge,
    [Pokemon_1.Pkm.TANGELA]: Tangela,
    [Pokemon_1.Pkm.TANGROWTH]: Tangrowth,
    [Pokemon_1.Pkm.PSYDUCK]: Psyduck,
    [Pokemon_1.Pkm.GOLDUCK]: Golduck,
    [Pokemon_1.Pkm.PHANPY]: Phanpy,
    [Pokemon_1.Pkm.DONPHAN]: Donphan,
    [Pokemon_1.Pkm.SPOINK]: Spoink,
    [Pokemon_1.Pkm.GRUMPIG]: Grumpig,
    [Pokemon_1.Pkm.SINISTEA]: Sinistea,
    [Pokemon_1.Pkm.POLTEAGEIST]: Polteageist,
    [Pokemon_1.Pkm.FERROSEED]: Ferroseed,
    [Pokemon_1.Pkm.FERROTHORN]: Ferrothorn,
    [Pokemon_1.Pkm.GOLETT]: Golett,
    [Pokemon_1.Pkm.GOLURK]: Golurk,
    [Pokemon_1.Pkm.TRUBBISH]: Trubbish,
    [Pokemon_1.Pkm.GARBODOR]: Garbodor,
    [Pokemon_1.Pkm.GRUBBIN]: Grubbin,
    [Pokemon_1.Pkm.CHARJABUG]: Charjabug,
    [Pokemon_1.Pkm.VIKAVOLT]: Vikavolt,
    [Pokemon_1.Pkm.SHELLOS_WEST_SEA]: ShellosWestSea,
    [Pokemon_1.Pkm.GASTRODON_WEST_SEA]: GastrodonWestSea,
    [Pokemon_1.Pkm.SHELLOS_EAST_SEA]: ShellosEastSea,
    [Pokemon_1.Pkm.GASTRODON_EAST_SEA]: GastrodonEastSea,
    [Pokemon_1.Pkm.MUNNA]: Munna,
    [Pokemon_1.Pkm.MUSHARNA]: Musharna,
    [Pokemon_1.Pkm.RUFFLET]: Rufflet,
    [Pokemon_1.Pkm.BRAVIARY]: Braviary,
    [Pokemon_1.Pkm.HEATMOR]: Heatmor,
    [Pokemon_1.Pkm.KLEFKI]: Klefki,
    [Pokemon_1.Pkm.HAWLUCHA]: Hawlucha,
    [Pokemon_1.Pkm.MIENFOO]: Mienfoo,
    [Pokemon_1.Pkm.MIENSHAO]: Mienshao,
    [Pokemon_1.Pkm.STONJOURNER]: Stonjourner,
    [Pokemon_1.Pkm.HISUI_SNEASEL]: HisuiSneasel,
    [Pokemon_1.Pkm.SNEASLER]: Sneasler,
    [Pokemon_1.Pkm.PYUKUMUKU]: Pyukumuku,
    [Pokemon_1.Pkm.POIPOLE]: Poipole,
    [Pokemon_1.Pkm.NAGANADEL]: Naganadel,
    [Pokemon_1.Pkm.CRAMORANT]: Cramorant,
    [Pokemon_1.Pkm.ARROKUDA]: Arrokuda,
    [Pokemon_1.Pkm.WISHIWASHI]: Wishiwashi,
    [Pokemon_1.Pkm.WISHIWASHI_SCHOOL]: WishiwashiSchool,
    [Pokemon_1.Pkm.PAWMI]: Pawmi,
    [Pokemon_1.Pkm.PAWMO]: Pawmo,
    [Pokemon_1.Pkm.PAWMOT]: Pawmot,
    [Pokemon_1.Pkm.GOLDEEN]: Goldeen,
    [Pokemon_1.Pkm.SEAKING]: Seaking,
    [Pokemon_1.Pkm.LUVDISC]: Luvdisc,
    [Pokemon_1.Pkm.AUDINO]: Audino,
    [Pokemon_1.Pkm.PETILIL]: Petilil,
    [Pokemon_1.Pkm.LILIGANT]: Lilligant,
    [Pokemon_1.Pkm.MANTYKE]: Mantyke,
    [Pokemon_1.Pkm.MANTINE]: Mantine,
    [Pokemon_1.Pkm.REMORAID]: Remoraid,
    [Pokemon_1.Pkm.OCTILLERY]: Octillery,
    [Pokemon_1.Pkm.SIGILYPH]: Sigilyph,
    [Pokemon_1.Pkm.FRIGIBAX]: Frigibax,
    [Pokemon_1.Pkm.ARCTIBAX]: Arctibax,
    [Pokemon_1.Pkm.BAXCALIBUR]: Baxcalibur,
    [Pokemon_1.Pkm.BINACLE]: Binacle,
    [Pokemon_1.Pkm.BARBARACLE]: Barbaracle,
    [Pokemon_1.Pkm.SKARMORY]: Skarmory,
    [Pokemon_1.Pkm.DURANT]: Durant,
    [Pokemon_1.Pkm.OGERPON_TEAL]: OgerponTeal,
    [Pokemon_1.Pkm.OGERPON_TEAL_MASK]: OgerponTealMask,
    [Pokemon_1.Pkm.OGERPON_WELLSPRING]: OgerponWellspring,
    [Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK]: OgerponWellspringMask,
    [Pokemon_1.Pkm.OGERPON_HEARTHFLAME]: OgerponHearthflame,
    [Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK]: OgerponHearthflameMask,
    [Pokemon_1.Pkm.OGERPON_CORNERSTONE]: OgerponCornerstone,
    [Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK]: OgerponCornerstoneMask,
    [Pokemon_1.Pkm.IRON_HANDS]: IronHands,
    [Pokemon_1.Pkm.ROOKIDEE]: Rookidee,
    [Pokemon_1.Pkm.CORVISQUIRE]: Corvisquire,
    [Pokemon_1.Pkm.CORVIKNIGHT]: Corviknight,
    [Pokemon_1.Pkm.MURKROW]: Murkrow,
    [Pokemon_1.Pkm.HONCHKROW]: Honchkrow,
    [Pokemon_1.Pkm.TURTONATOR]: Turtonator,
    [Pokemon_1.Pkm.SANDYGAST]: Sandygast,
    [Pokemon_1.Pkm.PALOSSAND]: Palossand,
    [Pokemon_1.Pkm.SKORUPI]: Skorupi,
    [Pokemon_1.Pkm.DRAPION]: Drapion,
    [Pokemon_1.Pkm.DARUMAKA]: Darumaka,
    [Pokemon_1.Pkm.DARMANITAN]: Darmanitan,
    [Pokemon_1.Pkm.DARMANITAN_ZEN]: DarmanitanZen,
    [Pokemon_1.Pkm.GALARIAN_DARUMAKA]: GalarianDarumaka,
    [Pokemon_1.Pkm.GALARIAN_DARMANITAN]: GalarianDarmanitan,
    [Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN]: GalarianDarmanitanZen,
    [Pokemon_1.Pkm.KRABBY]: Krabby,
    [Pokemon_1.Pkm.KINGLER]: Kingler,
    [Pokemon_1.Pkm.ZYGARDE_10]: Zygarde10,
    [Pokemon_1.Pkm.ZYGARDE_50]: Zygarde50,
    [Pokemon_1.Pkm.ZYGARDE_100]: Zygarde100,
    [Pokemon_1.Pkm.SIZZLIPEDE]: Sizzlipede,
    [Pokemon_1.Pkm.CENTISKORCH]: Centiskorch,
    [Pokemon_1.Pkm.STUFFUL]: Stufful,
    [Pokemon_1.Pkm.BEWEAR]: Bewear,
    [Pokemon_1.Pkm.GLIMMET]: Glimmet,
    [Pokemon_1.Pkm.GLIMMORA]: Glimmora,
    [Pokemon_1.Pkm.FLETCHLING]: Fletchling,
    [Pokemon_1.Pkm.FLETCHINDER]: Fletchinder,
    [Pokemon_1.Pkm.TALONFLAME]: Talonflame,
    [Pokemon_1.Pkm.VULLABY]: Vullaby,
    [Pokemon_1.Pkm.MANDIBUZZ]: Mandibuzz,
    [Pokemon_1.Pkm.INKAY]: Inkay,
    [Pokemon_1.Pkm.MALAMAR]: Malamar,
    [Pokemon_1.Pkm.HISUI_VOLTORB]: HisuiVoltorb,
    [Pokemon_1.Pkm.HISUI_ELECTRODE]: HisuiElectrode,
    [Pokemon_1.Pkm.TIMBURR]: Timburr,
    [Pokemon_1.Pkm.GURDURR]: Gurdurr,
    [Pokemon_1.Pkm.CONKELDURR]: Conkeldurr,
    [Pokemon_1.Pkm.PILLAR_WOOD]: PillarWood,
    [Pokemon_1.Pkm.PILLAR_IRON]: PillarIron,
    [Pokemon_1.Pkm.PILLAR_CONCRETE]: PillarConcrete,
    [Pokemon_1.Pkm.ELGYEM]: Elgyem,
    [Pokemon_1.Pkm.BEHEEYEM]: Beheeyem,
    [Pokemon_1.Pkm.LITTEN]: Litten,
    [Pokemon_1.Pkm.TORRACAT]: Torracat,
    [Pokemon_1.Pkm.INCINEROAR]: Incineroar,
    [Pokemon_1.Pkm.CRYOGONAL]: Cryogonal,
    [Pokemon_1.Pkm.DRAMPA]: Drampa,
    [Pokemon_1.Pkm.SKRELP]: Skrelp,
    [Pokemon_1.Pkm.DRAGALGE]: Dragalge,
    [Pokemon_1.Pkm.CUBCHOO]: Cubchoo,
    [Pokemon_1.Pkm.BEARTIC]: Beartic,
    [Pokemon_1.Pkm.NACLI]: Nacli,
    [Pokemon_1.Pkm.NACLSTACK]: Naclstack,
    [Pokemon_1.Pkm.GARGANACL]: Garganacl,
    [Pokemon_1.Pkm.CAPSAKID]: Capsakid,
    [Pokemon_1.Pkm.SCOVILLAIN]: Scovillain,
    [Pokemon_1.Pkm.SWIRLIX]: Swirlix,
    [Pokemon_1.Pkm.SLURPUFF]: Slurpuff,
    [Pokemon_1.Pkm.GULPIN]: Gulpin,
    [Pokemon_1.Pkm.SWALOT]: Swalot,
    [Pokemon_1.Pkm.FIDOUGH]: Fidough,
    [Pokemon_1.Pkm.DACHSBUN]: Dachsbun,
    [Pokemon_1.Pkm.MILCERY]: Milcery,
    [Pokemon_1.Pkm.ALCREMIE_VANILLA]: AlcremieVanilla,
    [Pokemon_1.Pkm.ALCREMIE_RUBY]: AlcremieRuby,
    [Pokemon_1.Pkm.ALCREMIE_MATCHA]: AlcremieMatcha,
    [Pokemon_1.Pkm.ALCREMIE_MINT]: AlcremieMint,
    [Pokemon_1.Pkm.ALCREMIE_LEMON]: AlcremieLemon,
    [Pokemon_1.Pkm.ALCREMIE_SALTED]: AlcremieSalted,
    [Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL]: AlcremieRubySwirl,
    [Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL]: AlcremieCaramelSwirl,
    [Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL]: AlcremieRainbowSwirl,
    [Pokemon_1.Pkm.PECHARUNT]: Pecharunt,
    [Pokemon_1.Pkm.VELUZA]: Veluza,
    [Pokemon_1.Pkm.DURALUDON]: Duraludon,
    [Pokemon_1.Pkm.ARCHALUDON]: Archaludon,
    [Pokemon_1.Pkm.SPRIGATITO]: Sprigatito,
    [Pokemon_1.Pkm.FLORAGATO]: Floragato,
    [Pokemon_1.Pkm.MEOWSCARADA]: Meowscarada,
    [Pokemon_1.Pkm.FOMANTIS]: Fomantis,
    [Pokemon_1.Pkm.LURANTIS]: Lurantis,
    [Pokemon_1.Pkm.ROARING_MOON]: RoaringMoon,
    [Pokemon_1.Pkm.CHARCADET]: Charcadet,
    [Pokemon_1.Pkm.ARMAROUGE]: Armarouge,
    [Pokemon_1.Pkm.CERULEDGE]: Ceruledge,
    [Pokemon_1.Pkm.TYNAMO]: Tynamo,
    [Pokemon_1.Pkm.EELEKTRIK]: Eelektrik,
    [Pokemon_1.Pkm.EELEKTROSS]: Eelektross,
    [Pokemon_1.Pkm.PIDOVE]: Pidove,
    [Pokemon_1.Pkm.TRANQUILL]: Tranquill,
    [Pokemon_1.Pkm.UNFEZANT]: Unfezant,
    [Pokemon_1.Pkm.ZACIAN]: Zacian,
    [Pokemon_1.Pkm.ZACIAN_CROWNED]: ZacianCrowned,
    [Pokemon_1.Pkm.IRON_VALIANT]: IronValiant,
    [Pokemon_1.Pkm.PANCHAM]: Pancham,
    [Pokemon_1.Pkm.PANGORO]: Pangoro,
    [Pokemon_1.Pkm.GROOKEY]: Grookey,
    [Pokemon_1.Pkm.THWACKEY]: Thwackey,
    [Pokemon_1.Pkm.RILLABOOM]: Rillaboom,
    [Pokemon_1.Pkm.GALLADE]: Gallade,
    [Pokemon_1.Pkm.KUBFU]: Kubfu,
    [Pokemon_1.Pkm.URSHIFU_SINGLE]: UrshifuSingle,
    [Pokemon_1.Pkm.URSHIFU_RAPID]: UrshifuRapid,
    [Pokemon_1.Pkm.HISUIAN_LILLIGANT]: HisuianLilligant,
    [Pokemon_1.Pkm.SCREAM_TAIL]: ScreamTail,
    [Pokemon_1.Pkm.WYRDEER]: Wyrdeer,
    [Pokemon_1.Pkm.INDEEDEE_FEMALE]: IndeedeeFemale,
    [Pokemon_1.Pkm.INDEEDEE_MALE]: IndeedeeMale,
    [Pokemon_1.Pkm.COTTONEE]: Cottonee,
    [Pokemon_1.Pkm.WHIMSICOTT]: Whimsicott,
    [Pokemon_1.Pkm.GIRAFARIG]: Girafarig,
    [Pokemon_1.Pkm.FARIGIRAF]: Farigiraf,
    [Pokemon_1.Pkm.SKITTY]: Skitty,
    [Pokemon_1.Pkm.DELCATTY]: Delcatty,
    [Pokemon_1.Pkm.GLAMEOW]: Glameow,
    [Pokemon_1.Pkm.PURUGLY]: Purugly,
    [Pokemon_1.Pkm.MINCCINO]: Minccino,
    [Pokemon_1.Pkm.CINCCINO]: Cinccino,
    [Pokemon_1.Pkm.PIKACHU_SURFER]: PikachuSurfer,
    [Pokemon_1.Pkm.ESPURR]: Espurr,
    [Pokemon_1.Pkm.MEOWSTIC_MALE]: MeowsticMale,
    [Pokemon_1.Pkm.MEOWSTIC_FEMALE]: MeowsticFemale,
    [Pokemon_1.Pkm.OKIDOGI]: Okidogi,
    [Pokemon_1.Pkm.MUNKIDORI]: Munkidori,
    [Pokemon_1.Pkm.FEZANDIPITI]: Fezandipiti,
    [Pokemon_1.Pkm.SURSKIT]: Surskit,
    [Pokemon_1.Pkm.MASQUERAIN]: Masquerain,
    [Pokemon_1.Pkm.GOSSIFLEUR]: Gossifleur,
    [Pokemon_1.Pkm.ELDEGOSS]: Eldegoss,
    [Pokemon_1.Pkm.FURFROU]: Furfrou,
    [Pokemon_1.Pkm.MELTAN]: Meltan,
    [Pokemon_1.Pkm.VAROOM]: Varoom,
    [Pokemon_1.Pkm.REVAVROOM]: Revavroom,
    [Pokemon_1.Pkm.CELESTEELA]: Celesteela,
    [Pokemon_1.Pkm.LEDYBA]: Ledyba,
    [Pokemon_1.Pkm.LEDIAN]: Ledian,
    [Pokemon_1.Pkm.EMOLGA]: Emolga,
    [Pokemon_1.Pkm.TAILLOW]: Taillow,
    [Pokemon_1.Pkm.SWELLOW]: Swellow,
    [Pokemon_1.Pkm.DRILBUR]: Drilbur,
    [Pokemon_1.Pkm.EXCADRILL]: Excadrill,
    [Pokemon_1.Pkm.ROGGENROLA]: Roggenrola,
    [Pokemon_1.Pkm.BOLDORE]: Boldore,
    [Pokemon_1.Pkm.GIGALITH]: Gigalith,
    [Pokemon_1.Pkm.TOGEDEMARU]: Togedemaru,
    [Pokemon_1.Pkm.FALINKS_BRASS]: FalinksBrass,
    [Pokemon_1.Pkm.FALINKS_TROOPER]: FalinksTrooper,
    [Pokemon_1.Pkm.DEDENNE]: Dedenne,
    [Pokemon_1.Pkm.SILICOBRA]: Silicobra,
    [Pokemon_1.Pkm.SANDACONDA]: Sandaconda,
    [Pokemon_1.Pkm.DUNSPARCE]: Dunsparce,
    [Pokemon_1.Pkm.DUDUNSPARCE]: Dudunsparse,
    [Pokemon_1.Pkm.SMOLIV]: Smoliv,
    [Pokemon_1.Pkm.DOLLIV]: Dolliv,
    [Pokemon_1.Pkm.ARBOLIVA]: Arboliva,
    [Pokemon_1.Pkm.CHESPIN]: Chespin,
    [Pokemon_1.Pkm.QUILLADIN]: Quilladin,
    [Pokemon_1.Pkm.CHESNAUGHT]: Chesnaught,
    [Pokemon_1.Pkm.NYMBLE]: Nymble,
    [Pokemon_1.Pkm.LOKIX]: Lokix,
    [Pokemon_1.Pkm.BLIPBUG]: Blipbug,
    [Pokemon_1.Pkm.DOTTLER]: Dottler,
    [Pokemon_1.Pkm.ORBEETLE]: Orbeetle,
    [Pokemon_1.Pkm.PACHIRISU]: Pachirisu,
    [Pokemon_1.Pkm.BUZZWOLE]: Buzzwole,
    [Pokemon_1.Pkm.YAMASK]: Yamask,
    [Pokemon_1.Pkm.COFAGRIGUS]: Cofagrigus,
    [Pokemon_1.Pkm.GALARIAN_YAMASK]: GalarianYamask,
    [Pokemon_1.Pkm.RUNERIGUS]: Runerigus,
    [Pokemon_1.Pkm.CHEWTLE]: Chewtle,
    [Pokemon_1.Pkm.DREDNAW]: Drednaw,
    [Pokemon_1.Pkm.GREAVARD]: Greavard,
    [Pokemon_1.Pkm.HOUNDSTONE]: Houndstone,
    [Pokemon_1.Pkm.CLOBBOPUS]: Clobbopus,
    [Pokemon_1.Pkm.GRAPPLOCT]: Grapploct,
    [Pokemon_1.Pkm.CHI_YU]: ChiYu,
    [Pokemon_1.Pkm.WIMPOD]: Wimpod,
    [Pokemon_1.Pkm.GOLISOPOD]: Golisopod,
    [Pokemon_1.Pkm.BASCULIN_RED]: BasculinRed,
    [Pokemon_1.Pkm.BASCULIN_BLUE]: BasculinBlue,
    [Pokemon_1.Pkm.BASCULIN_WHITE]: BasculinWhite,
    [Pokemon_1.Pkm.BASCULEGION_FEMALE]: BasculegionFemale,
    [Pokemon_1.Pkm.BASCULEGION_MALE]: BasculegionMale,
    [Pokemon_1.Pkm.KLINK]: Klink,
    [Pokemon_1.Pkm.KLANG]: Klang,
    [Pokemon_1.Pkm.KLINKLANG]: Klinklang,
    [Pokemon_1.Pkm.GALARIAN_SLOWPOKE]: GalarianSlowpoke,
    [Pokemon_1.Pkm.GALARIAN_SLOWBRO]: GalarianSlowbro,
    [Pokemon_1.Pkm.GALARIAN_SLOWKING]: GalarianSlowking,
    [Pokemon_1.Pkm.WIGLETT]: Wiglett,
    [Pokemon_1.Pkm.WUGTRIO]: Wugtrio,
    [Pokemon_1.Pkm.FLUTTER_MANE]: FlutterMane,
    [Pokemon_1.Pkm.WALKING_WAKE]: WalkingWake,
    [Pokemon_1.Pkm.ORTHWORM]: Orthworm,
    [Pokemon_1.Pkm.IRON_THORNS]: IronThorns,
    [Pokemon_1.Pkm.TADBULB]: Tadbulb,
    [Pokemon_1.Pkm.BELLIBOLT]: Bellibolt,
    [Pokemon_1.Pkm.PINCURCHIN]: Pincurchin,
    [Pokemon_1.Pkm.MUDBRAY]: Mudbray,
    [Pokemon_1.Pkm.MUDSDALE]: Mudsdale,
    [Pokemon_1.Pkm.SKIDDO]: Skiddo,
    [Pokemon_1.Pkm.GOGOAT]: Gogoat,
    [Pokemon_1.Pkm.BUNNELBY]: Bunnelby,
    [Pokemon_1.Pkm.DIGGERSBY]: Diggersby,
    [Pokemon_1.Pkm.SCATTERBUG]: Scatterbug,
    [Pokemon_1.Pkm.SPEWPA]: Spewpa,
    [Pokemon_1.Pkm.VIVILLON]: Vivillon,
    [Pokemon_1.Pkm.VIVILLON_ICY_SNOW]: VivillonIcySnow,
    [Pokemon_1.Pkm.VIVILLON_POLAR]: VivillonPolar,
    [Pokemon_1.Pkm.VIVILLON_TUNDRA]: VivillonTundra,
    [Pokemon_1.Pkm.VIVILLON_CONTINENTAL]: VivillonContinental,
    [Pokemon_1.Pkm.VIVILLON_GARDEN]: VivillonGarden,
    [Pokemon_1.Pkm.VIVILLON_ELEGANT]: VivillonElegant,
    [Pokemon_1.Pkm.VIVILLON_MODERN]: VivillonModern,
    [Pokemon_1.Pkm.VIVILLON_MARINE]: VivillonMarine,
    [Pokemon_1.Pkm.VIVILLON_ARCHIPELAGO]: VivillonArchipelago,
    [Pokemon_1.Pkm.VIVILLON_HIGH_PLAINS]: VivillonHighPlains,
    [Pokemon_1.Pkm.VIVILLON_SANDSTORM]: VivillonSandstorm,
    [Pokemon_1.Pkm.VIVILLON_RIVER]: VivillonRiver,
    [Pokemon_1.Pkm.VIVILLON_MONSOON]: VivillonMonsoon,
    [Pokemon_1.Pkm.VIVILLON_SAVANNA]: VivillonSavanna,
    [Pokemon_1.Pkm.VIVILLON_SUN]: VivillonSun,
    [Pokemon_1.Pkm.VIVILLON_OCEAN]: VivillonOcean,
    [Pokemon_1.Pkm.VIVILLON_JUNGLE]: VivillonJungle,
    [Pokemon_1.Pkm.VIVILLON_FANCY]: VivillonFancy,
    [Pokemon_1.Pkm.VIVILLON_POKE_BALL]: VivillonPokeball,
    [Pokemon_1.Pkm.LECHONK]: Lechonk,
    [Pokemon_1.Pkm.OINKOLOGNE_MALE]: OinkologneMale,
    [Pokemon_1.Pkm.WOOLOO]: Wooloo,
    [Pokemon_1.Pkm.DUBWOOL]: Dubwool,
    [Pokemon_1.Pkm.YAMPER]: Yamper,
    [Pokemon_1.Pkm.BOLTUND]: Boltund,
    [Pokemon_1.Pkm.GREAT_TUSK]: GreatTusk,
    [Pokemon_1.Pkm.FINIZEN]: Finizen,
    [Pokemon_1.Pkm.PALAFIN]: Palafin,
    [Pokemon_1.Pkm.PALAFIN_HERO]: PalafinHero,
    [Pokemon_1.Pkm.MAREANIE]: Mareanie,
    [Pokemon_1.Pkm.TOXAPEX]: Toxapex,
    [Pokemon_1.Pkm.DUCKLETT]: Ducklett,
    [Pokemon_1.Pkm.SWANNA]: Swanna,
    [Pokemon_1.Pkm.DONDOZO]: Dondozo,
    [Pokemon_1.Pkm.TATSUGIRI_CURLY]: TatsugiriCurly,
    [Pokemon_1.Pkm.TATSUGIRI_DROOPY]: TatsugiriDroopy,
    [Pokemon_1.Pkm.TATSUGIRI_STRETCHY]: TatsugiriStretchy,
    [Pokemon_1.Pkm.CETODDLE]: Cetoddle,
    [Pokemon_1.Pkm.CETITAN]: Cetitan,
    [Pokemon_1.Pkm.BERGMITE]: Bergmite,
    [Pokemon_1.Pkm.AVALUGG]: Avalugg,
    [Pokemon_1.Pkm.HISUI_AVALUGG]: HisuiAvalugg,
    [Pokemon_1.Pkm.KARRABLAST]: Karrablast,
    [Pokemon_1.Pkm.ESCAVALIER]: Escavalier,
    [Pokemon_1.Pkm.EISCUE]: Eiscue,
    [Pokemon_1.Pkm.EISCUE_NOICE]: EiscueNoice,
    [Pokemon_1.Pkm.DWEBBLE]: Dwebble,
    [Pokemon_1.Pkm.CRUSTLE]: Crustle,
    [Pokemon_1.Pkm.SKWOVET]: Skwovet,
    [Pokemon_1.Pkm.GREEDENT]: Greedent,
    [Pokemon_1.Pkm.QUAXLY]: Quaxly,
    [Pokemon_1.Pkm.QUAXWELL]: Quaxwell,
    [Pokemon_1.Pkm.QUAQUAVAL]: Quaquaval,
    [Pokemon_1.Pkm.KOMALA]: Komala,
    [Pokemon_1.Pkm.TAROUNTULA]: Tarountula,
    [Pokemon_1.Pkm.SPIDOPS]: Spidops,
    [Pokemon_1.Pkm.SLITHER_WING]: SlitherWing
};
Object.values(exports.PokemonClasses).forEach((pokemonClass) => (0, schema_1.entity)(pokemonClass));
//# sourceMappingURL=pokemon.js.map