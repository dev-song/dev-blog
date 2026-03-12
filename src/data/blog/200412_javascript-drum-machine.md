---
title: "JavaScript 드럼 재생기"
pubDatetime: 2020-04-12T15:52:35+09:00
description: "JavaScript30 Day 01 튜토리얼로 HTML audio 태그 재생과 CSS transitionend 이벤트를 활용한 드럼 재생기를 만드는 방법을 정리한 노트"
tags:
  - "HTML"
  - "자바스크립트"
  - "javascript"
  - "튜토리얼"
  - "javascript30"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 01 - JavaScript Drum Kit

튜토리얼 분류: JavaScript

튜토리얼 설명: 웹사이트 내 요소 클릭 시 드럼 소리 재생 & 클릭 시각효과 추가하기

진행기간: 2020년 4월 12일

* * *

HTML audio 태그 JavaScript로 재생하기

```
const audio = document.querySelector('audio');

audio.playTime = 0;		// 오디오가 중첩될 수 있도록 재생시간을 되돌림
audio.play();
```

CSS Transition이 끝나는 시점 인식하기

```
element.addEventListener('transitionend', event handler);
```

*   Web API는 transitionend 외 transitionstart, transitionrun, transitioncancel 이벤트도 제공함
*   참고자료: [HTMLElement: transitionend event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2001/tutorial-JavaScript-Drum-Kit)

