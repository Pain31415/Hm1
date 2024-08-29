// Клас Новини
class News {
    constructor(title, text, tags, publishDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publishDate = new Date(publishDate);
    }

    print() {
        console.log(`Заголовок: ${this.title}`);
        console.log(`Текст: ${this.text}`);
        console.log(`Теги: ${this.tags.join(", ")}`);
        console.log(`Дата публікації: ${this.formatDate()}`);
    }

    formatDate() {
        const now = new Date();
        const timeDifference = now - this.publishDate;

        const oneDay = 24 * 60 * 60 * 1000; // Один день у мілісекундах
        const oneWeek = 7 * oneDay; // Один тиждень у мілісекундах

        if (timeDifference < oneDay) {
            return "сьогодні";
        } else if (timeDifference < oneWeek) {
            const daysAgo = Math.floor(timeDifference / oneDay);
            return `${daysAgo} днів тому`;
        } else {
            return this.publishDate.toLocaleDateString("uk-UA", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
        }
    }
}

const news1 = new News(
    "Новий закон про податки",
    "Уряд прийняв новий закон про податки, який вступає в силу з наступного місяця.",
    ["економіка", "політика"],
    "2024-08-27"
);

const news2 = new News(
    "Ремонт доріг у місті",
    "На центральних вулицях міста розпочато ремонтні роботи.",
    ["місто", "інфраструктура"],
    "2024-08-20"
);

const news3 = new News(
    "Технологічна виставка",
    "Сьогодні відкрилася міжнародна виставка технологій.",
    ["технології", "виставка"],
    new Date()
);

news1.print();
news2.print();
news3.print();