---
title: "63-Spring-MVC-(Back-End)-...-Part-2"
pubDatetime: 2020-04-22T19:59:12+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 22일

* * *

## 9\. Spring MVC - BE

Spring MVC 구성요소

*   Spring MVC의 기본 동작 흐름
    *           
    *   푸른색은 Spring이 제공하는 부분, 보라색은 개발자가 설계해야 하는 부분, 연두색은 혼합된 부분
        1.  Dispatcher Servlet이 모든 요청을 받음
        2.  요청을 처리할 컨트롤러와 메서드를 Handler Mapping을 통해 확인
            *   XML 파일이나 Java Annotation 정보가 함께 사용됨
        3.  확인된 컨트롤러와 메서드를 Handler Adapter에게 실행 요청
        4.  해당 컨트롤러와 메서드가 실행됨
        5.  실행 결과는 Model에 담겨 Dispatcher Servlet에 전달되고, 컨트롤러는 View name을 반환
        6.  반환된 View name를 활용해 View resolver가 어떤 View인지를 확인
        7.  View를 출력
        8.  출력된 View를 응답
    *   Dispatcher Servlet의 요청 처리를 위해 사용되는 컴포넌트
        *   HandlerMapping, HandlerAdapter, MultipartResolver, LocaleResolver, ThemeResolver, HandlerExceptionResolver, RequestToViewNameTranslator, ViewResolver, FlashMapManager
*   Dispatcher Servlet의 특징
    *   프론트 컨트롤러의 역할을 함
    *   클라이언트의 모든 요청을 받아 핸들러에게 처리하도록 한 뒤, 그 결과를 받아 사용자에게 응답
    *   여러 컴포넌트를 이용해 작업을 처리함
