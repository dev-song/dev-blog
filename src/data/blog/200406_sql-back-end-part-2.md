---
title: "SQL (Back End) ... Part 2"
pubDatetime: 2020-04-06T01:19:34+09:00
description: "티스토리 아카이브"
tags:
  - "SQL"
  - "웹 프로그래밍"
  - "DDL"
  - "인터넷 강의"
  - "내용 정리"
  - "edwith"
  - "부스트코스"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습기간: 2020년 4월 2일

* * *

## 8\. SQL - BE

DDL(Data Definition Language, 데이터 정의어)

*   RDBMS의 기본적 저장 구조인 테이블을 정의하기 위해선 기초적인 정보가 필요
    *   어떤 필드가 있는지, 해당 필드에는 어떤 데이터 타입인지, 자리는 얼마를 차지하는지에 대한 정보가 필요
*   데이터 타입의 종류
    *   TINYINT(M): 1 Byte, 부호 있는 수는 -128 ~ 127, 부호 없는 수는 0 ~ 255까지 표현
    *   SMALLINT(M): 2 Byte, 부호 있는 수는 -32768 ~ 32767, 부호 없는 수는 0 ~ 65535까지 표현
    *   MEDIUMINT(M): 3 Byte, 부호 있는 수는 -8388608 ~ 8388607, 부호 없는 수는 0 ~ 16777215까지 표현
    *   INT(M), INTEGER(M): 4 Byte, 부호 있는 수는 -2147483648 ~ 2147483647, 부호 없는 수는 0 ~ 4294967295까지 표현
    *   BIGINT(M): 부호 있는 수는 -92233720036854775808 ~ 92233720036854775808, 부호 없는 수는 0 ~ 18446744073709551615까지 표현
    *   FLOAT(M, D): 언제나 부호가 있으며, -3.402823466E+38 ~ 3.402823466E+38까지 부동소수점을 표현
    *   DOUBLE(M,D): 언제나 부호가 있으며, 2배의 정밀도를 가져 -1.79769313486231517E+308 ~ 1.6931348623157E+308까지 부동소수점을 표현
    *   DATE: 3 Byte, 날짜를 'YYYY-MM-DD'의 형태로 표현
    *   DATETIME: 8 Byte, 날짜와 시간을 함께 'YYYY-MM-DD HH:MM:SS'의 형태로 표현
    *   TIMESTAMP: 4 Byte, '1970-01-01 00:00:00'부터 2037년까지 표현할 수 있음
    *   TIME: '-839:59:59' ~ '839:59:59'까지 시간을 표현
    *   YEAR: 1901 ~ 2155년, 0000년의 년도를 표현
    *   CHAR(M): 고정 길이 M의 문자열을 저장, M은 1 ~ 255의 값을 가짐
    *   VARCHAR(M): 가변 길이 M의 문자열을 저장, M은 1 ~ 255의 값을 가짐
    *   TINYBLOB, TINYTEXT: 255개의 문자를 저장
    *   BLOB, TEXT: 65,535개의 문자를 저장
    *   MEDIUMBLOB, MEDIUMTEXT: 16,777,215개의 문자를 저장
    *   LONGBLOB, LONGTEXT: 4,294,967,295개의 문자를 저장
    *   TINYINT...TIMESTAMP
    *   TIME...LONGTEXT
*   CREATE TABLE 구문: 테이블을 생성할 때 사용
    *   형태: CREATE TABLE 테이블명(필드명1 타입 \[NULL | NOT NULL\] \[DEFAULT 기본값\] \[AUTO\_INCREMENT\] \[, 필드명2 타입 ...\], PRIMARY KEY(필드명));
        *   NULL | NOT NULL: 속성값의 빈 값(NULL) 허용 여부 설정
            *   지정하지 않으면 NULL이 기본값으로 적용됨
        *   DEFAULT 기본값: 입력하지 않았을 때의 기본값 설정
        *   AUTO\_INCREMENT: 해당 필드의 레코드가 자동으로 1씩 증가하도록 설정
        *   PRIMARY KEY(필드명): 해당 필드를 PRIMARY KEY로 지정할 지 설정
            *   해당 필드명 뒤에 바로 PRIMARY KEY를 입력해도 동일하게 동작
*   ALTER TABLE 구문: 테이블의 정보를 수정(Column을 추가, 삭제, 수정, 테이블명 변경)할 때 사용
    *   형태
        *   Column 추가: ALTER TABLE 테이블명 ADD 필드명 타입 \[NULL | NOT NULL\] \[DEFAULT 기본값\] \[AUTO\_INCREMENT\];
        *   Column 삭제: ALTER TABLE 테이블명 DROP 필드명;
        *   Column 수정: ALTER TABLE 테이블명 CHANGE 필드명1 필드명2 타입 \[NULL | NOT NULL\] \[DEFAULT 기본값\] \[AUTO\_INCREMENT\];
            *   필드명을 필드명2로 바꾸고, 속성 또한 다시 설정
        *   테이블명 변경: ALTER TABLE 테이블명1 RENAME 테이블명2
            *   테이블명을 테이블명2로 변경
*   DROP TABLE 구문: 테이블을 삭제할 때 사용
    *   형태: DROP TABLE 테이블명;
    *   제약 조건이 있을 경우 명령을 실행해도 테이블이 삭제되지 않을 수 있음
        *   예시) 삭제 대상 테이블의 특정 Column이 다른 테이블의 Foreign Key라서 공유되고 있는 경우
    *   제약 조건으로 인해 삭제되지 않는 경우 테이블을 생성한 반대 순서로 삭제를 해야 함
    *   테이블 삭제 후 해당 테이블에 대해 DESC 명령을 수행하면 존재하지 않는 테이블이라는 메시지가 출력됨

심화 / 생각해보기

*   데이터의 길이가 10인 Column의 길이를 줄일 수 있는지 여부
    *   실행 시 에러가 발생하고 실행되지 않음
*   문자열 저장 데이터 타입인 CHAR과 VARCHAR의 차이점, 그리고 두 타입을 효율적으로 사용하는 방법
    *   참고자료: [\[DBA\] 데이터타입 CHAR과 VARCHAR 중 어느것을 써야할까?](https://mozi.tistory.com/229)
    *   CHAR은 고정 길이로, 문자열이 가변적이라면 비효율적임
    *   VARCHAR은 가변 길이로 할당된 Byte만 적용됨
    *   VARCHAR은 길이를 계산하기 때문에 미세하게 느리지만, 실질적인 속도 차이는 거의 없음
    *   프로젝트는 언제든 변할 수 있고, 또 고정 길이는 빈 공간에 대한 비용이 생길 수 있으므로 항상 VARCHAR을 사용하는 것이 나음
*   문자열 데이터 타입에 문자셋을 지정할 수 있는데, 문자셋에 따라 필드가 차지하는 공간 크기는?
    *   형태: 타입 CHARACTER SET 문자셋; 
    *   EUC-KR: 영문, 숫자, 기호는 1 Byte, 한글, 한자는 2 Byte를 차지
    *   UTF-8: 영문, 숫자, 기호는 1 Byte, 한글, 한자는 3 Byte를 차지

