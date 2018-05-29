const path = require('path');

module.exports = {
  entry: './vitual-dom/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}