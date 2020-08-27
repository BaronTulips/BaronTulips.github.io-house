function afford(){
  var paulGrab = document.getElementById("paul").value;
var paulDeposit = paulGrab * 1;
var govInput1 = paulDeposit * 0.25;
var paulTotal = paulDeposit + govInput1;

var rosieGrab = document.getElementById("rosie").value;
var rosieDeposit = rosieGrab * 1;
var govInput2 = rosieDeposit * 0.25;
var rosieTotal = rosieDeposit + govInput2;

var total = paulTotal + rosieTotal;
var deposit = document.getElementById("house").value * 0.05;
var left = deposit - total;

if  (total >= deposit){
  alert("You can buy a house!")}
  else {
    alert("You still need " + left + " more or a deposit.")}
  }
