/* Jeremy Calhoun
WEB115-N801 Fall 24 */

document.getElementById("reset").onclick = function reset() {
    document.getElementById("greeting").textContent = "Let's go again!";
    document.getElementById("output").textContent = '';
};

document.getElementById("form").onsubmit = function greetUser(submit) {
    submit.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    if (!firstName || !lastName) {
        return;
    }

    const fullName = middleInitial ? `${firstName} ${middleInitial}. ${lastName}` : `${firstName} ${lastName}`;
    
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Fizz Buzz, ${fullName}!`;

    const output = document.getElementById('output');
    output.textContent = '';
    const word3 = 'Student';
    const word5 = 'Dreamer';
    const mainword = 'Study';
    const countLimit = 140;
    const firstDivisor = 3;
    const secondDivisor = 5;

    function checkDivision(num, divisor) {
        return num % divisor === 0;
    }

    for (let count = 1; count <= countLimit; count++) {
        let listItem = document.createElement('li');
        if (checkDivision(count, firstDivisor) && checkDivision(count, secondDivisor)) {
            listItem.textContent = `${count}. ${word3} ${word5}`;
        } else if (checkDivision(count, firstDivisor)) {
            listItem.textContent = `${count}. ${word3}`;
        } else if (checkDivision(count, secondDivisor)) {
            listItem.textContent = `${count}. ${word5}`;
        } else {
            listItem.textContent = `${count}. ${mainword}`;
        }
        output.appendChild(listItem);
    }
};