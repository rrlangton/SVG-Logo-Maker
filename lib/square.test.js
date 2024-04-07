// Test the renderCode() method for square
const Square = require('./square.js');

// Create a new Square object
const shape = new Square();
shape.setColor("blue");
expect(shape.renderCode()).toEqual("<rect x=\"50\" y=\"50\" width=\"200\" height=\"200\" fill=\"blue\" />");