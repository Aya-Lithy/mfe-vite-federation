import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    federation({
      name: "container",
      remotes: {
        authRemote: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: {
        react: {
          import: true,
          requiredVersion: "18.2.0",
        },
        "react-dom": {
          import: true,
          requiredVersion: "18.2.0",
        },
        "react-router-dom": {
          import: true,
          requiredVersion: "5.3.4",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});
