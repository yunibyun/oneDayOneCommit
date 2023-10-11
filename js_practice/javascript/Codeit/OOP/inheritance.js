'use strict';

// 상속을 할 때 베이스가 되는 클래스 (부모 클래스; parent class)
class User {
  constructor (email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}


// extends User = 유저를 상속받는다는 뜻
// User 클래스에 있는 properties와 mehods를 PremiumUser 클래스가 그대로 물려받는다는 뜻
// 물려받는 것들 중에 겹치는 프로퍼티와 메소드는 프리미엄유저 클래스에 더이상 안 적어주어도 됨
// 겹치는 프로퍼티와 메소드는 모두 지우고 겹치치 않는 프로퍼티와 메소드만 남겨두면 됨!
// 유저 클래스를 상속받은 PremiumUser 클래스를 자식 클래스라고 함 
// 상속을 하면 자식 클래스에서 부모 클래스와 겹치는 부분을 제외하고 다른 부분만 적으면 됨
// 똑같은 코드를 또 쓸 필요가 없다 -> 코드의 재사용성이 좋아진다
class PremiumUser extends User {
  constructor (email, birthdate, level) {
    /*
    this.email = email;
    this.birthdate = birthdate;
    */
    // super - 부모 클래스에 있는 생성자 함수를 의미
    // User class의 constructor 부분
    // 자식 클래스로 객체를 만드려고 할떄는 반드시 그 생성자 함수 안에서 super를 호출해서 
    // 부모 클래스의 생성자 함수를 먼저 호출해주어야 함!
    // super에는 부모 클래스의 constructor와 같은 형식으로 값들을 넘겨주면 됨
    // 자식 클래스의 constructor 안에서는 super를 사용해서 부모 클래스의 constructor를 먼저 실행해주어야 함
    super(email, birthdate);
    this.level = level;
  }

  /*
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
   }
  */

   streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
   }
}

const item = {
  name: 'Jumper',
  price: 30,
}

const pUser1 = new PremiumUser('yunabyun@google.com', '1993-04-29');
console.log(pUser1.email);
console.log(pUser1.birthdate);
console.log(pUser.level);
pUser1.buy(item);
pUser1.streamMusicForFree();
// Uncaught referenceerror: must call supe constructor in derived class(자식 클래스) before accessing 'this' or returning from derived constructor
// at new PremiumUser
// 자식 클래스 안에서 super 생성자를 호출해야 함 

// 자식 클래스 constructor 안에는  super 추가 이후에는 에러 안 남!
// 상속을 할 때는 자식 클래스의 생성자 함수 안에서 부모 클래스의 생성자 함수를 super라는 키워드로 반드시 호출해야 한다는 것 잊지 말기