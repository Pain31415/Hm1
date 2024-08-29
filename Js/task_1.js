class Shape {
    constructor(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    calculateArea() {
        return 0;
    }

    calculatePerimeter() {
        return 0;
    }

    displayInfo() {
        return `
            <p>Фігура: ${this.getName}</p>
            <p>Площа: ${this.calculateArea().toFixed(2)}</p>
            <p>Периметр: ${this.calculatePerimeter().toFixed(2)}</p>
            <hr/>
        `;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("Квадрат");
        this.sideLength = sideLength;
    }

    calculateArea() {
        return this.sideLength ** 2;
    }

    calculatePerimeter() {
        return this.sideLength * 4;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Прямокутник");
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super("Трикутник");
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculateArea() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    calculatePerimeter() {
        return this.a + this.b + this.c;
    }
}

const shapes = [
    new Square(5),
    new Rectangle(4, 7),
    new Triangle(3, 4, 5)
];

const outputDiv = document.getElementById("output");
shapes.forEach(shape => {
    outputDiv.innerHTML += shape.displayInfo();
});
