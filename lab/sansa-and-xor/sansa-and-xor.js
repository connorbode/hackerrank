var sansaAndXor = {
  solve: function (str) {
    var arr = str.split(' '),
        length = arr.length,
        odd = length % 2 === 0,
        results = [],
        curr = 0,
        i,
        xorz;

    for (i = 0; i < length / 2; i++) {
      curr += length - i * 2;

      if (curr % 2 !== 0) {
        results.push(arr[i]);
        if (length - i - 1 !== i) {
          results.push(arr[length - i - 1]);
        }
      }
    }


    if (results.length === 0) {
      return 0;
    }

    xorz = results[0];

    for (i = 1; i < results.length; i++) {
      xorz = xorz ^ results[i];
    }

    return xorz;
  }
};