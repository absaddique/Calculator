import inquirer from "inquirer";
const answers: {
    numberOne: number;
    numberTwo: number;
    Operator: string;
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        massage: "kindly enter your first no",
    },
    {
        type: "number",
        name: "numberTwo",
        massage: "kindly enter your first no",
    },
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/"],
        massage: "Select Operator",
    },
]);

const { numberOne, numberTwo, Operator } = answers;
if (numberOne && numberTwo && Operator) {
    let result: number = 0;
    if (Operator === "+") {
        result = numberOne + numberTwo;
    } else if (Operator === "-") {
        result = numberOne - numberTwo;
    }
    if (Operator === "/") {
        result = numberOne / numberTwo;
    }
    if (Operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
} else {
    console.log("Kindly enter valid input");
}
