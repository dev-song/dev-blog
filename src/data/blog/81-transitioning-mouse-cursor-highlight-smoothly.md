---
title: "81-마우스-커서-하이라이트-이어지듯이-전환하기"
pubDatetime: 2020-05-06T16:39:18+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 22 - Follow Along Link Highlighter

튜토리얼 분류: JavaScript

튜토리얼 설명: 마우스 커서에 따라 웹페이지 하이라이트가 이어지는 듯한 효과 나타내기

진행기간: 2020년 5월 6일

* * *

웹페이지의 특정 요소 사이에서 마우스 커서가 이동시킬 때, 하이라이트 효과가 부드럽게 이어지는 듯한 시각적 효과 (각주: [stripe.com](https://stripe.com/)의 내비게이션 바 드랍다운 전환 효과를 참고하면 된다.)를 줄 수 있다. 다음과 같이 프로그래밍하면 된다.

> 1\. 하이라이트의 대상이 될 HTML 요소 지정  
> 2\. 하이라이트 효과를 표현할 HTML 요소 생성  
> 3\. 대상 요소에 마우스 커서가 위치할 경우 하이라이트 효과 활성화  
> 4\. 하이라이트 효과의 위치와 크기를 대상 요소와 같게 만듦  
> 5\. 사용자의 마우스 스크롤 추가 반영

순서대로 코드를 살펴보자.

## 하이라이트 대상 HTML 요소 지정

우선 하이라이트 효과를 나타낼 대상을 고른다. 예제에선 a 태그 요소가 하이라이트 효과를 적용할 대상이 된다.


## 하이라이트 효과 HTML 요소 생성

그 다음은 하이라이트 효과를 표현할 요소를 생성한다. 아래의 코드를 보자.


span 태그 요소를 만들고 highlight 클래스를 추가한 다음, body 태그의 자식 요소로 삽입하는 방식이다.

## 마우스 커서에 따라 하이라이트 효과 활성화

이제 마우스 커서가 대상 요소 위로 올라갈 때마다 하이라이트 효과가 활성화되도록 해야 한다. 아래의 코드를 보자.


하이라이트 효과를 활성화시키는 highlightLink( ) 함수를 만들고, 모든 a 요소에 mouseenter 이벤트 (각주: 참고자료: [Element: mouseenter event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event))가 발생할 때마다 highlightLink( ) 함수를 실행한다.

## 대상 요소와 하이라이트 효과의 위치와 크기 같게 하기

하이라이트 효과의 크기가 대상 요소와 같아지도록 highlightLink( ) 함수를 만들어야 한다.


대상 요소의 DOMRect 객체 (각주: DOM 요소의 x/y 좌표, 길이, 높이, 상/하/좌/우 여백 정보를 갖고 있다. 참고자료: [DOMRect - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect))를 반환하는 getBoundingClientRect( ) 메서드 (각주: 참고자료: [Element.getBoundingClientRect() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect))를 활용한다.

DOMRect 객체에서 대상 요소의 길이, 높이, 좌측/상단 여백을 불러와 하이라이트 효과의 스타일로 적용해주면 대상 요소와 하이라이트 효과의 크기, 위치가 같아진다.

## 마우스 스크롤 반영

사용자가 스크롤을 하지 않는다면 괜찮지만, 스크롤을 하게 되면 대상 요소와 하이라이트 효과의 위치가 달라지는 문제가 발생한다. 이런 경우를 위해 스크롤한 만큼을 반영해준다.


새로운 크기, 위치 정보를 담은 객체를 만들고 각각 가로, 세로로 스크롤한 수치를 나타내는 window.scrollX, window.scrollY를 위치 정보에 반영한다. 이를 하이라이트 효과의 스타일로 적용해주면 된다.

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/c6f88ff01ff6cb413fccc836c6a9e67469cd33b2/projects/JavaScript30/Day%2022/tutorial-Follow-Along-Link-Highlighter)

* * *

  

#자바스크립트 #javascript #하이라이트 #튜토리얼 #MouseEnter #javascript30 #getBoundingClientRect