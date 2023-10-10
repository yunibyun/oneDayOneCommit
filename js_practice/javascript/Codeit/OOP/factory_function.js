
'use strict';

// 모던한 프로퍼티 표기법
const thisIsUser = {
  // key- value가 같을 경우 하나만 작성해도 됨
  /*
  title : title
  birth : birth
  job : job
  */
  title,
  birth,
  job,
  // 함수도 축약형 표기 가능 
  // Property name - value 의 이름이 같으면 중복해서 작성 안해도 되고 하나만 작성해도 됨 
  // 객체 내부에서 메소드 선언할 경우
  /* 원래 객체 내부에서 메소드 선언할 때의 방식
  getFullName: function () {
    return `${this.firstname} ${this.lastName}`;
  },
  */
  // enhanced object literals
  // :와 function 키워드 생략 가능
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // computed property name
  // [표현식] = value,
  // 보통 변수에 담긴 값을 사용하거나 함수의 리턴값을 사용할 때 쓸 수 있음 
  ['Code' + 'fun'] : 'value',
};



// 이 createUser 함수처럼 객체를 생성헤서 return하는 함수를 factory function이라고 함
// factory function을 사용하면 객체를 조금 더 수월하게 만들 수 있음
function createUser (email, birthdate) {
  const user = {
    // property와 value의 이름이 같을 때는 값을 대입하는 부분을 생략해도 됨!
    /*
    email: email,
    birthdate: birthdate,
    */
   // 생략해서 이렇게 쓸 수 있음
   email,
   birthdate,
    buy(item) {
      console.log(`${this.email} byus ${item.name}`);
    },
  };
  return user;
}

const item = {
  name: 'Jumper',
  price: 30,
};

const user1 = createUser('chris123@google.com', '1992-03-21');
const user2 = createUser('jerry99@google.com', '1995-08-30');
const user3 = createUser('alice@google.com', '1993-11-13');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item);
user2.buy(item);
user3.buy(item);

// 객체의 프로퍼티나 메소드를 간결하게 표현한 방식이 아닌 것
// 1번 예시
const title = '컴퓨터 개론';
const lessonCount = 87;

const course = {
  title;
  lessonCount;
};
// 답: 틀림 (object의 Property는 comma로 구분해야함, 쉼표가 아님)

// 2
const brand = 'Apple';

const ipad = {
  brand,
  title: 'iPad',
};
// 맞음, brand를 축약해서 value는 생략한 경우

// 3
function getAge() {
  const date = new Date();
  return date.getFullYear() - this.birth + 1;
}

const userSample = {
  getAge,
  name: 'codeit',
  birth: 2017,
};
// 프로퍼티 네임을 구분할 때 사용하는 콜론 기호와, 함수를 선언할 때 사용하는 function 키워드를 생략
// 맞음, 이렇게 객체 내부에서 메소드를 선언할 때 function 키워드와 콜론 기호를 생략해서 작성할 수도 있음


// 5번
const userSample2 = {
  name: 'codeit',
  birth: 2017,
  () => {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  },
};
// 틀림, 메소드의 이름이 없어서 호출할 수 있는 방법이 없음
// Arrow function의 경우 반드시 이름이 필요해서 4번처럼 축약된 표현으로는 작성이 불가능하며
// 다음과 같이 이름을 붙여줘야 함
/*
const user = {
  name: 'codeit',
  birth: 2017,
  getAge: () => {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  },
};

보기 5번을 위 코드처럼 바꾼다고 하더라도 getAge 메소드의 this는 window 객체를 가리키게 되면서 우리 의도와는 조금 다르게 동작하게 됨..
그래서 객체의 메소드를 만들 때는 arrow function보다는 일반 함수를 권장
*/


// 아래 코드를 참고하여 다음 중 codeit 객체에 만들어진 프로퍼티에 접근하는 방법이 잘못된 것을 선택해 주세요.
const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};


// 1
codeit.topicName;
// 2
codeit[propertyName];
// 3
codeit[getJob()];
// 4
codeit.job;
// 5
codeit.propertyName;
// 6
codeit.birth;

// 해설
/* 
답: 5

ES2015 이후부터는 [표현식]: 값의 형태로 프로퍼티를 만들 수도 있습니다. 대괄호를 활용해서 표현식을 작성하는 부분에는 연산식을 작성할 수도 있고, 변수에 할당된 값을 사용할 수도 있고, 심지어는 함수를 호출할 수도 있는데요. 이렇게 만들어진 객체의 프로퍼티들은 보기 1, 4, 6번처럼 표현식이 가지는 값을 통해 점 표기법으로 접근할 수도 있고, 보기 2, 3번처럼 표현식을 그대로 사용해서 대괄호 표기법으로 접근할 수도 있습니다.
보기 5번은 점 표기법으로 propertyName이라는 프로퍼티에 접근하는 것이기 때문에 codeit 객체에 존재하지 않는 프로퍼티에 접근하는 방법이고, undefined가 리턴됩니다.
정답은 5번입니다.
*/