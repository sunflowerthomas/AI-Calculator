function getSelection() {
    var ele = document.getElementsByName('calc-type')

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}
function calculate() {
    var selected = getSelection()
    var num1 = document.getElementById("1num")
    var num2 = document.getElementById("2num")
    var output = document.getElementById('output')

    if (selected == "add") {
        output.innerHTML = (new Number(num1.value) + new Number(num2.value));
    }
    else if (selected == "subtract") {
        output.innerHTML = (num1.value - num2.value);
    }
    else if (selected == "multiply") {
        output.innerHTML = (num1.value * num2.value);
    }
    else if (selected == "divide") {
        if (num2 == 0) {
            output.innerHTML = "Error: Attempted division by zero"
        }
        else {
            output.innerHTML = (num1.value / num2.value);
        }
    }
    else {
        output.innerHTML = "Error: Don't forgot to fill out all fields!"
    }
}