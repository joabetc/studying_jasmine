function MedicalAppointment(patient, procedures, private, returning, date) {

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
    },

    getName: function() { return patient; },
    getProcedures: function() { return procedures; },
    isPrivate: function() { return private; },
    isReturning: function() { return returning; },
    getDate: function() { return date; }
  };

  return clazz;
};