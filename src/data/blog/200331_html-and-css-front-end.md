---
title: "HTML과 CSS (Front End)"
pubDatetime: 2020-03-31T00:55:21+09:00
description: "티스토리 아카이브"
---

사이트: edwith

강의: [\[부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 1, 웹 프로그래밍 기초

학습일: 2020년 2월 28일, 29일

* * *

## 2\. HTML - FE

HTML 태그

*   다양한 종류가 있으며, 각 쓰임새에 맞게 쓰는 것이 권장됨
*   쓰임새에 맞게 HTML 태그를 작성하는 것을 '의미론적(Semantic)'이라고 함

HTML 레이아웃 태그

*   레이아웃: HTML 화면의 기본적 구성 요소
    *   예시) 상단(header), 하단(footer), 내비게이션 바(nav) 등
    *           
        의미론적으로 구성된 HTML 레이아웃
        
*   header, footer 등은 쓰임새가 이름에 드러나있을 뿐, 실질적으론 div와 동일하게 block element로 간주됨
*   HTML 본문의 경우 브라우저 호환성을 고려해야 하므로 PC와 Mobile에서의 작성 방식이 다소 다름
    *   PC: 브라우저 호환성 이슈가 있어 레이아웃의 쓰임새를 div의 class/id에 표시
    *   Mobile: 브라우저 호환성 이슈가 적어 레이아웃의 쓰임새를 HTML5에서 도입된 Semantic 태그들로 표시

HTML 구조화 설계 (HTML Structure Design)

*   웹사이트의 구조에 맞는 태그를 계층적으로 설계하는 것
    *           
        표준 페이지 디자인과 주요 구성요소
        
*   어떤 태그를 써야하는지에 대한 정답이 없으므로 동료들과 의논하여 결정
    *   **단, div의 남용은 되도록 피하는 것이 좋음**
    *   목록 또는 연달아서 이어지는 항목의 경우 ul > li를 자주 활용함

Class와 id 속성

*   id(identifier): 하나의 HTML 문서에 하나만 사용할 수 있음
    *   고유한 id 값을 통해 HTML 요소들을 개별적으로 제어할 수 있고 검색하기 쉬움
    *   중복해서 사용하더라도 오류가 나는 것은 아니지만, 의미론적으로 하나만 사용하는 것이 권장됨
*   class: 하나의 HTML 문서 안 여러 곳에 중복해서 사용할 수 있음
    *   하나의 CSS 스타일을 여러 곳의 HTML 요소에 적용할 때 활용할 수 있음
    *   웹페이지의 전체적인 스타일을 일관성 있게 유지할 수 있도록 해줌
    *   공백(" ")을 기준으로, 하나의 태그에 여러 개의 class를 중첩해서 적용할 수 있음
*   class, id의 명명 원칙(Naming Convention)은 일관적이어야 함
    *   한 눈에 의미를 파악할 수 있어야 하고, 동료가 있을 경우 동료와의 논의는 필수적임

## 3\. CSS - FE

CSS 선언 방법

*   형태: 선택자 {속성: 값;}
    *   띄어쓰기가 없더라도 인식에는 문제가 없으나 가독성을 위해 해주는 것이 좋음
*   HTML 페이지에 CSS 스타일을 적용하는 3가지 방법
    *   inline: HTML 태그 각각에 style 속성을 직접적으로 지정
        *   단점: 구조를 표현하는 HTML 안에 CSS가 병합되어 유지보수가 어려움
    *   internal: HTML head 태그 안 style 태그에 스타일을 일괄 작성
        *   장점: 클라이언트가 서버에 파일을 추가적으로 요청할 필요가 없고, 관리할 파일도 줄어듦
        *   단점: 지정하려는 스타일의 내용이 많아질 경우 body의 내용이 아래로 밀림
    *   external: HTML head 태그 안에 외부 CSS 파일과 연결된 link 태그를 삽입
        *   대부분의 경우 사용되는 방식

상속과 우선순위 결정

*   상속: 상위 HTML 요소의 스타일이 지정되면 자동으로 하위 요소에도 동일하게 적용되는 것
*   예외
    *   박스 모델, 즉 배치와 관련된 속성은 상속되지 않으며 선언된 요소에만 적용됨
        *   예시) border, margin, padding 등
    *   CSS의 C, Cascading의 의미
        *   특정 HTML 요소에 대한 여러 스타일 정보가 있을 때 '경쟁'에 의해 적용될 스타일이 결정되는 것
        *   '경쟁'을 좌우하는 요소
            *   스타일 선언 방식의 우선순위: inline > internal = external
            *   선택자 호출의 구체적인 정도: 선택자 간 위계 명시 > 선택자 단독
            *   선택자 종류의 우선순위: id > class > tag
        *               
            CSS 선택자들의 우선순위가 결정되는 방식
            

