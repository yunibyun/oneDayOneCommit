'use strict';

// Spread opertaor : '펼치다' 라는 spread의 의미처럼 여러 개의 값을 
// 하나로 묶은 배열을 다시 각각의 개별의 값으로 펼치는 문법
// Syntax: 배열 앞에 마침표 3개 붙이기 ...

const numbers = [1, 2, 3];
// 대괄호로 묶여서 numbers에 담겨 있던 값들이 괄호가 벗겨지고 1,2,3 처럼 각각 개별의 값으로 펼쳐진 것
console.log(...numbers); // 1 2 3
