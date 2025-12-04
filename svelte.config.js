


/*** IMPORT ------------------------------------------- ***/

import adapter from "svelte-adapter-bun-next";
import { sveltePreprocess } from "svelte-preprocess";

/*** PROGRAM ------------------------------------------ ***/

const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: [
    sveltePreprocess()
  ]
};

/*** EXPORT ------------------------------------------- ***/

export default config;
