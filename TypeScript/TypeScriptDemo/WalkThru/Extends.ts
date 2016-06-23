class Car {

    constructor(public doors: number) {

    }
}

class Jeep extends Car {

    private isRubicon: boolean;

    constructor(isRubicon: boolean, public doors: number) {
        super(doors);
        this.isRubicon = isRubicon;
    }

    get Rubicon() {
        return this.isRubicon;
    }

    set Rubicon(isRubicon: boolean) {
        this.isRubicon = isRubicon;
    }
}

var j: Jeep = new Jeep(true, 4);
j.Rubicon = true;
var d: number = j.doors;