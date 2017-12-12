function PatientView() {
  var clazz = {
    getPatient: function() {
      return new PatientBuilder(
        $("#name").val(),
        $("#age").val(),
        $("#weight").val(),
        $("#height").val(),
      );
    },
    showBMI: function(bmi) {
      $("#result").val("The BMI is " + bmi);
    }
  }

  return clazz;
}