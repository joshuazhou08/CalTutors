const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/JS/index.js",
    about: "./src/JS/about.js",
    how_it_works: "./src/JS/how_it_works.js",
    pricing: "./src/JS/pricing.js",
    testimonials: "./src/JS/testimonials.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"],
    }),

    new HtmlWebpackPlugin({
      title: "About",
      filename: "about.html",
      template: "./src/about.html",
      chunks: ["about"],
    }),

    new HtmlWebpackPlugin({
      title: "Testimonials",
      filename: "testimonials.html",
      template: "./src/testimonials.html",
      chunks: ["testimonials"],
    }),

    new HtmlWebpackPlugin({
      title: "How_It_Works",
      filename: "how_it_works.html",
      template: "./src/how_it_works.html",
      chunks: ["how_it_works"],
    }),

    new HtmlWebpackPlugin({
      title: "Pricing",
      filename: "pricing.html",
      template: "./src/pricing.html",
      chunks: ["pricing"],
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },

      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
    ],
  },
};
