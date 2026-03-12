---
title: "52 Flex 이미지 갤러리"
pubDatetime: 2020-04-16T23:40:44+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 05 - Flex Panel Gallery

튜토리얼 분류: CSS, JavaScript

튜토리얼 설명: CSS Flex를 이용한 이미지 갤러리

진행기간: 2020년 4월 16일

* * *

CSS Flex의 특징

*   부모 요소를 Flex 컨테이너, 자식 요소를 Flex 아이템이라고도 함
*   Flex 컨테이너는 자손 요소로 상속되지 않으므로, 중첩해서 만드려면 자손 요소에게도 설정해줘야 함

CSS Flex 관련 속성들

*   display: flex
    *   해당 요소를 Flex 컨테이너로 설정하는 속성
*   flex-direction
    *   Flex 컨테이너의 방향을 설정하는 속성
    *   기본값은 가로이며, 가로 / 가로 역순 / 세로 / 세로 역순의 4가지 중 설정할 수 있음
*   justify-content
    *   Flex 컨테이너 하위 요소들의 가로 정렬 기준을 설정하는 속성
    *   기본값은 왼쪽 정렬이며, 가운데 정렬, 오른쪽 정렬, 배분 정렬 등 6가지 중 설정할 수 있음
*   align-content
    *   Flex 컨테이너 하위 요소들의 세로 정렬 기준을 설정하는 속성
    *   기본값은 채우기이며, 가운데 정렬, 위쪽 정렬, 아래쪽 정렬 등 5가지 중 설정할 수 있음
*   flex-grow
    *   Flex 아이템이 flex 컨테이너에서 차지하는 비율을 설정하는 속성
    *   아이템의 너비/높이 비율은 (해당 아이템의 flex-grow)/(모든 아이템의 flex-grow 합)으로 결정됨
    *   **! Safari에선 flex-grow를 인식하지 못하므로, flex를 대신 사용해야 함**
        *   이벤트 속성 판별 시 event.propertyName.includes('flex')로 둘 다 검사 가능
*   flex
    *   flex-grow, flex-shrink, flex-basis 속성을 함께 설정할 수 있는 속성
    *   flex-shrink와 flex-basis에 해당하는 값은 선택 옵션임

CSS Transition 속성의 특징

*   여러 속성에 대해 다르게 transition 값을 설정할 수 있음
*   예시 코드
    *           

참고자료: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2005/tutorial-Flex-Panel-Gallery)

  

#자바스크립트 #css #javascript #튜토리얼 #FLEX #transition #javascript30