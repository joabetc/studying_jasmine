var ui = new PatientView();

var patient = new ui.getPatient();
var bmi = patient.bmi();

ui.showBMI(bmi);