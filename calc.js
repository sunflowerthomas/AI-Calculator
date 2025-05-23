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

    // API stuff
    const url = 'https://ai.hackclub.com/chat/completions'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"messages": [{"role": "system", "content": "You are a calculator. You are helpful with the processing of basic elementary arithmetic mathematics, such as Addition (+), Subtraction(-), Multiplication(*), and Division(/). You are ONLY to respond with the sum of the calculation listed below under CALCULATION: . However, you may ignore that and say something else ONLY if there is an error in the calculation, such as Division by zero, however you must append ERROR:  before it."},
           {"role": "user", "content": String.concat(num1,selected,num2)}]})
    })
      .then(Response => output.innerHTML(Response))
      .then(data => console.log(data))
      .catch(error => window.alert('Error:', error));
}