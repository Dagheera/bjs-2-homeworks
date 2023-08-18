function parseCount(number) {
    let parseResult = Number.parseFloat(number);
    if (Number.isNaN(parseResult)) {
        throw new Error("Невалидное значение");
    }
    return parseResult;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a > b + c || b > c + a || c > a + b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter / 2;
        return +((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    const errText = 'Ошибка! Треугольник не существует';
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter(){
                return errText;
            },
            get area(){
                return errText;
            }
        };
    }
}