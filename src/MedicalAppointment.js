function MedicalAppointment(patient, procedures, private, returning) {

  var clazz = {
    price: function() {
      if(returning) return 0;

      var finalPrice = 0;

      procedures.forEach(function(procedure) {
        if("x-ray" == procedure) finalPrice += 55;
        else if("plaster" == procedure) finalPrice += 32;
        else finalPrice += 25;
      });

      if(private) finalPrice *= 2;

      return finalPrice;
    }
  };

  return clazz;
};