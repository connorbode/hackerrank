describe('maximizing-xor', function () {
  it('test #1', function () {
    expect(maximizingXor.solve('10 2 5')).toEqual(6);
  })

  it('test #2', function () {
    expect(maximizingXor.solve('12 4 4')).toEqual(3);
  });

  it('test #3', function () {
    expect(maximizingXor.solve('6 2 2')).toEqual(5);
  });
});