const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const path = require("path");
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  output: {
    filename: "app.bunlde.js",
    publicPath: "/",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      shortname: "Petgram 🐶",
      description: "Con Petgram puedes encontrar fotos de animales domésticos my fácilmente",
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/home',
      scope: '/',
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve('src/assets/maskable_icon_x128.png'),
          size: '192x192',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x192.png'),
          size: '256x256',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x384.png'),
          size: '384x384',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x512.png'),
          size: '512x512',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '1024x1024',
          purpose: 'any maskable',
          type: 'image/png'
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://petgram-server-nine-phi.vercel.app'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
