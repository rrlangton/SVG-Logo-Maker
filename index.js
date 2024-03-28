const inquirer = require('inquirer');
const fs = require("fs")
const Logo = require("./lib/logo")
const Shape = require("./lib/shapes")
const Text = require("./lib/text")


inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter text less than 3 characters',
        },
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

            const newShape = new Shape(answers.shapeColor);
            
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