CSS 선택자(Selector)

*   선택자의 종류
    *   **선택자**
        
        **tag**
        
        **class**
        
        **id**
        
        HTML에서의 표현
        
        <tag>
        
        <tag class="class\_name">
        
        <tag id="id\_name">
        
        CSS에서의 호출
        
        tag {property: value;}
        
        .class\_name {property: value;}
        
        #id\_name {property: value;}
        
*   선택자의 다양한 활용 방법
    *   그룹 선택: 여러 요소에 동일한 스타일 적용
        *   형태: 선택자1, 선택자2, ... {property: value;}
    *   자손 요소 선택: 특정 요소의 자손 요소(모든 하위 요소) 중 특정 요소에 스타일 적용
        *   형태: 선택자1 선택자2 {property: value;}
    *   자식 요소 선택: 특정 요소의 자식 요소(바로 하위 요소)에 스타일 적용
        *   형태: 선택자1 > 선택자2 {property: value;}
            *   선택자2가 여럿 있을 경우 선택자1의 자식 요소인 선택자2에게만 스타일이 적용됨
    *   n번째 요소를 선택: 특정 요소가 여럿일 때, n번째 요소에 스타일 적용
        *   형태: 선택자:nth-child(n) {property: value;}
            *   n은 1부터 시작
        *   **※ nth-child(n)과 nth-of-type(n)의 차이점**
            *   선택자1 선택자2:nth-child(n): 선택자1의 자손 요소 중 n번째 요소가 선택자2일 때 스타일 적용
            *   선택자1 선택자2:nth-of-type(n): 선택자1의 자손 요소인 선택자2 중에서 n번째 요소에 스타일 적용

CSS 기본 스타일 변경하기

