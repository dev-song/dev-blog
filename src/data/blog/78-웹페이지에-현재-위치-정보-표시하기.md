---
title: "78-웹페이지에-현재-위치-정보-표시하기"
pubDatetime: 2020-05-05T14:59:04+09:00
description: "티스토리 아카이브"
---

튜토리얼 출처: [JavaScript30](https://javascript30.com/)

튜토리얼 이름: Day 21 - Geolocation based Speedometer and Compass

튜토리얼 분류: JavaScript

튜토리얼 설명: 브라우저의 위치 정보를 사용해 웹페이지에 속도계 및 나침반 표시하기

진행기간: 2020년 5월 5일

* * *

## 브라우저의 현재 위치 파악하기

Geolocation Web API (각주: 참고자료: [Geolocation - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Geolocation))를 사용하면 브라우저의 현재 위치를 알 수 있다. 다음의 코드를 보자.


Navigator 객체의 geolocation 속성으로 Geolocation 객체에 접근하고 있다.

watchPosition( ) 메서드 (각주: 참고자료: [Geolocation.watchPosition() - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Geolocation/watchPosition))를 사용해 브라우저의 위치가 바뀔 때마다 위치 정보를 반환한다.

watchPosition( ) 메서드의 사용 방법은 다음과 같다.

> 1\. 메서드는 정상적으로 실행되면 첫 번째 인자의 Callback 함수를 실행  
> 2\. 첫 번째 Callback 함수가 매개변수로 사용하는 GeolocationPosition 객체 (각주: 참고자료: [GeolocationPosition - Web API](https://developer.mozilla.org/ko/docs/Web/API/GeolocationPosition) | MDN)를 통해 위치 정보 (각주: 경도, 위도, 방향, 속도, 기록시간 등)를 추출  
> 3\. 메서드가 정상적으로 실행되지 않으면 두 번째 인자의 Callback 함수를 실행

! 주의

Geolocation API는 보안 및 프라이버시 이슈가 있으므로 보안 컨텍스트 (각주: 참고자료: [Secure contexts - Web security | MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts))인 HTTPS, file:///, localhost를 사용한 연결에서만 작동하며, 위치 정보에 대한 접근 권한을 사용자가 설정해야 활성화된다.

## 위치 정보 웹페이지에 표시하기

Geolocation API가 제공하는 정보를 활용하면 위치 정보를 웹페이지에 표시할 수 있다. 아래는 현재 속도와 방향을 HTML 요소로 표현하는 코드이다.


방향을 나타낼 HTML 요소를 arrow로, 속도를 나타낼 HTML 요소를 speed 변수로 지정했다.

얻어낸 위치 정보 중 속도 정보를 speed의 textContent로, 방향 정보 (각주: 360도 기반이므로, CSS transform 속성의 rotate 값에 삽입할 때 별도의 단위 변환을 거칠 필요가 없다.)를 arrow의 transform CSS 속성으로 지정해주면 된다.

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2021/tutorial-Geolocation)

* * *

  

#자바스크립트 #javascript #튜토리얼 #geolocation #위치 정보 #javascript30