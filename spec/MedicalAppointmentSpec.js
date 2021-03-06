describe("MedicalAppointment", function() {

  var patient;

  beforeEach(function() {
    patient = new PatientBuilder().withWeight(10).build();
  });
  
  describe("returning medical appointment", function() {
    it("should not charge if it is a returning appointment", function() {
      var medicalAppointment = new MedicalAppointment(patient, [], true, true);
  
      expect(medicalAppointment.price()).toEqual(0);
    });
  });

  describe("normal medical appointment", function() {
    it("should charge 25 per medical appointment", function() {
      var medicalAppointment = new MedicalAppointment(patient, ["proc1", "proc2"], false, false);
  
      expect(medicalAppointment.price()).toEqual(50);
    });
  });

  describe("private medical appointment", function() {
    it("should charge the double price per private medical appointment without special procedures", function() {
      var medicalAppointment = new MedicalAppointment(patient, ["proc1", "proc2"], true, false);
  
      expect(medicalAppointment.price()).toEqual(100);
    });
  
    it("should charge the double price per private medical appointment with special procedures", function() {
      var medicalAppointment = new MedicalAppointment(patient, ["x-ray"], true, false);
  
      expect(medicalAppointment.price()).toEqual(110);
    });
  });

  describe("medical appointment with special procedures", function() {
    it("should charge a specific price depending on the procedure", function() {
      var medicalAppointment = new MedicalAppointment(patient, ["common-procedure", "x-ray", "common-procedure", "plaster"], false, false);
  
      expect(medicalAppointment.price()).toEqual(25 + 55 + 25 + 32);
    });
  });
});