---
title: "스크롤하면 상단에 달라붙는 내비게이션 바"
pubDatetime: 2020-05-08T16:24:15+09:00
description: "티스토리 아카이브"
---

일반적인 웹페이지는 아래로 스크롤하면 웹페이지의 내용도 따라서 움직이고, 브라우저의 높이보다 내용이 길 경우 상단의 경계를 넘어간 부분은 보이지 않게 됩니다.  
그렇지만 JavaScript를 활용하면 스크롤과 상관없이 화면에 계속 남아있게 할 수 있습니다.  
이번 튜토리얼에선 페이지 중간에 있다가, 스크롤을 내리면서 페이지 상단에 고정되는 내비게이션 바를 만듭니다.

* * *

### 튜토리얼 정보

*   출처: [JavaScript30](https://javascript30.com/)
*   이름: Day 24 - Sticky Nav
*   언어: JavaScript, CSS
*   목표: 페이지 중간에 있다가, 스크롤을 밑으로 내리면 페이지 상단에 고정되는 내비게이션 바 만들기

### 진행 기간

2020년 5월 8일

* * *

## 마우스 스크롤 이벤트와 내비게이션 바 연동시키기

내비게이션 바가 스크롤에 따라 올라가다가 화면 상단을 만나면 고정되게 하기 위해선 두 가지의 로직이 필요합니다.

1.  내비게이션 바는 마우스 스크롤 이벤트가 발생할 때마다 움직인다.
2.  내비게이션 바가 화면 상단에 위치하게 되면 움직이지 않는다.

우선 변수 nav를 만들고, querySelector를 이용해 내비게이션 바를 지정해줍니다.  
요소의 offsetTop이라는 속성을 활용하면 현재 페이지의 상단 경계에서 해당 요소와의 거리가 어떻게 되는지 알 수 있습니다.  
그리고 이를 활용해 내비게이션 바를 특정 시점에 고정시켜주는 fixNav() 메서드를 만듭니다.  
fixNav() 메서드의 작동 방식은 다음과 같습니다.

> 1.  scrollY (각주: 현재 세로로 스크롤한 길이를 나타냅니다.)와 내비게이션 바의 시작위치를 비교
> 2.  내비게이션 바의 위치보다 scrollY가 더 클 경우 (각주: 내비게이션 바가 시작되는 위치를 넘어서 스크롤되었음을 의미합니다.) 내비게이션 바를 감싸고 있는 body 태그에 fixed-nav 클래스를 추가
> 3.  내비게이션 바의 위치보다 scrollY가 작을 경우 (각주: 내비게이션 바가 아직 화면 상단에 도달하지 못했음을 의미합니다.) body 태그에서 fixed-nav 클래스를 제거
> 4.  fixed-nav 선택자 하위의 내비게이션 바에는 position 속성을 fixed로 지정

*   참고 코드
    ```
    // JavaScript
    const nav = document.querySelector('#main');
    const navTop = nav.offsetTop;
    function fixNav() {
      if (window.scrollY >= navTop) {
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
      }
    }
    
    window.addEventListener('scroll', fixNav);
    ```
    
*   `/* CSS */ .fixed-nav nav { position: fixed; box-shadow: 0 5px rgba(0, 0, 0, 0.1); }`

※ 추가로 box-shadow 속성을 활용하면 그림자를 추가해 입체감을 줄 수 있습니다.

## 내비게이션 바가 화면 상단에 달라붙는 효과 자연스럽게 다듬기

내비게이션 바가 화면 상단에 달라붙는 효과를 구현하고 스크롤을 위아래로 움직이며 테스트하다보면, 달라붙는 순간 내비게이션 바 바로 밑의 요소가 갑자기 확 올라가는 현상을 만나게 됩니다.  
내비게이션 바의 position 속성이 fixed로 되는 순간, 웹페이지 흐름에서 내비게이션 바의 높이만큼을 인식하지 않기 때문입니다.  
해결 방법은 간단합니다.  
내비게이션 바가 달라붙는 순간, 인식하지 않게 되는 내비게이션 바의 높이만큼의 빈 공간을 추가해주는 것이죠.

> 1.  내비게이션 바의 위치보다 scrollY가 클 경우 내비게이션 바의 높이만큼을 상단 padding에 더합니다.
> 2.  내비게이션 바의 위치보다 scrollY가 작을 경우 상단 padding 제거합니다.

*   참고 코드
*   `// JavaScript function fixNav() { if (window.scrollY >= navTop) { document.body.classList.add('fixed-nav'); document.body.style.paddingTop = nav.offsetHeight + 'px'; } else { document.body.classList.remove('fixed-nav'); document.body.style.paddingTop = 0; } }`

## (추가) 내비게이션 바에 로고 나타내기

내비게이션 바가 달라붙는 코드를 응용해, 내비게이션 바가 페이지 중간에 있을 땐 보이지 않다가 상단에 달라붙으면 보이는 로고를 만들 수 있습니다.

> 1.  로고 요소를 추가하고, CSS로 max-width 속성을 0으로 지정합니다.
> 2.  fixed-nav가 상위 요소에 추가되면 max-width를 원하는 값으로 지정합니다. (예시에선 500px)
> 3.  (선택) transition 속성 등을 추가로 설정해 부드러운 움직임을 구현할 수 있습니다.

*   참고 코드
    ```
    /* CSS */
    li.logo {
      max-width: 0;
      overflow: hidden;
      background: white;
      transition: all .5s;
      font-weight: 600;
      font-size: 30px;
    }
    .fixed-nav li.logo {
      max-width: 500px;
    }
    ```
    

## (추가) 내비게이션 바가 상단에 달라붙으면 본문 내용 확대하기

한 가지 더 응용해보는 것은 어떨까요?  
내비게이션 바가 상단에 달라붙는 시점에 본문 내용을 확대하면서 강조하는 효과를 줄 수도 있습니다.

> 1.  본문 내용을 감싸는 요소를 만들고, .site-wrap이라는 클래스를 지정합니다.
> 2.  .fixed-nav가 .site-wrap의 상위 요소의 클래스로 추가되면 transform 속성을 활용해 확대해줍니다.
> 3.  (선택) transition 속성 등을 추가로 설정해 부드러운 움직임을 구현할 수 있습니다.

*   참고 코드
    ```
    /* CSS */
    .site-wrap {
      max-width: 700px;
      margin: 70px auto;
      background: white;
      padding: 40px;
      text-align: justify;
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
      transform: scale(0.98);
      transition: transform 0.5s;
    }
    .fixed-nav .site-wrap {
      transform: scale(1);
    }
    ```
    

* * *

[GitHub 저장소 링크](https://github.com/dev-song/_home/tree/master/projects/JavaScript30/Day%2024/tutorial-Sticky-Nav)

* * *

  

#자바스크립트 #css #javascript #튜토리얼 #fixed #sticky #javascript30 #내비게이션 바