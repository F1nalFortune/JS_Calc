var history = [];
var output = 0;
var num1 = 0;
var num2 = 0;


function clearAll() {
 document.getElementById('val').value = '';
 document.getElementById('val2').value = '';
  output = 0;
 document.getElementById('output').innerHTML = output;
}

function clearHistory(){
  var clear = output.clear;
}

function addFunction() {
  num1 = document.getElementById("val").value;
  num2 = document.getElementById("val2").value;
  var result = parseInt(num1) + parseInt(num2);
  // var input = getElementById('val');
  // var input2 = getElementById('val2');
  document.getElementById("val").value = '';
  document.getElementById("val2").value = '';
  document.getElementById("output").innerHTML = result;
  console.log(output.value);
  console.log(result);
  // input.value = '';
  // input2.value = '';
}

console.log("Hey");

input1 = val.innerHTML;
input2 = val2.innerHTML;

function subtractFunction() {
  num1 = document.getElementById("val").value;
  num2 = document.getElementById("val2").value;
  var result = parseInt(num1) - parseInt(num2);
  // var input = getElementById('val');
  // var input2 = getElementById('val2');
  document.getElementById("val").value = '';
  document.getElementById("val2").value = '';
  document.getElementById("output").innerHTML = result;
  console.log(output.value);
  console.log(result);
  // input.value = '';
  // input2.value = '';
}

function multiplyFunction() {
  num1 = document.getElementById("val").value;
  num2 = document.getElementById("val2").value;
  var result = parseInt(num1) * parseInt(num2);
  document.getElementById("val").value = '';
  document.getElementById("val2").value = '';
  document.getElementById("output").innerHTML = result;
}

function divisionFunction() {
  num1 = document.getElementById("val").value;
  num2 = document.getElementById("val2").value;
  var result = parseInt(num1) / parseInt(num2);
  document.getElementById("val").value = '';
  document.getElementById("val2").value = '';
  document.getElementById("output").innerHTML = result;
}
