function balloons() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon() {
            return this._ribbon;
        } 
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };
}



const ball = balloons();
const party = new ball.PartyBalloon('red', 10, 'yellow', 100);
console.log(party.color);

const birthday = new ball.BirthdayBalloon('red', 10, 'yellow', 100, 'bstbadas');
console.log(birthday.ribbon);
console.log(birthday.text);