---
title: "17-Maven-(Back-End)"
pubDatetime: 2020-04-06T11:27:39+09:00
description: "티스토리 아카이브"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 2, DB 연결 웹 앱

학습일: 2020년 4월 3일

* * *

## 9\. Maven - BE

Maven이란?

*   어플리케이션을 개발하기 위해 반복적으로 진행되는 작업들을 지원하기 위해 등장한 도구
    *   빌드(Build), 패키징, 문서화, 테스트, 테스트 리포팅, git, 의존성 관리, SVN 등의 형상관리서버 연동(SCMs), 배포 등의 작업을 쉽게 할 수 있도록 해줌
*   CoC(Convention over Configuration)에 대한 이해가 필요
    *   CoC: 프로그램의 소스파일의 위치, 컴파일된 파일의 위치 등에 대한 일종의 관습
    *   CoC에 익숙하면 Maven을 유용하게 쓸 수 있지만 익숙하지 않으면 일종의 진입장벽으로 느껴질 수 있음
    *   Maven에 익숙해진다는 것은 CoC에 익숙해진다는 것과 같음
*   참고자료: [Maven - Introduction](https://maven.apache.org/what-is-maven.html)

Maven을 사용할 경우 얻게 되는 이점

*   Maven을 사용할 경우 편리한 점이 많음  
    *   편리한 의존성 라이브러리 관리
        *   기존 방식으론 라이브러리를 적용하려면 파일을 다운로드해 '/WEB-INF/lib' 폴더에 넣어줘야 함
        *   라이브러리 사용이 많아질수록 직접 다운로드받는 방식은 불편해지게 됨
        *   Maven 사용 시 설정 파일에 몇 줄의 코드를 적는 것으로 쉽게 라이브러리를 사용할 수 있음
    *   간편한 프로젝트 빌드 방법 가이드
        *   프로젝트에 참여하는 개발자가 많아질 경우 프로젝트 빌드 방법 가이드가 어려워짐
        *   Maven 사용 시 Maven에 설정한 대로 모든 개발자가 일관된 방식으로 빌드할 수 있음
    *   다양한 플러그인 제공하므로 많은 작업을 자동화시킬 수 있음

Maven을 이용한 웹 어플리케이션 실습

*   프로젝트 생성
    1.  Eclipse 실행 → File > New > Project
    2.  프로젝트 종류: Maven > Maven Project 선택
    3.  Workspace 경로: 기본값 선택
    4.  Archetype 선택 창: Artifact Id가 maven-archetype-webapp인 Archetype 선택
        *   Archetype: 프로젝트 템플릿의 일종으로, 자동으로 생성되는 파일이나 라이브러리 설정을 결정
    5.  Archetype parameter 창: Artifact Id에 프로젝트명 입력
        *   Group Id: 프로젝트를 진행하는 회사나 팀의 도메인 이름을 역으로 입력하는 것이 일반적
        *   Artifact Id: 해당 프로젝트의 이름을 입력
        *   버전: 기본값인 0.0.1-SNAPSHOT 설정이 일반적
        *   Package: 자동으로 Group Id와 Artifact Id가 조합됨
*   프로젝트 설정
    1.  Java Compiler 버전을 기본값에서 1.8로 수정
        *   pom.xml 내 plugins 태그 아래에 다음의 코드 추가
            *                   
        *   Maven 설정과 Eclipse 프로젝트 설정 연동
            *   프로젝트 우클릭 → Properties → Maven → Java EE Integration → Enable Project Specific Settings 선택 → Apply and Close
    2.  Servlet 라이브러리 추가
        *   webapp > index.jsp를 열면 HttpServlet을 찾을 수 없다는 오류가 발생
            *   Dynamic Web Application를 만들 때는 WAS Runtime으로 Tomcat을 지정하면 Tomcat에 내장된 Servlet 라이브러리를 별도의 처리 없이도 Eclipse에서도 사용할 수 있음
            *   Maven 프로젝트로 생성한 경우 WAS Runtime이 지정되지 않은 상태이므로 Servlet 라이브러리를 찾을 수 있도록 별도의 처리를 해줘야 함
        *   pom.xml 내 dependencies 태그 아래에 다음의 코드 추가
            *                   
            *   scope의 종류
                *   complie: 기본값으로, 컴파일할 때 필요하며, 테스트 및 런타임에도 클래스 패스에 포함됨
                *   runtime: 컴파일할 땐 필요하지 않지만 실행 시에 필요하며, 예시로 JDBC 드라이버 등이 있음
                *   provided: 컴파일할 때 필요하지만 실제 런타임에는 컨테이너 등에서 제공되는 모듈로, servlet, JSP api 등이 해당되며, 배포 시엔 제외됨
                *   test: 테스트 코드를 컴파일할 때 필요하며, 테스트 시 클래스 패스에 포함되지만 배포 시엔 제외됨
    3.  JSTL 라이브러리 추가
        *   JSTL은 Tomcat이 기본으로 제공하지 않으므로, 컴파일할 때와 배포할 때 모두 필요함
            *   scope를 별도로 설정하지 않음
        *   pom.xml 내 dependencies 태그 아래에 다음의 코드 추가
            *                   
    4.  Dynamic Web Module 버전을 기본값에서 3.1로변경
        *   Dynamic Web Module 버전 2.4부터 EL을 지원하므로 EL을 정상 출력하기 위해 버전을 3.1로 변경
        *   webapp > WEB-INF > web.xml을 다음의 코드로 수정
            *                   
        *   Eclipse → Navigator → 프로젝트 > .settings > org.eclipse.wst.common.project.facet.core.xml 수정
            *   <installed facet="jst.web" version="2.3"/>의 버전 2.3을 3.1로 수정

**※ Eclipse의 버그로 JSP 파일 실행 시 오류나는 경우**

*   수정 전의 데이터와 수정된 데이터가 섞여서 실행되어 오류가 발생하는 것이므로 웹 어플리케이션을 초기화하고 다시 실행해야 함
    1.  기존 Tomcat 종료
    2.  프로젝트 우클릭 → Maven > Update Project 실행
    3.  Servers view → 기존 Tomcat Runtime 삭제
    4.  Project → Clean 실행
    5.  Project Explorer → Servers 삭제

Maven 프로젝트의 디렉토리 구조

*       
    *   Java 소스코드는 src/main/java 디렉토리에 생성
        *   자동으로 생성되지 않을 경우 별도로 만들어줘야 함
    *   웹 어플리케이션과 관련된 HTML, CSS 등의 파일은 src/main/webapp 폴더에 작성

Maven 기본

*   pom.xml 내 태그의 의미
    *   project: pom.xml 파일의 최상위 Root Element
    *   modelVersion: POM 모델의 버전
    *   groupId: 프로젝트를 생성하는 조직의 고유 ID를 의미하며, 일반적으로 도메인 이름을 역으로 작성함
    *   artifactId: 프로젝트에 의해 생성되는 artifact의 고유 ID를 의미함
        *   Maven을 이용해 pom.xml을 빌드하면 artifactId-version.packaging 파일이 생성됨
    *   packaging: 프로젝트의 packaging 형태를 결정하며, jar, war, ear 등이 있음
    *   version: 프로젝트의 현재 버전을 의미함
        *   프로젝트가 개발 중일 땐 SNAPSHOT을 접미사로 사용함
        *   Maven의 버전 관리 기능은 라이브러리 관리를 편하게 하도록 도와줌
    *   name: 프로젝트명을 의미함
    *   url: 프로젝트의 웹사이트가 있을 경우 웹사이트의 URL
    *   dependencies: 필요한 라이브러리를 의미하며, Maven 의존성 관리 기능의 핵심

  

#Java #maven #웹 프로그래밍 #BACK END #인터넷 강의 #웹 어플리케이션 #백엔드 #내용 정리 #edwith #부스트코스