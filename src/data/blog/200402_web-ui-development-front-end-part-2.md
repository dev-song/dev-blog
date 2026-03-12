---
title: "23 Web UI 개발 (Front End) ... Part 2"
pubDatetime: 2020-04-02T23:57:38+09:00
description: "티스토리 아카이브"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습일: 2020년 3월 24일

* * *

## 2\. Web UI 개발 - FE

AJAX 통신의 이해

*   AJAX(Asynchronous JavaScript and XML), 또는 XMLHTTPRequest 통신의 정의
    *   웹에 데이터를 갱신할 때, 브라우저를 새로고침하지 않고도 서버의 데이터를 받을 수 있게 하는 기술
        *   화면 내 다른 부분에 영향을 주지 않으면서 데이터를 비동기적으로 서버에서 가져올 수 있어, 더 좋은 UX 경험을 제공함
    *   예시) 네이버 메인페이지의 섹션에서, 다른 섹션을 클릭하더라도 나머지는 그대로 있고 섹션 안의 내용만 바뀜
        *               
            네이버 메인페이지 섹션
            
        *   선택되지 않은 섹션의 컨텐츠까지 초기 로딩 시점에 불러온다면 초기 로딩 속도가 영향을 받으므로, 해당 컨텐츠가 필요한 시점에 동적으로 데이터를 받아와서 표현하는 방식
*   AJAX 실행 코드
    *   참고자료: [Using XMLHttpRequest - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
    *   작동 원리
        *               
            AJAX 실행 코드의 예시
            
        *   XMLHttpRequest 객체 생성 → open( ) 메서드로 요청 준비 → send( ) 메서드로 서버에 요청을 전송
        *   요청이 처리되면(서버로부터 응답을 받으면) load 이벤트 발생 → callback 함수 실행
            *   Callback 함수 실행 시점에 ajax 함수는 이미 반환되어 call stack에서 사라진 상태
*   JSON(JavaScript Object Notation) 포맷
    *   참고자료: [JSON - Wikipedia](https://ko.wikipedia.org/wiki/JSON)
    *   AJAX 통신 시 서버와 클라이언트가 데이터를 주고받을 때 사용하는 표준적인 데이터 포맷
        *   XML, Plain Text 등 다른 데이터 포맷도 사용할 수 있으나, JSON이 제일 사용하기 편리해 광범위하게 쓰임
    *   JavaScript의 객체와 동일한 형태를 지님
*   AJAX와 CORS(Cross Origin Resource Sharing)
    *   참고자료: [AJAX & CORS Overview](https://huns.me/posts/2014-04-20-ajax-cors-overview)

JavaScript Debugging

*   Debugging: 버그(bug)를 잡는 행위
*   JavaScript는 브라우저 Runtime 단계에서 실행되는 언어이므로, 브라우저에서 바로 디버깅하는 것이 일반적
*   Google Chrome 개발자 도구를 활용한 디버깅 방법
    *   Sources 탭에서 JavaScript 코드를 확인할 수 있음
    *   특정 라인의 숫자를 클릭하면 Breakpoint가 설정됨
    *   Breakpoint 설정 후 스크립트가 실행되면 Breakpoint에서 중단되고, 이후 디버깅을 진행할 수 있음
    *   화면 우측의 Debugger 섹션에서 관련 기능을 활용할 수 있음
        *   정보 확인 기능: 현재 라인 시점으로 Call Stack, 지역 변수, 전역 변수를 조회할 수 있음
        *   디버깅 관련 명령
            *   Pause/Continue: 평소에는 Pause, Breakpoint가 있는 경우 Continue로 기능하며, 다음 Breakpoint까지 코드를 실행
            *   Step over next function call: 코드를 한 줄 실행하고, 실행한 라인에 함수 호출 코드가 있으면 함수 안으로는 진입하지 않음
            *   Step into next function call: 코드를 한 줄 실행하고, 실행한 라인에 함수 호출 코드가 있으면 함수 안의 첫 번째 코드로 진입한 뒤 다시 한 줄씩 코드를 실행
            *   Step out of current function: Step into next function call로 실행된 함수를 끝까지 실행하고 빠져나와 해당 함수를 실행한 라인으로 돌아감
            *   Activate/Deactivate breakpoint: Breakpoint를 활성화, 비활성화함
            *   Pause on exception: 예외 발생 시 자동으로 해당 위치에 Breakpoint를 설정

  

#ajax #debugging #XMLHttpRequest #JSON #웹 프로그래밍 #인터넷 강의 #Web UI #내용 정리 #edwith #부스트코스