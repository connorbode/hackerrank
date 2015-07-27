describe('game-of-thrones', function () {
  it('solves test input #1', function () {
    expect(gameOfThrones.solve('aaabbbb')).toEqual('YES');
  });

  it('solves test input #2', function () {
    expect(gameOfThrones.solve('cdefghmnopqrstuvw')).toEqual('NO');
  });

  it('solves test input #3', function () {
    expect(gameOfThrones.solve('cdcdcdcdeeeef')).toEqual('YES');
  });
});