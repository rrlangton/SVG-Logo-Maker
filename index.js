const inquirer = require('inquirer');
const fs = require("fs")
const Logo = require("./lib/logo")
const Circle = require("./lib/shapes")
const Triangle = require("./lib/shapes")
const Square = require("./lib/shapes")
const Text = require("./lib/text")

inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter text less than 4 characters',
          validate: function(value) {
            if (value.length <= 4) {
              return true;
            }
            return 'Please enter text with less than 4 characters.';    
        }},
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter a color for the text',
        },
        {
          type: 'list',
          name: 'logoShape',
          message: 'Chose a shape:',
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

            const newText = new Text(answers.text, answers.textColor)
            
            const newLogo1 = new Logo(newText, newShape);
            // const newLogo2 = new Logo("XYZ", "yellow", "circle", "green");

            const logoCode = (newLogo1.renderCode())

            console.log(logoCode)
            // console.log(newLogo2.renderCode())

            fs.writeFile("./examples/result.svg", logoCode)
          })

      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
