const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.config.js");
const ip = require("internal-ip");
const portFinderSync = require("portfinder-sync");
const Dotenv = require('dotenv-webpack')

const infoColor = (_message) => {
  return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`;
};

module.exports = merge(
  commonConfiguration,
  {
    mode: "development",
    devServer: {
      host: "0.0.0.0",
      port: portFinderSync.getPort(8080),
      static: "./dist",
    },
  }
);
