class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayInfo() {
        return `
            <p>Товар: ${this.name}</p>
            <p>Ціна: ${this.price} грн</p>
            <p>Кількість: ${this.quantity} шт.</p>
            <hr/>
        `;
    }
}

// Книги
class Book extends Product {
    constructor(name, price, quantity, author) {
        super(name, price, quantity);
        this.author = author;
    }

    displayInfo() {
        return `
            <p>Книга: ${this.name}</p>
            <p>Автор: ${this.author}</p>
            <p>Ціна: ${this.price} грн</p>
            <p>Кількість: ${this.quantity} шт.</p>
            <hr/>
        `;
    }
}

// Телефону
class Phone extends Product {
    constructor(name, price, quantity, brand) {
        super(name, price, quantity);
        this.brand = brand;
    }

    // Перевизначення методу для виведення інформації про телефон
    displayInfo() {
        return `
            <p>Телефон: ${this.name}</p>
            <p>Бренд: ${this.brand}</p>
            <p>Ціна: ${this.price} грн</p>
            <p>Кількість: ${this.quantity} шт.</p>
            <hr/>
        `;
    }
}

// Холодильника
class Fridge extends Product {
    constructor(name, price, quantity, capacity) {
        super(name, price, quantity);
        this.capacity = capacity;
    }

    // Перевизначення методу для виведення інформації про холодильник
    displayInfo() {
        return `
            <p>Холодильник: ${this.name}</p>
            <p>Ємність: ${this.capacity} л</p>
            <p>Ціна: ${this.price} грн</p>
            <p>Кількість: ${this.quantity} шт.</p>
            <hr/>
        `;
    }
}

// Масив товарів
const products = [
    new Book("Гаррі Поттер", 300, 10, "Дж. К. Роулінг"),
    new Phone("iPhone 13", 35000, 5, "Apple"),
    new Fridge("Samsung RS50", 20000, 2, 350)
];

// Інформацію про кожен товар на сторінці
const outputDiv = document.getElementById("output");
products.forEach(product => {
    outputDiv.innerHTML += product.displayInfo();
});
