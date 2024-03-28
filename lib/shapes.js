class Shape {
    // properties
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }

    // methods
    renderCode() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }

    setColor(newColor) {
        this.shapeColor = newColor
    }
}
// Circle
class Circle extends Shape {
    renderCode() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
}
// Triangle
class Triangle extends Shape {
    renderCode() {
        return `<svg width="300" height="200">
        <polygon points="150,10 100,100 200,100" "fill="${this.shapeColor}"/>`
    }
}
// Square
class Square extends Shape {
    renderCode() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/>`
    }
}

module.exports = Shape;
 