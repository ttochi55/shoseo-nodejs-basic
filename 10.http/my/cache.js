// Cache
module.exports = {
  clear: () => {
    for (const path in require.cache) {
      if (path.endsWith('.js')) {
        // only clear *.js, not *.node
        console.log('Remove Cached:', path);
        delete require.cache[path];
      }
    }
  },
};
