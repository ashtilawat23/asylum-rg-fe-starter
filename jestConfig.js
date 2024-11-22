Object.defineProperty(window, 'backingStorePixelRatio', {
  value: () => ({
    getPropertyValue: prop => {
      return '';
    },
  }),
});

const config = {
  snapshotSerializers: ['jest-snapshot'],
};

module.exports = config;
