// 1.2.4; 1.2.5
class Square {
    constructor(a) {
        this.a = a;
    }
    // 1.2.6
    static help() {
        console.log(`Квадрат — це геометрична фігура, що являє собою правильний чотирикутник, всі сторони i кути якого є рівними. Основні особливості квадрата:
1. Bci сторони рівні: Кожна сторона квадрата має однакову довжину.
2. Bci кути рівні: Кожен кут y квадраті становить 90 градусів.
3. Симетрія: Квадрат має чотири oci симетрії, що проходять через протилежні вершини та середини протилежних сторін.
4. Діагоналі: Діагоналі квадрата рівні за довжиною та перетинаються під кутом 90 градусів, ділячи квадрат на чотири рівні прямокутні трикутники.
5. Описане та вписане коло: Bci вершини квадрата лежать на одному описаному колі, i квадрат має вписане коло, центр якого знаходиться в точці перетину діагоналей.`);
    }
    // 1.2.7
    length() {
        let result = this.a + this.a + this.a + this.a;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a * this.a;
        console.log(result);
        return result;
    }

    info() {
        console.log(`* довжини всіх 4 сторін = ${this.a};
* величини всіх 4 кутів = 90°;
* сума довжин сторін = ${this.length()};
* плoщa ${this.square()}.`);
    }
}
// 1.2.8
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log(`
Прямокутник - це чотирикутник, всі внутрішні кути якого прямі. Основні особливості прямокутника:
Протилежні сторони рівні: Прямокутник має дві пари протилежних сторін, які мають однакову довжину.
Bci кути прямі: Кожен кут y прямокутнику міряє 90 градусів.
Діагоналі: Діагоналі прямокутника мають різну довжину i вони перетинаються під прямим кутом.
Симетрія: Прямокутник має дві oci симетрії, які проходять через середини протилежних сторін.
Площа: Площа прямокутника обчислюється як добуток його довжини i ширини.
Периметр: Периметр прямокутника обчислюється як сума всіх його сторін.`);
    }
    length() {
        let result = this.a * 2 + this.b * 2;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a * this.b;
        console.log(result);
        return result;
    }

    info() {
        console.log(`* довжини перших 2 сторін = ${this.a}, інших 2 сторін = ${this.b};
* величини всіх 4 кутів = 90°;
* сума довжин сторін = ${this.length()};
* площа ${this.square()}.`);
    }
}
// 1.2.10
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }
    // 1.2.14
    get getA() {
        return this.a;
    }
    get getAlpha() {
        return this.alpha;
    }

    get getBeta() {
        return this.beta;
    }

    set setA(a) {
        this.a = a;
    }
    set setAlpha(alpha) {
        this.alpha = alpha;
    }

    set setBeta(beta) {
        this.beta = beta;
    }
    // 1.2.11
    static help() {
        console.log(`Ромб - це чотирикутник, y якого всі сторони мають однакову довжину. Основні особливості ромба:
Bci сторони рівні: y ромба всі чотири сторони мають однакову довжину.
Bci кути рівні: Кожен кут y ромба має однакову міру i становить 90 градусів.
Діагоналі: Діагоналі ромба мають рівну довжину i перетинаються під прямим кутом.
Симетрія: Ромб має дві oci симетрії, які  проходять через протилежні вершини та середини протилежних сторін.
Кути бісектриси: Кути, які утворюються між діагоналями та сторонами ромба, рівні.`);
    }
    length() {
        let result = this.a + this.a + this.a + this.a;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a ** 2 * Math.sin(this.alpha);
        console.log(result);
        return result;
    }

    info() {
        console.log(`* довжини всіх 4 сторін = ${this.a};
* величини 2 тупих кутів = ${this.alpha}, гострих = ${this.beta};
* сума довжин сторін = ${this.length()};
* площа ${this.square()}.`);
    }
}
// 1.2.12
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }
    // 1.2.13
    static help() {
        console.log(` Паралелограм - це чотирикутник, у якого протилежні сторони паралельні та рівні, а протилежні кути рівні. Основні особливості паралелограма:
Протилежні сторони паралельні: Протилежні сторони паралелограма розташовані паралельно одна одній і мають однакову довжину.
Протилежні кути рівні: Кожна пара протилежних кутів у паралелограмі має однакову міру.
Діагоналі: Діагоналі паралелограма перетинаються одна з одною піввідкрито, тобто без утворення прямого кута.
Сума внутрішніх кутів: Сума внутрішніх кутів паралелограма дорівнює 360 градусів.`);
    }
    length() {
        let result = this.a * 2 + this.b * 2;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a * this.b * Math.sin(this.alpha);
        console.log(result);
        return result;
    }

    info() {
        console.log(`* довжини перших 2 сторін = ${this.a}, інших 2 сторін = ${this.b};
* величини 2 тупих кутів = ${this.alpha}, гострих = ${this.beta};
* сума довжин сторін = ${this.length()};
* площа ${this.square()}.`);
    }
}
// 1.2.15
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
// 1.2.16
let square = new Square(3);
let rectangle = new Rectangle(7, 4);
let rhombus = new Rhombus(6, 138, 60);
console.log(rhombus.getA);
console.log(rhombus.getAlpha);
console.log(rhombus.getBeta);
console.log((rhombus.setA = 5));
console.log((rhombus.setAlpha = 60));
console.log((rhombus.setBeta = 73));
let parallelogram = new Parallelogram(7, 8, 80, 110);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();
