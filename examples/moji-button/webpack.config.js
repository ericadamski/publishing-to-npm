const path = require("path");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              [
                "@babel/env",
                {
                  modules: false
                }
              ],
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  entry: {
    index: "./index.js"
  },
  externals: {
    react: "react",
    "styled-components": "styled-components"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    library: "tuner",
    libraryTarget: "umd"
  }
};
