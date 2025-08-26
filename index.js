//let a =10;   // can change
//const b =20; // can't change value
//a = 100;
//console.log(a);

//b=60;
//console.log(b);

//function greet(){
  //  console.log("Hello World")
//}

let headingE1 = document.getElementById("heading");
function greet() {
   
    headingE1.textContent="Lights ON "
    headingE1.style.color = "BLUE";

}

function onReset(){
    headingE1.textContent="Lights Off"
    headingE1.style.color = "BLACK";


}