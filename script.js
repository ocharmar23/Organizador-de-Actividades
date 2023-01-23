var nombreActividad = document.getElementById("Actividad").value;

var horaLimite = document.getElementById("HoraLimite").value;
var numOfActs = 0;
function agregarActividad(){
  var executesooner = nombreActividad.value;
  var x = document.getElementById("Actividad").value;
  document.getElementById("act").innerHTML = `${nombreActividad.value} <br> ${horaLimite} asdasdasd ${executesooner}`;
  numOfActs+=1;
  document.getElementById("acercade").innerHTML = `${numOfActs} get a intel processor`;
}