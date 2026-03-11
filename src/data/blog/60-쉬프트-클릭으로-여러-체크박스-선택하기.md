---
title: "60-쉬프트-클릭으로-여러-체크박스-선택하기"
pubDatetime: 2020-04-22T00:01:39+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 10 - Hold Shift and Check Checkboxes

튜토리얼 분류: JavaScript

튜토리얼 설명: 쉬프트를 누른 채 HTML 체크박스를 클릭하면 가운데 있는 체크박스도 같이 선택되게 하기

진행기간: 2020년 4월 21일

* * *

이벤트 발생 시 특수 키 입력 여부 확인하기

*   마우스, 키보드 이벤트 발생 시 이벤트의 ctrlKey, shiftKey, altKey, metaKey 속성을 통해 확인
*   해당 특수 키와 함께 키보드 입력이 발생했다면 해당 속성의 값이 true, 특수 키가 없었다면 false가 됨
*   event.ctrlKey, event.shiftKey 등의 방법으로 접근 가능

라디오, 체크상자 등 input 태그의 선택 여부 확인하기

*   해당 DOM 요소의 checked 속성을 통해 확인
*   선택된 상태라면 해당 속성의 값이 true, 선택되지 않았다면 false가 됨

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2010/tutorial-Hold-Shift-and-Check-Checkboxes)

  

#HTML #자바스크립트 #javascript #튜토리얼 #input #Checked #javascript30 #특수 키 #special key