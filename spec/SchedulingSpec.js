describe("Scheduling", function() {

  it("should schedule to 20 day after", function() {
    var patient = new PatientBuilder().build();
    var schedule = new Scheduling();

    var appointment = new MedicalAppointment(patient, [], false, false, new Date(2014, 7, 1));
    var newAppointment = schedule.to(appointment);

    expect(newAppointment.getDate().toString()).toEqual(new Date(2014, 7, 21).toString());
  })
})