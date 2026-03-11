---
title: "36-Java-Web-Programming-Tips-...-Part-1"
pubDatetime: 2020-04-10T17:33:46+09:00
description: "티스토리 아카이브"
---

프로젝트: \[edwith 부스트코스\] 웹 프로그래밍 프로젝트 B, To-do List 만들기

진행기간: 2020년 4월 9일, 10일

* * *

**Java 문자열 부분적으로 바꾸기**

*   .replace( ), .replaceAll( ), .replaceFirst( ) 메서드를 사용해 바꿀 수 있음
*   참고자료: [\[Java\] 문자열 치환(Replace) 사용법 & 예제](https://coding-factory.tistory.com/128)

**Java의 If ... Else 구문에서 ==로 비교했는데 오류가 발생할 때 해결 방법**

*   조건식에 string == "문자열" 대신 string.equals("문자열") 사용
    *   \==는 타입까지 비교하므로, 값이 같은데도 오류가 발생할 수 있음
*   참고자료: [How do I compare Strings in Java? - Stack Overflow](https://stackoverflow.com/questions/513832/how-do-i-compare-strings-in-java)

**HTML form 요소**

*   하위 input 태그의 type 속성으로 어떤 종류의 입력값을 받을지 결정
*   type="submit" 속성의 input 클릭 시 입력값을 전달
*   참고자료
    *   textbox 예제: [<form> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
    *   radio 예제: [<input type="radio"> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

**HTML button 태그 및 type="submit" 속성 input 태그의 기본 스타일 제거하기**

*   Selector는 input\[type="submit"\] 으로, margin, padding, background, border 속성은 제거, font-size는 1rem 설정
    *   \[attribute="value"\] 형식을 통해 태그가 갖고 있는 속성을 활용해 Selector로 만들 수 있음
*   참고자료: [CSS | Attribute Selector - GeeksforGeeks](https://www.geeksforgeeks.org/css-attribute-selector/)

**HTML id 속성과 name 속성의 차이**

*   참고자료: [HTML input - name vs. id - Stack Overflow](https://stackoverflow.com/questions/7470268/html-input-name-vs-id)

**MySQL에 POST 메서드로 접속해서 데이터 추가할 때 에러가 뜨는 경우 해결 방법**

*   에러 내용: Establishing SSL connection without server's identity verification is not recommended...
*   POST의 대상 url 뒤에 '?autoReconnect=true&useSSL=true' 구문을 추가
*   참고자료: [Warning about SSL connection when connecting to MySQL database - Stack Overflow](https://stackoverflow.com/questions/34189756/warning-about-ssl-connection-when-connecting-to-mysql-database)

**Java로 MySQL에 데이터 추가하기**

*   MySQL에 데이터베이스 및 테이블 생성  
    → 데이터를 전송할 웹페이지 생성 (form 태그 등 데이터를 보낼 수 있는 구조 필수)  
    → 데이터를 추가하는 JDBC 코드 작성  
    → JDBC 코드를 불러와 실행하는 Java Servlet 코드 작성
*   참고자료: [Java Servlet and JDBC Example | Insert data in MySQL - GeeksforGeeks](https://www.geeksforgeeks.org/java-servlet-and-jdbc-example-insert-data-in-mysql/)

**XMLHttpRequest 방식을 사용해 POST 메서드로 서버에 정보 보내기**

*   대상 URL과 전달할 매개변수를 저장
    *   매개변수가 여럿일 경우, &으로 구분
*   open( ) 메서드로 대상 URL에 POST 메서드 요청을 보냄
*   setRequestHeader( ) 메서드로 요청의 헤더를 지정
*   send(매개변수) 메서드로 매개변수를 서버에 보냄
*   참고자료
    *   [Getting Started - Developer guides | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
    *   [Send POST data using XMLHttpRequest - Stack Overflow](https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest)

**removeChild( ) 메서드로 HTML 문서의 특정 요소 제거하기**

*   형태: node.removeChild(child)
    *   node와 child는 querySelector( ), getElementById( ) 등의 메서드로 특정될 수 있음
*   참고자료: [Node.removeChild() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

**insertAdjacentHTML( ) 메서드로 HTML 문서의 특정 위치에 HTML 문자열 삽입하기**

*   형태: element.insertAdjacentHTML(position, text)
    *   position: 문자열이 삽입될 위치로, element 기준 beforebegin, afterbegin, beforeend, afterend의 4가지로 나뉨
    *   text: 삽입될 HTML 또는 XML 문자열
*   참고자료: [Element.insertAdjacentHTML() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

  

#Java #mysql #HTML #css #javascript #tip #web programming #웹 프로그래밍 #edwith #부스트코스