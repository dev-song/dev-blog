---
title: "CSS와 JavaScript로 시계 만들기"
pubDatetime: 2020-04-13T13:23:51+09:00
description: "티스토리 아카이브"
tags:
  - "HTML"
  - "자바스크립트"
  - "css"
  - "javascript"
  - "튜토리얼"
  - "transition"
  - "transition-timing-function"
  - "transform-origin"
  - "javascript30"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 02 - CSS + JS Clock

튜토리얼 분류: JavaScript

튜토리얼 설명: 직선 모양의 div 요소 3개를 현재 시각과 연동해 시계의 시침, 분침, 초침처럼 작동시키기

진행기간: 2020년 4월 13일

* * *

CSS transform( ) 속성의 기준점 설정하기

*   transform-origin 속성 활용  
    *   형태: transform-origin: x y z; 
    *   x, y, z축 모두 조절할 수 있음
        *   x축은 길이, left, right, center 키워드로 조절
        *   y축은 길이, top, bottom, center 키워드로 조절
        *   z축은 길이로 조절
    *   기본값은 center
    *   참고자료: [transform-origin - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

생동감 있는 시계바늘 애니메이션 만들기

*   초침이 바뀔 때, 살짝 벗어났다 되돌아오는 애니메이션 구현
*   transition 속성 활용
    *   형태: transition: 전환속성 전환시간;
        *   전환속성: transition을 적용할 대상 속성을 지정
            *   예시) 모든 속성을 지정하고 싶을 경우 all을, transform만 지정하고 싶을 경우는 transform을 입력
        *   전환시간: transition이 진행되는 시간을 지정
*   transition-timing-function 속성 활용
    *   형태: transition-timing-function: 전환방식;
        *   전환방식: ease-in, ease-out, ease-in-out 등으로 대상 요소의 움직임을 세밀하게 조절
*   참고자료: [transition - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2002/tutorial-JS%2BCSS-Clock)

