---
title: "[JS] handlebars 라이브러리를 활용한 템플릿 작업 ... Part 2"
pubDatetime: 2020-07-08T16:03:23+09:00
description: "티스토리 아카이브"
---

![](./images/104.png)

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 4, 웹 앱 개발: 예약서비스 2/4

학습일: 2020년 7월 8일

* * *

## 2\. 라이브러리 활용과 클린 코드 - FE

### handlebars 라이브러리를 활용한 템플릿 작업

#### 배열이 포함된 데이터 처리하기

실제로 템플릿을 작업할 때 다루는 데이터는 첫 예제처럼 단순하지 않을 가능성이 높습니다. 이번에는 데이터에 배열이 포함되었을 때의 처리 방법을 살펴보겠습니다.

```
var data = {
  id : 13,
  name : "Dev",
  content : "Testing...",
  like : 5, 
  comment : ["1st comment!", "lol", "nice post!"]
};
```

comment 속성의 값이 3개의 원소로 이루어진 배열로 바뀌었습니다. 이런 경우에는 handlebars 라이브러리가 제공하는 반복문 기능을 사용해 대처할 수 있습니다. 템플릿을 다음과 같이 바꿔줍니다.

```
<script type="myTemplate" id="listTemplate">
  <li>
    <div class="author">게시자 : {{name}}</div>
    <div class="content">{{content}}</div>
    <div class="like">좋아요 갯수 :<span> {{like}}</span></div>
    <div class="comment">
      <h3>댓글 목록</h3>
      {{#each comment}}
        <div>{{@index}}번째 댓글 : {{this}}</div>
      {{/each}}
    </div>
  </li>
</script>
```

#each 키워드를 활용해, comment 속성의 각 원소를 돌며 댓글 내용을 담은 div 요소를 생성해줍니다.

#### 더 많은 데이터 처리하기

그렇다면 데이터가 더 많아졌을 때는 어떨까요? 게시글 데이터가 여럿으로 늘었을 경우를 가정해봅시다.

```
var data = [
  {
    id : 13,
    name : "Dev",
    content : "Testing...",
    like : 5, 
    comment : ["1st comment!", "lol", "nice post!"]
  },
  {
    id : 7,
    name : "Red",
    content : "Hi!",
    like : 2, 
    comment : ["Welcome", "sup?"]
  },
  {
    id : 113,
    name : "Sam",
    content : "Passing by...",
    like : 11, 
    comment : []
  }
];
```

이럴 때는 데이터 자체에 메서드를 사용하는 방법이 있습니다. 하나는 forEach, 다른 하나는 reduce입니다.

```
// forEach 메서드 사용
let combinedHtml = "";

data.forEach(function (item, index) {
  combinedHtml += bindTemplate(item);
}

// reduce 메서드 사용
const combinedHtml = data.reduce(function (prev, next) {
  return prev + bindTemplate(next);
}, "");
```

이렇게 하면 템플릿에 각각의 데이터가 반영된 뒤, 여러 템플릿이 이어진 HTML 문자열이 반환됩니다.

forEach와 reduce가 아닌, for 또는 map, filter 등 기타 반복문으로도 얼마든지 응용이 가능합니다.

handlebars 라이브러리는 조건문을 위한 문법 또한 제공하므로, 특정 조건 상황을 처리할 수도 있습니다. 댓글이 없을 경우에는 자동으로 하트를 달아주는 코드를 구현해보죠.

```
<script type="myTemplate" id="listTemplate">
  <li>
    <div class="author">게시자 : {{name}}</div>
    <div class="content">{{content}}</div>
    <div class="like">좋아요 갯수 :<span> {{like}}</span></div>
    <div class="comment">
      <h3>댓글 목록</h3>
      {{#if comment}}
        {{#each comment}}
          <div>{{@index}}번째 댓글 : {{this}}</div>
        {{/each}}
      {{else}}
        <div>♥</div>
      {{/if}}
    </div>
  </li>
</script>
```

고전적인 조건문 키워드인 if와 else를 사용해, comment 속성의 값이 없는 경우 ♥를, 있는 경우 댓글 목록을 출력해줍니다.

#### 템플릿의 복잡성을 낮출 수 있는 Helper 기능

하지만 조건문이나 반복문 등, 처리해야 하는 로직을 추가될 때마다 템플릿에 계속 입력한다면 템플릿이 너무 복잡해집니다. View를 담당하는 템플릿에 로직이 들어가는 상황은 가능한 한 피할수록 좋죠.

이런 문제를 방지하려면 Handlebars 라이브러리의 Helper 기능을 활용하면 됩니다. Helper를 활용해 like 속성의 값이 5 이상, 0, 그리고 그 사이일 때 다른 문구를 출력해보겠습니다.

```
<script type="myTemplate" id="listTemplate">
  <li>
    <div class="author">게시자 : {{name}}</div>
    <div class="content">{{content}}</div>
    
    {{#printStrByLike like}}
    {{/printStrByLike}}
    
    <div class="comment">
      <h3>댓글 목록</h3>
      {{#if comment}}
        {{#each comment}}
          <div>{{@index}}번째 댓글 : {{this}}</div>
        {{/each}}
      {{else}}
        <div>♥</div>
      {{/if}}
    </div>
  </li>
</script>
```

기존의 '좋아요 갯수' 자리에, printStrByLike라는 키워드가 대신 들어갔습니다. 이 키워드로 Helper를 만들어주면 됩니다. Helper를 만드는 방법은 아래의 JavaScript 코드를 추가해주면 됩니다.

```
Handlebars.registerHelper("printStrByLike", function (like) {
  if (like > 4) return `<span>인기가 많으시네요. ${like} 명이 좋아합니다!</span>`;
  if (like < 1) return `<span>아직 좋아하는 사람이 없네요...</span>`;
  return `<span>${like} 명이 좋아합니다</span>`
}
```

이미 눈치채신 분도 있겠지만, Helper 기능은 JavaScript를 그대로 활용할 수 있으므로 굉장히 강력하고 유용한 기능입니다. 잘 활용하면 생산성을 상당히 높일 수 있습니다.

* * *

더 알아보기

> Handlebars 외, 자주 사용되는 다른 템플릿 라이브러리

Handlebars의 토대가 되었다고 할 수 있는 Mustache가 대표적이고, Underscore, Pug 등도 자주 사용됩니다.

> ES2015에서 소개된 템플릿 리터럴의 고급 기능인 Tagged Template Literal의 개념과 사용 방법

템플릿 리터럴을 함수의 인자로 쓸 수 있으며, 함수를 통해 문자열을 조작할 수 있도록 하는 기능입니다. 아래 예제를 보면 이해가 쉽습니다.

```
const name = "Dev";
const age = 13;

function tellChild(strings, name, age) {
  const str0 = strings[0];	// ""
  const str1 = strings[1];	// " is "
  const str2 = strings[2];	// ""
  
  const isChild = age < 20;
  let ageStr;
  ageStr = isChild ? "a child" : "an adult"
  
  return `${name}${str1}${ageStr}`;
}

const output = tellChild`${name} is ${age}`;

console.log(output);		// Dev is a child
```

* * *

#### 참고자료

[Handlebars](https://handlebarsjs.com/)

[\[JavaScript\] 예제로 확인하는 handlebars.js 사용 방법](https://programmingsummaries.tistory.com/381)

[Top 14 Templating Engines for JavaScript To Improve and Simplify Your Workflow 2019](https://colorlib.com/wp/top-templating-engines-for-javascript/) - Colorlib

[Template literals - JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) | MDN

* * *

  

#javascript #template #Library #front end #Helper #Handlebars #template literal #tagged template literal