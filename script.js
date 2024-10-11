// Plate Number and Body Number Fixer
function fixPlateAndBody() {
    let input = document.getElementById('inputText').value;
    let lines = input.split('\n');
    let plateNumbers = [];
    let bodyNumbers = [];

    lines.forEach(line => {
        let bodyMatch = line.match(/\(([^)]+)\)/);
        let plateMatch = line.replace(/\(.*?\)/, '').trim();

        // Add plate number (capitalize)
        plateNumbers.push(plateMatch.toUpperCase());

        // Add body number or blank space (invisible)
        bodyNumbers.push(bodyMatch ? bodyMatch[1] : ''); // empty string for blank space
    });

    document.getElementById('plateNumbersOutput').value = plateNumbers.join('\n');
    document.getElementById('bodyNumbersOutput').value = bodyNumbers.join('\n');
}

// Driver/Operator Fixer
function fixDriver() {
    let input = document.getElementById('driverInput').value;
    let lines = input.split('\n');
    let fixedDrivers = lines.map(driver => driver.toUpperCase());
    document.getElementById('driverOutput').value = fixedDrivers.join('\n');
}

// Destination/Site Fixer
function fixDestination() {
    let input = document.getElementById('destinationInput').value;
    let lines = input.split('\n');
    let fixedDestinations = lines.map(destination => destination.toUpperCase());
    document.getElementById('destinationOutput').value = fixedDestinations.join('\n');
}

// Control Number Fixer
function fixControlNumber() {
    let input = document.getElementById('controlNumberInput').value;
    let lines = input.split('\n');
    let fixedControlNumbers = lines.map(control => control.split('/')[0].trim());
    document.getElementById('controlNumberOutput').value = fixedControlNumbers.join('\n');
}

// Copy Output
function copyOutput(elementId) {
    const output = document.getElementById(elementId);
    output.select();
    document.execCommand('copy');
    alert("Copied to clipboard!");
}

// Reset Output
function resetOutput(elementId) {
    document.getElementById(elementId).value = '';
}
