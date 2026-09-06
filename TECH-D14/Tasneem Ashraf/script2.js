var input =document.getElementById("input")
function input1(i){
input.value+=i;
}
function input2(i){
input.value+=i;
}
function input3(i){
input.value+=i;
}
function input4(i){
input.value+=i;
}
function input5(i){
input.value+=i;
}
function input6(i){
input.value+=i;
}
function input7(i){
input.value+=i;
}
function input8(i){
input.value+=i;
}
function input9(i){
input.value+=i;
}
function input0(i){
input.value+=i;
}
function clearInput() {
  input.value = "";
}
function add(i){
  input.value+=i
}
function subtract(i){
  input.value+=i
}
function multiply(i){
  input.value+=i
}
function division(i){
  input.value+=i
}
function dot(){
  input.value+="."
}
function Result(){
  var res =eval (input.value)
  
   input.value=res;
}
 
