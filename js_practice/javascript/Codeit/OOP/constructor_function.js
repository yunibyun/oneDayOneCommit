'use strict';

// 자바스크립트에서 객체를 생성하는 방법 2
// Constructor function(생성자 함수) 사용하기
function User(email, birthdate) {
// 여기서 this는 constructor function으로 생성할 수 있는 해당 객체를 의미함
    this.email = email;
    this.birthdate = birthdate;
    this.buy = function (item) {
      console.log(`${this.email} buys ${item.name}`);
    }
}; 

const item = {
  name: 'Jumper',
  price: 30,
};

// 자바스크립트에서는 함수를 통해서 객체를 생성할 수 있고, 
// 이러한 함수를 constructor function이라고 함
// constructor function으로 객체를 생성하려면 new를 붙여서 함수를 호출해야 함
//  인스턴스(객체)를 생성하기 위한 목적으로 사용하기 위해서는 반드시 new 연산자와 함께 호출해야 함!
// 생성자 함수는 함수 내부에서의 처리 (프로퍼티의 생성) 가 끝나면 완성된 인스턴스 (생성자 함수를 통해서 생성된 객체) 가 반환되도록 설계되어 있으므로
// 생성자 함수 내부에는 리턴문을 작성하지 않음
// constructor function은 일반 함수와는 다르게 함수 중 첫 알파벳을 대문자로 시작함
// 객체를 생성하기 위한 목적으로 정의한 constructor function의 경우에는 첫 문자부터 caps 써야함!
// 그래야 다른 사람들도 생성자 함수를 일반 함수로부터 구분할수 있으니 그렇게 쓰는 듯?
// 여기서의 this = user1
const user1 = new User('yunabyun@google.com', '1995-11-23');
console.log(user1.email); // "yunabyun@google.com"
console.log(user1.birthdate); // "1995-11-23"
user1.buy(item); // "yunabyun@google.com buys Jumper"
