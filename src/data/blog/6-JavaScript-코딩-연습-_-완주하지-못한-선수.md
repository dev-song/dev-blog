---
title: "6-JavaScript-코딩-연습-_-완주하지-못한-선수"
pubDatetime: 2020-03-13T23:55:05+09:00
description: "티스토리 아카이브"
---

**문제 / 웹사이트**

[완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576) / 프로그래머스

**난이도**

Level 1

**내용**

마라톤 경기에 참여한 선수들의 이름이 포함된 '참가자' 배열과 완주한 선수들의 이름이 포함된 '완주자' 배열이 있습니다. 참가자 중 한 명을 제외한 모든 선수가 완주했다고 가정할 때, 완주하지 못한 선수의 이름을 구하는 함수를 작성하세요.

**_※ 참가자 중에는 동명이인이 있을 수 있습니다._**

**예시**

**participant**

**completion**

**return**

\[leo, kiki, eden\]

\[eden, kiki\]

leo

\[marina, josipa, nikola, vinko, filipa\]

\[josipa, filipa, marina, nikola\]

vinko

\[mislav, stanko, mislav, ana\]

\[stanko, ana, mislav\]

mislav

* * *

모범 답안

```
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
```

* * *

```
function solution(participant, completion) {
	// 맨 뒤 {}로 accumulator object 생성 후 completion의 element를 key로, 1을 value로 저장
    // dic 변수에 위의 object를 저장
    var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    
    // participant의 element t로 dic 변수에 해당하는 값을 찾음
    	// t가 completion에도 있다면 if가 실행되어 dic[t] = dic[t] - 1이 실행
        // t가 completion에 없다면 else가 실행되어 true를 반환
        // find 메서드가 true인 element를 찾아내어 반환
    return participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
}
```

* * *

```
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
```

* * *

```
const solution = (p, c) => {
    p.sort()
    c.sort()
    while (p.length) {
        let pp = p.pop()
        if (pp !== c.pop()) return pp
    }
}
```

**공부해야 될 부분**

*   두번째 모범 답안  
    *   reduce() 메서드 문법
        *   reduce(callback (accumulator, currentValue \[, index \[, array\]\]) \[, initialValue\]) {}
        *   reduce( (accumulator, currentValue \[, index \[, array\]\]) => {} \[, initialValue\])
    *   find() 메서드
        *   주어진 조건/함수를 충족하는 배열 내 첫 번째 요소를 반환하는 메서드

**개선해야 될 부분**

*   알고리즘 효율성 개선  
    *   시간 복잡도의 크기: O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!) < O(n^n)
        *   알고리즘의 수행 시간을 big-O 표기법으로 나타낸 것
        *   참고자료: [빅오 표기법 (Big-O Notation), 시간 복잡도, 공간 복잡도](https://cjh5414.github.io/big-o-notation/)
    *   반복문을 중첩해서 쓰는 경우 O(n^n) 알고리즘이 되므로 연산 시간이 기하급수적으로 늘어남
        *   예) for 문을 이중으로 쓸 경우: O(n^2)
*   JavaScript 배열과 for ... in
    *   JavaScript의 for ... in 구문은 객체 내 property 속성 중 enumerable: true인 모든 property를 순회하여 검색
    *   최근의 브라우저는 배열에 대해 for ... in 구문을 사용해도 오류가 나지 않으나, 구 IE의 경우 배열 인덱스 외에도 property가 검출되어 undefined 오류가 발생
    *   그러므로 JavaScript 배열에 대해선 for 또는 ES6의 forEach 메서드를 사용하는 것이 나음

내 답안

```
function solution(participant, completion) {    
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] != completion[i]) {
            return participant[i];
            break;
        }
    }
}
```

  

#자바스크립트 #javascript #코딩 #coding #프로그래머스 #coding practice #코딩 연습