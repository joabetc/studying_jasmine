describe("Patient", function() {

  it("should calculate the BMI", function() {
    var patient = new Patient("Willian", 28, 72, 1.82);
    var bmi = patient.bmi();
    expect(bmi).toEqual(72 / (1.82 * 1.82));
  });

  it("should caculate total of heart beats per year", function() {
    var patient = new Patient("Willian", 28, 72, 1.82);
    var beats = patient.beats();
    expect(beats).toEqual(28 * 365 * 24 * 60 * 80);
  });
});