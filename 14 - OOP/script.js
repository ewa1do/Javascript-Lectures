'use strict';

// const Person = function (firstName, birthYear) {
//     // Instance Properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never do this
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // }
// }

// const eduardo = new Person('Eduardo', 1997);
// console.log(eduardo);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

// const melani = new Person('Melani', 1997);
// const ezio = new Person('Ezio', 2019);

// const jay = 'jay'

// console.log(melani, ezio);

// console.log(eduardo instanceof Person);
// console.log(jay instanceof Person);


// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// eduardo.calcAge();

// console.log(eduardo.__proto__);
// console.log(eduardo.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(eduardo));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.specie = 'Homo Sapiens';

// console.log(eduardo);
// console.log(eduardo.specie);

// console.log(eduardo.hasOwnProperty('firstName'));
// console.log(eduardo.hasOwnProperty('specie'));

// console.log(eduardo.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(eduardo.__proto__.__proto__);
// console.log(eduardo.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);


// const arr = [3, 5, 3, 4, 4, 1];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__);


// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(h1);

// console.dir(x => x + 1);

////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
////////////////////////////////////////////////////////////////////////

/*
1.  Use a contructor function to implement a Car. A car has make and 
    speed property. The speed property is the current speed of the car
    in km/h;

2.  Implement an 'accelerate' method that will increse the car's speed   
    by 10, and log the new speed to the console;

3.  Implement a 'break' method that will decrease the car's speed by 5,
    and log the new speed to the console;

4.  Create 2 car objects and experiment with calling the 'accelerate' and
    'break' multiple times on each of them.

    Data car 1: 'BMW' going at 120 kh/h
    Data car 2: 'Mercedes' going at 95 km/h
*/


// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     return this.speed += 10;
// }

// Car.prototype.break = function () {
//     return this.speed -= 5;
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);
// car1.accelerate();
// car1.break();
// console.log(car1);


// console.log(car2);
// car2.accelerate();
// car2.accelerate();
// car2.break();
// console.log(car2);

/////////////////////////////////////////////////////////
// ES6 Classes

// class expression
// const PersonCl = class {

// }


// class declaration
// class PersonCl {
//     constructor (fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Instance Methods: methods will be added to .prototype property
//     calcAge () {
//         console.log(2037 - this.birthYear);
//     }

//     greet () {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age () {
//         return 2037 - this.birthYear;
//     }

//     // Set a property that already exists
//     set fullName (name) {
//         // console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a valid name`);
//     } 
    
//     get fullName () {
//         return this._fullName;
//     }

//     // Static method
//     static hey () {
//         console.log('hey there');
//         console.log(this);
//     }

// }

// const melani = new PersonCl('Melani Ramirez', 1997);

// console.log(melani);
// melani.calcAge();
// console.log(melani.age);

// console.log(melani.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }
// melani.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode


// const walter = new PersonCl('Walter White', 1965);


// // Setters and Getters

// const account = {
//     owner: 'Jonas',
//     movements: [200, 300, 120, 500],

//     get latest () {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }
// };

// console.log(account.latest);

// account.latest = 50;

// console.log(account.movements);

// PersonCl.hey();


// Object.create

// const PersonProto = {
//     calcAge () {
//         console.log(2037 - this.birthYear);
//     },

//     init (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },

// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);

// console.log(sarah);
// sarah.calcAge();

///////////////////////////////////////////////////////////////
// Coding Challenge #2
///////////////////////////////////////////////////////////////

/*
    1. Re-create challenge 1, but this time using an ES6 class;
    2. Add a getter called 'speedUS' which returns the current speed
    in mi/h (divide by 1.6)
    3. Add a setter called 'speedUS' which sets the current speed in mi/h
    (but converts it to km/h before storing the value by multiplying the input by 1.6);
    4. Create a new car and experiment with the accelerate and break methods, and with
    the getter and setter

    Data Car 1: 'Ford' going at 120 km/h
*/

// class Car {
//     constructor (make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate () {
//         return this.speed += 10;
//     }

//     break () {
//         return this.speed -= 5;
//     }

//     set speedUS (speed) {
//         return this.speed = speed * 1.6;
//     }

//     get speedUS () {
//         return this.speed / 1.6;
//     }
// }

// const car1 = new Car('Ford', 120);

// console.log(car1);
// car1.accelerate();
// car1.break();
// console.log(car1);

// console.log(car1.speedUS);
// car1.speedUS = 50;

// console.log(car1);


/////////////////////////////////////////////////////
// Inheritance between classes: Contructor function

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// const Student = function (firstName, birthYear, course) {
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;
//     Person.call(this, ...arguments);
//     this.course = course;
// }

// // Linking Prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);



// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);


////////////////////////////////////////////////////////////////////////
// Coding Challenge #3
////////////////////////////////////////////////////////////////////////

