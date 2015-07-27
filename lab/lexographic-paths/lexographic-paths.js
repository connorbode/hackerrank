var lexographicPaths = {
  solve: function (input) {
    var split = input.split(' '),
        n = parseInt(split[0]), // horizontal moves
        m = parseInt(split[1]), // vertical moves
        k = parseInt(split[2]), // the k-th best
        leftWeight,
        currWeight,
        lowerLimit = 0,
        upperLimit,
        result = "";

    while (n > 0 && m > 0) {
      leftWeight = this.nodeWeight(n-1, m);
      if (k <= lowerLimit + leftWeight - 1) {
        result += "H";
        n -= 1;
      } else {
        lowerLimit = lowerLimit + leftWeight;
        result += "V";
        m -= 1;
      }
    }

    while (n > 0) {
      result += "H";
      n -= 1;
    }

    while (m > 0) {
      result += "V";
      m -= 1;
    }

    return result;
  },

  /**
   * Determines the number of options given a horizontal and
   * vertical distance from the goal
   * @param {number} n The horizontal distance from the goal
   * @param {number} m The vertical distance from the goal
   */
  nodeWeight: function(n, m) {
    var tmp;
    if ((n === 1 && m === 1) || n === 0 || m === 0) {
      return 1;
    }
    if (m > n) {
      tmp = m;
      m = n;
      n = tmp;
    }
    return this.factorial(n) / (this.factorial(m) * this.factorial(n-m));
  },

  factorial: function (n) {
    if (n === 1) {
      return n;
    }
    return n * this.factorial(n-1);
  }
}

lexographicPaths.solve('2 2 2');