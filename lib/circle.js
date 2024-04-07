class Shape {
    // properties
    constructor(shapeColor) {
        this._shapeColor = shapeColor;
    }

    // methods
    renderCode() {
        return '';
    }

    setColor(newColor) {
        if (typeof newColor === 'string' && newColor.trim().length > 0) {
            this._shapeColor = newColor.trim();
        } else {
            throw new Error('Invalid color');
        }
    }

    getColor() {
        return this._shapeColor;
    }
}

// Circle
class Circle extends Shape {
    renderCode() {
        return `<circle cx="150" cy="100" r="80" fill="${this.getColor()}"/>`;
    }
}

module.exports = Circle;