---
title: "55 Spring JDBC (Back End) ... Part 3"
pubDatetime: 2020-04-17T23:40:48+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 17일

* * *

## 8\. Spring JDBC - BE

Spring JDBC를 이용해 SELECT 쿼리문 실행하기

*   쿼리문 실행에 필요한 클래스
    *   Role (DTO): 데이터가 오고갈 때 필요한 클래스
    *   RoleDaoSqls: 쿼리문 정보를 담은 클래스
    *   RoleDao (DAO): 데이터에 접근할 수 있는 객체를 만드는 메서드를 담은 클래스
        *   실행 시 Spring JDBC가 제공하는 객체인 NamedParameterJdbcTemplate과 SimpleJdbcInsert를 이용
*   Role (DTO) 클래스 생성
    *   DTO 클래스 파일만 모아놓을 패키지 생성
        *   패키지명: kr.or.connect.daoexam.dto
    *   Role 클래스 생성
        *               
            *   필드 선언: int 타입 roleId, String 타입 description
            *   필드 각각에 대한 getter, setter 메서드 생성
            *   Role 객체가 가진 값을 간편하게 보여주기 위해 toString( ) 메서드를 Override함
*   RoleDaoSqls 클래스 생성
    *   DAO 클래스 파일만 모아놓을 패키지 생성
        *   패키지명: kr.or.connect.daoexam.dao
    *   RoleDaoSqls 클래스 생성
        *               
        *   사용하고자 하는 쿼리를 상수에 입력
            *   상수명은 모든 문자가 대문자인 스네이크 표기법으로 입력
*   RoleDao (DAO) 클래스 생성  
    *   데이터에 접근할 객체가 담겨 있는 클래스
    *           
        *   @Autowired로 연결하기 위해 @Repository를 붙임
        *   쿼리문 실행을 위해 필요한 NamedParameterJdbcTemplate 객체(이하 Named... 객체)를 선언
            *   Spring JDBC에서 가장 중요한 JDBC 템플릿의 가독성을 높이기 위해 사용하는 객체
            *   ?로 mapping했으나, 매개변수 이름으로 대체해서 mapping할 수 있게 함
        *   생성자는 DataSource를 인자로 받아들여 Named... 객체를 생성
        *   SELECT 쿼리문을 실행할 selectAll( ) 메서드 생성
            *   반환되는 Role이 여러건이므로 메서드의 타입은 List<Role>으로 설정
            *   복잡한 것은 Named... 객체가 처리할 수 있도록, jdbc.query( ) 메서드를 실행
                *   결과가 여러 건일 때 내부적으로 반복하면서 DTO를 생성하고 List에 담아 반환하는 메서드
                *   첫 번째 인자로 쿼리문을 입력
                    *   RoleDaoSqls 클래스를 static import한 뒤, 첫 번째 인자에 SELECT\_ALL 지정
                    *   static import: 외부 클래스의 변수를 클래스 이름 없이 바로 사용할 수 있는 import 방식
                *   두 번째 인자로 비어있는 map 객체를 입력
                    *   Collections.emptyMap( ) 메서드로 비어 있는 map 객체 생성
                    *   SQL 문에 mapping할 값이 있을 때, 그 값을 전달할 목적으로 사용하는 map 객체
                *   세 번째 인자로 rowMapper 객체를 입력
                    *   SELECT 결과 각각을 DTO에 저장하는 목적으로 사용되는 객체
                    *   BeanPropertyRowMapper 객체를 이용하면 Column의 값을 자동으로 DTO에 담아줌
                        *   **※ BeanPropertyRowMapper 객체는 DBMS와 Java의 Column 표기법 차이도 맞춰줌**  
                            *   **※ Column 이름을 DBMS는 스네이크 표기법으로, Java는 카멜 표기법으로 기재**
                        *   Column의 수가 많아질수록 빛을 발하는 기능
*   @Repository가 붙은 RoleDao 클래스를 읽어들이도록 설정
    *   ApplicationConfig에 @ComponentScan 입력
    *           
        *   basePackages를 지정해서 사용
            *   { } 중괄호를 이용하면 복수의 패키지를 대상으로도 ComponentScan 연결 가능
    *   RoleDao 클래스를 bean으로 등록해준 것과 같은 효과
*   SELECT 쿼리문 실행 테스트하기
    *   SelectAllTest 클래스 생성
        *   패키지: kr.or.connect.daoexam.main
    *           
    *   ApplicationContext(공장)에 만들 객체에 대한 정보를 담은 클래스의 경로를 입력
    *   getBean( ) 메서드로 ApplicationContext에서 RoleDao 객체를 얻어냄
    *   RoleDao 객체의 selectAll( ) 메서드로 쿼리문을 실행한 뒤, 결과값을 List에 담아 반환

**※ JdbcTemplate 대신 NamedParameterJdbcTemplate을 이용해 DAO를 작성하는 이유**

*   쿼리문에 ? 대신 구체적인 매개변수명을 사용하여,  
    쿼리문이 별도의 클래스나 파일로 저장될 경우에 일어날 수 있는 잘못된 순서로 값을 전달하는 실수를 줄일 수 있음

  

#Java #SQL #Spring #jdbc #Dao #웹 프로그래밍 #dto #내용 정리 #edwith #부스트코스