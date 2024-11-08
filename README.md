# Lektion-11-07

## Object Methods


### Object.assign ( target, source ) => target object

Om vi har två objects som vi vill sätta ihop kan vi använda `.assign`. Det tar alla attribut från source object och sätter ihop det i target object.

Om det finns samma attribut redan i target kommer de bli replaced, annars tillagda.

```js
// Target object
const person = {
    name: "Niklas",
    age: 40,
};

// Source object
const personDetailedInfo = {
    lastName: "Fähnrich",
    occupation: "Developer",
};

console.log(person);
console.log(personDetailedInfo);
```

Lets merge them together.

```js
const updatedObject = Object.assign(person, personDetailedInfo);

console.log(updatedObject);
```

Remember when we create the new variable `updatedObject` it will still be a reference to the same object that we created before. We just take the reference from the `person` object and store it in the `updatedValue`

Think of it like a remote that controls a tv. The only thing we do here it to create another remote that controls the same tv. this is something called `Passed by reference`

### Object.keys ( object ) => array

This will take all the keys from an object and return it as an array.

```js
const house = {
    color: "green",
    area: 200,
    adress: "Drottninggatan",
    city: "Stockholm",
};

const keys = Object.keys(house);
console.log(keys);
```
### Object.values ( object ) =>

Does the same as Object.keys but instead returns an array of the values.

```js
const values = Object.values(house);
console.log(values);
```

### Object.entries ( Object ) =>

Works similar to both of the previous ones. It returns an array but each element in that array is another array containg both the key and the value.

```js
const entries = Object.entries(house);
console.log(entries);
```

### Object.freeze ( object ) => object

This method will freeze the object which means we can no longer edit the values of the attributes and we can not delete or add attributes to the object.

```js
const frozenHouse = Object.freeze(house);

frozenHouse.color = "Blue"; // Won't work
frozenHouse.windows = 5; // Won't work
```

### Object.IsFrozen ( object ) => boolean

Checks if the object in question is frozen or not.

```js
const isFrozen = Object.isFrozen(frozenHouse);

console.log(isFrozen);
```

### Object.seal ( object ) => object

This will seal the object, so no new attributes can be created or removed. But we can still edit the existing ones. 

```js
const car = {
    make: "Saab",
    model: "93",
    color: "Silver",
};

const sealedCar = Object.seal(car);

car.transmission = "Auto"; // Wont work because of the seal
car.color = "Red"; // Will work because attribute exists in object
console.log(sealedCar);
```

### Object.IsSealed ( object ) => Boolean

```js
const carIsSealed = Object.isSealed(SealedCar);
console.log(carIsSealed);
```

### Spread syntax

Works similar to Object.assign 

You can use it to merge objects, copy objects, in other words you can "spread" the attributes of an existing object in to something else.

```js
// Object passed by value
console.log(car);

const anotherCar = {...car}; // point different places in harddrive
console.log(anotherCar);

anotherCar.transmission = "manual";
```

```js
// Object passed by reference
const newCar = car; // point at the same place on harddrive
```

## Array methods, with callbacks

To begin with what is a callback? In the end its just a function. It is used as a parameter in another function, and if a function is used as a parameter it is normally called a `callback` function.

All of these methods are executing a loop behind scenes on the array on which the method as invoked. In each iteration of that loop, the callback function will run. So look at a callback as set of instructions that is being executed in each iteration of the loop behind the scenes.

This callback interacts with the element that is being iterated over.

### map( callback (element, index?) ) => Array that has been modified according to the callback

This method is used to modify the objects inside an array and return the modified objects in a new array. You can either modify one, several or all the objects in the array

Example with numbers:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const numbersDoubled = numbers.map( (number) => {
    return number * 2;
} );

console.log(numbersDoubled);
```

Now modify every number except number 5:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const numbersDoubledNot5 = numbers.map( (number) => {
    if (number === 5) {
        return number; // Return value unchanged
    }

    return number * 2;
} );
```

As you can see here we must always return something in every iteration, and the map function will look through the entire array regardless. So depending on what you want to do, you need to define the callback function accordingly.

Lets do an example with objects.

