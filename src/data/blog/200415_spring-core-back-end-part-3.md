---
title: "50 Spring Core (Back End) ... Part 3"
pubDatetime: 2020-04-15T16:18:05+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 15일

* * *

## 7\. Spring Core - BE

Java Config를 이용한 설정

*   Java Config 클래스 생성
    *   XML 파일 대신 Spring Annotation을 이용해 설정하기
    *   프로젝트 > src/main/java > kr.or.connect.diexam01 우클릭 > New > Class
    *   클래스명: ApplicationConfig
*   Java Config 클래스 수정
    *   클래스 위 @Configuration annotation 입력해 설정 파일임을 명시
    *   클래스 내 @Bean annotation 입력
    *   예시 코드
        *               
        *   Car 생성
            *   Car( ) 메서드 호출해 Car 객체를 생성
            *   setEngine( ) 메서드로 주입된 Engine 타입의 인자 e를 반환
        *   Engine 생성
            *   Engine( ) 메서드 호출해 Engine 객체를 셍상헤 반환
    *   **※ Java Annotation**
        *   JDK 5부터 지원하는 기능
        *   Annotation의 사전적 의미는 주석이지만, Java Annotation은 특수한 의미를 부여함
            *   컴파일, 런타임 때 특수한 의미로 코드를 해석함
        *   Spring 프레임워크는 설정에 필요한 Annotation을 다양하게 제공
            *   예시) @Configuration: Spring 설정 클래스를 의미하는 annotation
        *   Annotation Config Application Context는 Java Config 클래스를 읽어들인 뒤 IoC와 DI를 적용
            *   설정 파일 내 @Bean이 붙은 메서드를 자동으로 실행해 결과로 반환된 객체를 싱글턴 객체로 관리
*   Java Config 설정에 따라 실행될 클래스 생성
    *   클래스명: ApplicationContextExam03
    *           
    *   ApplicationContextExam02와 거의 동일하나, 설정 파일을 불러오는 메서드가 다름
        *   설정 파일을 불러오는 메서드가 AnnotationConfigApplicationContext( )
        *   메서드의 인자로 들어가는 설정 파일은 XML 파일이 아닌 클래스 파일
        *   참고자료: [Spring Core (Back End) ... Part 2](https://til-devsong.tistory.com/48), DI 확인하기
    *   Car 타입의 객체에 Application Config를 통해 연결된 id가 car인 bean을 불러와 실행 
        *   getBean의 인자를 "car"가 아닌 클래스 자체를 지칭하는 Car.class로 해도 작동
            *   인자로 클래스를 바로 불러오는 경우, 클래스의 이름이 달라지거나 잘못 쓰더라도 상관없음
*   Java Config 클래스 생성 2
    *   Spring annotation으로 객체 및 인자 생성을 간단하게 하기
    *   클래스명: ApplicationConfig2
*   Java Config 2 클래스 수정
    *   클래스 위 @Configuration annotation 입력해 설정 파일임을 명시
    *   @Configuration 아래에 @ComponentScan("패키지명") 입력
        *   패키지에서 연관된 annotation을 자동으로 스캔해 의존성을 주입하게 함
        *   패키지 내 Service, Controller, Repository, Component 등의 annotation이 붙은 클래스를 Bean으로 등록
        *   클래스 내 객체 선언에 @Autowired annotation을 붙이면 setter 메서드를 대체할 수 있음
    *   예시 코드
        *   Java Config 2 
            *                   
        *   의존성을 주입할 클래스
            *                   
*   Java Config 2 설정에 따라 실행될 클래스 생성
    *   클래스명: ApplicationContextExam04
    *           
    *   ApplicationContextExam03와 동일
*   **※ ComponentScan, Component, Autowired 방식이 더 편한데 Bean annotation 방식을 배우는 이유**
    *   전자의 방식은 의존성을 주입할 원본 클래스에서 @Component와 @Autowired를 입력해줘야 함
    *   외부 라이브러리를 사용할 경우, 라이브러리 객체에는 annotation을 붙일 수 없으므로 Bean 방식이 필요함
*   **※ Bean의 갯수가 많아질수록 XML에 비해 ComponentScan, Component, Autowired 방식이 유지보수에 좋음**
    *   전자의 방식은 Bean이 많아질수록 @Configuration 클래스가 길어짐
    *   후자의 방식은 Bean의 갯수와 상관없이 대상 Component에서 바로 클래스를 불러옴
*   **※ @Autowired의 사용 방법 3가지 - Field Inejction, Constructor Injection, Setter Injection**
    *   IntelliJ IDE는 Constructor based Injection을 권장함
    *   참고자료: [스프링 - 생성자 수입을 사용해야 하는 이유, 필드인젝션이 좋지 않은 이유](https://yaboong.github.io/spring/2019/08/29/why-field-injection-is-bad/)

  

#Java #Spring #di #annotation #웹 프로그래밍 #BEAN #applicationcontext #내용 정리 #edwith #부스트코스