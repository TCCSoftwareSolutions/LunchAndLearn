var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VM = (function () {
    function VM(name, age) {
        if (age === void 0) { age = 20; }
        this.age = age;
        this.width = 9;
        this.start2 = function (w, h) { return w * h; };
    }
    Object.defineProperty(VM.prototype, "TheWidth", {
        get: function () {
            return this.width;
        },
        set: function (newWidth) {
            this.width = newWidth;
        },
        enumerable: true,
        configurable: true
    });
    VM.prototype.start = function (w, h) {
        return w * h;
    };
    return VM;
}());
var VM2 = (function (_super) {
    __extends(VM2, _super);
    function VM2(address, name, age) {
        _super.call(this, name, age);
        this.address = address;
        this.age = age;
    }
    VM2.prototype.end = function () {
    };
    return VM2;
}(VM));
var a = new VM2('indy', 'mike', 3);
//var b: number = a.width;
var v = new VM('');
//var a: number = v.start(4, 5);
//a = v.start2(3, 4);
//a = v.width;
//# sourceMappingURL=MyClass.js.map