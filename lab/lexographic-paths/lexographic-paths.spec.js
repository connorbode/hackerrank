describe('lexographic paths', function () {

  var l;

  beforeEach(function () {
    l = lexographicPaths;
  });

  it('determines factorials properly', function () {
    expect(l.factorial(4)).toEqual(24);
  });

  it('determines the proper node weight', function () {
    expect(l.nodeWeight(2, 2)).toEqual(6);
    expect(l.nodeWeight(3, 3)).toEqual(20);
    expect(l.nodeWeight(2, 3)).toEqual(10);
  });

  it('passes the first sample test', function () {
    expect(lexographicPaths.solve('2 2 0')).toEqual('HHVV');
    expect(lexographicPaths.solve('2 2 1')).toEqual('HVHV');
    expect(lexographicPaths.solve('2 2 2')).toEqual('HVVH');
    expect(lexographicPaths.solve('2 2 3')).toEqual('VHHV');
    expect(lexographicPaths.solve('2 2 4')).toEqual('VHVH');
    expect(lexographicPaths.solve('2 2 5')).toEqual('VVHH');
  });
});