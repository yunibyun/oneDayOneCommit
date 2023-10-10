'use strict';

// 클래스로 객체 생성
class User {
  // 보통 클래스에서는 properties를 constructor 안에,
  // methods는 그 바깥에 분리해서 씀
  // 생성자 메소드 (객체가 생성될 때 실행됨 )
  constructor(email, birthdate) {
    // this는 생성된 객체를 가리킴
    this.email = email;
    this.birthdate = birthdate;
  }
  
  // 해당 객체의 method가 됨 
  buy (item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = {
  name: 'Jumper',
  price: 30,
};

const user1 = new User('yunabyun@gmail.com', '1992-05-12');

// 현재 코드잇 실행기에는 makeCar라는 
// Factory function이 있습니다. 
// 이 코드를 class를 사용하는 코드로 변경해 보세요.

/*
function makeCar(color, speed) {
  const car = {
    color,
    speed,
    run() {
      console.log(`Runs at ${this.speed}`);
    },
  };
  return car;
}
*/

class MakeCar {
  constructor(color, speed) {
    this.color = color,
    this.speed = speed,
  }

  run() {
    console.log(`Runs at ${this.speed}`);
  }
}
const car1 = makeCar('blue', '100km/h');

car1.run();


class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}
