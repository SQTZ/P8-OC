function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput');
    const binaryResult = document.getElementById('binaryResult');
    const decimalValue = decimalInput.value.trim(); // Trim whitespace
    if (/^\d+$/.test(decimalValue)) { // Check if the input is a valid number
        binaryResult.textContent = parseInt(decimalValue).toString(2);
    } else {
        binaryResult.textContent = ''; // Set to empty string for non-numeric input
    }
}

// Attach the function to the window object for testing
window.convertToBinary = convertToBinary;
