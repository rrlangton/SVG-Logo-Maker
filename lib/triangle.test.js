// Test the renderCode() method for triangle
const Triangle = require('./triangle.js');

// Create a new Triangle object
const shape = new Triangle();
shape.setColor("blue");
expect(shape.renderCode()).toEqual('<svg width="300" height="200"><polygon points="150,10 100,100 200,100" fill="blue"/></svg>');
