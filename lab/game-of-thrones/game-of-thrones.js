var gameOfThrones = {
  solve: function (input) {
    var chars = {},
        i,
        c,
        odd,
        letter;

    for (i = 0; i < input.length; i++) {
      c = input.charAt(i);
      if (chars[c]) {
        chars[c] += 1;
      } else {
        chars[c] = 1;
      }
    }

    odd = false;
    for (letter in chars) {
      if (chars[letter] % 2 !== 0) {
        if (odd === true) {
          return "NO";
        }
        odd = true;
      }
    }

    return "YES";
  }
}