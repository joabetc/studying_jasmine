function Patient(name, age, weight, height) {

  var clazz = {
    print: function() {
      alert(name + " has " + idade + " years ");
    },
    beats: function() {
      return age * 365 * 24 * 60 * 80;
    },
    bmi: function() {
      return weight / (height * height);
    }
  };

  return clazz;
}