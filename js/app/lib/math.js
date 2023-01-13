window.classifier = window.classifier || {};
window.classifier.math = window.classifier.math || (function() {
  const make_mat = function(rows, cols, val) {
    return Array(rows).map(_ => Array(cols).fill(val));
  };
  return {
    make_mat,
  };
})();
