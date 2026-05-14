const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      // Option 1: Provide a list of specific allowed hostnames
      allowedHosts: ['roderbuilt.com'],
    },
  });
};
