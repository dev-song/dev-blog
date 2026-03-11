---
title: "75-Layered-Architecture-(Back-End)-...-실습-(1)"
pubDatetime: 2020-05-03T23:27:41+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 5월 2일

* * *

## 10\. 레이어드 아키텍쳐 (Layered Architecture) - BE

#### 방명록 만들기 실습 - 프로젝트 초기 설정

프로젝트를 생성한다. 기본 설정은 다음처럼 한다.

> File > New > Maven Project  
> → Archetype을 maven-archetype-webapp 선택  
> → Group ID(회사명)은 kr.or.connect으로 설정  
> → Artifact ID(프로젝트명)은 guestbook으로 설정

프로젝트가 정상적으로 생성되면 상세 설정을 한다.

우선, pom.xml을 수정해야 한다. (각주 (각주:


)의 코드 참고)

> 프로젝트 > pom.xml에 아래 항목 추가  
> 1\. JDK 1.8 플러그인  
> 2\. Spring (context, jdbc, tx, webmvc) 라이브러리  
> 3\. Servlet, JSP, JSTL 라이브러리  
> 4\. MySQL 라이브러리  
> 5\. DataSource 라이브러리  
> 6\. Jackson JSON 라이브러리

다음은 JSTL과 EL을 정상적으로 사용하기 위해 Dynamic Web Version을 수정한다.

> Navigator 탭 > 프로젝트 > .settings > org.eclipse.wst.common.project.facet.core.xml  
> → <installed facet="jst.web" version="2.3"/>을 <installed facet="jst.web" version="3.1"/>로 수정

이제 설정 클래스를 만들 차례이다.

우선 설정파일을 모아놓을 패키지를 생성한다.

> 프로젝트 > Java Resources > src/main/java 우클릭  
> → kr.or.connect.guestbook.config 패키지 생성

그 다음, DispatcherServlet의 설정을 담당할 WebMvcContextConfiguration 클래스를 생성한다. 

> 프로젝트 > Java Resources > src/main/java > kr.or.connect.guestbook.config 우클릭  
> → WebMvcContextConfiguration 클래스 생성 (WebMvcConfigurerAdapter 클래스 상속)  
> → @Configuration, @EnableWebMvc, @ComponentScan (각주: basePackages는 kr.or.connect.guestbook.controller로 설정) 입력  
> → 클래스 메서드 Override (각주 (각주:
> 
> > 
> )의 코드 및 [Spring MVC (Back End) ... Part 4](https://til-devsong.tistory.com/70?category=772389) 클래스 Override 참고)

데이터베이스 설정을 담당할 DBConfig 클래스도 생성한다.

> 프로젝트 > Java Resources > src/main/java > kr.or.connect.guestbook.config 우클릭  
> → DBConfig 클래스 생성 (TransactionManagementConfigurer 클래스 구현)  
> → @Configuration, @EnableTransactionManagement (각주: 트랜잭션과 관련된 설정을 자동으로 해준다. 단, 사용자간 트랜잭션 처리를 담당하는 PlatformTransactionManager를 설정하려면 예시 코드와 같이 TransactionManagementConfigurer를 구현해 필요한 PlatformTransactionManager 객체를 생성한 뒤, annotationDrivenTransactionManager 메서드를 Override하면 된다.) 입력  
> → 클래스 메서드 Override 및 DataSource를 이용하기 위한 Bean 추가 (각주 (각주:
> 
> > 
> )의 코드 참고)

그 다음엔 추후 생성될 DAO 객체들과 서비스 객체들의 설정을 담당할 ApplicationConfig 클래스를 생성한다.

> 프로젝트 > Java Resources > src/main/java > kr.or.connect.guestbook.config 우클릭  
> → ApplicationConfig 클래스 생성  
> → @Configuration, @ComponentScan (각주: basePackages는 kr.or.connect.guestbook.dao, kr.or.connect.guestbook.service로 설정), @Import (각주: 대상은 DBConfig.class) 입력 (각주 (각주:
> 
> > 
> )의 코드 참고)

마지막으로 web.xml을 수정하면 된다. (각주 (각주:


)의 코드 참고)

> 프로젝트 > src > main > webapp > WEB-INF > web.xml  
> → 모든 요청을 DispatcherServlet이 처리하도록 프론트 Servlet으로 등록 (각주: DispatcherServlet 실행 시 init-param에 등록한 파일을 설정으로 사용. 즉, AnnotationConfigWebApplicationContext인 WebMvcContextConfiguration 클래스가 설정 파일이 됨.)  
> → 분리된 설정 클래스를 정상적으로 읽어들이기 위해 리스너 (각주: 특정 이벤트가 일어날 때 실행되는 파일)인 ContextLoaderListener (각주: 컨텍스트가 불러와질 때 실행되는 리스너)를 등록 (각주: DispatcherServlet이 init-param에서 설정 파일을 참조하듯이, ContextLoaderListener는 context-param에서 설정 파일을 참조함. 즉, AnnotationConfigWebApplicationContext인 ApplicationConfig 클래스가 설정 파일이 됨.)  
> → 한글이 포함된 요청을 정상적으로 처리하기 위해 필터를 추가해 인코딩 방식을 UTF-8로 지정하고 모든 URL에 적용

설정이 끝났다면 View를 생성한다.

> src > main > webapp > WEB-INF  
> → views 폴더 생성  
> → index.jsp 생성  
> → list URL로 리다이렉트 설정 (각주 (각주:
> 
> > 
> )의 코드 참고)

프로젝트를 실행했을 때, URL이 .../guestbook/list로 표시되었다면 정상적으로 설정이 완료된 것이다.

* * *

  

#Java #웹 프로그래밍 #backend #백엔드 #내용 정리 #edwith #부스트코스 #레이어드 아키텍쳐 #Layered Architecture