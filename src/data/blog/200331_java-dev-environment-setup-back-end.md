---
title: "Java 개발환경 설정 (Back End)"
pubDatetime: 2020-03-31T11:06:12+09:00
description: "티스토리 아카이브"
tags:
  - "Java"
  - "eclipse"
  - "servlet"
  - "jdk"
  - "웹 프로그래밍"
  - "인터넷 강의"
  - "내용 정리"
  - "edwith"
  - "부스트코스"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 1, 웹 프로그래밍 기초

학습일: 2020년 3월 2일, 3일

* * *

## 4\. Java 개발환경 설정 - BE

JDK(Java SE Development Kit) 다운로드 및 설치

*   다운로드
    *   [다운로드 페이지](https://www.oracle.com/java/technologies/) 접속 → Java SE 링크 → Java SE 8의 JDK Download 링크 → 운영체제에 맞는 JDK 다운로드
*   설치: 기본값으로 설치
*   운영체제별로 다른 JDK를 설치해야 하는 이유
    *   Java 파일은 작성 시 .java 파일로 생성되며, 실행 시 .class 파일로 컴파일됨
    *   .class 파일은 OS 종류와 상관 없이 실행되고, 이런 특징을 'OS에 독립적'이라고 함
    *   OS에 독립적이기 위해선 파일의 실행 환경인 JRE가 운영체제별로 필요함
    *   JRE는 JDK에 포함되어 있으므로 운영체제에 맞는 JDK를 설치해줘야 함
*   시스템 환경변수 설정
    *   JDK가 정상 작동하려면 시스템 환경설정이 필요
    *   Windows에서의 환경변수 설정
        *   Windows 검색 → '시스템 환경 변수 편집' 실행 → 고급 탭 '환경 변수'
        *   시스템 변수 '새로 만들기' → 변수 이름 'JAVA\_HOME', 변수 값 'JDK 설치경로' 입력 후 '확인'
        *   시스템 변수 '새로 만들기' → 변수 이름 'CLASSPATH', 변수 값 '.;%JAVA\_HOME%\\lib\\tools.jar' 입력 후 '확인'
        *   시스템 변수 중 Path 선택 후 '편집' → 새로 만들기 → '%JAVA\_HOME%\\bin' 입력 후 확인
    *   시스템 환경변수 설정이 필요한 이유
        *   Java로 작성된 프로그램을 실행하기 위해선 JRE가 필요한데, 이 때는 환경변수를 설정할 필요는 없음
        *   JDK의 경우, 매번 JDK 설치경로에 접근하지 않고도 JDK 실행 파일을 사용하기 위해 환경변수를 설정
        *   Java 소스코드를 실행하기 위해 컴파일러 등이 필요한데, 이 때마다 설치경로에 접근하는 것보다 경로에 상관 없이 실행할 수 있는 것이 효율적이기 때문
*   설치 확인: 정상적으로 설치되었다면 프롬프트에서 'java -version', 'javac -version' 실행 시 메시지가 출력됨

Eclipse IDE 다운로드 및 설치

*   다운로드: [다운로드 페이지](https://www.eclipse.org/downloads/packages/) 접속 → 운영체제에 맞는 Eclipse IDE for Enterprise Java Developers 다운로드
*   설치: 원하는 경로에 압축 해제
*   인코딩 환경설정
    *   글자가 깨지는 현상을 방지하기 위해 파일들의 인코딩 방식을 통일해서 설정
    *   Eclipse 실행 → Window → Preferences
    *   General > Workspace의 Text file encoding을 Other > UTF-8로 설정
    *   Web > CSS Files, HTML Files, JSP Files의 Encoding을 ISO 10646/Unicode(UTF-8)로 설정

Hello World 컴파일, 실행하기

*   Eclipse 작업공간(perspective)의 종류
    *   Java EE: Java를 이용한 웹 개발에 최적화
    *   Java: Java 어플리케이션 개발에 최적화
*   cmd 명령어
    *   cd '경로': 해당 경로로 이동
    *   dir: 현재 디렉토리 내의 파일, 폴더를 보여줌
    *   tree /f: 현재 디렉토리의 하위 디렉토리에 속한 파일, 폴더를 tree 구조로 보여줌
*   Eclipse의 특징
    *   .(마침표)으로 시작하는 파일들에는 중요 정보가 저장되므로, 임의로 수정하지 않도록 주의
    *   작성된 소스 코드는 프로젝트 디렉토리 내 src 폴더에 .java 파일로 저장
    *   컴파일된 .java 파일은 프로젝트 디렉토리 내 bin 폴더에 .class 파일로 저장
        *   .java 파일이 Java 문법에 맞지 않는 등의 이유로 컴파일이 정상적으로 되지 않았을 경우 .class 파일은 생성되지 않음
*   Java 프로젝트
    *   프로젝트 생성: New → Project → Java Project
        *   상황에 맞는 프로젝트 종류를 선택할 수 있음
    *   클래스 추가: src 폴더 우클릭 → New → Class
    *   실행: Run → Run As → Java Application
*   Java Code Convention: Java 코드를 작성하기 위한 프로그래머들 사이의 약속
    *   참고자료
        *   [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)
        *   [\[코딩규칙\] 자바 코딩 규칙(Java Code Conventions)](https://myeonguni.tistory.com/1596)
        *   [Oracle Code Conventions for the Java Programming Language](https://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html)
    *   프로젝트 이름은 소문자로 시작, 패키지, 클래스 이름은 대문자로 시작

WAS 다운로드 및 설치

*   WAS: 웹 어플리케이션 실행을 위해 필요함
    *   .doc 파일을 실행하려면 Microsoft Office Word가 필요한 것과 유사함
    *   부스트코스에선 Apache Tomcat 8을 사용
*   다운로드: [Apache Tomcat](http://tomcat.apache.org/) 홈페이지 접속 → Tomcat 8 링크 → Core의 zip 파일 다운로드
*   설치: 원하는 경로에 압축 해제
*   Window에서의 실행: 설치 경로의 startup.bat 파일 실행
    *   정상적으로 실행되었다면 웹 브라우저로 http://localhost:8080 접근 시 시작 페이지가 표시됨
*   Windows에서의 종료: 설치 경로의 shutdown.bat을 실행하거나 실행 중인 startup.bat을 종료
    *   종료 이후에는 서버에 접근할 수 없음
*   Apache Tomcat의 특징
    *   기본적으로 8080 포트로 실행되며, 기본 포트를 바꾸려면 설정파일을 수정해야 함
        *   포트: 컴퓨터 내 여러 소프트웨어 서버를 구분하는 단위로, 컴퓨터를 구분하는 도메인/IP와 다름
    *   설치 후 실행 시 가끔 한글이 깨지는 경우가 발생
        *   참고자료: [TOMCAT 한글깨짐현상](https://steven-life-1991.tistory.com/91)

HelloWorld Servlet 컴파일 및 실행

1.  웹 프로젝트 생성
    *   Java EE Perspective → New → Dynamic Web Project
    *   Target Routine: 사용하는 WAS 지정
2.  프로젝트에 Servlet 등록
    *   Servlet: URL 요청을 처리하는 프로그램
    *   프로젝트 우클릭 → New → Servlet
    *   URL mappings: 클래스가 WAS에 배포될 때 사용하는 이름으로, 클래스명이 기본값으로 지정되어 있음
3.  Servlet 작동시키기
    *   doGET() 메서드 내 코드 작성
        *   response.setContentType("text/html;charset=UTF-8");
            *   response: 응답 내용을 전부 모아 추상화한 객체
            *   setContentType(): 객체의 ContentType을 지정하는 메서드
                *   HTML 문서의 contentType: text/html
                *   한글을 제대로 표시하기 위해 charset을 UTF-8로 지정
        *   PrintWriter out = response.getWriter();
            *   PrintWriter: 무언가를 출력하고자 할 때 가장 많은 메서드를 갖고 있어 편리한 객체
                *   io 객체에 포함되어 있음
            *   getWriter(): PrintWriter 객체를 반환하는 메서드
            *   Printwriter out: getWriter() 메서드를 통해 out에 반환된 PrintWriter 객체를 지정
        *   out.print("<h1>Hello Servlet</h1>");
            *   print(): 내용을 출력하는 메서드  
                *   <h1>Hello Servlet</h1>이 출력됨
                *   HTML 문법에 맞게 보내면, 브라우저에서 문법에 맞게 해석하여 표시
    *   서버에서 Servlet 실행
        *   Run → Run As → Run on Server
        *   내장 브라우저가 열리며 "Hello Servlet"이 표시됨
            *   Eclipse 설정을 변경하면 내장 브라우저가 아닌 외부 브라우저에서도 실행할 수 있음
        *   하단 Console 탭에서 Apache Tomcat이 Eclipse 내부에서 실행되는 것을 확인할 수 있음

Servlet의 특징

*   실행규칙: http://'도메인 or IP':'포트'/'프로젝트명'/'URL mappings 값'
*   웹 브라우저가 요청하는 HTTP request 메서드의 종류에 따라 서로 다른 메서드가 호출됨
    *   예시) HTTP GET request → Servlet의 doGET() 메서드 호출
        *   GET: 웹 브라우저가 서버에게 문서를 요청할 때 사용하는 메서드

**※ 브라우저에 "Hello World"가 출력되는 과정**

1.  사용자가 URL(http://'도메인 or IP':'포트'/'프로젝트명'/'URL mappings 값')을 입력하여 페이지로 이동
2.  사용자의 페이지 이동이 HTTP GET 메서드로 서버에 요청됨
3.  WAS의 Servlet Container에서 HTTP 요청을 분석
4.  WAS가 web.xml을 참조하여 요청이 어떤 Servlet에 대한 것인지 확인
5.  WAS가 해당 Servlet 안에서 클라이언트의 GET 요청에 상응하는 doGET() 메서드를 실행
6.  서버가 해당 Servlet의 doGET() 메서드에서 코드를 실행한 결과를 클라이언트에 응답으로 보냄
7.  사용자의 브라우저가 서버에서 받은 코드를 해석하여 화면에 표시

