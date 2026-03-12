---
title: "39 DOM API (Front End)"
pubDatetime: 2020-04-11T20:58:22+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 3, 웹 앱 개발: 예약서비스 1/4

학습일: 2020년 4월 11일

* * *

## 2\. DOM API 활용 - FE

DOM Node 조작하기

*   DOM을 다루는 다양한 API가 존재
*   DOM API의 종류
    *   document 객체에 대해 사용할 수 있는 API: [HTML DOM Document Objects](https://www.w3schools.com/jsref/dom_obj_document.asp)
    *   element 객체에 대해 사용할 수 있는 API: [HTML DOM Element Objects](https://www.w3schools.com/jsref/dom_obj_all.asp)
    *   DOM을 탐색하는 DOM API
        *   유용한 속성을 기준으로 탐색
            *   tagName
            *   textContent: 해당 element의 하위 텍스트 노드의 값을 조회하거나 바꿀 수 있음
            *   nodeType
        *   특정 요소를 기준으로 이동하며 탐색
            *   childNodes
            *   firstChild
            *   firstElementChild
            *   parentElement
            *   nextSibling
            *   nextElementSibling
            *   **※ ...Child 와 ...ElementChild의 차이: ...ElementChild는 텍스트 노드나 공백을 탐색에서 제외함**
    *   DOM을 조작하는 DOM API
        *   removeChild( )
        *   appendChild( )
            *   기존 노드의 자녀로 대상 노드를 추가하는 메서드
            *   형태: 기존 노드.appendChild(대상 노드) 
            *   예시  
                  
                let a = createElement(태그)  
                →  let b = createTextNode(문자열)  
                →  a.appendChild(b)
        *   insertBefore( )
            *   대상 노드를 기존 노드의 앞으로 이동, 삽입하는 메서드
            *   형태: 부모 노드.insertBefore(대상 노드, 기존 노드)
        *   cloneNode( )
        *   replaceChild( )
        *   closest( )
            *   형태: 기존 노드.closest(선택자)
            *   선택자에 해당하는 제일 근접한 상위 요소를 찾는 메서드
    *   HTML을 문자열로 처리해주는 DOM API
        *   innerText: 대상 노드의 텍스트 값을 조회하거나 바꿀 수 있음
        *   innerHTML: 대상 노드의 내부 HTML 문자열을 조회하거나 바꿀 수 있음
        *   insertAdjacentHTML(위치, html): 대상 노드를 기준으로 특정 위치에 HTML 문자열을 삽입하는 메서드
            *   위치: 노드 시작 태그 전/후, 노드 종료 태그 전/후의 4가지
        *   **※ innerText, innerHTML은 getter, setter의 역할을 동시에 한다는 점이 특징**
    *   **※ HTML 요소를 추가하는 API 간 속도 비교**  
        *   appendChild > insertAdjacentHTML > innerHTML 순으로 빠름
        *   참고자료: [insertAdjacentHTML-vs-innerHTML-vs-appendChild · jsPerf](https://jsperf.com/insertadjacenthtml-perf/3)
*   **! 특정 메서드를 사용할 때 브라우저별 호환성 이슈가 있는지 확인해야 함**
*   **※ 텍스트 노드: 텍스트만을 데이터로 가지는 노드**
    *   예시) <p>테스트</p>: '테스트'는 <p>의 하위 텍스트 노드
*   **※ Google Chrome 개발자도구 Tip**
    *   특정 element가 선택되었을 때, Console에서 $0으로 해당 element에 바로 접근할 수 있음

DOM API 실습

*   querySelectorAll( ) 메서드의 특징
    *   실행결과로 nodeList를 반환
    *   nodeList는 list 형태의 데이터이나, forEach( ) 메서드를 사용할 수 없으므로 배열로 만들어줘야 함
        *    array.slice.call( ), array.from( ) 등의 메서드로 배열로 변환한 뒤 forEach( ) 메서드를 사용
            *   array.from( ) 메서드는 IE 호환성 이슈가 있으므로 polyfill 코드로 대체해서 활용
        *   참고자료: [Array.form() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
*   **※ Polyfill: 특정 기능을 지원하지 않는 이전 버전의 브라우저에서 최신 기능을 제공하는 데 필요한 코드**
    *   참고자료: [Polyfill - 용어 사전 | MDN](https://developer.mozilla.org/ko/docs/Glossary/Polyfill)

  

#API #DOM #웹 프로그래밍 #내용 정리 #edwith #부스트코스