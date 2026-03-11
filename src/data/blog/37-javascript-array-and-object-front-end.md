---
title: "37-JavaScript---Array-&-Object-(Front-End)"
pubDatetime: 2020-04-10T20:39:34+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 10일

* * *

## 0\. 소개

FE(Front End)의 Key Point

*   JavaScript 배열, 객체
    *   배열, 객체를 조작하는 메서드를 위주로, 데이터를 조작하는 방법 - 배열 조작 메서드 위주
*   DOM API, AJAX 심화
*   웹 애니메이션
    *   웹페이지의 스르르 움직이는 모습을 위해 필요

BE(Back End)의 Key Point : Spring MVC

*   MVC 패턴
    *   복잡한 웹 어플리케이션 개발 시 효율적으로 개발할 수 있도록 돕는 디자인 패턴
    *   직접 구현하기는 어렵지만, 기존의 잘 만들어진 프레임워크를 사용할 예정이므로 문제되지는 않음
    *   가장 많이 사용되는 Spring MVC를 이용
*   레이어드 아키텍쳐(Layered Architecture): 각 역할에 맞게 Layer를 구분해서 개발하여 더 좋은 구조로 만듦

## 1\. JavaScript - FE

JavaScript 배열

*   참고자료: [Array - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
*   배열 선언방법
    *           
        *   new Array( )로도 선언할 수 있지만 \[ \]와 성능 차이가 없어 거의 쓰이지 않음
*   배열의 특징
    *   배열 안에는 모든 타입의 데이터가 들어갈 수 있음
    *   배열에는 length 속성이 있어 길이를 쉽게 알 수 있음
*   배열 원소 추가하기
    *   index 번호: 해당 index에 원소를 추가
        *               
    *   push( ) 메서드: 배열의 맨 뒤에 원소를 추가
*   배열 조작하기
    *   배열은 순서가 있고, 다양한 메서드를 제공해 추가, 변경, 삭제가 쉬움
    *   indexOf( ) 메서드: 특정 원소가 배열의 몇 번째 index에 있는지 확인
        *   배열에 없을 경우 -1을 반환
    *   join( ) 메서드: 배열을 합쳐 문자열의 형태로 반환
    *   slice( ) 메서드: 배열의 일부분을 추출해 만든 새로운 배열을 반환
    *   concat( ) 메서드: 배열에 다른 원소를 합쳐서 만든 새로운 배열을 반환
        *   ES6에서 도입된 Spread Operator으로 대체하기도 함
            *   참고자료: [전개 구문 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    *   **! 메서드에 따라서 원래 배열의 값이 변경될 수도 있으므로 주의해야 함**
*   배열 탐색하기
    *   for문이나 while문 등의 기존 반복문에서 발생할 수 있는 실수를 방지할 수 있어 아래 메서드들이 주로 사용됨
    *   forEach( ) 메서드: 모든 원소에 대해 인자로 받은 함수를 실행
    *   map( ) 메서드: 모든 원소에 대해 인자로 받은 함수를 실행해서 바뀐 값으로 새로운 배열을 만들고 반환
    *   filter( ) 메서드: 모든 원소에 대해 인자로 받은 함수를 실행한 값이 True인 원소들로 새로운 배열을 만들고 반환
*   **※ 일급함수: 함수를 변수로 취급하는 함수로, JavaScript의 많은 메서드가 일급함수에 해당됨**

JavaScript 객체

*   배열과 객체의 차이
    *   배열: 데이터가 순서대로 저장되어 있는 List 형태의 자료구조
    *   객체: 데이터와 각각 매칭되는 Key 값을 가지는 자료구조
        *   겉으로 드러나는 순서는 없지만, 내부적으로 작동하는 순서는 있음
        *   참고자료: [The traversal order of object properties in ES6](https://2ality.com/2015/10/property-traversal-order-es6.html)
*   객체 선언방법
    *           
*   객체의 특징
    *   객체 안에는 모든 타입의 데이터가 들어갈 수 있음
    *   객체 구조는 데이터를 보관하기 좋은 구조
        *   서버와 클라이언트 간의 데이터 교환이 객체 형식을 본딴 JSON 형식으로 이루어짐
        *   참고자료: [JSON Example](http://json.org/example.html)
*   객체의 데이터를 불러오는 방법
    *           
*   객체 탐색하기
    *   for ... in 문
        *   형태: for ( Key in 객체 ) { 실행 코드 }
        *   배열에서도 쓸 수는 있으나, 원래 목적은 Key 값이 있는 객체를 탐색하는 것이므로,  
            배열의 원소가 의도대로 표시되지 않을 수 있기 때문에 안 쓰는 게 좋음
    *   Object.keys( 객체 ) 메서드
        *               
        *   결과값이 배열 형태로 반환되므로, forEach( ) 메서드와 조합해서 사용
    *   객체 탐색 실습
        *   목표: 실습 코드([링크](https://gist.github.com/crongro/a9a118977f82780441db664d6785efe3))의 JSON 데이터에서 type 값이 sk인 배열의 name 값을 추출하기
        *   작성 코드
            *                   
            *   JSON 구조가 중첩되어 있으므로 재귀함수 형태를 활용

  

#자바스크립트 #javascript #배열 #객체 #웹 프로그래밍 #인터넷 강의 #내용 정리 #edwith #부스트코스