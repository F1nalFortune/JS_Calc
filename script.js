var output = 0;
var num1 = 0;
var num2 = 0;

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
























