class Parking {
    constructor(capacity) {
      this.capacity =  capacity;
      this.vehicles = [];
    }

    addCar(carModel, carNumber) {
       if(this.vehicles.length > this.capacity) {
          throw new Error('Not enough parking space.');
       }
       let car = {
           carModel,
           carNumber,
           payed: false,
       }

       this.vehicles.push(car);
       return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
      let currentCar = this.vehicles.find(x => x.carNumber == carNumber);
       if(!currentCar) {
         throw new Error ("The car, you're looking for, is not found.");
       }
       if(!currentCar.payed) {
          throw new Error (`${carNumber} needs to pay before leaving the parking lot.`)
       }

       this.vehicles = this.vehicles.filter(x => x.carNumber !== carNumber);

       return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
     let currentCar = this.vehicles.find(x => x.carNumber == carNumber);
     if(!currentCar) {
       throw new Error (`${carNumber} is not in the parking lot.`)
     }
     if(currentCar.payed) {
       throw new Error (`${carNumber}'s driver has already payed his ticket.`)
     }

     currentCar.payed = true;
     return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
       if(!carNumber) {
         return this.getFullStatistics();
       }

       let car = this.vehicles.find(x => x.carNumber == carNumber);
       return carRepopt(car);
    }

    getFullStatistics() {
      let result = []
       result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
       let sortedVehicles = this.vehicles
       .slice().sort((a,b) => a.carModel
       .localeCompare(b.carModel))
       .forEach(el => {
         result.push(`${el.carModel} == ${el.carNumber} - ${el.payed ?'Has payed': 'Not payed'}`)
       });
       return result.join('\n')
    }

    carReport(car) {
      return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed': 'Not payed'}`;
    }
}

const parking = new Parking(12);

console.log(parking.addCar('Volvo t600', 'TX3691CA'));
console.log(parking.getStatistics());

 console.log(parking.pay('TX3691CA'));
  console.log(parking.removeCar('TX3691CA'));

// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA's driver successfully payed for his stay.
// TX3691CA left the parking lot.