*   Dispatcher Servlet의 내부 동작흐름 (≒ 내부 코드)
    *           
    *   세부 동작흐름 - 요청 선처리 작업
        *               
        *   Locale 결정
            *   지역화: 사용자의 지역에 따라 언어 설정이 달라지게 처리하는 것으로, Spring MVC가 지원함
            *   사용자의 브라우저의 언어 설정 등을 브라우저 요청의 헤더 정보에서 확인
        *   RequestContextHolder에 요청 저장
            *   스레드 로컬 객체
            *   요청을 받아 응답할 때까지 HttpServletRequest, HttpServletResponse 등을 Spring이 관리하는 객체 안에서 사용할 수 있도록 해주는 것
            *   컨트롤러의 메서드가 Request 객체를 필요로 하는 경우 인자에다가 HttpServletRequest req 선언만 해주면 편하게 HttpServletRequest를 쓸 수 있음
                *   Spring이 웹 기술에 종속되는 문제점이 있으므로 권장되지는 않음
                *   웹 기술을 가져다 쓰는 것보다 Spring이 대체하는 것들을 쓰는 것이 좋음
        *   FlashMap 복원
            *   Spring 3에서 추가된 기능
            *   redirect로 값을 전달할 때 사용됨(redirect되었을 때만 실행되는 부분)
                *   기존처럼 ?, 매개변수 등을 이용하면 URL이 복잡해지고 길이 제한도 문제가 됨
            *   redirect 시 한 번 값을 유지할 수 있게 해주는 것
        *   멀티 파트 요청 & MultipartResolver가 멀티파트 결정
            *   멀티 파트 요청이 들어온 경우, 사용자의 요청에 맞는 멀티 파트를 MultipartResolver가 결정
                *   사용자가 파일을 업로드하는 경우, 파일 정보를 읽어들이는 특수한 Request 객체가필요함
                    *   HttpServletRequest와 다른 객체
        *   핸들러 결정과 실행
            *   실제 요청을 처리하는 핸들러
        *   요청 선처리 작업에서 사용되는 컴포넌트
            *   org.springframework.web.servlet.LocaleResolver
                *   지역 정보를 결정하는 전략 오브젝트
                *   기본값인 AcceptHeaderLocalResolver는 HTTP 헤더의 정보를 보고 지역정보를 설정
            *   org.springframework.web.servlet.FlashMapManager
                *   FlashMap 객체를 조회(retrieve)하고 저장하기 위한 인터페이스
                *   RedirectAttributes의 addFlashAttribute 메소드를 이용해 저장
                *   redirect 후 조회하면 바로 정보를 삭제함
            *   org.springframework.web.context.request.RequestContextHolder
                *   일반 Bean에서 HttpServletRequest, HttpServletResponse, HttpSession 등을 사용할 수 있게 해줌
                *   위 객체들을 일반 Bean에서 사용하면 웹에 종속적이 될 수 있음
            *   org.springframework.web.multipart.MultipartResolver
                *   멀티파트 파일 업로드를 처리하는 전략
    *   세부 동작흐름 - 요청 전달
        *               
        *   HandlerMapping으로 HandlerExecutionChain 결정
        *   HandlerExecutionChain이 발견되었는지 확인
            *   발견되지 않았으면 HTTP 404 전달
        *   HandlerAdapter 결정
            *   HandlerExecutionChain이 발견되면 그에 맞는 HandlerAdapter를 결정
        *   HandlerAdapter가 발견되었는지 확인
            *   발견되지 않았으면 서버에 문제가 있는 것이므로 ServletException이 발생
        *   요청 처리
            *   HandlerAdapter가 발견되면 요청이 잘 처리가 됨
        *   요청 전달에서 사용되는 컴포넌트
            *   org.springframework.web.servlet.HandlerMapping
                *   어떤 핸들러가 요청을 처리할지에 대한 정보를 알고 있음
                *   BeanNameHandlerMapping과 DefaultAnnotationHandlerMapping가 기본으로 설정되어 있음
            *   org.springframework.web.servlet.HandlerExecutionChain
                *   무엇이 실행되어야 할 지 알고 있는 객체
                *   실제로 호출된 핸들러 및 핸들러 실행 전후에 수행될 HandlerInterceptor를 참조를 갖고 있음
            *   org.springframework.web.servlet.HandlerAdapter
                *   선택된 핸들러를 실행하는 방법과, 응답을 ModelAndView로 변화하는 방법을 알고 있음
                    *   핸들러를 실제로 실행하는 역할
                *   HttpRequestHandlerAdapter, SimpleControllerHandlerAdapter, AnnotationMethodHandlerAdapter가 기본값으로 설정되어 있음
                *   @RequestMapping과 @Controller를 통해 정의되는 컨트롤러는 DefaultAnnotationHandlerMapping에 의해 핸들러가 결정되고, 그에 대응하는 AnnotationMethodHandlerAdapter에 의해 호출됨
    *   세부 동작흐름 - 요청 처리
        *               
        *   사용 가능한 인터셉터가 존재하는지 확인
            *   인터셉터는 일종의 필터 (작업을 처리하기 전에 불필요한 것들을 걸러내는 역할)
            *   존재한다면 인터셉터의 preHandle을 호출해 요청 처리
        *   핸들러를 실행하여 ModelAndView 객체를 반환하는지 확인
            *   반환된 ModelAndView 객체가 View를 갖지 않는다면 RequestToViewNameTranslator를 동작
        *   인터셉터의 postHandler을 호출해 요청 처리
            *   반환하는 객체가 ModelAndView 객체가 아니거나 ModelAndView 객체가 View를 갖지 않는 경우
        *   요청 처리에서 사용되는 컴포넌트
            *   org.springframework.web.servlet.ModelAndView
                *   Controller의 처리 결과를 보여줄 View와 View에서 사용할 값을 전달하는 클래스
                *   Spring은 웹에 종속되지 않기 위해 ModelAndView 객체를 제공함  
                    *   Servlet에서 얻은 Model을 JSP로 전달할 때 request 등의 객체를 이용했음
                    *   request보다는 ModelAndView 컴포넌트를 대신 이용하는 것이 바람직함
            *   org.springframework.web.servlet.RequestToViewNameTranslator
                *   Controller에서 View 객체와 View 이름을 제공하지 않는 경우 작동
                *   전략 객체로, URL 등의 요청정보를 참조하여 자동으로 View 이름을 생성함
                *   DefaultRequestToViewTranslator가 기본값으로 설정되어 있음
    *   세부 동작흐름 - 예외 처리
        *               
        *   HandlerExceptionResolver에 문의하여 반환하는 객체가 ModelAndView인지 확인
            *   맞다면 다시 요청 처리
            *   아니라면 다시 예외를 던짐
        *   예외 처리에서 사용되는 컴포넌트
            *   org.springframework.web.servlet.HandlerExceptionResolver
                *   예외가 던져졌을 때 어떤 핸들러를 실행할 지에 대한 정보를 제공
                *   DefaultHandlerExceptionResolver가 DispatcherServlet에 의해 기본값으로 설정되어 있음
    *   세부 동작흐름 - 뷰 렌더링
        *               
        *   뷰가 String을 참조하는지 확인
            *   참조한다면 ViewResolver로 View 구현체를 찾음
        *   View 구현체가 존재하는지 확인
            *   존재하지 않는다면 ServletException을 발생시킴
        *   View 구현체로 렌더링
            *   View 구현체가 존재하는 경우 렌더링한 뒤 다시 요청 처리함
        *   뷰 렌더링에서 사용되는 컴포넌트
            *   org.springframework.web.servlet.ViewResolver
                *   컨트롤러가 반환한 View 이름을 참고해 적절한 View 객체를 찾아주는 전략 객체
                *   View의 종류에 따라 적절한 ViewResolver를 추가로 설정할 수 있음
    *   세부 동작흐름 - 요청 처리 종료
        *               
        *   HandlerExecutionChain이 존재하는지 확인
            *   존재하면 인터셉터의 afterCompletion( ) 메서드 실행
        *   RequestHandledEvent 발생
            *   HandlerExceutionChain이 존재하지 않으면 발생
            *   인터셉터의 afterCompletion( ) 메서드가 실행되면 발생
        *   요청 처리 종료

  

#Java #Spring #Model #View #MVC #controller #웹 프로그래밍 #내용 정리 #edwith #부스트코스