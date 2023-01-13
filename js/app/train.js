window.classifier = window.classifier || {};
window.classifier.train = window.classifier.train || (function() {
  const parseCSVFile = function(csvFile) {
    const trainingSet = {
      labels: [],
      images: []
    };
    csvFile.split("\n")
      .filter(line => !line.startsWith("label") && line.trim().length > 0)
      .map(csvLineStr => csvLineStr.split(","))
      .forEach(csvLine => {
        trainingSet.labels.push(csvLine[0]);
        trainingSet.images.push(csvLine.slice(1));
      });
    return trainingSet;
  };
  return {
    parseCSVFile,
  };
})();
