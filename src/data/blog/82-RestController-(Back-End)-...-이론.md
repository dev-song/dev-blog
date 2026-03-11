---
title: "82-RestController-(Back-End)-...-이론"
pubDatetime: 2020-05-06T23:33:26+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 5월 6일

* * *

## 11\. Controller - BE

#### Rest API, Web API 개발할 땐 @RestController

Spring MVC는 @RestController를 제공한다.

Rest API 또는 Web API 개발에 쓰이는 이 Annotation은 Spring 4에서 등장했는데, Spring 3까지 사용됐던 @Controller와 @ResponseBody의 기능도 포함하고 있다.

#### @RestController 사용 시 MessageConverter의 중요성

@RestController를 사용할 땐 MessageConverter가 필수적이다.

MessageConverter는 Java 객체와 HTTP 요청/응답의 바디를 서로 변환해주는 역할을 하는데, @RequestBody, @ResponseBody를 써서 사용한다.

예를 들면, 외부에서 전달받은 JSON 메서드를 내부에서 쓸 수 있는 객체로 변환하거나, 컨트롤러가 반환한 객체를 JSON으로 변환해 클라이언트에게 전달할 수 있도록 하는 등의 작업을 하는 것이다.

@EnableWebMvc로 기본 MessageConverter를 사용 (각주: WebMvcConfigurationSupport를 사용해 Spring MVC를 구현하고 있다.  
참고자료: [spring-framework/WebMvcConfigurationSupport.java - GitHub](https://github.com/spring-projects/spring-framework/blob/master/spring-webmvc/src/main/java/org/springframework/web/servlet/config/annotation/WebMvcConfigurationSupport.java) addDefaultHttpMessageConverters)할 수 있다.

#### MessageConverter의 종류

다양한 MessageConverter가 있다. 아래의 표를 참고하라.


#### JSON 형식의 데이터 응답하기

JSON 형식의 데이터를 응답하려면 다음의 방법이 필요하다.

> 컨트롤러의 메서드가 JSON으로 변환될 객체를 반환  
> → @EnableWebMvc의 기본 MessageConverter (각주: JSON 형식으로 변환하기 위해 jackson 라이브러리가 필요하다. 라이브러리가 없을 경우 변환이 되지 않으므로 500 오류가 발생한다.  
> 사용자가 임의의 MessageConverter을 사용하고자 할 경우, WebMvcConfigurerAdapter의 configureMessageConverters 메서드를 Override해야 한다.)객체를 JSON 형식으로 변환  
> → 변환된 JSON 형식의 데이터를 응답

* * *

#### Q & A

> Web API에서 JSON 형식을 자주 사용하는 이유는 무엇인가요?

JSON은 기존에 사용되던 XML과 달리, 객체 형태와 유사해 가독성이 뛰어나고 작성하기도 쉽기 때문입니다.

특히 특정 언어나 플랫폼에 종속되지 않으므로, 하나의 form으로 백엔드에서 프론트엔드까지 전달될 수 있어 개발이 쉬워지는 장점이 매력적입니다.

**※ 참고자료: [\[프로그래밍\] XML과 JSON의 차이](https://12bme.tistory.com/202)**

* * *

  

#Java #웹 프로그래밍 #backend #백엔드 #내용 정리 #RestController #messageconverter #edwith #부스트코스