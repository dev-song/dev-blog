---
title: "29-EL과-JSTL-(Back-End)"
pubDatetime: 2020-04-05T19:31:20+09:00
description: "티스토리 아카이브"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습일: 2020년 3월 29일

* * *

## 6\. EL & JSTL - BE

EL (Expression Language, 표현 언어)

*   EL이란?
    *   값을 표현하는 데 사용하는 스크립트 언어
    *   태생적으로 Back end, Front end 등 다양한 코드 형태가 섞여 있는 JSP의 문법을 단순화하는 역할
    *   Java 코드보다 좀 더 직관적으로, Front end 개발자나 디자이너가 봐도 쉽게 이해할 수 있도록 표현할 수 있음
*   EL이 제공하는 기능
    *   JSP의 Scope별 변수를 쉽게 출력할 수 있음
    *   Collection 또는 프레임워크에서 제공하는 객체인 집합객체의 값을 쉽게 출력할 수 있음
    *   변수 간 수치 연산, 관계 연산, 논리 연산 가능
    *   Java 클래스 메서드를 호출할 수 있음
    *   EL 자체의 기본적인 객체 제공
*   EL의 사용방법
    *   형태: ${표현식}
    *   예시
        *   <jsp:include page="/module/${skin.id}/header.jsp" flush="true" />  
            <b>${sessionScope.member.id}</b>님 환영합니다.
    *   JSP의 스크립트 요소(스크립트릿, 표현식, 선언부) 외 나머지 부분에서 사용할 수 있음
*   EL의 기본 객체
    *           
*   EL의 데이터 타입
    *   불리언: true, false
    *   정수: 0~9의 정수 값으로 음수의 경우 '-'를 앞에 붙임
    *   실수: 0~9로 이루어져 있고 '.'으로 구분되며, 1.23e3과 같이 지수형으로 표현될 수 있음
    *   문자열: ' 또는 "로 둘러쌓인 문자열
        *   표현식에서 '나 ", \\를 중복해서 표현하고 싶을 경우, 앞에 \\를 함께 사용해야 함
    *   널: null
*   EL의 객체 접근 규칙
    *   형태: ${표현식1.표현식2}
    *   표현식1이나 표현식2가 null: null 반환
    *   표현식1이 Map인 경우: Key가 표현식2인 값 반환
    *   표현식1이 List나 배열인 경우: 표현식2가 정수라면 해당 정수 index에 해당하는 값 반환
        *   표현식2가 정수가 아닐 경우 오류 발생
    *   표현식1이 객체인 경우: 표현식2에 해당하는 get 메서드를 호출한 결과값 반환
*   EL의 수치 연산자
    *   +(덧셈), -(뺄셈), \*(곱셈), / or div(나눗셈), % or mod(나머지)
    *   숫자가 아닌 객체와 수치 연산자를 사용할 경우, 객체를 자동으로 숫자 값으로 변환한 뒤 연산을 수행
        *   객체가 null일 경우 객체 값을 0으로 처리
        *   객체를 숫자로 변환할 수 없을 경우 오류 발생
*   EL의 비교 연산자
    *   형태: ${비교연산자가 포함된 표현식}
    *   \== or eq, != or ne, < or lt, > or gt, <= or le, >= or ge
*   EL의 논리 연산자
    *   && or and, || or or, ! or not
*   EL의 empty 연산자
    *   형태: ${empty '값'}
    *   값이 null, 빈 문자열(""), 길이가 0인 배열, 빈 Map, 빈 Collection일 때 true를 반환하고, 그 외에는 false를 반환
*   EL의 비교선택 연산자
    *   형태: ${표현식 ? 값1 : 값2}
    *   표현식이 true이면 값1을 반환, false이면 값2를 반환
*   연산자의 우선순위
    *   \[ \], .
    *   ( )
    *   \-, not, !, empty
    *   \*, /, div, %, mod
    *   +, -
    *   <, >, <=, >=, lt, gt, le, ge
    *   \==, !=, eq, ne
    *   &&, and
    *   ||, or
    *   ?, :
*   EL 비활성화 방법
    *   <%@ page isELIgnored="true" %> 코드를 추가
        *   isELIgnored의 기본값은 false

