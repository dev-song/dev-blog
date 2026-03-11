---
title: "53-AJAX-검색어-자동완성"
pubDatetime: 2020-04-17T16:32:40+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 06 - Ajax Type Ahead

튜토리얼 분류: JavaScript

튜토리얼 설명: AJAX를 이용한 검색어 자동완성 기능

진행기간: 2020년 4월 17일

* * *

Fetch API

*   AJAX를 구현하는 방법 중 하나로, 사용이 쉽고 간단함
*   Promise 객체를 반환하므로, Promise가 도입된 ES6 이후로 자주 쓰임
    *   반환된 Promise 객체는 then 키워드로 활용
*   예시 코드
    *           
*   참고자료
    *   [Fetch API - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)
    *   [AJAX, XMLHttpRequest와 Fetch 살펴보기 | Dev.White](https://junhobaik.github.io/ajax-xhr-fetch/)
    *   [자바스크립트 fetch API 알아보기](https://webisfree.com/2019-05-15/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-fetch-api-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)
*   **! Internet Explorer에서는 지원되지 않음**

정규 표현식

*   문자열의 특정 문자 조합을 대응시키고자 할 때 사용하는 패턴
*   RegExp의 exec( ), test( ) 메서드, String의 match( ), replace( ), search( ), split( ) 메서드와 함께 쓰임
*   사용 방법
    *           
        1.  정규 표현식 리터럴 /
        2.  생성자 함수를 첫 번째 인자의 정규 표현식 또는 변수와 함께 사용
            *   두 번째 인자로 정규 표현식 플래그를 추가해서 활용할 수 있음
*   예시 코드
    *   숫자 x를 3자리 단위로 ,(쉼표) 구분하여 반환하는 함수
        *               
*   참고자료: [정규 표현식 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)

Array.prototype.join( ) 메서드의 특징

*   인자로 받은 문자열을 결합의 구분자로 씀
*   인자를 생략할 경우 , (쉼표)가 구분자로 쓰임
*   참고자료: [Array.prototype.join() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2006/tutorial-Type-Ahead)

  

#자바스크립트 #ajax #javascript #정규표현식 #regexp #튜토리얼 #Join #fetch #javascript30