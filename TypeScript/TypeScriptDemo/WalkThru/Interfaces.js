var Circle = (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        return 'Circle';
    };
    return Circle;
}());
var Triangle = (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        return 'Triangle';
    };
    return Triangle;
}());
var Shapes = (function () {
    function Shapes() {
        this.collection = new Array();
        var i = 9;
    }
    Shapes.prototype.addShape = function (s) {
        this.collection.push(s);
    };
    Shapes.prototype.draw = function () {
        for (var i = 0; i < this.collection.length; i++) {
            var s = this.collection[i];
            console.log(s.draw());
        }
    };
    return Shapes;
}());
var shapes = new Shapes();
shapes.addShape(new Circle());
shapes.addShape(new Triangle());
shapes.draw();
//# sourceMappingURL=Interfaces.js.map