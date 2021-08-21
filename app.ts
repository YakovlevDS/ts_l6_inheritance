// Simple Class example
class User {

    constructor(public name: string, public age: number) {}

}

const yakov = new User('Yakov', 31);

yakov;  // { name: 'Yakov', age: 31 }

// Class with static property
class User {

    static secret = 12345;  // static property

    constructor(public name: string, public age: number) {}

}

// Example of call static property
User.secret

// Call static property in class method
class User {

    static secret = 12345; 

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }

}

const Yakov = new User('Yakov', 30);

Yakov.getPass();	// "Yakov12345"

// Compiled code
"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return this.name + User.secret;
    }
}
User.secret = 12345;

// Class example
class User {
 
    private nickName: string = 'webDev';
    static secret = 12345; 

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }

}

// Inheritance example
class Yakov extends User {

    name: string = 'Yakov';

}

// Create instances based on 'User' and 'Yakov' classes
const max = new User('Max', 20);
const Yakov = new Yakov(31);	// Expected 2 arguments, but got 1

// Realization of constructor in the inherited class
class Yakov extends User {

    name: string = 'Yakov';

    constructor(age: number) {
        super(name, age);
    }

}

// No error
// Create instances based on 'User' and 'Yakov' classes
const max = new User('Max', 20);
const Yakov = new Yakov(31);

// Personal method in inherited class
class Yakov extends User {

    name: string = 'Yakov';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}${User.secret}`;
    }

}

const Yakov = new Yakov(31);

Yakov.getPass(); // "31Yakov12345"

// Abstract class example
abstract class User {

    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;   // Abstract method

}

const max = new User('Max', 20);  // Cannot create an instance of an abstract class

// Create class using Abstraction
class Yakov extends User { // Non-abstract class 'Yakov' does not implement inherited abstract member 'getPass' from class 'User'

    name: string = 'Yakov';

    constructor(age: number) {
        super(name, age);
    }

}

// Realization of 'getPass' method
class Yakov extends User {

    name: string = 'Yakov';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}`;
    }

}

// Call prototype method
Yakov.greet();		// "Yakov"
// Call personal method
Yakov.getPass();	// "31Yakov"