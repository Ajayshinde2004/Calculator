// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
    
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Using eval to evaluate the expression
    } catch (error) {
        display.value = 'Error';
    }
}
