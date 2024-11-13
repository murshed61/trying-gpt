const display = document.getElementById("calc-display");

// Append value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Perform calculation
function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch {
    display.value = "Error"; // Show error for invalid input
  }
}
