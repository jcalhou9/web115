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
	const mainword ='Study';
    const countLimit = 140;

    for (let count = 1; count <= countLimit; count++) {
        let listItem = document.createElement('li');
        if (count % 3 === 0 && count % 5 === 0) {
            listItem.textContent = `${count}. ${word3} ${word5}`;
        } else if (count % 3 === 0) {
            listItem.textContent = `${count}. ${word3}`;
        } else if (count % 5 === 0) {
            listItem.textContent = `${count}. ${word5}`;
        } else {
		listItem.textContent = `${count}. ${mainword}`;
        }
        output.appendChild(listItem);
    }
};
