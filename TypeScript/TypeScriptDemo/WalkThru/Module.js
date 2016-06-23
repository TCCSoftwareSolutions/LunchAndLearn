var Calc;
(function (Calc) {
    var AreaCalculator = (function () {
        //public areaType: string;
        function AreaCalculator(areaType) {
            this.areaType = areaType;
            this.calculateArea2 = function (w, h) { return w * h; };
            this.magicNumber = 9;
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
    Calc.AreaCalculator = AreaCalculator;
})(Calc || (Calc = {}));
var aa = new Calc.AreaCalculator('');
aa.calculateArea1(4, 5);
aa.calculateArea3({ w: 4, h: 5 });
//# sourceMappingURL=Module.js.map