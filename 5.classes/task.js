class printEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    get stateValue() {
        return this.state;
    }

    set stateValue(newState) {
        this.state = newState;
        if (this.newState < 0) {
            this.state = 0;
        } else if (this.newState > 100) {
            this.state = 100;
        } else {
            this.state = state;
        }        
    }
}

class Magazine extends printEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends printEditionItem {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}

/*let picknick = new FantasticBook(
    "Пикник на обочине",
    1972,
    168,
    "Аркадий и Борис Стругацкие",
  );
  console.log(picknick.author);

let sherlock = new printEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix()

console.log(sherlock.state);
*/