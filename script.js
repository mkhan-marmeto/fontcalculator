document.getElementById("calculateButton").addEventListener("click", function() {
    const pxValue = parseFloat(document.getElementById("pxInput").value);
    const rootFontSize = parseFloat(document.getElementById("rootInput").value);

    if (!isNaN(pxValue) && !isNaN(rootFontSize) && rootFontSize > 0) {
        const remValue = pxValue / rootFontSize;
        document.getElementById("remValue").textContent = remValue.toFixed(2);
    } else {
        alert("Please enter valid numbers for both fields.");
    }
});