/*
1. Use a constructor function to implement an Electric Car (called EV)
as a CHILD 'class' of Car. Besides the make and speed, the EV also has 
the current battery charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' 
and sets the battery charge to 'chargeTo';

3. Implement an 'accelerate' that will increase the car speed by 20, and 
decrease the battery by 1%. Then log a message like this: 'Tesla going to 
140km/h, with a charge of 22%;

4. Create an electric car object and experiment with calling 'accelerate', 'brake',
and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'.
HINT: review the definition of Polymorphism

Data Car 1: 'Tesla' going at 120km/h, with a charge of 23%

*/

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     return this.speed += 10;
// }

// Car.prototype.break = function () {
//     return this.speed -= 5;
// }


// // 1
// const EV = function (make, speed, charge) {
//     Car.call(this, ...arguments);
//     this.charge = charge;
// }

// // Linking the two objects
// EV.prototype = Object.create(Car.prototype);

// const tesla = new EV('Tesla', 120, 23);

// // 2
// EV.prototype.chargeBattery = function (chargeTo) {
//     return this.charge = chargeTo;
// }

// // 3
// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;

//     console.log(`${this.make} going to ${this.speed}km/h, with a charge of ${this.charge}%`);
// }


// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.break();
// tesla.break();
// tesla.break();
// console.log(tesla);


/////////////////////////////////////////////////////
// Inheritance between classes: Contructor function

// class PersonCl {
//     constructor (fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Instance Methods: methods will be added to .prototype property
//     calcAge () {
//         console.log(2037 - this.birthYear);
//     }

//     greet () {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age () {
//         return 2037 - this.birthYear;
//     }

//     // Set a property that already exists
//     set fullName (name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a valid name`);
//     } 
    
//     get fullName () {
//         return this._fullName;
//     }

//     // Static method
//     static hey () {
//         console.log('hey there');
//         console.log(this);
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         // always needs to happens first!
//         super(...arguments);
//         // this.course = course;
//     }

//     introduce () {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge () {
//         console.log(`I'm ${2037 - this.birthYear} years old but as an student I feel more like ${2037 - this.birthYear + 10}`);
//     }
// }

// const martha = new StudentCl('Marta Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();


///////////////////////////////////////////////////////////
    // Another class example
///////////////////////////////////////////////////////////

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// Theres also the static version of them

// class Account {
//     // 1. Public fields (instances)
//     locale = navigator.language;
    
//     // 2. Private fields (instances)
//     #movements = [];
//     #pin;

//     constructor (owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         // Protected Property
//         // this._pin = pin;
//         this.#pin = pin;
//         // this._movements = [];
//         // this.locale = navigator.language;

//         console.log(`Thanks for openning an account with us ${owner}`);
//     }

//     // 3. Public methods
    
//     // Public interface
//     getMovements () {
//         return this.#movements;
//     }

//     deposit(value) {
//         this.#movements.push(value);
//         return this;
//     }

//     // withdrawal (value) {
//     //     return this.movements.push(-value);
//     // }

//     withdrawal (value) {
//         this.deposit(-value);
//         return this;
//     }

//     // _approveLoan (value) {
//     //     return true;
//     // }

//     requestLoan (value) {
//         if (this.#approveLoan(value)) {
//             this.deposit(value);
//             console.log(`Loan Approved`);
//             return this;
//         }
//     }

//     // 4. Private methods
//     #approveLoan (value) {
//         return true;
//     }

//     static helper () {
//         console.log('Helper');
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(200);
// acc1.withdrawal(150);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();


// // console.log(acc1.#movements);
// // console.log(acc1.#approveLoan(1000));

// // Chaining methods

// acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).withdrawal(4000);
// console.log(acc1.getMovements());



///////////////////////////////////////////////////////////////////////////
// Coding challenge #4

/*
1. Re-create challenge 3, but this time using ES6 classes: Create an 'EVCl' 
child of the 'CarCl' class 

2. Make the 'charge' property private 

3. Implmement the ability to chain 'accelerate' and 'chargeBattery' methods 
of this class, and also update the 'brake' method in the 'CarCl' class.
They experiment with chaining!

Data CAR 1: 'Rivian' going at 120km/h, with a charge of 23%

*/

class CarCl {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate () {
        this.speed += 10;
    }

    break () {
        this.speed -= 5;
    }
}

// 1
class EVCl extends CarCl {

    // 2
    #charge;

    constructor (make, speed, charge) {
        super(make, speed);

            this.#charge = charge;
    }

    chargeBattery (chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.#charge}`);
        return this;
    }

    accelerate () {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed}, with a charge of ${this.#charge}`);
        return this;
    }

    break () {
        this.speed -= 10;
        console.log(`${this.make} decrease the speed to ${this.speed}`);
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);

rivian.accelerate().accelerate().accelerate().break().break().chargeBattery(70);

console.log(rivian);


// const ford = new CarCl('Ford', 90);

// console.log(ford);
// ford.accelerate();
// ford.accelerate();
// ford.break();
// console.log(ford);
