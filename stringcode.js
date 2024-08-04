function updateText(){
    document.getElementById("bs").innerHTML = 
    "It's a Palidrome!";
    } 
  // input and button element links
const input = document.getElementById("myInput");
const button = document.getElementById("myButton");

// Added event
input.addEventListener("input", () => {
  // Input
  if (input.value.length > 0) {
    // Enable with text
    button.disabled = false;
  } else {
    // Disable without text
    button.disabled = true;
  }
});