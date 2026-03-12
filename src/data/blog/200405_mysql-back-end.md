---
title: "MySQL (Back End)"
pubDatetime: 2020-04-05T23:58:14+09:00
description: "edwith 부스트코스 강의 정리 - 데이터베이스와 DBMS의 개념, MySQL 설치 및 기본 SQL 명령어 사용법"
tags:
  - "mysql"
  - "데이터베이스"
  - "DBMS"
  - "DATABASE"
  - "DB"
  - "웹 프로그래밍"
  - "인터넷 강의"
  - "내용 정리"
  - "edwith"
  - "부스트코스"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습기간: 2020년 3월 30일

* * *

## 7\. MySQL - BE

데이터베이스와 DBMS

*   데이터베이스가 책들이 모여있는 도서관이라면, DBMS는 대출, 반납, 서가정리를 하는 도서관 사서라고 볼 수 있음
*   데이터베이스
    *   정의
        *   데이터의 집합 (a set of Data)
        *   여러 응용 시스템(프로그램)의 정보가 통합되어 저장된 공용(share) 데이터의 집합으로, 운영할 수 있음
        *   데이터 집합은 효율적으로 저장, 검색, 갱신될 수 있도록 서로 연관시키고 조직화되어야 함
    *   특성
        *   실시간 접근성(Real-time Accessibility): 사용자의 요구를 즉시 처리할 수 있음
        *   계속적인 변화(Continuous Evolution): 정확한 값을 유지하기 위해 삽입, 삭제, 수정 등을 통해 데이터를 지속적으로 갱신할 수 있음
        *   동시 공유성(Concurrent Sharing): 서로 다른 목적으로 사용하는 여러 사용자가 동일한 데이터에 접근하고 이용할 수 있음
        *   내용 참조(Content Reference): 저장한 데이터 레코드의 위치나 주소가 아닌, 사용자가 요구하는 데이터의 내용(값)을 따라 참조할 수 있어야 함
*   DBMS(Database Management System, 데이터베이스 관리 시스템)
    *   정의: 데이터베이스를 관리하는 소프트웨어
    *   역할: 동시에 여러 응용 소프트웨어(프로그램) 또는 시스템이 데이터베이스에 접근하여 사용할 수 있게 함
    *   3가지 필수 기능
        *   정의 기능: 데이터베이스의 논리적, 물리적 구조를 정의
        *   조작 기능: 데이터를 검색, 삭제, 갱신, 삽입
        *   제어 기능: 데이터베이스의 내용의 정확성, 안전성을 유지하기 위해 제어하는 기능
    *   장점
        *   데이터 중복을 최소화시킬 수 있음
        *   데이터의 일관성과 무결성을 유지할 수 있음
        *   데이터의 보안을 보장함
    *   단점
        *   운영비가 비쌈
        *   백업 및 복구 관리가 복잡함
        *   데이터베이스의 일부분이 손실되는 것만으로도 전체 시스템이 정지될 수 있음
    *   대표적인 상용, 공개 DBMS: Oracle, SQL Server, MySQL, DB2 등

MySQL 다운로드 및 설치하기

*   다운로드
    *   1\. [MySQL 다운로드 페이지](https://www.mysql.com/downloads/)  
        2\. MySQL Community (GLP) Downloads 링크  
        3\. MySQL Community Server  
        4\. OS 및 버전 확인 후 Recommended Download: Go to Download Page 링크  
        5\. 약 400Mb 정도의 Installer Download
*   설치
    *   1\. 다운로드한 Installer 실행  
        2\. Choosing a Setup Type: Developer Default 선택  
        3\. Check Requirements: Manual 표시된 항목만 직접 설치, 나머지 항목은 자동 설치  
        4\. Product Configuration: Accounts and Roles에서 비밀번호 설정하고, 그 외는 기본값 설정  
        5\. MySQL Router: 기본값 선택  
        6\. Connect to Server: 설정한 비밀번호 입력한 후 연결 테스트
*   시스템 환경변수 설정
    *   1\. Windows 검색  
        2\. '시스템 환경 변수 편집' 실행  
        3\. 고급 탭 '환경 변수'  
        4\. 시스템 변수 중 Path 선택 후 '편집'  
        5\. '새로 만들기'  
        6\. 'MySQL 설치 디렉토리/MySQL Server/bin' 입력 후 '확인'

MySQL 실행 및 종료

*   실행 방법: MySQL 설치 시 기본값을 선택한 경우, Windows 실행 시 자동으로 함께 실행됨
    *   서비스 목록에서 MySQL의 상태가 '실행 중'이면 정상적으로 실행 중인 것
*   설치 확인: 정상 설치되었으면 콘솔에서 'mysql -uroot -p' 실행 후 비밀번호를 입력 시, MySQL 안내문이 출력됨
*   종료 방법: 서비스 목록에서 MySQL을 우클릭한 후 '중지' 선택

**※ 사용자가 사용하는 도중에 DBMS가 종료된다면?**

*   사용자가 데이터베이스를 사용할 수 없게 되어 다양한 문제가 발생
    *   예시) 체크카드를 사용해 물건을 구매했으나, 통장 잔고에 해당 구매 내역이 반영되지 않는 이슈

