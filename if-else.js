document.getElementById("checkButton").addEventListener("click", function() {
    // Preluăm valoarea
    let input = document.getElementById("numberInput").value;
    // Convertim valoarea
    let number = parseFloat(input);
    if (!isNaN(number)) {
        if (number > 0) {
            alert("1");
        } else if (number < 0) {
            alert("-1");
        } else {
            alert("0");
        }
    } else {
        alert("Error");
    }
});
