function convert() {
    let result;

    document.getElementById("inputValue").addEventListener("keyup", () => {
        compute();
    });

    document.getElementById("convertButton").addEventListener("click", () => {
        compute();
    });

    function compute() {
        const conversionType = document.getElementById("conversionType").value;
        const value = parseFloat(document.getElementById("inputValue").value);

        if (isNaN(value)) {
            result = "Please enter a valid number.";
        } else {
            if (conversionType === "FtoC") {
                result = (value - 32) * 5 / 9;
                result = result.toFixed(2) + " °C";
            } else if (conversionType === "CtoF") {
                result = (value * 9 / 5) + 32;
                result = result.toFixed(2) + " °F";
            } else if (conversionType === "MtoF") {
                result = value * 3.28084;
                result = result.toFixed(2) + " ft";
            } else if (conversionType === "FtoM") {
                result = value / 3.28084;
                result = result.toFixed(2) + " m";
            } else {
                result = "Invalid conversion type.";
            }
        }
        document.getElementById("result").innerText = "Converted Value: " + result;
    }
}
(() => {
    convert();
})();