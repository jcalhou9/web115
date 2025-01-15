/* Jeremy Calhoun
WEB115-N801 Fall 24 */

document.getElementById("reset").onclick = function reset() {
    document.getElementById("greeting").textContent = "Let's go again!";
    document.getElementById("output2").textContent = '';
};

document.getElementById("form").onsubmit = function greetUser(submit) {
    submit.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    if (!firstName || !lastName) {
        return;
    }

    let count;
    while (true) {
        count = prompt(`How high do you want to count, ${firstName}?`);
        if (count === null) return;
        count = Number(count);
        if (!isNaN(count) && count > 0) break;
        alert("Please enter a valid positive number.");
    }
    
    const fullName = middleInitial ? `${firstName} ${middleInitial}. ${lastName}` : `${firstName} ${lastName}`;
    
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Fizz Buzz, ${fullName}!`;



    const outputList = document.getElementById("output2");
    outputList.textContent = "";

    for (let i = 1; i <= count; i++) {
        const listItem = document.createElement("li");
        const oddEvenText = i % 2 === 0 ? "The number is even" : "The number is odd";
        listItem.textContent = `${i}. Bazoom Bazang - ${oddEvenText}`;
        outputList.appendChild(listItem); 
    }
};
