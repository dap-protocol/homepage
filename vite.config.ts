


/*** IMPORT ------------------------------------------- ***/

import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

/*** EXPORT ------------------------------------------- ***/

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    // allowedHosts: [
    //   "you.local",
    //   "you.local:4242"
    // ],
    cors: true,
    host: true,
    hmr: true
  }
});
