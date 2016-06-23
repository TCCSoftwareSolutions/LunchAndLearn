var Demo = (function () {
    //Name: string = "Mike";
    function Demo(Name) {
        this.Name = Name;
        this.Name = "Hello";
    }
    Demo.prototype.start = function () {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i - 0] = arguments[_i];
        }
        return true;
    };
    return Demo;
}());
//var demo: Demo = new Demo("");
//var x: number = 0;
//x = demo.start("a", "b", "c");
//# sourceMappingURL=file1.js.map