//level 1
// que 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getAnimalDetails() {
    const details = `its name is ${this.name}, it has ${this.color} eyes, ${this.legs} legs and its ${this.age} years old `;
    return details;
  }
}

// que 2
class Dog extends Animal {}
class Cat extends Animal {}
let dog = new Dog("Bingo", "2", "brown", 4);
console.log(dog);

let cat = new Cat("Kitty", "2", "black", 4);
console.log(cat);
console.log(dog.getAnimalDetails());

// level 2
console.log("\n");
class NewDog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  getAnimalDetails() {
    const details = `its name is ${this.name}: a ${this.gender} dog, it has ${this.color} eyes, ${this.legs} legs and its ${this.age} years old `;
    return details;
  }
}
let dog1 = new NewDog("Bingo", "2", "brown", 4, "male");
console.log(dog1);
console.log(dog1.getAnimalDetails());

// level 3
console.log("\n");
ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(ages) {
    this.ages = ages;
    this.sort = ages.sort((a, b) => {
      return a - b;
    });
  }
  count() {
    return ages.length;
  }
  sum() {
    let sum = 0;
    let total = ages.reduce((sum, num) => {
      return (sum += num);
    });
    return total;
  }
  min() {
    return Math.min(...ages);
  }
  max() {
    return Math.max(...ages);
  }
  range() {
    return Math.max(...ages) - Math.min(...ages);
  }
  mean() {
    return Math.round(statistics.sum() / this.ages.length);
  }
}
let statistics = new Statistics(ages);
console.log("Count:", statistics.count());
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
