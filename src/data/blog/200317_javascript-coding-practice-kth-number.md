---
title: "JavaScript 코딩 연습 - K번째 수"
pubDatetime: 2020-03-17T17:07:33+09:00
description: "배열을 특정 구간으로 자르고 정렬했을 때 K번째 수를 구하는 프로그래머스 Level 1 문제 풀이"
tags:
  - "자바스크립트"
  - "javascript"
  - "코딩"
  - "coding"
  - "프로그래머스"
  - "coding practice"
  - "코딩 연습"
---

**문제 / 웹사이트**

[K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748) / 프로그래머스

**난이도**

Level 1

**내용**

모의고사를 치게 된 3명의 학생이 각각 \[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...\], \[2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...\], \[3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5\]의 패턴대로 문제를 찍기로 했습니다. 1번부터 마지막 문제까지의 정답이 들어있는 'answers' 배열이 주어질 때, 가장 많은 문제를 맞힌 학생의 번호을 구하는 함수를 작성하세요.

**_※ 가장 높은 점수를 받은 사람이 여럿일 경우, return 값은 오름차순으로 정렬되어 있어야 합니다._**

\***\*예시\*\***

**array**

**commands**

**return**

\[1, 5, 2, 6, 3, 7, 4\]

\[ \[2, 5, 3\], \[4, 4, 1\], \[1, 7, 3\] \]

\[5, 6, 3\]

---

**공부해야 될 부분**

- JavaScript에서의 변수/상수 선언방법
  - 참고자료
    - [\[JavaScript\] var / let / const](https://dororongju.tistory.com/62)
    - [var, let, const 차이점은?](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)
  -  var
    - JavaScript ES5까지는 유일했던 변수 선언방법
    - 변수를 재선언하는 것과 변수에 값을 재할당하는 것 모두 가능
  - let
    - JavaScript ES6에서 도입된 변수 선언방법
    - 변수를 재선언하는 것은 불가능하지만 변수에 값을 재할당하는 것은 가능
  - const
    - JavaScript ES6에서 도입된 상수 선언방법
    - 변수를 재선언하는 것과 변수에 값을 재할당하는 것 모두 불가능

**개선해야 될 부분**

- 변수/상수에 따라 유동적으로 let과 const 사용하기
  - let: 변수의 값이 변할 경우
    - 반복문 등
  - const: 변수의 값이 변하지 않을 경우 (상수)

내 답안 ≒ 모범 답안

```
function solution(array, commands) {
    return commands.map(cmd => {
        let start = cmd[0] - 1, end = cmd[1], index = cmd[2] - 1;
        return array.slice(start, end).sort((a, b) => a - b)[index];
    });
}
```