*   폰트 색상
    
    *   형태: 선택자 {color: value;}
    *   Value로 사용할 수 있는 값: 색상 이름, RGB 값, RGBA 값(투명도 포함), 16진수(HEX) 값 등
        *   참고자료: [color - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color) 
    
    *   폰트 크기
        *   형태: 선택자 {font-size: value;}
        *   Value로 사용할 수 있는 값: 픽셀(px), 상위 요소 폰트 크기 대비 상대값(em)
            *   em: 상위 요소의 폰트 크기를 기준인 1em으로 간주, 상대적 배율로 자식 요소의 폰트 크기 설정
            *   예시) 폰트 크기가 20px인 요소의 자식 요소가 폰트 크기를 2em으로 설정할 경우: 40px 적용
            *   참고자료: [font-size - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-size)
    *   배경 색상
        *   형태: 선택자 {background-color: value;}
        *   Value로 사용할 수 있는 값: 폰트 색상과 동일
            *   참고자료: [background-color - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-color)
    *   폰트 글씨체
        *   형태: 선택자 {font-family: value;}
        *   Value로 사용할 수 있는 값: 폰트 종류
            *   예시) "Gulim", monospace, sans-serif 등
            *   여러 종류의 폰트를 쉼표를 이용해 나열하면 브라우저가 앞의 폰트를 지원하지 않을 경우 순차적으로 뒤의 폰트를 적용
            *   참고자료: [font-family - CSS: Cascading Style Sheets](https://developer.mozilla.org/ko/docs/Web/CSS/font-family) | MDN

CSS 레이아웃: HTML 요소가 배치되는 방법

*   레이아웃 작업 (= 렌더링 과정): HTML 요소를 화면에 배치하는 일
*   HTML 요소의 배치 순서
    *   일반적으로 위에서 아래로 순서대로 블럭을 이루며 배치됨
    *   수직적 배치 뿐만이 아닌 다양한 배치를 위해 CSS의 속성을 추가적으로 활용
*   배치 관련 주요 CSS 속성
    *   display: 요소의 배치 방향(상하/좌우) 결정
        *   형태: 선택자 {display: value;}
        *   Value로 사용할 수 있는 값
            *   block: HTML 요소 대부분(div, p 등)의 기본 display 속성으로, 블록 쌓기처럼 위에서 아래로 쌓임
            *   inline: HTML 요소 일부(span, a 등)의 기본 display 속성으로, 위아래가 아닌 좌우 방향, 우측 여백이 가득찰 경우 아래쪽으로 이어 배치됨  
                *   높이와 넓이를 지정해도 반영되지 않음
            *   inline-block: 블록 쌓기처럼 위에서 아래로 쌓임
            *   참고자료: [display - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/display)
    *   position: 요소가 배치되는 위치의 성질(상대적/절대적) 결정
        *   형태: 선택자 {position: value;}
        *   Value로 사용할 수 있는 값
            *   static: 모든 HTML 요소의 기본 속성으로, 순서대로 배치됨
            *   absolute: 상위 HTML 요소 중 static이 아닌 요소가 기준점이 됨
                *   기준점에 따라 별도로 지정된 위치(top/left/right/bottom)에 배치
                *   top/left 값을 0, 0으로 지정해주지 않으면 의도와 반대로 작동함
            *   relative: 해당 요소가 원래 위치해야 할 곳이 기준점이 됨
                *   기준점에 따라 별도로 지정된 위치(top/left/right/bottom)에 배치
                *   별도로 위치를 지정하지 않을 경우 static과 동일하게 동작함
                    *   absolute와 달리 top/left 값을 반드시 지정해주지 않아도 됨
                    *   특정 요소의 변화 없이 absolute 지정된 하위 요소의 기준점으로 활용할 수 있음
            *   fixed: HTML 요소를 화면 이동과 상관없이 특정 위치에 고정할 수 있음
                *   예시) 광고 등
        *   참고자료: [position - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/position)
    *   margin: 특정 HTML 요소와 주변(상/하/좌/우) 요소와의 간격 결정
        *   형태
            *   선택자 {margin-top: value1; margin-right: value2; margin-bottom3: value; margin-left4: value;}
            *   선택자 {margin: value1 value2 value3 value4;}
                *   순서대로 상/우/하/좌 방향으로 적용됨
            *   선택자 {margin: value1 value2;}
                *   순서대로 상하/좌우 방향으로 적용됨
            *   선택자 {margin: value;}
                *   상하좌우 모두에 적용됨
        *   참고자료: [margin - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/margin)
    *   float: HTML 요소와 기존에 배치되어 있는 요소와의 관계 결정
        *   float을 설정할 경우, 기존 요소들의 flow에 영향받지 않음
            *   별도 레이어를 설정한 것과 유사하게 동작
        *   형태: 선택자 {float: value;}
        *   Value로 사용할 수 있는 값: left, right
        *   width 속성을 함께 지정하여 2단, 3단 레이아웃 구현 가능
            *   예시) [네이버 모바일 웹페이지](https://m.naver.com/)
        *   참고자료: [float - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/float)
    *   box-model: 디자인 구성요소들로 이루어진, HTMl 요소를 둘러싸고 있는 상자(box) 모양의 구조
        *   구성요소
            *   content: box의 내용 (텍스트, 이미지 등)
            *   padding: content를 둘러싸고 있는 영역으로, 요소의 background-color 속성이 적용됨
            *   border: padding을 둘러싸고 있는 경계선
            *   margin: border를 둘러싸고 있는 영역으로, 요소의 background-color 속성이 적용되지 않음
            *   box-shadow: border 외부의 또 다른 경계선으로, 일반적으로 그림자 효과로 활용됨
        *   box-model의 구성요소를 지정하는 속성들은 일반적으로는 상속되지 않음
        *   참고자료: [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
    *   box-sizing: 해당 HTML 요소의 box-model의 크기를 결정하는 기준을 설정함
        *   형태: 선택자 {box-sizing: value;}
        *   Value로 사용할 수 있는 값
            *   content-box: 기본값으로, width/height가 지정됐어도 padding에 따라 box-model이 커질 수 있음
            *   border-box: box-model의 크기는 고정한 채로 padding을 조절할 수 있음
        *   참고자료: [box-sizing - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)
*   HTML 요소의 크기: 부모 요소의 크기가 기준이 됨
    *   예시) 선택자1 > 선택자2 {width: 80%}: 선택자2의 너비는 선택자1 너비의 80%
*   레이아웃 구현 방법
    *   float 속성을 활용해 2단, 3단 칼럼 배치 구현
        *   최근에는 grid, flex 등 개선된 속성들이 도입되었으므로 브라우저 호환성을 감안해 활용
    *   요소를 특정 위치에 배치하기 위해선 position 속성에 absolute 값을 지정
        *   상위 요소의 position 속성은 relative로 지정해줘야 함
    *   내비게이션 역할의 HTML 요소 구현 시 display 속성에 inline-block 값을 지정

float 기반 샘플 화면 레이아웃 구성

*   clear: 해당 HTML 요소에 선행하는 요소의 float 속성을 인식할 지를 결정
    *   형태: 선택자 {clear: value;}
    *   Value로 사용할 수 있는 값
        *   left: 선행 float 요소 중 left 값을 가진 요소의 하단 경계를 기준점으로 함
        *   right: 선행 float 요소 중 right 값을 가진 요소의 하단 경계를 기준점으로 함
        *   both: 선행 float 요소 중 가장 아래쪽에 있는 요소의 하단 경계를 기준점으로 함
    *   참고자료: [clear - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/clear)
*   height: block-model의 높이를 결정
    *   float을 설정할 경우 height가 자동으로 지정되지 않으므로 수동으로 지정해줘야 정상적으로 표시됨
    *   형태: 선택자 {height: value;}
    *   참고자료: [height - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/height)
*   overflow: HTML 요소의 콘텐츠가 block-model의 크기보다 클 때의 처리방식을 결정
    *   자식 요소가 float 속성을 가질 경우, 배경색상 등 부모 요소의 속성이 자동으로 상속되지 않지만, overflow 속성을 통해 상속이 이루어지도록 할 수 있음
    *   형태: 선택자 {overflow: value;}
    *   Value로 사용할 수 있는 값
        *   visible: 콘텐츠가 block-model을 벗어나더라도 그대로 표시
        *   hidden: 콘텐츠가 block-moddel을 벗어나는 부분은 숨김(보이지 않음)
        *   scroll: 콘텐츠가 block-model을 벗어나는지와 상관없이 상하좌우 스크롤을 적용
        *   auto: 콘텐츠가 block-model을 벗어나는 경우에만 상하 스크롤을 적용
    *   참고자료: [overflow - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/overflow)

HTML, CSS 디버깅

*   Chrome 개발자 도구를 적극적으로 활용하는 방식으로 이루어짐
*   Chrome 개발자 도구의 구성요소
    *   Elements 탭
        *   해당 웹페이지의 HTML 요소를 HTML 소스 코드를 통해 확인할 수 있음
        *   특정 HTML 요소를 선택할 경우
            *   탭 하단에서 DOM 노드의 순서를 확인할 수 있음
            *   내부 Styles 상자
                *   해당 요소에 지정된 스타일 정보를 확인할 수 있음
                *   여러 스타일이 중복으로 지정된 경우, 취소선을 통해 어떤 스타일이 무시되고 적용되는지 알 수 있음
            *   내부 Computed 상자
                *   해당 요소가 갖고 있는 전체 스타일 정보를 확인할 수 있음
                *   Show all 옵션을 선택하여 개발자가 지정하지 않은 기본 스타일 정보도 확인할 수 있음
                    *   예시) display, margin, apdding 속성 등
    *   Sources 탭
        *   웹페이지를 이루고 있는 파일과 해당 파일의 소스 코드를 확인할 수 있음

  

#HTML #css #웹 프로그래밍 #인터넷 강의 #프론트엔드 #front end #내용 정리 #edwith #부스트코스