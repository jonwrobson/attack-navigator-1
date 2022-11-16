module.exports = {
    //...
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "fs": false,
        "process": require.resolve('process/browser'),
      },
    },
  };