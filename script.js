// Plate Number and Body Number Fixer
function fixPlateAndBody() {
    let input = document.getElementById('inputText').value;
    let lines = input.split('\n');
    let plateNumbers = [];
    let bodyNumbers = [];

    lines.forEach(line => {
        let bodyMatch = line.match(/\(([^)]+)\)/);
        let plateMatch = line.replace(/\(.*?\)/, '').trim();

        plateNumbers.push(plateMatch.toUpperCase());
        bodyNumbers.push(bodyMatch ? bodyMatch[1].toUpperCase() : '');
    });

    document.getElementById('plateNumbersOutput').value = plateNumbers.join('\n');
    document.getElementById('bodyNumbersOutput').value = bodyNumbers.join('\n');
}

// Combined Fixer for Project ID / Destination / Driver
function fixCombined() {
    let input = document.getElementById('combinedInput').value;
    let lines = input.split('\n');
    let fixedOutput = lines.map(item => item.toUpperCase());
    document.getElementById('combinedOutput').value = fixedOutput.join('\n');
}

// Control Number Fixer
function fixControlNumber() {
    let input = document.getElementById('controlNumberInput').value;
    let lines = input.split('\n');
    let fixedControlNumbers = lines.map(control => control.split('/')[0].trim());
    document.getElementById('controlNumberOutput').value = fixedControlNumbers.join('\n');
}

// Copy and Reset Functionality
function copyAndReset(outputId, buttonId) {
    const output = document.getElementById(outputId);
    const button = document.getElementById(buttonId);

    output.select();
    document.execCommand('copy');
    
    // Change button text to check icon and "READY TO PASTE IN EXCEL"
    button.innerHTML = '✔️ READY TO PASTE IN EXCEL';
    button.classList.add('ready-paste');
    
    // Reset back to "Copy" after 3 seconds
    setTimeout(() => {
        button.innerHTML = 'Copy';
        button.classList.remove('ready-paste');
    }, 3000);
    
    // Clear output and input fields after copying
    output.value = '';
    clearInput(outputId);  // Custom clear input function
}

// Clear the corresponding input fields
function clearInput(outputId) {
    if (outputId === 'controlNumberOutput') {
        document.getElementById('controlNumberInput').value = '';
    } else if (outputId === 'combinedOutput') {
        document.getElementById('combinedInput').value = '';
    } else if (outputId === 'plateNumbersOutput' || outputId === 'bodyNumbersOutput') {
        document.getElementById('inputText').value = '';
    }
}
