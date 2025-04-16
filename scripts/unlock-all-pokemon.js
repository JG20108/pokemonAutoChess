// Script to unlock all Pokemon emotions and set minimum dust for all users
const {
  PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX,
} = require('../app/models/precomputed/precomputed-emotions');
const { AnimationConfig, PkmIndex } = require('../app/types/enum/Pokemon');
const { Emotion } = require('../app/types');
const UserMetadata =
  require('../app/models/mongo-models/user-metadata').default;

async function unlockAllPokemon() {
  try {
    const users = await UserMetadata.find({});
    console.log(`Found ${users.length} users to update`);

    for (const user of users) {
      console.log(`Processing user: ${user.displayName}`);

      // Iterate through each Pokemon in the collection
      user.pokemonCollection.forEach((pokemon, pokemonIndex) => {
        // Set minimum dust to 20000 or keep current if higher
        pokemon.dust = Math.max(pokemon.dust, 20000);

        // Get available emotions for this Pokemon
        const availableEmotions = Object.values(Emotion).filter(
          (e, i) =>
            PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[pokemonIndex]?.[i] === 1
        );

        // Set all available normal emotions
        pokemon.emotions = availableEmotions;

        // Check if shiny is available for this Pokemon
        const pokemonName = Object.keys(PkmIndex).find(
          (key) => PkmIndex[key] === pokemonIndex
        );
        const shinyAvailable =
          pokemonName && !AnimationConfig[pokemonName]?.shinyUnavailable;

        // Set all available shiny emotions if shiny is available
        if (shinyAvailable) {
          pokemon.shinyEmotions = availableEmotions;
        }
      });

      await user.save();
      console.log(`Updated user: ${user.displayName}`);
    }

    console.log('Successfully updated all users');
  } catch (error) {
    console.error('Error updating users:', error);
  }
}

unlockAllPokemon();
