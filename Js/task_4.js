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
        console.log('---------------------------');
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

class NewsFeed {
    constructor() {
        this.newsArray = [];
    }

    get newsCount() {
        return this.newsArray.length;
    }

    addNews(news) {
        this.newsArray.push(news);
    }

    removeNews(index) {
        if (index >= 0 && index < this.newsArray.length) {
            this.newsArray.splice(index, 1);
        } else {
            console.log('Некоректний індекс для видалення новини.');
        }
    }

    printAllNews() {
        console.log(`Всього новин: ${this.newsCount}`);
        console.log('---------------------------');
        this.newsArray.forEach(news => news.print());
    }

    sortNewsByDate() {
        this.newsArray.sort((a, b) => b.publishDate - a.publishDate);
    }

    searchNewsByTag(tag) {
        return this.newsArray.filter(news => news.tags.includes(tag));
    }
}

const newsFeed = new NewsFeed();

newsFeed.addNews(new News("Новий закон про податки", "Уряд прийняв новий закон про податки.", ["економіка", "політика"], "2024-08-25"));
newsFeed.addNews(new News("Ремонт доріг у місті", "На центральних вулицях розпочато ремонтні роботи.", ["місто", "інфраструктура"], "2024-08-20"));
newsFeed.addNews(new News("Технологічна виставка", "Сьогодні відкрилася міжнародна виставка технологій.", ["технології", "виставка"], new Date()));

console.log("Усі новини:");
newsFeed.printAllNews();

// Сортування новин за датою
newsFeed.sortNewsByDate();
console.log("Новини після сортування:");
newsFeed.printAllNews();

// Пошук новин за тегом
const searchResults = newsFeed.searchNewsByTag("місто");
console.log("Результати пошуку за тегом 'місто':");
searchResults.forEach(news => news.print());

// Видалення новини
newsFeed.removeNews(1);
console.log("Новини після видалення:");
newsFeed.printAllNews();