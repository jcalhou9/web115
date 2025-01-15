/* Jeremy Calhoun
WEB115-N801 Fall 24 */

document.getElementById("reset").onclick = function reset() {
    document.getElementById("greeting").textContent = "Let's go again!";
    document.getElementById("output2").textContent = '';
};

document.getElementById("form").onsubmit = function greetUser(submit) {
    submit.preventDefault();

    let firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    let lastName = document.getElementById("last-name").value;
    const mainWord = document.getElementById("main-word").value;

    if (!firstName || !lastName) {
        firstName = "Guest";
        lastName = "User";
    }
    
    const fullName = middleInitial ? `${firstName} ${middleInitial}. ${lastName}` : `${firstName} ${lastName}`;
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Fizz Buzz, ${fullName}!`;

    const output = document.getElementById('output2');
    output.textContent = '';
    
    const divisor1 = parseInt(document.getElementById("divisor1").value);
    const word1 = document.getElementById("word1").value;
    const divisor2 = parseInt(document.getElementById("divisor2").value);
    const word2 = document.getElementById("word2").value;
    const divisor3 = parseInt(document.getElementById("divisor3").value);
    const word3 = document.getElementById("word3").value;
    const countLimit = parseInt(document.getElementById("count-limit").value);
    const divisors = {
        [divisor1]: word1,
        [divisor2]: word2,
        [divisor3]: word3
    };

    function checkDivision(num, divisor) {
        return num % divisor === 0;
    }

    for (let count = 1; count <= countLimit; count++) {
        let listItem = document.createElement('li');
        let result = '';

        Object.entries(divisors).forEach(([divisor, word]) => {
            if (checkDivision(count, divisor)) {
                result += word + ' ';
            }
        });

        if (result === '') {
            result = mainWord;
        }

        listItem.textContent = `${count}. ${result.trim()}`;
        output.appendChild(listItem);
    }
};