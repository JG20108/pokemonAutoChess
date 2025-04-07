const fs = require('fs');
const { context } = require('esbuild');
const path = require('path');

const isDev = process.argv[2] === '--dev';
const isProdBuild = process.argv[2] === '--build';

// Hardcoded environment variables
const envVars = {
  FIREBASE_API_KEY: 'AIzaSyD-3kpfTO0svOqq2q3HiItCsGfdnZdBtsM',
  FIREBASE_AUTH_DOMAIN: 'pac-linkersito.firebaseapp.com',
  FIREBASE_PROJECT_ID: 'pac-linkersito',
  FIREBASE_STORAGE_BUCKET: 'pac-linkersito.firebasestorage.app',
  FIREBASE_MESSAGING_SENDER_ID: '433303508688',
  FIREBASE_APP_ID: '1:433303508688:web:e9d9c93919d665225db0d5',
  DISCORD_SERVER: '',
  MIN_HUMAN_PLAYERS: '1',
  MONGO_URI:
    'mongodb+srv://joseosgui:F1Wy7S9l0uOs6hgI@cluster0.andeznt.mongodb.net/dev?retryWrites=true&w=majority',
};

console.log('Using hardcoded environment variables');

let hashIndexPlugin = {
  name: 'hash-index-plugin',
  setup(build) {
    build.onStart(() => {
      const files = fs.readdirSync('app/public/dist/client');
      files.forEach((file) => {
        // remove old files
        if (file.startsWith('index-') && file.endsWith('.js')) {
          fs.unlinkSync(`app/public/dist/client/${file}`);
        }
        if (file.startsWith('index-') && file.endsWith('.css')) {
          fs.unlinkSync(`app/public/dist/client/${file}`);
        }
      });
    });
    build.onEnd((result) => {
      if (result.errors.length > 0) {
        console.log(`build ended with ${result.errors.length} errors`);
      }
      updateHashedFilesInIndex();
    });
  },
};

context({
  entryPoints: ['./app/public/src/index.tsx'],
  entryNames: '[dir]/[name]-[hash]',
  assetNames: '[dir]/[name]-[hash]',
  outfile: 'app/public/dist/client/index.js',
  external: ['assets/*'],
  bundle: true,
  metafile: true,
  minify: isProdBuild,
  sourcemap: isProdBuild,
  plugins: [hashIndexPlugin],
  target: 'es2016',
  define: {
    'process.env.FIREBASE_API_KEY': JSON.stringify(envVars.FIREBASE_API_KEY),
    'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
      envVars.FIREBASE_AUTH_DOMAIN
    ),
    'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
      envVars.FIREBASE_PROJECT_ID
    ),
    'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
      envVars.FIREBASE_STORAGE_BUCKET
    ),
    'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
      envVars.FIREBASE_MESSAGING_SENDER_ID
    ),
    'process.env.FIREBASE_APP_ID': JSON.stringify(envVars.FIREBASE_APP_ID),
    'process.env.DISCORD_SERVER': JSON.stringify(envVars.DISCORD_SERVER),
    'process.env.MIN_HUMAN_PLAYERS': JSON.stringify(envVars.MIN_HUMAN_PLAYERS),
    'process.env.MONGO_URI': JSON.stringify(envVars.MONGO_URI),
  },
})
  .then((context) => {
    if (isDev) {
      // Enable watch mode
      context.watch();
    } else {
      // Build once and exit if not in watch mode
      context.rebuild().then((result) => {
        if (result.metafile) {
          // use https://esbuild.github.io/analyze/ to analyse
          fs.writeFileSync(
            'app/public/dist/client/esbuild.meta.json',
            JSON.stringify(result.metafile)
          );
        }
        context.dispose();
      });
    }
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function updateHashedFilesInIndex() {
  //update hash in index.html
  const fs = require('fs');
  const path = require('path');

  const distDir = path.join(__dirname, 'app/public/dist/client');
  const htmlFile = path.join(__dirname, 'app/views/index.html');
  const htmlOutputFile = path.join(distDir, 'index.html');

  // Find the hashed script file
  const scriptFile = fs
    .readdirSync(distDir)
    .find((file) => file.startsWith('index-') && file.endsWith('.js'));
  const cssFile = fs
    .readdirSync(distDir)
    .find((file) => file.startsWith('index-') && file.endsWith('.css'));

  if (scriptFile) {
    // Read the HTML file
    let htmlContent = fs.readFileSync(htmlFile, 'utf8');

    // Replace the placeholder with the actual script tag
    htmlContent = htmlContent
      .replace(
        '<script src="index.js" defer></script>',
        `<script src="${scriptFile}" defer></script>`
      )
      .replace(
        `<link rel="stylesheet" type="text/css" href="index.css" />`,
        `<link rel="stylesheet" type="text/css" href="${cssFile}">`
      );

    // Write the updated HTML back to the file
    fs.writeFileSync(htmlOutputFile, htmlContent, 'utf8');
  } else {
    console.error('Hashed entry files not found.');
  }
}
