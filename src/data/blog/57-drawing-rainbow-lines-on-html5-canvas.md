---
title: "57-HTML5-캔버스로-무지개빛-선-그리기"
pubDatetime: 2020-04-19T21:39:21+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 08 - Fun with HTML5 Canvas

튜토리얼 분류: JavaScript

튜토리얼 설명: HTML5 캔버스로 무지개색으로 색깔이 변하는 선 그리기

진행기간: 2020년 4월 19일

* * *

HTML Canvas 요소

*   HTML 위에 그래픽 요소를 표현할 수 있는 요소
    *   Canvas API, WebGL API, JavaScript 코드와 함께 활용됨
        *   Canvas API는 주로 2D 그래픽을, WebGL API는 2D와 3D 그래픽을 표현하는 데 쓰임
    *   참고자료
        *   [Canvas API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
        *   [WebGL: 2D and 3D graphics for the web - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

*   특징
    *   그래픽 요소는 Canvas 요소가 아닌 요소 위 Context에 렌더링됨
    *   Canvas의 다양한 속성을 JavaScript 코드로 조절할 수 있음
        *   선의 색상, 선끼리 만나는 점의 테두리 모양, 꼭지점의 모양 등

마우스를 누른 채 움직일 때만 함수 실행하기

*       
    *   마우스가 눌려있는 상태를 나타낼 변수 isPressing 선언
    *   isPressing 변수를 마우스를 누를 때 true로, 마우스를 떼거나 화면 밖으로 나가면 false로 만들도록 이벤트 처리
    *   마우스를 움직일 때 test 함수를 실행하되, test 함수는 isPressing 변수가 false이면 실행을 멈춤

HSL 색상 체계

*   색상을 Hue(색조), Saturation(포화도), Lightness(휘도)의 조합으로 나타내는 색상 체계
    *   색조는 0~360, 포화도, 휘도는 0% ~ 100%의 값을 가짐
*   색상 적용 시 형태: hsl(hue, saturation, lightness)
*   참고사이트: [Mothereffing HSL](https://mothereffinghsl.com/)
*   **※ 색조값이 360을 넘으면 해당 값을 360으로 나눈 나머지로 자동 변환됨**

여러 변수를 한꺼번에 다루기

*       
*   참고자료: [Destructuring assignment - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2008/tutorial-Fun-with-HTML5-Canvas)

  

#HTML #자바스크립트 #javascript #튜토리얼 #Canvas #CONTEXT #HSL #javascript30 #destructuring assignment #구조 분해 할당