function calculateSum() {

    let inputArrayString = document.getElementById('inputArray').value;
    let values = inputArrayString.split(',');

    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        let num = parseFloat(values[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }


    document.getElementById('result').innerText = "The sum of the array is: " + sum;
}