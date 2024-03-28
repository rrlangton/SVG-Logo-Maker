const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

  run() {
    return inquirer
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
          type: 'input',
          name: 'logoShape',
          message: 'Chose a shape: circle, triangle, square',
        },
      ])
}
      .then(() => console.log('Generated logo.svg'));
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  };


module.exports = CLI;
