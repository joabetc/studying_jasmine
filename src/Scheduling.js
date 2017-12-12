function Scheduling() {

  var clazz = {

    to: function(appointment) {
      var twentyDaysInMilliseconds = 1000 * 60 * 60 * 24 * 20;
      var newDate = new Date(appointment.getDate().getTime() + twentyDaysInMilliseconds);
      var newAppointment = new MedicalAppointment(appointment.getName(), appointment.getProcedures(), appointment.isPrivate(), true, newDate);
      return newAppointment;
    }
  };

  return clazz;
}