var AreaCalculator = (function () {
    //public areaType: string;
    function AreaCalculator(areaType) {
        this.areaType = areaType;
        this.calculateArea2 = function (w, h) { return w * h; };
        //this.areaType = areaType;
    }
    AreaCalculator.prototype.calculateArea1 = function (w, h) {
        if (h === undefined) {
            return w * w;
        }
        else {
            return w * h;
        }
    };
    AreaCalculator.prototype.calculateArea3 = function (rect) {
        return rect.w * rect.h;
    };
    return AreaCalculator;
}());
var area;
var calc = new AreaCalculator("Rectangle");
area = calc.calculateArea1(4);
area = calc.calculateArea2(4, 5);
area = calc.calculateArea3({ w: 4, h: 5 });
//# sourceMappingURL=Classes.js.map