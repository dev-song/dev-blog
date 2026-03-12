---
title: "JavaScript (Front End) ... Part 2"
pubDatetime: 2020-04-02T13:51:57+09:00
description: "티스토리 아카이브"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습일: 2020년 3월 21일

* * *

## 1\. JavaScript - FE

JavaScript의 함수

*   참고자료: [Functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
*   "JavaScript를 잘 이해한다" === "JavaScript 함수를 잘 이해한다"
*   함수: 매개변수에 해당하는 인자(argument)를 받아 실행됨
    *   매개변수와 인자의 갯수가 반드시 동일하지 않아도 됨
        *   매개변수 > 인자: 인자가 없는 매개변수의 값은 undefine가 됨
        *   매개변수 < 인자: 여분의 인자는 무시됨
*   함수를 선언하는 두 가지 방법
    *   함수 선언문: 일반적인 선언 방법
        *   형태: function 함수명(매개변수) { 함수 호출 시 실행 코드 }
    *   함수표현식: 변수에 함수표현식을 할당하는 방법
        *   형태: 변수선언방법 변수명 = function(매개변수) { 함수 호출 시 실행 코드 }
        *   Coding Convention에 따라 함수선언문보다 함수표현식이 권장되기도 함
    *   함수선언문과 함수표현식의 차이점
        *   함수표현식: 함수표현식이 함수 호출 위에 있어야 정상적으로 작동
            *   **! 함수 호출 아래에 있는 경우 TypeError: 변수명 is not a function 발생**
        *   함수선언문: 함수선언문의 위치와 상관 없이 정상 작동
*   호이스팅(hoisting): JavaScript 함수가 실행되기 전 함수 안의 변수들을 모두 모아 미리 선언하는 것
    *   JavaScript 함수는 호출되었을 때 위에서 아래로 코드를 한 줄 한 줄 실행하지 않음
    *   코드 실행 전, 함수 내부의 코드를 전체적으로 훑어보고 변수, 함수 등이 있으면 미리 선언
        *   코드의 위치를 위로 끌어놓는 것과 비슷함
        *   코드의 종류에 따라 미리 선언하는 방식이 달라짐
            *   변수: 변수 선언만 미리 함
                *   예시) let a = "value"; → let a;
            *   함수: 함수 전체를 미리 선언함
                *   예시) function test( ) { alert("test"); } → function test( ) { alert("test"); }
    *   함수표현식과 함수선언문의 차이를 만드는 원인
        *   함수표현식은 호이스팅에 의해 변수명만 미리 선언된 상태에서 호출되는 것이므로 TypeError 오류 발생
        *   함수선언문은 함수 전체가 미리 선언되므로 코드의 위치와 상관 없이 정상적으로 작동
*   함수의 반환값
    *   JavaScript 함수에는 return 값이 반드시 존재
    *   별도로 지정되지 않은 경우 기본값인 undefined가 반환
*   함수의 인자(argument)
    *   함수 실행 시 인자라는 특별한 지역변수가 자동으로 생성됨
    *   함수가 넘겨받은 인자는 arguments 객체의 형태로 접근할 수 있음
        *   arguments 객체에 대해서 배열 메서드는 사용할 수 없으나, length( ) 메서드와 index는 사용할 수 있음
        *   arguments.length( )를 통해 arguments의 갯수에 따라 함수의 실행 내용을 다르게 할 수 있음
*   화살표 함수(arrow function): ES2015에서 추가된, 함수를 간단하게 선언할 수 있는 문법
    *   참고자료: [Arrow function expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
    *   형태: let test = (parameter) => console.log(parameter);
        *   function test(parameter) { return console.log(parameter) } 와 동일

함수의 호출

*   형태: 함수명(매개변수);
*   함수의 특징: 하나의 함수에 모든 로직이 포함되지 않음
    *   예시) 기능 A, B, C가 있을 때, 이를 하나의 함수에 모두 담는 것이 아닌, A > B > C 순으로 호출 하거나 A > A > A 처럼 스스로 다시 부르는(재귀) 등의 방식으로 함수 호출 구조를 설계함
*   호출 스택(Call Stack): 메모리 공간에 존재하는 함수의 목록
    *   참고자료: [Understanding JavaScript Function Executions - Call Stack, Event Loop, Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
    *   함수 실행 시 메모리 공간에 해당 함수가 추가되며, 함수가 모두 실행되면 메모리 공간에서 사라짐
    *   함수 내에서 다른 함수가 실행되면, 기존 함수는 그대로 있고 실행된 다른 함수가 메모리 공간에 추가됨
    *   Chrome 개발자 도구의 Sources 탭에서도 호출 스택을 확인할 수 있음
*   함수의 호출 관계를 정확히 이해해야 하는 이유
    *   디버깅이나 문제 해결 시 프로그램의 로직을 정확히 알기 위함
    *   로직을 단순하면서도 좋은 성능으로 설계하려면 함수를 나누고 합치는 과정을 반복해야 함
    *   함수의 호출 관계에 대한 이해가 없다면 이런 과정을 효율적으로 할 수 없음
*   호출 스택의 한도
    *   호출 스택이 너무 많이 쌓여 한도를 넘으면 RangeError: maximum call stack size exceeded 오류가 발생
    *   호출 스택이 너무 많이 쌓이지 않게 하기 위해 브라우저별로 한도가 있음
        *   예) Google Chrome의 호출 스택 한도는 16,000임
    *   RangeError가 발생한 경우, 의도한 것이 아니라면 로직을 잘못 구현한 것
        *   함수가 계속적으로 호출되는 상황이기 때문이며, 보통 '무한 루프에 빠졌다'고도 표현됨

  

#자바스크립트 #javascript #함수 #웹 프로그래밍 #인터넷 강의 #프론트엔드 #front end #내용 정리 #edwith #부스트코스