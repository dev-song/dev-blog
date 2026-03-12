---
title: "[JS] handlebars 라이브러리를 활용한 템플릿 작업 ... Part 1"
pubDatetime: 2020-07-08T15:37:58+09:00
description: "Handlebars 템플릿 라이브러리의 기본 사용법과 데이터를 HTML에 바인딩하는 과정을 예제로 설명한다"
tags:
  - "javascript"
  - "template"
  - "Library"
  - "front end"
  - "Handlebars"
---

![](./images/103.png)

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 4, 웹 앱 개발: 예약서비스 2/4

학습일: 2020년 7월 8일

* * *

## 2\. 라이브러리 활용과 클린 코드 - FE

### handlebars 라이브러리를 활용한 템플릿 작업

#### DOM 요소 조작과 템플릿의 활용

웹페이지는 수많은 요소들이 계층적으로 구조를 이루고 있고, 이 일부분을 변경하고자 할 때 DOM 요소에 일일이 접근하는 것은 너무나도 번거로운 일입니다.

그렇기 때문에 DOM 요소에 일일이 접근하지 않아도 되도록 HTML 문자열로 이루어진 일종의 양식을 만든 뒤, replace와 같은 메서드를 활용해 특정 문자열만 변환해주는 방법을 사용하게 되었습니다. 이를 템플릿 작업이라고 합니다.

그런데 웹사이트의 규모가 계속 커지면서 템플릿을 통해 문자열을 변환하는 것도 번거로워지게 되었고 (각주: 예를 들면, 한 템플릿에 10개 이상의 문자열을 변환해야 할 경우, replace 메서드를 10번 이상 사용해야 합니다.) 이를 간편하게 처리해줄 수 있는 라이브러리가 널리 쓰이기 시작했습니다.

ES2015에선 템플릿 리터럴이라는 기능이 추가되어 바닐라 JavaScript만으로도 템플릿 작업을 처리할 수 있게 되었지만, 아직도 상황에 따라서는 템플릿 라이브러리가 유용한 경우가 있습니다.

#### 템플릿 라이브러리, handlebars 기본 사용법

대표적인 템플릿 라이브러리인 handlebars를 사용하는 예시를 한 번 살펴보죠.

우선 웹페이지에 handlebars를 설치해야 합니다. 권장되는 방식은 npm 또는 yarn을 통한 설치이지만, 직접 다운로드한 파일을 불러오거나, CDN (각주: Contents Delivery Network, 콘텐츠 전송 네트워크의 약자로, 서버와 사용자 간의 물리적 거리를 줄여 로딩 시간을 최소화시키는 분산 서버 플랫폼입니다.)에 배포된 파일을 script 태그로 연결하는 방식도 사용할 수 있습니다. 본 예제에서는 CDN에 연결하는 방식을 사용합니다.

```
<!-- CDN 페이지: https://cdnjs.com/libraries/handlebars.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js"></script>
```

CDN 홈페이지에 들어가 Handlebars 라이브러리 주소를 복사한 후 문서에 연결합니다. 라이브러리의 모든 기능이 필요한 것이 아니기 때문에, 용량과 로딩 시간을 줄이기 위해 압축 (Minified) 버전을 선택합니다.

그 다음 사용할 템플릿을 입력합니다. 여기에서는 게시글 템플릿을 사용합니다. 브라우저에서 불러오는 것을 막기 위해, type 속성도 따로 입력해줍니다. 'text/template'이 일반적이지만, 'text/my-template' 등의 값도 가능합니다.

**! 주의: handlebars 라이브러리가 인식할 수 있도록, 변수의 형태가 {{변수}}와 같아야 합니다.**

```
<script type="text/template" id="listTemplate">
  <li>
    <div class="author">게시자 : {{name}}</div>
    <div class="content">{{content}}</div>
    <div class="like">좋아요 갯수 :<span> {{like}}</span></div>
    <div class="comment">
      <div>{{comment}}</div>
    </div>
  </li>
</script>
```

이제 이 템플릿을 불러와 Handlebars 라이브러리를 활용하는 JavaScript 코드를 작성합니다.

```
<script>
  const data = {
    id: 13,
    name: "Dev",
    content: "Testing...",
    like: 5,
    comment: "1st comment!"
  }

  const template = document.querySelector("#listTemplate").innerText;
  const bindTemplate = Handlebars.compile(template);
  const result = bindTemplate(data);
  
  document.querySelector("#target").innerHTML = result;
</script>
```

템플릿에 들어갈 데이터 집합 역할을 하는 data 객체가 눈에 띕니다. 게시자, 글 내용, 좋아요 수, 댓글 정보를 담고 있네요.

그 다음, querySelector 메서드로 템플릿을 찾고 innerText로 내용을 저장합니다. Handlebars 라이브러리의 compile 메서드를 템플릿에 사용하면, 템플릿에 포함된 변수명을 반영해 별도의 함수를 만들어줍니다. 각 변수에 대한 데이터만 입력해주면 그 데이터를 반영한 템플릿을 반환해주는 함수 (각주: 이와 같은 사전 작업을 pre-compile이라고도 합니다.) 말이죠.

마지막으로 데이터가 반영된 템플릿을 innerHTML 속성을 통해 페이지에 입력해주면 됩니다.

* * *

#### 참고자료

[CDN이란 무엇입니까? | Akamai KR](https://www.akamai.com/kr/ko/cdn/what-is-a-cdn.jsp)

[Installation | Handlebars](https://handlebarsjs.com/installation/#npm-or-yarn-recommended)

* * *

