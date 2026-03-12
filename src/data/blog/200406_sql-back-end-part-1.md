---
title: "SQL (Back End) ... Part 1"
pubDatetime: 2020-04-06T00:51:54+09:00
description: "티스토리 아카이브"
tags:
  - "SQL"
  - "DML"
  - "웹 프로그래밍"
  - "인터넷 강의"
  - "내용 정리"
  - "edwith"
  - "부스트코스"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습기간: 2020년 3월 31일

* * *

## 8\. SQL - BE

SQL이란?

*   참고자료: [데이터베이스 언어, SQL이란 무엇인가](http://www.ciokorea.com/print/35385) 
*   SQL의 정의
    *   SQL: Structured Query Language, '구조화된 쿼리 언어'를 의미 
    *   데이터를 보다 쉽게 검색, 추가, 삭제, 수정할 수 있도록 고안된 컴퓨터 언어
    *   관계형 데이터베이스에서 데이터를 조작하고 쿼리하는 표준 수단
*   SQL의 분류
    *   DML(Data Manipulation Language): 데이터를 조작하기 위해 사용
    *   DDL(Data Definition Language): 데이터베이스의 스키마를 정의하거나 조작하기 위해 사용
    *   DCL(Data Control Language): 데이터를 제어하는 언어로, 권한을 관리하고 데이터의 보안성, 무결성 등을 정의하기 위해 사용
        *   GRANT, REVOKE 등
*   SQL의 특징
    *   DBMS에게 명령을 내릴 때 사용하는 문장으로, 쿼리(Query)라고 읽음
    *   키워드에는 대소문자 구분이 없고, 세미콜론(;)으로 문장이 끝남
    *   여러 쿼리를 세미콜론으로 구분하면 한 줄에 연속으로 붙여 실행할 수 있고,  
        세미콜론을 쓰지 않는다면 반대로 한 쿼리를 여러 줄에 나눠서 입력하는 방식으로 실행할 수도 있음
    *   쿼리 작성 중 '\\c'를 입력해 작성하던 쿼리문을 취소할 수 있음
*   MySQL 사용방법
    *   데이터베이스 관련
        *   데이터베이스 생성
            1.  DBMS 접속: 콘솔에서 'mysql -uroot -p' 쿼리 실행 후 암호 입력
                *   MySQL 관리자 계정인 root로 DBMS에 접속
            2.  데이터베이스 생성: 콘솔에서 'create database DB명;' 쿼리 실행
            3.  데이터베이스 사용자 생성: 콘솔에서 'create user '사용자명'@'클라이언트 범위' identified by '암호';' 쿼리 실행
                *   클라이언트 범위: %는 모든 클라이언트, localhost는 해당 컴퓨터에서만 접근할 수 있음
            4.  데이터베이스 사용 권한 부여: 콘솔에서 'grant all privileges on DB명.\* to '사용자계정'@'클라이언트 범위' with grant option;' 쿼리 실행
            5.  데이터베이스 변경사항 적용 (필수): 콘솔에서 'flush privileges;' 쿼리 실행
        *   데이터베이스 접속 및 접속종료
            *   접속: 콘솔에서 'mysql -h호스트명 -u사용자명 -p DB명' 쿼리 실행
            *   접속 종료: 콘솔에서 'quit | exit' 쿼리 실행
                *   정상적으로 종료된 경우 Bye 메시지가 출력됨
        *   DBMS 내 데이터베이스 확인: 콘솔에서 'show databases;' 쿼리 실행
        *   사용 중인 데이터베이스 전환: 콘솔에서 'use DB명;' 쿼리 실행
            *   정상적으로 실행된 경우 Database changed 메시지가 출력됨
    *   실습용 데이터 저장
        1.  데이터베이스에 현재 존재하는 테이블 확인: 콘솔에서 'show tables;' 쿼리 실행
            *   데이터가 없을 경우 Empty set 메시지가 출력됨
            *   테이블(table)이란?
                *   RDBMS의 기본적 저장구조 (관계형 데이터베이스는 데이터가 테이블 형태로 저장됨)
                *   한 개 이상의 열과 0개 이상의 행로 구성
                    *   열(column): 데이터의 종류를 나타내며, 특정 데이터 타입과 크기를 가짐
                    *   행(row): 각 열들의 값의 조합으로 레코드라고 불리며, 중복되지 않는 기본키(PK)에 의해 구분됨
                    *   필드(field): 행과 열의 교차점으로, 데이터를 가지며 데이터가 없는 경우 NULL 값을 가짐
        2.  [실습용 SQL 파일](https://github.com/connect-boostcamp/boostcourse_fullstack_web/tree/master/part2) 다운로드
            *   실습 파일에는 자체적으로 테이블을 생성하고 값을 저장하는 쿼리문이 있음
        3.  데이터베이스에 SQL 파일 추가
            *   다운로드 파일 경로로 이동: 콘솔에서 'cd 디렉토리' 명령 실행  
                → 데이터베이스 추가: 콘솔에서 'mysql -u사용자명 -p DB명 < 파일명' 명령 실행
        4.  추가된 데이터의 테이블 구조 확인: 콘솔에서 'desc 테이블명' 쿼리 실행
            *   해당 테이블의 Column명, 타입, NULL, Key, Default, Extra 값이 출력됨
            *   desc: describe의 줄임말으로, describe 전체를 입력해도 동일하게 동작함
*   MySQL 쿼리 예제
    *   MySQL 버전과 현재 날짜 구하기: 콘솔에서 'select version(), current\_date;' 쿼리 실행
        *   select: 내용을 조회할 때 사용하는 키워드
        *   쿼리에 해당하는 결과의 전체 row와 전체 row의 갯수, 쿼리를 실행하는 데 걸린 시간을 출력
    *   함수 및 수식 사용하기: 프롬프트에서 'select sin(pi()/4), (4+1)\*5;' 쿼리 실행

DML(Data Manipulation Language, 데이터 조작어)

*   DML의 종류: 시작하는 동사에 따라 SELECT(검색), INSERT(등록), UPDATE(수정), DELETE(삭제)의 4가지로 나뉨
*   SELECT 구문: 데이터를 검색할 때 사용
    *   형태: SELECT \[DISTINCT\] Column명 \[ALIAS\] FROM 테이블명 \[WHERE 조건식\] \[ORDER BY Column명 정렬방식\];
        *   괄호 \[ \] 안에 있는 명령어는 생략 가능
        *   SELECT: 검색하고자 하는 데이터(Column)를 출력
        *   DISTINCT: 중복된 행을 제거
        *   Column명: 출력할 Column을 지정
            *   복수의 Column을 지정할 땐 쉼표(,)로 구분해서 입력하고, 전체 Column을 지정할 땐 \*를 입력
        *   ALIAS: 쿼리 결과를 보여줄 때 Column명 대신 나타낼 별칭
            *   Column명 뒤 공백(" ")으로 구분하거나 as를 명시해 ALIAS임을 표시
        *   FROM Table명: SELECT 구문이 수행될 테이블을 지정하며, 입력하지 않으면 오류 발생
        *   WHERE 조건식: 조건식을 충족하는 행을 검색
            *   조건식: Column명과 상수, 문자열 등을 비교하는 표현식
            *   형태: WHERE Column명 비교연산자 "값"
                *   복수의 조건을 입력하는 방법
                    *   where Column명 in (조건1, 조건2, ...)
                    *   where Column명 비교연산자 조건1 or/and Column명 비교연산자 조건2
            *   LIKE 키워드
                *   형태: WHERE Column명 LIKE '문자열 형식'
                    *   문자열 형식: 와일드카드(%, \_)를 사용, 특정 문자를 포함한 값에 대한 조건을 반영
                        *   %는 공백(" ")을 포함한 모든 문자열을 나타냄 \_는 단 하나의 문자를 나타냄
                *   예시) name에 A가 포함된 사원의 name을 출력: select name from employee where name like '%A%';
        *   ORDER BY Column명 정렬방식: 특정 Column을 기준으로 정렬
            *   Column명: Column의 순번을 대신 입력해도 됨
            *   정렬방식: ASC(오름차순), DESC(내림차순) 지정할 수 있으며, 지정하지 않으면 오름차순 정렬
    *   함수의 사용
        *   형태: SELECT 함수(인자) \[FROM 테이블명\];
        *   특징: 'FROM Table명' 구문 없이 실행할 경우 함수 실행 결과만 간단하게 출력됨
        *   단일함수: 반환되는 값이 여럿인 함수
            *   문자열 조작
                *   CONCAT(문자열, 결합문자, 문자열): 서로 다른 문자열을 결합문자를 이용해 하나로 결합함
                    *   결합한 문자를 SELECT 구문의 Column명으로 이용 가능
                    *   ALIAS의 중간에 공백이나 특수문자가 들어가는 경우 따옴표(')로 묶어줘야 함
                *   UPPER(문자열), UCASE(문자열): 문자열을 대문자로 만들어 반환
                *   LOWER(문자열), LCASE(문자열): 문자열을 소문자로 만들어 반환
                *   SUBSTRING(문자열, 시작글자 n, 글자수 m): 문자열의 n번째 문자부터 m개를 추출해 반환
                *   LPAD(문자열, 총 글자수 n, 문자 A):  
                    출력되는 문자열의 글자수가 n이 되도록 문자열의 왼쪽에 문자 A를 추가하거나, 문자열을 자름
                *   RPAD(문자열, 총 글자수 n, 문자 A):  
                    LPAD와 유사하나 문자열의 오른쪽에 동작을 수행
                *   TRIM(문자열): 문자열의 좌우 공백을 제거하고 반환
                *   LTRIM(문자열), RTRIM(문자열): LTRIM은 문자열의 좌측, RTRIM은 우측 공백을 제거하고 반환
            *   숫자 연산
                *   ABS(숫자): 숫자의 절대값을 반환
                *   MOD(숫자 x, 숫자 y), x % y: x를 y로 나눈 나머지를 반환
                *   FLOOR(숫자): 숫자보다 크지 않은 가장 큰 정수를 반환 (BIGINT로 자동 변환)
                *   CEILING(숫자): 숫자보다 작지 않은 가장 작은 정수를 반환
                *   ROUND(숫자): 숫자에 가장 근접한 정수를 반환
                *   POW(숫자 x, 숫자 y), POWER(숫자 x, 숫자 y): x의 y승을 반환
                *   GREATEST(숫자 x, 숫자 y, ...): 가장 큰 숫자를 반환
                *   LEAST(숫자 x, 숫자 y, ...): 가장 작은 숫자를 반환
            *   데이터 타입 변환
                *   CAST(표현식 AS 타입), CONVERT(표현식, 타입): 표현식의 결과를 지정한 타입으로 변환해 반환
                *   타입의 종류: BINARY, CHAR, DATE, DATETIME, SIGNED {INTEGER}, TIME, UNSIGNED {INTEGER}
            *   기타
                *   CURDATE(), CURRENT\_DATE: 오늘 날짜를 YYYY-MM-DD나 YYYYMMDD 형식으로 반환
                *   CURTIME(), CURRENT\_TIME: 현재 시각을 HH:MM:SS나 HHMMSS 형식으로 반환
                *   NOW(), SYSDATE(), CURRENT\_TIMESTAMP: 오늘 날짜와 현재 시각을 YYYY-MM-DD HH:MM:SS나 YYYYMMDDHHMMSS 형식으로 반환
                *   DATE\_FORMATE(날짜, 형식): 입력된 날짜를 지정한 형식으로 반환
                *   PERIOD\_DIFF(년월, 년월): YYMM이나 YYYYMM으로 표기되는 년월 사이의 개월수를 반환
        *   그룹함수: 반환되는 값이 하나인 함수
            *   COUNT(표현식): 표현식의 값이 NULL이 아닌 행의 갯수를 반환
            *   COUNT(DISTINCT 표현식\[, 표현식, ...\]): 표현식의 값이 NULL이 아닌, 중복되지 않는 행의 갯수를 반환
            *   COUNT(\*): 행의 갯수를 반환
            *   AVG(표현식): 표현식을 만족하는 행들의 평균값을 반환
            *   MIN(표현식): 표현식을 만족하는 행 중 최소값을 반환
            *   MAX(표현식): 표현식을 만족하는 행 중 최대값을 반환
            *   SUM(표현식): 표현식을 만족하는 행들의 합계를 반환
            *   GROUP\_CONCAT(표현식): 표현식을 만족하는 행들을 CONCAT한 문자열을 반환
            *   VARIANCE(표현식): 표현식을 만족하는 행들의 분산을 반환
            *   STDDEV(표현식): 표현식을 만족하는 행들의 표준 편차를 반환
*   INSERT 구문: 데이터를 입력할 때 사용
    *   INSERT 구문의 입력방식  
        *   필드명 지정 방식
            *   형태: INSERT INTO 테이블명(필드1\[, 필드2, ...\]) VALUES(필드1 값\[, 필드2 값, ...\]);
            *   기본값이 설정되는 필드에 대해선 필드와 필드 값을 생략할 수 있음
            *   추후 필드가 추가, 변경, 수정될 경우 유연하게 대처할 수 있음
        *   필드명 생략 방식
            *   형태: INSERT INTO 테이블명 VALUES(필드1 값\[, 필드2 값, ...\]);
            *   모든 필드 값을 반드시 입력해야 함
        *   필드의 개수와 값의 개수, 그리고 필드와 값의 데이터 타입이 동일해야 함
        *   필드 값을 입력하는 순서: 'DESC 테이블명' 쿼리의 결과로 나오는 필드의 순서와 동일
    *   구문 실행 시 생략한 필드의 기본값이 NULL인 경우, Key가 Primary로 지정되어있으면 오류 발생
        *   Key가 Primary인 필드는 NULL 값을 가질 수 없음
*   UPDATE 구문: 데이터를 수정할 때 사용
    *   형태: UPDATE 테이블명 SET 필드1=필드1값\[, 필드2=필드2값, ...\] WHERE 조건식;
    *   조건식을 만족하는 행의 필드값을 수정할 수 있음
        *   **조건식을 생략하면 모든 행의 필드값이 수정되므로 주의!**
*   DELETE 구문: 데이터를 삭제할 때 사용
    *   형태: DELETE FROM 테이블명 WHERE 조건식;
    *   조건식을 만족하는 행을 삭제할 수 있음
        *   **조건식을 생략하면 모든 행이 삭제되므로 주의!**
*   JOIN 구문: 두 개의 테이블에서 공통된 데이터를 추출할 때 사용
    *   참고자료: [MySQL Join 해부(Left, Right, Outer, Inner Join)](http://rapapa.net/?p=311)

**※ UPDATE, DELETE 구문의 경우 WHERE 조건식을 실수로 빠트리는 경우 위험한 상황이 발생할 수 있음**

*   실무에서는 테스트코드를 통해 구현하거나 쿼리문을 실제로 실행하기 전 테스트 DB에서 먼저 실행

