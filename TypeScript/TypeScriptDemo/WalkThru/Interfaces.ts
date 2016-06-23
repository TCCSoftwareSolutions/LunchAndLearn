
interface iShape {
    draw(): string;
}

class Circle implements iShape {
    draw(): string {
        return 'Circle';
    }
}

class Triangle implements iShape {

    draw(): string {
        return 'Triangle';
    }
}

class Shapes {

    constructor() {
        var i = 9;
    }

    private collection: iShape[] = new Array();

    addShape(s: iShape): void {
        this.collection.push(s);
    }

    draw(): void {

        for (var i: number = 0; i < this.collection.length; i++) {
            var s: iShape = this.collection[i];
            console.log(s.draw());
        }
    }
}

var shapes: Shapes = new Shapes();
shapes.addShape(new Circle());
shapes.addShape(new Triangle());
shapes.draw();