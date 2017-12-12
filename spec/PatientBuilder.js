function PatientBuilder() {
  var name = "Willian";
  var age = 28;
  var weight = 72;
  var height = 1.82;

  var clazz = {
    build: function() {
      return new PatientBuilder(name, age, weight, height);
    },
    withName: function(value) {
      name = value;
      return this;
    },
    withAge: function(value) {
      age = value;
      return this;
    },
    withWeight: function(value) {
      weight = value;
      return this;
    },
    withHeight: function(value) {
      height = value;
      return this;
    }
  };

  return clazz;
}