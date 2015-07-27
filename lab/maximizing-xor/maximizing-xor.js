var maximizingXor = {
  solve: function (inputStr) {
    var split = inputStr.split(' '),
        money = split[0],
        price = split[1],
        numWrappersForFreeCandy = split[2],
        wrappers = eaten = Math.floor(money / price);

    while (wrappers >= numWrappersForFreeCandy) {
      eaten += 1;
      wrappers = wrappers - numWrappersForFreeCandy + 1;
    }

    return eaten;
  }
}