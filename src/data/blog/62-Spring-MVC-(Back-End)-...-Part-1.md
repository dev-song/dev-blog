---
title: "62-Spring-MVC-(Back-End)-...-Part-1"
pubDatetime: 2020-04-22T18:41:12+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 22일

* * *

## 9\. Spring MVC - BE

Spring MVC란?

*   MVC (Model-View-Controller)
    *   Xerox 연구소의 트뤼그베 린즈커그가 소개한, 데스크탑 어플리케이션용으로 고안된 개념
    *   Model
        *   View가 렌더링하는데 필요한 데이터
        *   예시) 사용자가 요청한 상품 목록, 주문 내역
    *   View
        *   실제로 보이는 부분으로, Model을 사용해 렌더링함
        *   결과를 JSP, JSF, PDF, XML 등으로 표현
    *   Controller
        *   사용자의 액션에 응답하는 컴포넌트로, Model을 업데이트하고 다른 액션을 수행함
*   MVC Model 1 아키텍쳐
    *           
        1.  브라우저의 요청을 JSP가 받음
            *   요청만큼 JSP page가 존재해야 함
        2.  JSP는 Java Class인 Bean을 통해 데이터베이스를 사용
            *   예시) JDBC
        3.  JSP는 데이터베이스를 사용한 결과를 브라우저에게 응답
    *   문제점
        *   JSP 페이지에 Java 코드와 HTML 코드가 섞이게 돼 유지보수가 어려워짐
*   MVC Model 2 아키텍쳐
    *   MVC Model 1 아키텍쳐의 문제점을 해결하기 위해 고안됨
    *           
        1.  브라우저의 요청을 Servlet이 받음
        2.  Servlet이 Java Bean을 통해 데이터베이스를 사용
        3.  Servlet이 데이터베이스를 사용한 결과를 JSP에게 전달
        4.  JSP는 결과 데이터를 받아 브라우저에게 응답
    *   특징
        *   Controller와 View를 분리할 수 있음
*   MVC Model 2 아키텍쳐 - 발전 형태
    *           
        *   클라이언트가 보낸 모든 요청을 프론트 컨트롤러 Servlet이 받음
            *   프론트 컨트롤러 Servlet은 하나만 존재함
            *   요청만 받을 뿐, 실제 일은 처리하지 않으며 컨트롤러 Class에게 위임함
                *   프론트 컨트롤러 Servlet이 요청을 직접 처리하기에는 불편한 구조이기 때문
        *   컨트롤러는 Bean 등을 통해 결과를 만들어내고 모델에 담아 프론트 컨트롤러에게 다시 보냄
            *   컨트롤러 Class는 핸들러 Class라고도 불림
            *   관련된 URL을 하나의 Class에서 모두 처리할 수 있게 됨
        *   프론트 컨트롤러는 받은 모델을 적합한 View에게 전달
        *   View는 전달받은 모델로 결과를 출력
    *   프론트 컨트롤러를 사용하는 이유
        *   하나의 웹 어플리케이션에는 많은 View와 Controller가 존재하고,  
            이들이 독립적으로 연결, 실행되면 서버가 웹 어플리케이션의 실행을 일괄적으로 처리하기가 힘듦
        *   프론트 컨트롤러를 사용하면 View의 모든 요청을 담당, 웹 어플리케이션의 실행을 일괄 처리할 수 있음
        *   참고자료: [프런트 컨트롤러 디자인 패턴 - JSP/서블릿 훑어 보기](https://opentutorials.org/module/3569/21219)
*   Spring MVC
    *   Spring Module 중 Web Module이 Model 2 아키텍쳐의 발전형태 중 하나이며, Spring MVC라고 불림
    *           

  

#Java #Spring #Model #View #MVC #controller #웹 프로그래밍 #내용 정리 #edwith #부스트코스