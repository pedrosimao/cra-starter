import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from "vite-plugin-babel-macros"
import reactJsx from 'vite-react-jsx'
import svgrPlugin from 'vite-plugin-svgr'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: 'build',
  },
  resolve:{
    alias:{
      'src' : path.resolve(__dirname, './src')
    },
  },
  plugins: [
    reactRefresh(),
    reactJsx(),
    macrosPlugin(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
