/// <reference path="../scripts/knockout.d.ts" />


class ViewModel {

    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    fullName: KnockoutComputed<string>;

    constructor() {

        this.firstName = ko.observable('');
        this.lastName = ko.observable('');

        this.fullName = ko.pureComputed(function () {
            return this.firstName() + " " + this.lastName();
        }, this);
    }
}

var s: string = '';
var n: number = 8;
var vm: ViewModel = new ViewModel();
n = <number><any>vm.fullName();





 