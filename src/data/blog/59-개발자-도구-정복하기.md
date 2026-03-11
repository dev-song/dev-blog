---
title: "59-개발자-도구-정복하기"
pubDatetime: 2020-04-20T16:20:07+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 09 - Dev Tools Domination

튜토리얼 분류: 개발자 도구

튜토리얼 설명: 개발자 도구의 다양한 기능 알아보기

진행기간: 2020년 4월 20일

* * *

HTML 요소의 속성 변화를 구체적으로 확인하기

*   개발자 도구 > Elements 탭 > HTML 요소 선택 후 우클릭 > Break on > attribute modifications
*   속성이 변화하는 순간 Debugger가 작동, Sources 탭으로 전환되어 그 변화를 만든 코드 line을 화면에 표시함

콘솔 메시지에 스타일 입히기

*       
*   형태: console.log('%c문자열', 'CSS 속성값');

콘솔로 표현식 테스트하기

*   형태: console.assert(표현식, 코드);
*   첫 번째 인자인 표현식이 false일 경우 두 번째 인자인 코드 실행

DOM 요소의 하위 속성 및 메서드 조회하기

*   형태: console.dir(DOM 요소);
*   **※ console.log(DOM 요소)는 해당 DOM 요소 그 자체만 표시**

콘솔 메시지 그룹으로 묶기

*   화면에 보이는 모습
    *           
*   형태  
    *           
*   **※ group 대신 groupCollapse를 사용하면 그룹이 접힌 채로 콘솔에 표시됨**

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2009/tutorial-Dev-Tools-Domination)

  

#자바스크립트 #javascript #튜토리얼 #콘솔 #Console #개발자 도구 #devtools #javascript30