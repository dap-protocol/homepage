


/*** IMPORT ------------------------------------------- ***/

import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

/*** EXPORT ------------------------------------------- ***/

export default defineConfig({
  build: {
    minify: "terser",
    sourcemap: false,
    target: "esnext",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  esbuild: {
    target: "esnext"
  },
  plugins: [
    sveltekit()
  ],
  server: {
    // allowedHosts: [
    //   "you.local",
    //   "you.local:4242"
    // ],
    cors: true,
    host: true,
    hmr: true
  },
  ssr: {
    noExternal: true
  }
});
