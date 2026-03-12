---
title: "JavaScript (Front End) ... Part 1"
pubDatetime: 2020-04-02T13:04:49+09:00
description: "edwith 부스트코스 강의 정리 - JavaScript 변수 선언(var/let/const), 연산자, 타입 등 기초 문법 개요"
tags:
  - "자바스크립트"
  - "javascript"
  - "웹 프로그래밍"
  - "인터넷 강의"
  - "프론트엔드"
  - "front end"
  - "내용 정리"
  - "edwith"
  - "부스트코스"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습일: 2020년 3월 19일, 20일

* * *

## 0\. 소개

기본 개념

*   서비스의 구조가 단순하더라도 백엔드 관련 배경지식은 상당히 많이 필요
*   데이터: 웹사이트에 표시되는 내용
    *   데이터베이스: 데이터를 관리하는 데 필요한 프로그램
    *   JDBC: Java에서 데이터를 쓰고, 읽고, 수정, 삭제하는 데 쓰이는 프로그램
    *   부스트코스에선 MySQL 데이터베이스, Spring JDBC를 이용
*   FE(Front End)의 Key Point
    *   JavaScript: 웹 화면의 다양한 요소를 움직이는 데 쓰이는 프로그래밍 언어
    *   DOM, 이벤트, 서버와 통신하는 Ajax
*   BE(Back End)의 Key Point
    *   JSP
        *   Servlet과 쓰는 방법이 다르지만, 동작하는 방식은 같음
        *   최종적으로 Servlet으로 바뀌어 동작함
    *   forward, redirect, 4개의 scope, JSP의 내장 객체

## 1\. JavaScript - FE

JavaScript의 변수/연산자/타입

*   JavaScript의 버전: ES(ECMA Script) 버전에 따라 달라지며, JavaScript 엔진이 해당 ES 버전을 기반으로 코드 해석
    *   2018년 기준으로 ES6 지원 브라우저(Firefox, Chrome 등)가 다수를 차지하고 있어 ES6 문법이 표준으로 쓰임
    *   ES6: ES5 문법을 포함하여 하위호환성 문제는 없지만, 브라우저별로 세부 기능 지원 범위가 다르므로 주의
*   JavaScript의 변수(variable)
    *   참고자료: [Grammar and types - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
    *   선언방법: var, let, const
        *   형태: 선언방법 변수명 = 값;
        *   var과 let, const의 차이: var과 let은 변수에 값을 다시 할당할 수 있고, const는 다시 할당할 수 없음
        *   선언방법에 따라 변수의 유효범위인 scope가 달라짐
*   JavaScript의 연산자: 수학연산자, 논리연산자, 삼항연산자, 비교연산자 등
    *   연산자 간 우선순위는 ( )를 사용해 표현
    *   수학연산자: +, -, \*, /, % (나머지) 등
    *   논리연산자: ||, &&, !
        *   || (or): 왼쪽 표현식과 오른쪽 표현식 중 하나라도 만족되는지 확인
            *   왼쪽이 만족되면 오른쪽의 만족 여부는 아예 확인하지 않음
            *   기본값을 설정할 때 활용됨
                *   예시) 변수 result의 값을 변수 name의 값으로 하되, name의 값이 없는 경우 기본값을 "default" 설정
                *   const name = "crong";    const result = name || "default";
        *   && (and): 왼쪽과 오른쪽 표현식이 모두 만족되는지 확인
            *   왼쪽이 만족되지 않으면 오른쪽의 만족 여부는 아예 확인하지 않음
            *   변수의 값을 고정하고자 할 때 활용됨
                *   예시) 변수 result의 값이 변수 name의 값과 상관없이 항상 "default"가 되도록 설정
                *   const name = "crong";    crong result = name && "default";
    *   삼항연산자: 조건문을 간단하게 표시할 수 있는 연산자
        *   형태: 표현식 ? 표현식이 true일 경우의 실행 코드 ! 표현식이 false일 경우의 실행 코드
        *   간단한 비교나 값 할당 시 활용
            *   예시) const data = 11;    const result = (data > 10) ? "Pass" : "Fail";
    *   비교연산자: ==, ===, !=, !==, >, < 등
        *   JavaScript에선 ==보다 ===를 주로 사용
            *   \==는 타입을 비교하지 않고 ===는 타입까지 비교함
            *   \==는 타입을 비교하지 않으므로 다양한 오류가 발생할 수 있음
            *   예시) ==를 사용할 경우 true로 나오는 표현식
                *   0 == false;
                *   "" == false;
                *   0 == "0";
                *   null == undefined;
