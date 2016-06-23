class VM {

    private width: number = 9;
    constructor(name: string, public age: number = 20) {

    }

    get TheWidth(): number {
        return this.width;
    }

    set TheWidth(newWidth: number) {
        this.width = newWidth;
    }

    start(w: number, h: number): number {
        return w * h;
    }

    start2 = (w: number, h: number): number => w * h;

}

class VM2 extends VM {

    constructor(public address: string, name: string, public age?: number) {
        super(name, age);
    }

    end() {

    }

}

var a: VM2 = new VM2('indy', 'mike', 3);
//var b: number = a.width;

var v: VM = new VM('');


//var a: number = v.start(4, 5);
//a = v.start2(3, 4);
//a = v.width;
