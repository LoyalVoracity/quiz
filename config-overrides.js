const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    fs: false,
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    url: require.resolve("url/"),
    querystring: require.resolve("querystring-es3"),
    process: require.resolve("process/browser"),
    zlib: require.resolve("browserify-zlib"),
    buffer: require.resolve("buffer/"),
  };
  return config;
};
