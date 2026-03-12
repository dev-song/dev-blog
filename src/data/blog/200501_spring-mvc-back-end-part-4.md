---
title: "70 Spring MVC (Back End) ... Part 4"
pubDatetime: 2020-05-01T12:30:52+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 30일

* * *

## 9\. Spring MVC - BE

Spring MVC 실습 - 웹페이지 1 기능 구현

1.  웹 브라우저는 http://localhost:8080/mvcexam/plusform URL로 요청을 보내고,  
    서버가 웹 브라우저에게 2개의 값을 입력받을 수 있는 입력창과 버튼이 있는 화면을 출력
2.  웹 브라우저가 2개의 값을 입력하고 버튼을 클릭하면  
    http://localhost:8080/mvcexam/plus URL로 서버에게 2개의 입력값이 POST 방식으로 전달됨
3.  서버는 2개의 값을 더하고 결과값을 JSP에게 request scope로 전달해 출력

Spring MVC 실습 - Spring MVC 설정

*   MVC 설정 클래스 생성
    *   설정 파일을 모아놓을 패키지 생성
        *   패키지명: kr.or.connect.mvcexam.config
    *   WebMvcContextConfiguration 클래스 생성
        *   @EnableWebMvc와 연동시키기 위해 WebMvcConfigurerAdapter 상속
    *   클래스 위 @Configuration, @EnableWebMvc, @ComponentScan 입력 (참고: [Spring MVC (Back End) ... Part 3](https://til-devsong.tistory.com/69) Annotation의 종류별 역할)
        *   @ComponentScan 뒤 basePackages를 단수 또는 다수로 지정 (다수로 지정할 땐 중괄호 { } 사용)
    *   클래스 Override
        *               
        *   addResourceHandlers
            *   URL 패턴을 '/'로 설정했으므로 요청 전부에 대해서 DispatcherServlet이 실행됨
                *   컨트롤러의 URL이 Mapping된 요청뿐 아니라 CSS, img, JavaScript 요청도 함께 들어옴
                *   **※ 초창기의 처리 방식**
                    *   url-pattern을 \*\*.do, \*\*.x 등으로 설정해 실제 수행하고자 하는 작업을 처리
                    *   기타 HTML, img 요청은 다르게 처리
                    *   단점: 다소 촌스럽고 URL이 노출됨
            *   /js/\*\*, /img/\*\*, /css/\*\*로 시작하는 요청의 경우 어플리케이션 루트 경로 내 폴더별로 분류해 처리
            *   **! 없을 경우 요청을 컨트롤러의 RequestMapping에서 탐색하면서 오류를 일으키게 됨**
        *   configureDefaultServletHandling
            *   인자로 전달받은 DefaultServletHandlerConfigurer 객체에 enable( ) 메서드 호출
            *   DefaultServletHandler를 사용할 수 있게 해줌  
                *   Spring의 DefaultServletHttpRequestHandler는 Mapping 정보가 없는 URL 요청을 처리
                *   WAS의 DefaultServlet에 작업을 넘기고, DefaultServlet은 static한 자원을 읽어서 보여줌
        *   addViewControllers
            *   특정 URL에 대한 처리를 컨트롤러 클래스를 작성하지 않고 Mapping할 수 있도록 해줌
            *   위 예시의 경우 '/' 요청이 들어오면 'main' 이름을 가진 View를 보여주게 됨
                *   View의 이름은 ViewResolver 객체를 활용해 찾음
        *   getInternalResourceViewResolver()
            *   InternalResourceViewResolver 객체인 resolver를 생성
            *   resolver에 prefix와 suffix를 지정
                *   View의 이름에 prefix와 suffix를 앞뒤로 붙인 이름을 가진 파일을 찾음
*   DispatcherServlet을 FrontServlet으로 설정
    *   web.xml 수정
        *   src > main > webapp > WEB-INF
        *   Java Config 연동 코드 추가 (참고: [Spring MVC (Back End) ... Part 3](https://til-devsong.tistory.com/69) DispatcherServlet 설정 방법)
            *                   
            *   servlet-mapping 태그
                *   URL 패턴이 '/'인 요청, 즉 모든 요청에 대해 동작
                *   Servlet 이름이 mvc인 클래스를 servlet 태그에서 탐색
            *   servlet 태그
                *   Servlet 이름이 servlet-mapping의 servlet-name인 mvc와 같은 클래스 DispatcherServlet을 실행
                *   DispatcherServlet 실행 시 설정이 저장된 WebMvcContextConfiguration를 등록
                *   Bean 공장의 역할을 하는 ApplicationContext인 AnnotationConfigWebApplicationContext 등록
*   설정 적용 여부 테스트하기
    *   View를 모아놓을 폴더 생성
        *   src > main > webapp > WEB-INF
        *   폴더명: views
            *   InternalResourceViewResolver가 Prefix로 설정하는 디렉토리와 동일
    *   JSP 파일 생성
        *   src > main > webapp > WEB-INF > views 
        *   파일명: main.jsp
            *   addViewController에 입력된 View의 이름과 동일
        *   body 태그 내 테스트 문구 입력
    *   프로젝트 실행
        *   프로젝트 우클릭 > Run As > Run on Server
        *   정상적으로 작동할 경우 body 태그 내 테스트 문구가 출력됨
        *   **! 기본적으로 생성되는 index.jsp가 남아있는 경우 삭제**
            *   웹 어플리케이션은 기본적으로 별도의 URL이 없을 경우 index로 시작되는 파일을 찾아 실행
            *   JSP 파일이 webapp 바로 밑에 노출이 되는 것 또한 바람직하지 않음

Spring MVC 실습 - 웹페이지 1 작성

*   JSP 파일 2개 생성
    *   2개의 값을 입력받을 수 있는 입력창과 버튼이 있는 웹페이지, 2개의 값을 더해 출력하는 웹페이지
    *   경로: src > main > webapp > WEB-INF > views
    *   파일명: plusform.jsp, plusResult.jsp  
        *               
        *               
*   컨트롤러 생성
    *   컨트롤러 파일을 모아놓을 패키지 생성
        *   패키지명: kr.or.connect.mvcexam.controller
    *   PlusController 클래스 생성
        *   클래스 위 @Controller 입력
    *   요청에 대응할 메서드 2개 생성
        *   plusform( ) 메서드
            *                   
            *   GET 방식 plusform 요청에 대응
            *   View에 대한 정보를 반환
                *   String 타입의 View 이름 또는 ModelAndView 객체
            *   **※ InternalResourceViewResolver가 반환된 View 이름에 Prefix, Suffix를 붙여 파일을 찾아 보여줌**
        *   plus( ) 메서드
            *                   
            *   POST 방식 plus 요청에 대응
            *   인자에 @RequestParam을 붙여 지정한 name을 가진 매개변수의 값을 변수로 저장할 수 있음
            *   Spring이 제공하는 ModelMap 객체를 활용
                *   addAttribute( ) 메서드로 데이터를 입력하면 Spring이 request scope에 mapping함
                *   **! HttpServletRequest를 선언한 뒤 setAttribute( ) 메서드로 직접 데이터를 넣을 수도 있으나,**  
                    **웹에 종속되는 것을 피하기 위해 Spring이 제공하는 객체를 사용**
            *   View에 대한 정보를 반환
*   **※ Spring MVC가 지원하는 항목들**
    *   Controller 메서드의 인수 타입
        *   javax.servlet.ServletRequest
        *   **javax.servlet.http.HttpServletRequest**
        *   org.springframework.web.multipart.MultipartRequest
        *   org.springframework.web.multipart.MultipartHttpServletRequest
        *   javax.servlet.ServletResponse
        *   **javax.servlet.http.HttpServletResponse**
        *   **javax.servlet.http.HttpSession**
        *   org.springframework.web.context.request.WebRequest
        *   org.springframework.web.context.request.NativeWebRequest
        *   java.util.Locale
        *   java.io.InputStream
        *   java.io.Reader
        *   java.io.OutputStream
        *   java.io.Writer
        *   javax.security.Principal
        *   java.util.Map
        *   org.springframework.ui.Model
        *   org.springframework.ui.ModelMap
        *   **org.springframework.web.multipart.MultipartFile**
        *   javax.servlet.http.Part
        *   org.springframework.web.servlet.mvc.support.RedirectAttributes
        *   org.springframework.validation.Errors
        *   org.springframework.validation.BindingResult
        *   org.springframework.web.bind.support.SessionStatus
        *   org.springframework.web.util.UriComponentsBuilder
        *   org.springframework.http.HttpEntity<?>
        *   Command 또는 Form 객체
        *   컨트롤러 메서드에 해당 타입을 선언해주기만 하면 위 타입을 사용할 수 있음
    *   메서드 인수 Annotation
        *   **@RequestParam**
            *   Mapping된 메서드의 인자에 붙일 수 있는 Annotation
            *   name은 HTTP 매개변수의 name과 mapping되고, required로 필수 여부를 결정
        *   **@RequestHeader**
            *   요청 정보의 헤더 정보를 읽어들일 때 사용
            *   @RequestHeader(name="헤더명") String 변수명
        *   **@RequestBody**
        *   @RequestPart
        *   **@ModelAttribute**
        *   **@PathVariable**
            *   @RequestMapping의 path에 변수명을 입력받기 위한 placeholder가 필요
            *   name이 placeholder의 이름과 같으면 mapping되고, required 속성의 기본값은 true
        *   @CookieValue
    *   메서드 반환 값
        *   **org.springframework.web.servlet.ModelAndView**
        *   org.springframework.ui.Model
        *   java.util.Map
        *   org.springframework.ui.ModelMap
        *   org.springframework.web.servlet.View
        *   **java.lang.String**
        *   java.lang.Void
        *   org.springframework.http.HttpEntity<?>
        *   org.springfrmaework.http.ResponseEntity<?>
        *   기타 반환 타입
*   웹페이지 1 테스트하기
    *   프로젝트 실행
        *   프로젝트 우클릭 > Run As > Run on Server
        *   입력창에 두 값을 넣고 '확인' 클릭
            *   정상적으로 작동할 경우 두 값의 합계가 출력
            *   **! EL 표기법을 인식하지 못할 경우 web.xml 파일 수정**
                *   <!DOCTYPE ...> 부분을 <!DOCTYPE html>로 수정
                *   Servers 탭 > mvcexam 우클릭 > remove
                *   프로젝트 우클릭 \> Maven > Update Project

Spring MVC 실습 - 웹페이지 2 기능 구현

1.  웹 브라우저는 http://localhost:8080/mvcexam/userform URL로 요청을 보내고,  
    서버가 웹 브라우저에게 이름, e-mail, 나이를 입력받을 수 있는 입력창과 버튼이 있는 화면을 출력
2.  웹 브라우저가 3개의 값을 입력하고 버튼을 클릭하면  
    http://localhost:8080/mvcexam/regist URL로 서버에게 3개의 입력값이 POST 방식으로 전달됨
3.  서버는 전달받은 3개의 값을 콘솔 화면에 출력

Spring MVC 실습 - 웹페이지 2 작성

*   JSP 파일 2개 생성
    *   3개의 값을 입력받을 수 있는 입력창과 버튼이 있는 웹페이지, 등록 결과를 알려주는 웹페이지
    *   경로: src > main > webapp > WEB-INF > views
    *   파일명: userform.jsp, regist.jsp
        *               
        *               
*   데이터 객체인 DTO를 모아놓을 패키지 생성
    *   패키지명: kr.or.connect.mvcexam.dto
*   User DTO 클래스 생성
    *   데이터 변수들을 선언
    *   getter, setter 메서드 Override
    *   조회 시 편의를 위해 toString( ) 메서드 Override
*   컨트롤러 생성
    *   PlusController 클래스 생성
        *   클래스 위 @Controller 입력
    *   요청에 대응할 메서드 2개 생성
        *   userform( ) 메서드
            *                   
            *   GET 방식 userform 요청에 대응
            *   View에 대한 정보를 반환
        *   regist( ) 메서드
            *                   
            *   POST 방식 regist 요청에 대응
            *   메서드의 인자에 @ModelAttribute를 붙여 사용
                *   일일이 @RequestParam을 붙일 필요 없이, DTO 하나만 선언해서 사용할 수 있음
                *   Spring이 path의 값 중 DTO에 선언된 name을 가진 값을 자동으로 인식하고 꺼내옴
                *   DTO 객체를 생성하고 꺼내온 값을 저장
            *   View에 대한 정보를 반환
*   웹페이지 2 테스트하기
    *   프로젝트 실행
        *   프로젝트 우클릭 > Run As > Run on Server
        *   입력창에 세 값을 넣고 '확인' 클릭
            *   정상적으로 작동할 경우 세 값이 콘솔에 출력되고, regist.jsp가 표시됨

Spring MVC 실습 - 웹페이지 3 기능 구현

1.  웹 브라우저는 http://localhost:8080/mvcexam/goods/{id} URL로 요청을 보냄  
    *   이렇게 넘겨지는 값을 PathVariable이라고 함
2.  서버는 id와 사용자의 브라우저 정보를 콘솔에 출력
3.  서버는 HttpServletRequest를 이용해 사용자가 요청한 PATH 정보를 콘솔에 출력

Spring MVC 실습 - 웹페이지 3 작성

*   JSP 파일 생성
    *   URL의 id, 사용자의 브라우저, 사용자가 요청한 path를 알려주는 웹페이지
    *   경로: src > main > webapp > WEB-INF > views
    *   파일명: goodsById.jsp
        *               
*   컨트롤러 생성
    *   GoodsController 클래스 생성
        *   클래스 위 @Controller 입력
    *   요청에 대응할 메서드 생성
        *   getGoodsById( ) 메서드
            *                   
            *   GET 방식 goods/{id} 요청에 대응
            *   인자에 @PathVariable을 붙여 URL 요청의 뒤에 붙은 값을 변수로 지정할 수 있음
            *   인자에 @RequestHeader를 붙여 헤더의 정보를 꺼내 변수로 지정할 수 있음
            *   View에 대한 정보를 반환
*   웹페이지 3 테스트하기
    *   프로젝트 실행
        *   프로젝트 우클릭 > Run As > Run on Server
        *   주소창에 goods/{id}를 넣고 이동
            *   정상적으로 작동할 경우 goodsById.jsp에 id, 브라우저, path가 표시됨

**※ Spring MVC를 이용한 개발과 Servlet을 이용한 개발의 장단점**

*   Spring MVC 개발
    *   장점
        *   개발에 필요한 구조를 이미 코드로 만들어 놓아 필요한 부분만 조립하는 형태로 개발이 가능
        *   회사는 일정한 품질을 얻을 수 있고 개발자는 개발 시간을 단축할 수 있음
    *   단점
        *   프레임워크의 각종 규칙을 익혀야 하므로 초기 학습 시간이 소요됨
    *   참고자료: [스프링 프레임워크(Spring Framework)에 대한 간단한 소개](https://freestrokes.tistory.com/79)
*   Servlet 개발
    *   장점
        *   개발이 쉽고 빠름
    *   단점
        *   유지보수나 협업에서 개발자 간 의견교환이 어려울 수 있음

  

#Java #Spring #MVC #웹 프로그래밍 #backend #백엔드 #내용 정리 #edwith #부스트코스