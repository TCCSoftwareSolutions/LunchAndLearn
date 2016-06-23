var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Car = (function () {
    function Car(doors) {
        this.doors = doors;
    }
    return Car;
}());
var Jeep = (function (_super) {
    __extends(Jeep, _super);
    function Jeep(isRubicon, doors) {
        _super.call(this, doors);
        this.doors = doors;
        this.isRubicon = isRubicon;
    }
    Object.defineProperty(Jeep.prototype, "Rubicon", {
        get: function () {
            return this.isRubicon;
        },
        set: function (isRubicon) {
            this.isRubicon = isRubicon;
        },
        enumerable: true,
        configurable: true
    });
    return Jeep;
}(Car));
var j = new Jeep(true, 4);
j.Rubicon = true;
var d = j.doors;
//# sourceMappingURL=Extends.js.map