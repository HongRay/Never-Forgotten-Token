const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    stream: require.resolve("stream-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib"),
    assert: require.resolve("assert"),
    buffer: require.resolve("buffer"),
    util: require.resolve("util"),
    url: require.resolve("url"),
    process: require.resolve("process/browser"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    })
  );

  return config;
};
