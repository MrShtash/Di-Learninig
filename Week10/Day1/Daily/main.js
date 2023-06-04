// 1
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
// Use the exported module in a script.js file.
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

const largeNumber = 356;
// const currentdate = new Date();

// OR
function getCurrenDate () {
    const now = new Date();
    return now
}

module.exports = {
    largeNumber,
    currentdate
}