```js
const volvo = {
    make: "Volvo",
    model: "V90",
    color: "Green",
}

const saab = {
    make: "Saab",
    model: "93",
    color: "Blue",
}

const vw = {
    make: "volkswagen",
    model: "Sharan",
    color: "Red",
}

// Add the objects to the array
const cars = [volvo, saab, vw];

const carsAllRed = cars.map((car) => {
    if (car.color === "red") {
        return car;
    }
    return {...car, color: "red"};
});

console.log(carsAllRed);
```

### filter (callback(element, index?)) => the filtered array.

This method is used to filter an array. It will filter the array depending on the return value on the callback which must always be a boolean.

Example:

```js
const numbers = [0, 1, 1, 1, 0, 1, 0];

const allOnes = numbers.filter((number) => {
    if (number === 0) {
        return false;
    }
    
    return true;
});

console.log(allOnes);
```

Above we are filtering out all the 0:s, this is done by either returning false or true in each iteration. We can shorten this syntax by doing something called an implicit return instead of an explicit return. The above example is an `explicit` return.

The `implicit` return looks like this:

```js
const numbers = [0, 1, 1, 1, 0, 1, 0];

const allOnes = numbers.filter((number) => numbers !== 0 );

console.log(allOnes);
```

## Objekt Orienterat Programmering OOP

OOP stands for "Object Oriented Programming".

Revoles around creating structures called objects ( _not the kind of objects we have been creating so far, but similar_ ) These objects are called instances of classes and a class is a "blueprint" that defines the properties and methods of each object.

The OOP structure very common in the IT-world. There are programming languages that are completely OOP-dependet, like Java or C#. In thoose languages everything needs to be a class.

Support for classes came with ES6 JavaScript.

Class syntax looks like this:

```js
class Animal {
    constructor (name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`The animal, ${this.name} makes a sound`);
    }
}
```

Explanation of above:
- **Class**: reserved keyword in JS, only to be used when creating classes.

- **Animal**: the name of the class, convention is to used PascalCase. Capital letter in the beginning and on every "new" word.

- **Constructor**: is the "start method" that is invoked when we create a new instance of the class. The constructor usually takes some parameters but this is not mandatory. It all depens on how the class is defined. But if the class has some properties that need values, they must be passed in the constructor.

- **Properties**: in this case, the name and the species are properties on the class. They can be mandatory, then they need to be set via the constructor, otherwise they can be empty.

- **Speak**: this is a method that exists on the class. It's a method that is shared by all the instances of the class.

Let's create an instance of the animal class:

```js
class Animal {
    constructor (name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`The animal, ${this.name} makes a sound`);
    }
}

const myDog = new Animal("Fido", "Labrador");
const myOtherDog = new Animal("Sigge", "Tax");
const myCat = new Animal("Mozart", "Russian Blue");

console.log(myDog.name); // "Fido"
console.log(myOtherDog.name); // "Sigge"
console.log(myCat); // "Mozart"
```

### Encapsulation

Refers to hiding the internal representation of an instance of a class. While (_if we want to_) providing controlled access through methods. This can be done with something called **getters** and **setters** or public methods. Things that are private in JavaScript Classes uses a prefix `#`.

```js
class Animal {
    #name; // # Indicated a private property
    #species;// # Indicated a private property

    constructor (name, species) {
        this.#name = name;
        this.#species = species;
    }

    speak() {
        console.log(`The animal, ${this.name} makes a sound`);
    }
}

const myDog = new Animal("Fido", "Labrador");

console.log(myDog.#name); // Won't work.
```

Above we create private fields with the help of `#` as a prefix to the variable. Observe that we dont need `const` or `let` in a class. This is because it should look like it does in other languages. Private field are not accesible outside the class.

In order to solve this we need to create methods that allows us to do something with the properties in a controlled fashion.

```js
class Animal {
    #name; // # Indicated a private property
    #species;// # Indicated a private property

    constructor (name, species) {
        this.#name = name;
        this.#species = species;
    }

    getName() {
        return this.#name;
    }

    speak() {
        console.log(`The animal, ${this.name} makes a sound`);
    }
}

const myDog = new Animal("Fido", "Labrador");

console.log(myDog.getName());
myDog.speak();
```

So, the getName methods returns the name of the instance making it avaliable outside the class even though the name itself is a private property. And this is alright, we are now sharing the name in a controlled way.