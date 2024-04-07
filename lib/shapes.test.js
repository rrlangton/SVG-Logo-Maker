const Shape = require('../lib/shapes'); // Import the Shape class

// Create instances of Circle, Triangle, and Square
const circle = new Shape.Circle("red");
const triangle = new Shape.Triangle("blue");
const square = new Shape.Square("green");

// Test the renderCode() method for each shape
test('Circle renderCode', () => {
  expect(circle.renderCode()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
});

test('Triangle renderCode', () => {
    expect(triangle.renderCode()).toEqual(`<svg width="300" height="200"><polygon points="150,10 100,100 200,100" fill="blue"/></svg>`);
});

test('Square renderCode', () => {
  expect(square.renderCode()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green"/>');
});