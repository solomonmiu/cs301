'use strict'




let car = {
    make: tesselaar,
    model: model3,
    year: 2019,
    odometer: 1000,
    service: 5,
    service: function () { return this.servicecount += 1 },
    getodometer: function () { return this.odometer },
    reset: function () { let x = this.odometer = 0; let y = this.servicecount = 0; return x + " " + y }

}

console.log(car.service());
console.log(car.getodometer());
console.log(car.reset());






}