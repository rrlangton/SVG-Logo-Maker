const inquirer = require('inquirer');
const fs = require("fs");
const Logo = require("./lib/logo.js");
const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");
const Text = require("./lib/text.js");

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text less than 4 characters',
        validate: function(value) {
            if (value.length <= 4) {
                return true;
            }
            return 'Please enter text with less than 4 characters.';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text',
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape',
    }
])
.then((answers) => {
    console.log(answers);
    let newShape;
    switch (answers.logoShape) {
        case "circle":
            newShape = new Circle(answers.shapeColor);
            break;
        case "triangle":
            newShape = new Triangle(answers.shapeColor);
            break;
        case "square":
            newShape = new Square(answers.shapeColor);
            break;
        default:
            console.log("Invalid shape selection.");
    }

    const newText = new Text(answers.text, answers.textColor);
    const newLogo1 = new Logo(newText, newShape);
    const logoCode = newLogo1.renderCode();
    console.log(logoCode);

    fs.writeFile("./examples/result.svg", logoCode, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully.');
        }
    });
})
.catch((err) => {
    console.log(err);
    console.log('Oops. Something went wrong.');
});
