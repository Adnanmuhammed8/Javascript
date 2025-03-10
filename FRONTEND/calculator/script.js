function appendToDisplay(num){
    display.value += num
}
function clearDisplay(){
    display.value = ""
}
function deleteLast(){
    display.value = display.value.slice(0, -1);

}
function calculate(){
    try {
               display.value = eval(display.value);
            } catch (error) {
               display.value = "Error";
               setTimeout(() => {
                display.value = ""
                
               }, 1000);
             }

}




























// function calculate() {
//     const display = document.getElementById("display");
//     try {
//       display.value = eval(display.value);
//     } catch (error) {
//       display.value = "Error";
//           setTimeout(() => {
//           display.value = ""
    
//            }, 1000);
//     }
//   }
  
//   function appendToDisplay(value) {
//     document.getElementById("display").value += value;
//   }
  
//   function clearDisplay() {
//     document.getElementById("display").value = "";
//   }
  
//   function deleteLast() {
//       let display = document.getElementById("display");
//       display.value = display.value.slice(0, -1);
//   }
  