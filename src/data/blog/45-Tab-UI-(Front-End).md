---
title: "45-Tab-UI-(Front-End)"
pubDatetime: 2020-04-14T12:52:19+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 14일

* * *

## 6\. Tab UI 실습 - FE

Tab UI를 만들기 위한 HTML과 CSS 구조 전략

*   상단 메뉴를 누르면 새로고침 없이 아래 내용이 변경되는 Tab UI가 자주 사용됨
    *   방법 A: 메뉴 갯수만큼의 컨텐츠 요소를 만들고 각 요소의 display 속성을 block과 none으로 제어
    *   방법 B: 메뉴 갯수와 상관없이 컨텐츠 요소 하나를 두고 그 안의 내용을 조절
        *   예시 코드
            *                   
        *   실행 화면  
            *                   

Tab UI에 생명 불어넣기

*   AJAX 방식을 사용한 Tab UI 동작 제어: 메뉴를 클릭하면 해당하는 JSON 파일을 불러와 content 섹션에 표시하기
    *   JSON 파일
        *               
    *   JavaScript AJAX 코드
        *               
        *   템플릿이 길어지면 HTML script 태그 등 JavaScript 파일 밖에 작성하는 것이 권장됨
            *   HTML script 태그를 사용할 경우 type을 MIME Type 형식으로 작성해줘야 함
            *   예시) <script type="text/x-my-template" src="script.js"></script>
            *   참고자료
                *   [<script>: 스크립트 요소 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)
                *   [MIME types (IANA media types) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types)
    *   심화시키기: 메뉴를 클릭할 때마다가 아닌, 최초 1회만 서버에 데이터를 요청한 뒤 저장된 데이터를 사용하기
        *   실습 코드
            *                   
            *   서버에서 받아올 데이터를 저장할 변수 data 선언
            *   메뉴 Click 이벤트 리스너에 data의 false 여부에 연동되는 조건문 설정
                *   data가 false일 경우 (서버로부터 데이터를 받아오지 않음): ajax 함수 실행
                *   data가 true일 경우: data의 값들로 템플릿을 만들고 content 섹션의 innerHTML 변경
            *   ajax 함수 내 서버로부터 전달받은 JSON을 data에 저장하는 명령문 설정

  

#ajax #템플릿 #JSON #웹 프로그래밍 #내용 정리 #edwith #부스트코스 #Tab UI