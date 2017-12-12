describe("Scheduling", function() {

  var patient;
  var schedule;

  beforeEach(function() {
    patient = new PatientBuilder().build();
    schedule = new Scheduling();
  });

  it("should schedule to 20 day after", function() {
    var appointment = new MedicalAppointment(patient, [], false, false, new Date(2014, 7, 1));
    var newAppointment = schedule.to(appointment);

    expect(newAppointment.getDate().toString()).toEqual(new Date(2014, 7, 21).toString());
  });

  it("should not schedule during the weekend", function() {
    var appointment = new MedicalAppointment(patient, [], false, false, new Date(2014, 5, 30));
    var newAppointment = schedule.to(appointment);

    expect(newAppointment.getDate().toString()).toEqual(new Date(2014, 6, 21).toString());
  })
})