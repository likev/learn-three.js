// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        part1: resolve(__dirname, 'getting-started/getting-started.html'),
        part2: resolve(__dirname, 'Add-OrbitControls/Add-OrbitControls.html'),
      }
    }
  }
})