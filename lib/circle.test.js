// Test the renderCode() method for circle
const Circle = require('./circle.js');

// Create a new Circle object
const shape = new Circle();
shape.setColor("blue");
expect(shape.renderCode()).toEqual("<circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"blue\" />");