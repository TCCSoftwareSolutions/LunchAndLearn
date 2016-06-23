namespace Calc {

    export class AreaCalculator {

        //public areaType: string;
        constructor(public areaType: string) {
            //this.areaType = areaType;
        }

        public calculateArea1(w: number, h?: number): number {
            if (h === undefined) {
                return w * w;
            }
            else {
                return w * h;
            }
        }

        public calculateArea2 = (w: number, h: number): number => w * h;

        public calculateArea3(rect: { w: number, h: number }): number {
            return rect.w * rect.h;
        }

        private magicNumber: number = 9;
    }
}

var aa: Calc.AreaCalculator = new Calc.AreaCalculator('');
aa.calculateArea1(4, 5);
aa.calculateArea3({ w: 4, h: 5 });

