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

// Triangle
class Triangle extends Shape {
    renderCode() {
        return `<svg width="300" height="200">
                    <polygon points="150,10 100,100 200,100" fill="${this.getColor()}"/>
                </svg>`;
    }
}

// Square
class Square extends Shape {
    renderCode() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.getColor()}"/>`;
    }
}

module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};

 