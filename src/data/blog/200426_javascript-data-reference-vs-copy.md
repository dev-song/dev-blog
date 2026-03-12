---
title: "66 JavaScript 데이터 참조 vs 복사"
pubDatetime: 2020-04-26T23:04:55+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 14 - JavaScript References VS Copying

튜토리얼 분류: JavaScript

튜토리얼 설명: JavaScript 데이터의 종류별 전달 방식

진행기간: 2020년 4월 26일

* * *

숫자, 문자열과 데이터 복사

*   예시 코드
    *           
    *   한 변수에 다른 변수를 지정한 후, 한 변수를 바꿔도 다른 변수의 값은 유지됨

배열과 데이터 참조

*   예시 코드
    *           
    *   한 변수에 다른 변수를 지정한 후, 한 변수의 데이터를 바꾸면 다른 변수의 데이터도 바뀜
*   배열의 데이터를 복사하는 방법
    *   전통적 방식: slice( ) 메서드, \[ \].concat( ) 메서드
        *               
    *   새로운 방식 (ES6)
        *               

객체와 데이터 참조

*   예시 코드
    *           
    *   한 변수에 다른 변수를 지정한 후, 한 변수의 데이터를 바꾸면 다른 변수의 데이터도 바뀜
*   객체의 데이터를 복사하는 방법
    *   전통적 방식
        *               
    *   새로운 방식 (ES9)
        *               

배열과 데이터 복사의 한계

*   기존 방식은 바로 아래 단계 원소만 복사되므로, 2단계 이상의 데이터는 참조로 동작함
    *   배열 A, B가 있고, 배열 B가 배열 A의 원소인 경우 ( A > B로 표현 )
    *   배열 A를 복사해 배열 C를 생성 ( A > B, C > B' )
    *   배열 C의 원소인 배열 B'의 데이터를 수정하면 배열 A의 원소인 배열 B의 데이터도 수정됨
*   예시 코드
    *           
    *   객체 rad를 복사한 객체 dev가 있을 때, dev의 원소를 수정하더라도 rad의 원소는 영향을 받지 않음
    *   그러나 객체 rad의 원소로 객체가 있을 때, 객체 dev의 해당 객체를 수정하면 rad도 영향을 받음
*   해결법
    *   Deep Clone이란 방법을 활용
        *   **! 여러 단계의 객체 또는 배열을 복사하는 경우는 많지 않다는 점을 감안하여 활용 여부를 결정**
    *   [참고자료: What is the most efficient way to deep clone an object in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript)
*   **※ Poor Man's Deep Clone**
    *   간편하지만 다소 단점이 있는 Deep Clone 방법
    *   예시 코드
        *               

기타 참고자료

*   [자바스크립트 개발자라면 알아야 할 33가지 개념 #3 값(value) vs 참조(reference) (번역)](https://velog.io/@jakeseo_me/2019-04-01-1904-%EC%9E%91%EC%84%B1%EB%90%A8-2bjty7tuuf)

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2014/tutorial-JavaScript-References-VS-Copying)

  

#자바스크립트 #javascript #튜토리얼 #데이터 복사 #javascript30 #데이터 참조 #deep clone #딥 클론