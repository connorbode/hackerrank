var manasaAndStones = {
  
  solve: function (stones, a, b) {
    var smallest = a < b ? a : b,
        largest = a < b ? b : a,
        smallestNum = smallest * (stones - 1),
        i,
        results = smallestNum + ' ',
        diff = largest - smallest;

    for (i = 1; i < stones; i++) {
      results += (smallestNum + (i * diff)) + ' ';
    }

    return results.trim();
  }

};