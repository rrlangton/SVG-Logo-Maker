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

// Square
class Square extends Shape {
    renderCode() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.getColor()}"/>`;
    }
}

module.exports = Square;