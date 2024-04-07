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

// Triangle
class Triangle extends Shape {
    renderCode() {
        return `<svg width="300" height="200">
                    <polygon points="150,10 100,100 200,100" fill="${this.getColor()}"/>
                </svg>`;
    }
}

module.exports = Triangle;

 