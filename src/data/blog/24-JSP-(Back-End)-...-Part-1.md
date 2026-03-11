---
title: "24-JSP-(Back-End)-...-Part-1"
pubDatetime: 2020-04-03T13:50:56+09:00
description: "티스토리 아카이브"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습일: 2020년 3월 25일

* * *

## 3\. JSP - BE

JSP(Java Server Page)란?

*   JSP의 등장배경
    *   1998년, Microsoft에서 쉬운 웹개발을 위해 ASP(Active Server Page) 스크립트(Script) 엔진 발표
    *   그에 반해 1997년 발표된 Servlet은 out.print( )를 일일이 입력해야 하는 등 개발 규모가 커지면 불편했음
    *   이에 Sun Microsystems에서 Servlet 방식을 개선한 JSP를 199년 발표
*   JSP의 동작 방식
    *   WAS는 JSP의 문법으로 작성된 지시문을 전달받아 JSP를 실행
    *   모든 JSP는 Servlet으로 바뀌어 Servlet과 동일한 Life cycle에 따라 실행됨
*   JSP의 특징
    *   정해진 기호(<%, @ 등)를 사용해 Servlet으로 바뀔 때 어떻게 동작할 것인지를 결정
    *   예시) <%@ ...: 지시자
        *   <%@ page ...: page 지시자
        *   <%@ page language="java" contentType="text/html; charset=UTF-8" page Encoding="UTF-8" %>: page 지시문으로, 보통 JSP 파일 최상단에 있음
            *   language="java": JSP 파일 내 작성된 언어가 Java임을 나타냄
                *   이론적으로 JSP는 Java 외 다른 언어를 사용할 수 있으나, 실제로는 Java만 사용됨
            *   contentType: JSP 파일의 내용의 종류를 나타내며, Servlet의 response.setContentType( )과 동일
            *   pageEncoding: JSP 파일이 인코딩된 방식을 나타냄
                *   인코딩 값이 일치하지 않으면 한글이 깨지는 등의 오류가 발생
    *   일반적으로는 page 지시문 다음에 HTML 코드가 옴

**※ JSP 학습 시 JSP의 지시문이 Servlet에서 어떻게 바뀌어 동작할지를 함께 생각하면서 학습하면 이해가 쉬움**

JSP의 Life cycle

*   JSP 파일 실행 → 특별한 형태의 Servlet으로 소스가 변환됨
    *   Tomcat 사용 시 Tomcat이 JSP를 Servlet으로 바꿈
*   JSP 파일 실행 시 내부적으로 일어나는 일
    *   Workspace 아래 .metadata 폴더에 '파일이름\_jsp.java' 파일이 생성
        *   상세 디렉토리: workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\temp0\\work\\Catalina\\localhost\\firstweb\\org\\apache\\jsp
        *   .java 파일 안에는 \_jspInit( ), \_jspDestroy( ), \_jspService( ) 등의 메서드가 있음
            *   Servlet의 init( ), destroy( ), service( ) 메서드와 동일한 역할을 함
    *   JSP 파일의 내용이 \_jspService( ) 메서드 안에 변환되어 들어감
        *   <%@, <%, <%= 등의 기호가 사라지고 해당하는 Java 코드 및 Servlet 메서드로 변환됨
            *   예시)
                *   <%@ ... contentType="text/html; charset=UTF-8" ... %> → out.write("<meta http-equiv=\\"Content-Type\\" content=\\"text/html; charset=UTF-8\\">")
                *   <%= total %> → out.print(total)
    *   .java 파일이 Servlet 소스 코드로 컴파일, 실행되고 그 결과가 브라우저에 나타남
*   JSP 엔진이 JSP를 실행하는 순서
    *   클라이언트가 웹 서버에 JSP에 대한 요청 정보를 전달
    *   클라이언트가 요청한 JSP가 최초의 요청일 경우 (JSP에 해당하는 Servlet에 대한 정보가 없을 경우)
        *   .java 파일 생성: JSP로 작성된 코드가 Servlet 코드로 변환됨
        *   .class 파일 생성: Servlet 코드가 컴파일되어 실행할 수 있는 bytecode로 변환됨
        *   Servlet 클래스가 로딩되고 인스턴스가 생성됨
    *   Servlet이 실행되어 요청을 처리하고 응답 정보를 생성
*   실습으로 확인하는 JSP Life cycle
    *   브라우저의 최초 요청 시 jspInit( ), jspService( ) 메서드 실행
    *   브라우저의 반복 요청(새로고침) 시 jspService( ) 메서드만 실행
    *   JSP 파일 수정 후 브라우저의 요청 시 순차적으로 jspDestroy( ), jspInit( ), jspService( ) 메서드 실행
*   jspInit( ), jspService( ), jspDestroy( ) 메서드 수정 방법
    *   jspService( ): HTML 코드 내 <% %> 형태의 지시문 작성
    *   jspInit( ), jspDestroy( ): <%! public void jspInit( ), jspDestroy( ) { Java 코드 } %> 형태의 선언문 작성

  

#Java #jsp #자바 #servlet #웹 프로그래밍 #인터넷 강의 #내용 정리 #edwith #부스트코스