JSTL(JSP Standard Tag Library)

*   JSTL: JSP 페이지에서 조건문, 반복문 처리 등을 HTML tag 형태로 작성할 수 있게 해주는 라이브러리
*   JSTL의 등장배경
    *   JSP는 스트립트릿의 Java 코드와 HTML tag가 섞여 있는 형태
    *   개발의 편의성은 높았으나 Front end 개발자의 코드 수정이 어려웠고, 곧 유지보수가 어려워지는 문제가 발생
    *   이를 개선하기 위해 HTML tag 형식으로 프로그램 로직을 수행할 수 있게 해주는 라이브러리 JSTL이 등장
*   JSTL 사용 방법
    *   [Apache Tomcat 웹페이지](http://tomcat.apache.org/download-taglibs.cgi)에서 다운로드 → Impl, Spec, EL 파일 다운로드
    *   프로젝트 폴더 > WebContent > WEB-INF > lib 폴더로 해당 파일 이동
    *   JSP 파일 상단에 지시자 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 입력
        *   prefix와 uri는 라이브러리 종류에 따라 변경하면서 사용
*   JSTL이 제공하는 태그의 종류
    *           
*   JSTL 코어 태그
    *           
    *   변수 지원 태그
        *   set: 지정한 scope에 변수를 생성하거나 객체의 property 값을 지정하는 태그
            *   형태
                *   변수 생성: <c:set var="변수명" scope="범위" value="값" />
                *   property 지정: <c:set target="${객체}" property="property명" value="값" />
                    *   객체가 JavaBean일 경우: 객체.setPropertyName(값) 메서드 실행
                    *   객체가 map일 경우: 객체.put(property명, 값) 실행
        *   remove: 변수를 제거하는 태그
            *   형태: <c:remove var="변수명" scope="범위" />
    *   흐름제어 태그
        *   if: 특정 조건을 만족하면 코드를 실행하는 태그
            *   형태: <c:if test="조건">실행 코드</c:if>
        *   choose: 여러 조건이 있고, 조건에 맞는 코드를 실행하는 태그
            *   if ... else if ... else와 유사하게 동작
            *   형태
                *   <c:choose>  
                      <c:when test="조건1">실행 코드 1</c:when>  
                      <c:when test="조건2">실행 코드 2</c:when>  
                      <c:otherwise>실행 코드 3</c:otherwise>  
                    </c:choose>
        *   forEach: 배열 및 Collection에 저장된 요소를 차례대로 처리하는 태그
            *   형태: <c:forEach var="변수명" items="아이템" \[begin="시작번호"\] \[end="끝번호"\]>실행 코드</c:forEach>
                *   아이템: 배열, List, Iterator, Enumeration, Map 등의 Collection
                    *   Map의 경우 ${Map.key}, ${Map.value}를 통해 접근할 수 있음
        *   import: 특정 URL에 연결하여 결과를 변수에 저장하는 태그
            *   형태
                *   <c:import url="URL" charEncoding="인코딩 방식" var="변수명" scope="범위">  
                      <c:param name="매개변수명" value="매개변수값" />  
                    </c:import>
                    *   매개변수 부분은 생략할 수 있음
        *   redirect: 지정한 페이지로 리다이렉트하는 태그
            *   response.sendRedirect( ) 메서드와 유사하게 동작
            *   형태
                *   <c:redirect url="URL">  
                      <c:param name="매개변수명" value="매개변수값" />  
                    </c:redirect>  
                    *   매개변수 부분은 생략할 수 있음
    *   기타 태그
        *   out: jspWriter에 데이터를 출력하느 ㄴ태그
            *   형태: <c:out value="출력값" escapeXml="true | false" default="기본값" />
                *   escapeXml: 특정 문자를 변환하는 옵션
                    *   기본값은 true
                    *   변환되는 문자
                        *   < → &lt;
                        *   \> → &gt;
                        *   & → &amp;
                        *   ' → &#039;
                        *   "  &#034;

  

#jsp #El #JSTL #웹 프로그래밍 #BACK END #인터넷 강의 #백엔드 #내용 정리 #edwith #부스트코스