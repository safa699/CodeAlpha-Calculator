const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value === "") return;

        let expression = display.value.replace(/%/g, "/100");

        display.value = eval(expression);
    } catch {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1200);
    }
}

// Keyboard Support (Bonus Feature)
document.addEventListener("keydown", function (e) {

    if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    }

    else if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    else if (e.key === "Backspace") {
        deleteLast();
    }

    else if (e.key === "Escape") {
        clearDisplay();
    }

    else if (e.key === "%") {
        appendValue("%");
    }
});