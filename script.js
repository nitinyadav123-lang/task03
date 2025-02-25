document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.getElementById("input");  
    let buttons = document.querySelectorAll("input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.value;

            if (value === "=") {
                try {
                    inputField.value = eval(inputField.value);
                } catch {
                    inputField.value = "Error";
                }
            } else if (value === "AC") {
                inputField.value = "";
            } else if (value === "B") {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                inputField.value += value;
            }
        });
    });
});