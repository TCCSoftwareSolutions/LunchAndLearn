/// <reference path="../scripts/knockout.d.ts" />
var ViewModel = (function () {
    function ViewModel() {
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
        this.fullName = ko.pureComputed(function () {
            return this.firstName() + " " + this.lastName();
        }, this);
    }
    return ViewModel;
}());
var s = '';
var n = 8;
var vm = new ViewModel();
n = vm.fullName();
//# sourceMappingURL=MyKnockout.js.map