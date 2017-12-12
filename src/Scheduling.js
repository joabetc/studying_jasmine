function Scheduling() {

  var clazz = {

    to: function(appointment) {
      var oneDayInMilliseconds = 1000 * 60 * 60 * 24;
      var twentyDaysInMilliseconds = oneDayInMilliseconds * 20;
      var newDate = new Date(appointment.getDate().getTime() + twentyDaysInMilliseconds);

      while(newDate.getDay() == 0 || newDate.getDay() == 6)
        newDate = new Date(newDate.getTime() + oneDayInMilliseconds);
      var newAppointment = new MedicalAppointment(appointment.getName(), appointment.getProcedures(), appointment.isPrivate(), true, newDate);
      return newAppointment;
    }
  };

  return clazz;
}