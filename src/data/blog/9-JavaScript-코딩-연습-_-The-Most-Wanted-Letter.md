---
title: "9-JavaScript-코딩-연습-_-The-Most-Wanted-Letter"
pubDatetime: 2020-03-25T17:55:50+09:00
description: "티스토리 아카이브"
---

**문제 / 웹사이트**

[알파벳 현상수배 (The Most Wanted Letter)](https://js.checkio.org/mission/most-wanted-letter/) / CheckiO

**난이도**

Simple / 초급

**내용**

알파벳으로 이루어진 문장에서, 대소문자 구분 없이 가장 많은 빈도로 나타난 알파벳을 추출하는 함수를 작성하세요.

**_※ 가장 많은 빈도로 나타나는 알파벳이 여럿일 경우, 알파벳 순서로 맨 앞의 알파벳 하나만을 추출합니다._**

**예시**

```
mostWanted("Hello World!") == "l"
mostWanted("How do you do?") == "o"
mostWanted("One") == "e"
mostWanted("Oops!") == "o"
mostWanted("AAaooo!!!!") == "a"
mostWanted("abe") == "a"
```

* * *

모범 답안

```
"use strict";

function mostWanted(data) {
    s = data.toLowerCase().split("").sort()
    max = 0
    for(c of "abcdefghijklmnopqrstuvwxyz".split("")){
        n = s.indexOf(c) >= 0 ? s.lastIndexOf(c) - s.indexOf(c) + 1 : 0
        if(n > max){
            max = n
            maxc = c
        }
    }
    return maxc
}

// Comments to think about
	// avoid using indexOf and lastIndexOf inside the for loop because they are both O(n)
```
```
"use strict";

function mostWanted(data) {
    let C = {'a': 0}, winner = 'a';
    for (let x of data.toLowerCase())
        if (x.match(/[a-z]/)) {
            if (x in C) C[x]++; else C[x] = 1;
            if (C[x] > C[winner] || C[x] == C[winner] && x < winner) winner = x;
        }
    return winner;
}
```
```
"use strict";

function mostWanted(data) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let wanted = {char: '', count : 0};
    for (let char of chars) {
        var count = data.toLowerCase().split(char).length;
        if (count > wanted.count) {
            wanted.char = char;
            wanted.count = count;            
        }
    }        
    return wanted.char;  
}
```

**공부해야 될 부분**

*   for ... of 명령문: 반복가능한 객체(Array, Map, String, arguments 등)에 대해 반복되는 루프를 생성
    *   참고자료
        *   [for...of - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)
        *   [자바스크립트 for in vs for of 반복문 정리](https://jsdev.kr/t/for-in-vs-for-of/2938)
*   JavaScript에서의 알파벳 문자열 배열 간단 호출방법
    *   "abcdefghijklmnopqrstuvwxyz".split("")

**개선해야 될 부분**

*   최대값, 최소값 추출 방식
    *   내 답안의 방식: 전체 데이터를 map(), filter() 등을 이용해 변환시킨 후 Math.max(), Math.min()을 사용
    *   모범 답안들의 방식: 초기에 count 값을 선언한 뒤 반복문에서 최대/최소값이 갱신되는 경우에만 count를 갱신

내 답안

```
"use strict";

function mostWanted(data) {
    let dataArr = data.toLowerCase().split('');
    let dataObj = {};
    
    dataArr.forEach((ltr, index, arr) => {
        if (ltr <= 'z' && ltr >= 'a') {
            let ltrCount = arr.filter(elm => elm === ltr).length;
            dataObj[ltr] = ltrCount;
        }
    });

    const mostCount = Math.max(...Object.values(dataObj));
    let mostCountLtr = Object.keys(dataObj).filter((ltr, index) => Object.values(dataObj)[index] === mostCount);
    
    const result = mostCountLtr.sort()[0];
    return result;
}
```

*   푸는 데 걸린 시간: 1시간 23분

  

#자바스크립트 #javascript #코딩 #coding #checkio #coding practice #코딩 연습