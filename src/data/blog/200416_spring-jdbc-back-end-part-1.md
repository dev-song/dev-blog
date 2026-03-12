---
title: "51 Spring JDBC (Back End) ... Part 1"
pubDatetime: 2020-04-16T21:24:31+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 16일

* * *

## 8\. Spring JDBC - BE

Spring JDBC 소개

*   Spring 프레임워크는 JDBC 프로그래밍의 반복적 요소를 생략시켜줌
    *   JDBC 프로그래밍의 반복적인 개발 요소는 개발자를 지루하게 만듦
    *   Spring은 JDBC의 지루한 저수준 세부사항을 처리해주므로, 개발자가 필요한 부분만을 개발할 수 있음
*   Spring JDBC에서 개발자가 해야 할 일
    *           
    *   개발자가 반드시 알려줘야만 하는 값들만 프레임워크에 알려주면 나머지는 프레임워크가 자동으로 수행
*   Spring JDBC 패키지의 종류
    *   org.springframework.jdbc.core:  
        JdbcTemplate 및 관련 helper 객체 제공
    *   org.springframework.jdbc.datasource:  
        DataSource에 쉽게 접근하기 위한 유틸리티 클래스, Transaction 매니저 및 다양한 DataSource 구현을 제공
    *   org.springframework.jdbc.object:  
        RDBMS 조회, 갱신, 저장 등을 안전하고 재사용 가능한 객체로 제공
    *   org.springframework.jdbc.support:  
        jdbc.core 및 jdbc.object를 사용하는 JDBC 프레임워크를 지원
*   JdbcTemplate
    *   org.springframework.jdbc.core에서 가장 중요한 클래스
    *   리소스 생성, 해지를 처리해서 연결을 닫는 것을 잊어버려서 발생하는 문제 등을 피할 수 있게 해줌
    *   Statement의 생성과 실행을 처리
    *   SQL 조회, 업데이트, 저장 프로시저 호출, ResultSet 반복 호출 등을 실행
    *   JDBC 예외가 발생할 경우 org.springframework.dao 패키지에 정의된 일반적인 예외로 변환시킴
*   JdbcTemplate 예제
    *   SELECT 예시 코드 1) 열의 갯수 구하기  
        *   queryForInt( ) 메서드 사용
        *               
    *   SELECT 예시 코드 2) 변수 바인딩하기
        *   queryForInt( ) 메서드 사용
        *               
    *   SELECT 예시 코드 3) String 값으로 결과 받기  
        *   queryForObject( ) 메서드 사용
        *               
        *   **※ 메서드의 3번째 매개변수에 타입을 지정하면 해당 타입으로 반환됨**
    *   SELECT 예시 코드 4) 한 행 조회하기
        *   queryForObject( ) 메서드 사용 
        *               
        *   한 행에는 여러 칼럼이 존재하므로, 각 칼럼을 매핑하기 위한 RowMapper 객체를 사용
        *   RowMapper를 상속받은 이름 없는 객체를 이용해 mapRow( ) 메서드를 오버라이드
        *   ResultSet에 담겨 있는 한 행의 데이터를 Actor 타입에 담아 반환
    *   SELECT 예시 코드 5) 여러 행 조회하기
        *   query( ) 메서드 사용 
        *               
    *   SELECT 예시 코드 6) 한 행 조회하기와 여러 행 조회하기가 같은 코드에 있을 경우 중복 코드 제거
        *   query( ) 메서드 사용 
        *               
        *   한 행 조회하기와 여러 행 조회하기 모두 동일한 RowMapper를 사용
        *   RowMapper를 별도의 메서드로 추출함으로써 코드의 중복을 제거할 수 있음
    *   INSERT 예시 코드
        *               
    *   UPDATE 예시 코드
        *               
    *   DELETE 예시 코드
        *               
    *   **※ INSERT, UPDATE, DELETE는 update( ) 메서드를 사용함**
*   JdbcTemplate 외 기타 접근방법
    *   JdbcTemplate만 이용해도 기존 JDBC 프로그래밍보다 훨씬 간단하게 프로그래밍을 할 수 있으나, 더 편한 프로그래밍을 위한 다른 클래스들이 있음
    *   NamedParameterJdbcTemplate
        *   JdbcTemplate에서 JDBC statement 인자를 ? 대신 매개변수명을 사용해 작성할 수 있게 해줌
        *   참고자료: [Using NamedParameterJdbcTemplate](https://docs.spring.io/spring/docs/current/spring-framework-reference/data-access.html#jdbc-NamedParameterJdbcTemplate)
    *   SimpleJdbcTemplate
        *   JdbcTemplate과 NamedParameterJdbcTemplate을 합쳐 놓은 템플릿 클래스
        *   두 템플릿에 모든 기능이 흡수되어 삭제 예정(deprecated)
    *   SimpleJdbcInsert
        *   더 쉽게 데이터 테이블에 insert 작업을 할 수 있게 해줌
        *   참고자료: [Spring JDBC - SimpleJdbcInsert Class - TutorialsPoint](https://www.tutorialspoint.com/springjdbc/springjdbc_simplejdbcinsert.htm)

  

#Java #Spring #jdbc #웹 프로그래밍 #내용 정리 #edwith #부스트코스 #jdbctemplate #Spring JDBC