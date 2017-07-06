/*jshint esversion: 6*/

var expect = require('chai').expect;
var should = require('chai').should();

class Person {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    return 'Hello!';
  }

  sayName(){
    return  'My name is ' + this.name;
  }

  sayAge(){
    return 'I am ' + this.age + ' years old.';
  }
}

console.log(cat.sayHello());
console.log(cat.sayName());
console.log(cat.sayAge());

describe('Person', function () {
  beforeEach(function(){
    let dog = Person;
    let cat = new Person('Catapult', 100);
  });

  it.skip('should be a function', function (){
    expect(dog).to.be.a('function');
  });

  it('should have a name property', function (){
    expect(cat.name).to.equal('Catapult');
    expect(cat.name).to.be.a('string');
  });

  it('should have an age property', function (){
    expect(cat.age).to.equal(27);
    expect(cat.age).to.be.a('number');
  });

  describe('Person should have methods', function(){
    it('should be able to say hello', function (){
      expect(cat.sayHello()).to.equal('Hello!');
    });

    it('should be able to say its name', function (){
      expect(cat.sayName()).to.equal('My name is ' + cat.name);
    });

    it('should be able to say its age', function (){
      expect(cat.sayAge()).to.equal('I am ' + cat.age + ' years old.');
    });
  });
});

