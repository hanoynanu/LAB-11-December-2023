// LAB-1
/*if (0) {
    alert("Zero");
} else {
    alert("Nooo");
}
Answer : Noo*/


// LAB-2
/*if (" ") alert("Yes");
else alert("Nooo");
Answer : Yes*/


// LAB-3
/*let inputName = prompt("Guess my name");
let nameENG = "Pongsakorn Promthet";
let nameTH = "พงศกร พรมเทศ";

if (inputName == nameENG || inputName == nameTH) {
    alert("ถูกต้อง");
} else {
    alert("ผิด");
}*/


// LAB-4
/*let inputNumber = +prompt("Please enter the number :");

if (inputNumber > 0) {
    alert("Positive number");
} else if (inputNumber === 0) {
    alert("Zero");
} else if (inputNumber < 0) {
    alert("Negative number");
} else {
    alert("Invalid number");
}*/


// LAB-5
/*let inputNumber = +prompt("Please enter the number :");

if (inputNumber%2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}*/


// LAB-6
/*function addNumbers() {
    let num1 = +prompt("Enter the first number :");
    let num2 = +prompt("Enter the second number :");

    if (num1 && num2) {
        let sum = num1 + num2;
        alert("The sum is: " + sum);
    } else {
        alert("Invalid number");
    }
}
addNumbers();*/


// LAB-7
/*function calculateGrade() {
    let score = prompt("Enter your score :");

    if (parseFloat(score)) {
        score = parseFloat(score);

        let grade;
        if (score >= 80) {
            grade = "A";
        } else if (score >= 70) {
            grade = "B";
        } else if (score >= 60) {
            grade = "C";
        } else if (score >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        alert("Your grade is: " + grade);
    } else {
        alert("Invalid score");
    }
}
calculateGrade();*/


// LAB-8
/*function sortNumbersDescending() {
    let num1 = +prompt("Enter the first number:");
    let num2 = +prompt("Enter the second number :");
    let num3 = +prompt("Enter the third number :");

    if (num1 && num2 && num3) {

        let numbers = [num1, num2, num3];
        numbers.sort((a, b) => b - a);
        alert("Numbers in descending order: " + numbers.join(", "));
    } else {
        alert("Invalid input, please enter only numbers.");
    }
}
sortNumbersDescending();*/


// LAB-9
/*
function login() {
    let username = prompt("Enter your username :");
    let password = prompt("Enter your password :");

    if (username === "") {
        alert("Username is required");
        return;
    }
    if (password === "") {
        alert("Password is required");
        return;
    }

    if ((username === "admin" && password === "1234") || (username === "john" && password === "qwerty")) {
        alert("Hello, " + username);
    } else {
        alert("Invalid username or password");
    }
}
login();*/


// LAB-10
/*
let user = prompt("Enter your name:");

if (user === "" || user === null) {
    user = "guest";
    alert("Welcome, " + user);
} else if (user === "codecamp") {
    let password = prompt("Enter your password:");

    if (password === "123456") {
        user = "codecamp";
        alert("Welcome, " + user);
    } else {
        alert("Wrong password");
    }
} else {
    user = "guest";
    alert("Welcome, " + user);
}*/
