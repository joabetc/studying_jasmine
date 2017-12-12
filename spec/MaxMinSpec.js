describe("MaxMin", function() {

  it("should understand unordered numbers ", function() {
    var maxMin = new MaxMin();
    maxMin.find([5, 15, 7, 9]);

    expect(maxMin.getMax()).toEqual(15);
    expect(maxMin.getMin()).toEqual(5);
  });

  it("should understand numbers in ascending order", function() {
    var maxMin = new MaxMin();
    maxMin.find([5, 6, 7, 8]);

    expect(maxMin.getMax()).toEqual(8);
    expect(maxMin.getMin()).toEqual(5);
  });

  it("should understand numbers in descending order", function() {
    var maxMin = new MaxMin();
    maxMin.find([8, 7, 6, 5]);

    expect(maxMin.getMax()).toEqual(8);
    expect(maxMin.getMin()).toEqual(5);
  });

  it("should understand only one number", function() {
    var maxMin = new MaxMin();
    maxMin.find([8]);

    expect(maxMin.getMax()).toEqual(8);
    expect(maxMin.getMin()).toEqual(8);
  });
});