---
title: "58 Spring JDBC (Back End) ... Part 4"
pubDatetime: 2020-04-19T22:23:07+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 19일

* * *

## 8\. Spring JDBC - BE

Spring JDBC를 이용해 INSERT 쿼리문 실행하기

*   쿼리문 실행에 필요한 클래스
    *   SELECT와 달리, 별도의 쿼리문이 필요하지 않으므로 RoleDaoSqls 클래스는 사용하지 않음
    *   INSERT 쿼리문을 실행하기 위한 SimpleJdbcInsert 객체를 필요로 함
*   RoleDao 클래스 수정
    *           
        *   SimpleJdbcInsert 타입 객체 insertAction 선언
        *   RoleDao 생성자에 SimpleJdbcInsert 객체를 dataSource로 생성
            *   쿼리문의 대상 테이블은 withTableName( ) 메서드로 입력
        *   쿼리문을 실행할 insert( ) 메서드 생성
            *   Role 객체를 받아 매개변수로 이루어진 map 객체 params를 생성
        *   execute( ) 메서드의 인자로 params를 전달해 실행
    *   ※ SimpleJdbcInsert 객체를 사용하는 이유
        *   UPDATE와 동일한 방식으로 쿼리문을 입력하고 update( ) 메서드로 실행해도 동작함
        *   SimpleJdbcInsert 객체를 사용하면 SQL을 만들 필요가 없고, INSERT 후 Primary Key 값을 가져올 수 있음
*   INSERT 쿼리문 실행 테스트하기
    *   JDBCTest 클래스 생성
        *   패키지: kr.or.connect.daoexam.main
    *           
        *   ApplicationContext(공장)에 만들 객체에 대한 정보를 담은 클래스의 경로를 입력
        *   getBean( ) 메서드로 ApplicationContext에서 RoleDao 객체를 얻어냄
        *   Role 객체 생성하고 INSERT할 데이터 입력
        *   RoleDao 객체의 insert( ) 메서드로 쿼리문을 실행한 뒤, 결과값을 count 변수에 저장

Spring JDBC를 이용해 UPDATE 쿼리문 실행하기

*   쿼리문 실행에 필요한 클래스
    *   SELECT 쿼리문과 동일
*   RoleDaoSqls 클래스 수정
    *           
    *   사용할 UPDATE 쿼리문을 상수에 입력
        *   SQL 쿼리문과 구조는 동일하나, mapping될 값이 ?이 아닌 :필드명의 형태를 띄는 것이 차이
*   RoleDao 클래스 수정
    *           
    *   쿼리문을 실행할 update( ) 메서드 생성
        *   Role 객체를 받아 매개변수로 이루어진 map인 params를 생성
    *   update( ) 메서드의 인자로 쿼리문 UPDATE와 params를 전달해 실행
*   UPDATE 쿼리문 실행 테스트하기
    *   JDBCTest 클래스 수정
    *           
        *   ApplicationContext(공장)에 만들 객체에 대한 정보를 담은 클래스의 경로를 입력
        *   getBean( ) 메서드로 ApplicationContext에서 RoleDao 객체를 얻어냄
        *   Role 객체 생성하고 UPDATE할 데이터 입력
        *   RoleDao 객체의 update( ) 메서드로 쿼리문을 실행한 뒤, 결과값을 count 변수에 저장

Spring JDBC를 이용해 SELECT\_BY\_ID 쿼리문 실행하기

*   쿼리문 실행에 필요한 클래스
    *   SELECT 쿼리문과 동일
*   RoleDaoSqls 클래스 수정
    *           
    *   사용할 SELECT\_BY\_ROLE\_ID 쿼리문을 상수에 입력
*   RoleDao 클래스 수정
    *           
    *   쿼리문을 실행할 selectById( ) 메서드 생성
        *   검색하고자 하는 roleId를 인자로 받아 매개변수로 이루어진 map인 params를 생성
            *   매개변수가 하나이므로 SqlParameterSource 대신 Map<String, ?>를 활용
        *   queryForObject( ) 메서드의 인자로 쿼리문 SELECT\_BY\_ID와 params, 그리고 결과를 담을 rowMapper를 전달해 실행
            *   단일 레코드를 조회할 땐 query( ) 메서드 대신 queryForObject( ) 메서드를 사용함
*   SELECT\_BY\_ID 쿼리문 실행 테스트하기
    *   JDBCTest 클래스 수정
    *           
        *   ApplicationContext(공장)에 만들 객체에 대한 정보를 담은 클래스의 경로를 입력
        *   getBean( ) 메서드로 ApplicationContext에서 RoleDao 객체를 얻어냄
        *   RoleDao 객체의 update( ) 메서드로 쿼리문을 실행한 뒤, 결과값을 Role 객체에 담아 반환

Spring JDBC를 이용해 DELETE\_BY\_ROLE\_ID 쿼리문 실행하기

*   쿼리문 실행에 필요한 클래스
    *   SELECT 쿼리문과 동일
*   RoleDaoSqls 클래스 수정
    *           
    *   사용할 DELETE\_BY\_ROLE\_ID 쿼리문을 상수에 입력
*   RoleDao 클래스 수정
    *           
    *   쿼리문을 실행할 deleteById( ) 메서드 생성
        *   검색하고자 하는 roleId를 인자로 받아 매개변수로 이루어진 map인 params를 생성
    *   update( ) 메서드의 인자로 쿼리문 DELETE\_BY\_ROLE\_ID와 params를 전달해 실행
*   DELETE 쿼리문 실행 테스트하기
    *   JDBCTest 클래스 수정
    *           
        *   ApplicationContext(공장)에 만들 객체에 대한 정보를 담은 클래스의 경로를 입력
        *   getBean( ) 메서드로 ApplicationContext에서 RoleDao 객체를 얻어냄
        *   RoleDao 객체의 deleteById( ) 메서드로 쿼리문을 실행한 뒤, 결과값을 count 변수에 저장

  

#Java #SQL #Spring #jdbc #Dao #웹 프로그래밍 #dto #내용 정리 #edwith #부스트코스