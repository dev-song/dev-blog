---
title: "46 JavaScript로 CSS 변수 조절하기"
pubDatetime: 2020-04-14T15:45:18+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 03 - CSS Variables

튜토리얼 분류: JavaScript

튜토리얼 설명: JavaScript로 CSS 속성 값 변화시키기

진행기간: 2020년 4월 14일

* * *

CSS 변수 사용하기

*   :root 의사 클래스 활용하기
    *   문서 트리의 root 요소를 선택함
    *   HTML의 root 요소는 <html> 요소이므로, html 선택자와 동일한 역할을 함
        *   **※ :root가 html 선택자보다 명시도가 더 낮음**
    *   전역 CSS 변수 선언에 주로 사용됨
    *   참고자료
        *   [:root - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/:root)
        *   [명시도 - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)
*   사용자 지정 속성(CSS 변수, 종속 변수) 정의하기
    *   형태: --변수명: 값
    *   사용방법: 선택자 { 속성: var(--변수명) }
        *   **※ SASS에서는 $가 var( )의 역할을 대신함**
    *   참고자료
        *   [사용자 지정 CSS 속성 사용하기 (변수) - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)
        *   [SASS: Syntactically Awesome Style Sheets](https://sass-lang.com/)

input\[type="range"\]를 CSS 속성 값과 연동시키기

*   이벤트 리스너의 대상이 될 이벤트
    *   change 이벤트: range 슬라이더의 값이 바뀌는 순간 발생
    *   mousemove 이벤트: range 슬라이더 위에서 마우스가 움직일 때마다 발생
    *   두 이벤트 모두에 addEventListener 처리해줘야 슬라이더를 드래그하는 중에도 실시간으로 적용됨
*   접미사(suffix) 설정
    *   range 슬라이더의 값은 정수형인데 반해서, 그 값을 연동시킬 CSS 속성 값들은 접미사로 단위가 붙음
        *   예시) px, rem, % 등
    *   range 슬라이더의 종류에 따라 if ... else 조건문으로 접미사를 다르게 하거나, HTML 요소의 dataset을 활용
        *   dataset: 특정 요소가 가진 속성 중 data- 접두사가 붙은 속성이 모여있는 객체
*   HTML root 요소의 스타일 조작
    *   document.documentElement 활용
        *   document.querySelector('html') 과 동일
    *   style.setProperty( ) 메서드 활용
        *   형태: element.style.setProperty( 속성, 값 )
        *   HTML 요소의 특정 CSS 속성을 주어진 값으로 변경

* * *

[Github 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2003/tutorial-CSS-Variables)

  

#HTML #자바스크립트 #css #javascript #튜토리얼 #setProperty #javascript30 #:root