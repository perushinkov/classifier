window.classifier = window.classifier || {};

if (!window.classifier.math) {
  console.error("make_network requires math");
}

window.classifier.network = window.classifier.network || (function(math) {
  const make = function(layerCounts) {
    const layers = [];
    const weights = [];

    layers.push(...layerCounts.map(layerCount => {
      return Array(layerCount).fill(0);
    }));
    weights.length = 0;
    for (let l = 0; l < layers.length - 1; l++) {
      weights.push(math.make_mat(layers[l], layers[l + 1], 0.5));
    }
    // module impl
    return {
      getNodes: () => layers,
      getWeights: () => weights
    };
  }

  return {
    make,
  };
})(window.classifier.math);
