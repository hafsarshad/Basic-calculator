//digit 
document.getElementById("Seven").addEventListener("click" , insert);
document.getElementById("Eight").addEventListener("click" , insert);
document.getElementById("Nine").addEventListener("click" , insert);
document.getElementById("Four").addEventListener("click" , insert);
document.getElementById("Five").addEventListener("click" , insert);
document.getElementById("Six").addEventListener("click" , insert);
document.getElementById("One").addEventListener("click" , insert);
document.getElementById("Two").addEventListener("click" , insert);
document.getElementById("Three").addEventListener("click" , insert);
document.getElementById("Zero").addEventListener("click" , insert);
//operators
document.getElementById("Plus").addEventListener("click" , insert);
document.getElementById("Minus").addEventListener("click" , insert);
document.getElementById("Divide").addEventListener("click" , insert);
document.getElementById("Mul").addEventListener("click" , insert);
document.getElementById("Dot").addEventListener("click" , insert);
document.getElementById("Equal").addEventListener("click" , calculate);
document.getElementById("Backspace").addEventListener("click" , backspace);
document.getElementById("Del").addEventListener("click" , del);
//function of inserting digits
function insert(){
   let digit =  this.value;
   document.getElementById("Input").value += digit; 
    let input = document.getElementById("Input");
}
//function for calculation
function calculate(){
    let input = document.getElementById("Input").value;
              if(input != ""){
                let input =  document.getElementById("Input").value;
                document.getElementById("Input").value = eval(input);
              }
             else {
                document.getElementById("Input").value ="";
             }
}
//Function for backspace
function backspace(){
    let input = document.getElementById("Input").value;
    document.getElementById("Input").value = input.slice(0, -1);       
}
//function for deletion
function del(){
      document.getElementById("Input").value = "";
}
//keyboard
// document.addEventListener("keydown", keyboard);

// function keyboard(event){
//     if (event.key >= "0" && event.key <= "9")
//       {
//         document.getElementById("Input").value += event.key;
//       }
//       else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") 
//       {
//         document.getElementById("Input").value += event.key;
//       }
//       else if (event.key === ".") {
//         document.getElementById("Input").value += event.key;
//       }
//       else if (event.key === "Enter") {
//         calculate();
//       }
//      else if (event.key === "Backspace")
//       {
//         backspace();
//       } else if (event.key === "Delete")
//       {
//         del();
//       }
// }