*   JavaScript의 타입
    *   참고자료: [JavaScript data types and data structures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
    *   종류: undefined, null, boolean, number, string, object, function 등
    *   선언할 때가 아닌, 실행되는 순간에 결정됨
        *   다른 언어와 달리 선언할 때 변수에 타입을 명시하지 않아도 됨
        *   동적 타입(Dynamic type): 함수 안의 매개변수(parameter)나 변수가 실행될 때 타입이 결정됨
    *   타입을 확인하는 통일된 명시적인 방법은 없음
        *   문자, 숫자 등의 기본적인 타입은 typeOf으로 간략하게 확인할 수 있음
            *   typeOf의 한계: 어떤 객체의 인스턴스인지 알려주지 않음
                *   예시) typeOf null과 typeOf {} 모두 "object"를 반환
        *   배열의 경우 isArray( ) 메서드로 확인할 수 있으나, 브라우저에 따라 지원 범위가 다름
        *   정확한 타입이 필요한 경우 toString.call(대상 객체) 메서드로 객체의 타입까지 구체적으로 알 수 있음
            *   예시
                *   toString.call("test") → "\[object String\]"
                *   toString.call(3) → "\[object Number\]"
                *   toString.call(null) → "\[object Null\]"
                *   toString.call(\[\]) → "\[object Array\]"
                *   toString.call({}) → "\[object Object\]"

JavaScript의 조건문/반복문/문자열

*   조건문: if ... else if ... else, switch ... case ... default 등
    *   참고자료: [제어 흐름과 에러 처리 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#%EC%A1%B0%EA%B1%B4%EB%AC%B8)
    *   if ... else if ... else
        *   형태: if (조건1) { 조건1이 true일 때 실행 코드 }    else if (조건2) { 조건2가 true일 때 실행 코드 }    ...    else { 조건1, 조건2 모두 false일 때 실행 코드 }
        *   실행 코드가 짧은 경우 둘러싼 { }를 생략해도 되나, 가독성을 위해 가능하면 생략하지 않는 것을 권장
    *   switch ... case ... default
        *   형태: switch (표현식) { case 값1: 표현식 === 값1일 때 실행 코드;    case 값2: 표현식 === 값2일때 실행 코드;    ...    default: 표현식과 일치하는 값이 없을 때 실행 코드 }
        *   break: switch를 종료시키는 구문으로, 일반적으로 모든 case마다 넣어줘야 정상적으로 작동
        *   조건문이 특정 값에 명확히 일치할 때 사용하면 코드의 가독성을 높여줌
*   반복문: for, while 등
    *   참고자료: [Loops and iteration - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
    *   for: 가장 많이 사용되는 반복문
        *   형태: for ( 초기문; 조건문; 증감문 ) { 반복 시 실행 코드 }
        *   예시
            *   for (let i = 0; i < arr.length; i++) { 실행 코드 }
            *   개선본: for (let i = 0, len = arr.length; i < len; i++) { 실행 코드 }
                *   arr.length를 매 반복마다 계산하는 비효율을 제거
    *   Array.prototype.forEach( ): 배열의 요소들을 대상으로 반복문을 실행하는 메서드
    *   for ... in: 객체를 탐색할 때 사용되는 반복문
    *   for ... of
        *   최근 ES에 포함된 반복문 기능이어서 브라우저별로 호환성 이슈가 있음
*   문자열: JavaScript에서는 문자와 문자열의 타입이 string으로 동일함
    *   문자열은 내부적으로 객체로 변환되기 때문에, 객체 내부의 메서드를 활용해 문자열을 다양하게 다룰 수 있음  
        *   예시
            *   String.prototype.replace( ): 문자열의 일부를 바꾸는 메서드
            *   String.prototype.split( ): 문자열을 특정한 기준으로 분할해 반환하는 메서드
    *   RegExp(Regular Expression, 정규표현식)을 지원해, 문자열을 패턴화해 다양하게 활용할 수 있음

