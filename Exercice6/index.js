const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Check for division by zero
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Erreur';
    }
}

// Attach functions to the window object for global access
window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.calculateResult = calculateResult;

// Change from CommonJS module.exports to ES6 export
export { appendToDisplay, clearDisplay, calculateResult };
