---
title: "JavaScript 코딩 연습 - Weak Point"
pubDatetime: 2020-03-12T12:06:52+09:00
description: "티스토리 아카이브"
tags:
  - "자바스크립트"
  - "javascript"
  - "코딩"
  - "coding"
  - "checkio"
  - "coding practice"
  - "코딩 연습"
---

**문제 / 웹사이트**

[약점 (Weak Point)](https://js.checkio.org/en/mission/weak-point/) / CheckiO

**난이도**

Simple / 초급

**내용**

우주여행에서는 우주선 외벽을 튼튼하게 유지하는 것이 필수적입니다.

Stephan은 이를 위해 외벽을 스캔해 각 부분의 내구도를 행렬의 형태로 나타내려고 합니다.

내구도는 양의 정수로 표시되며, 숫자가 0에 가까울수록 내구성이 약한 것입니다.

우주선의 약점은 제일 약한(= 각 행과 열의 합계가 제일 작은) 행과 열이 만나는 지점입니다.

내구도 분포가 정사각행렬의 형태로 주어진다고 할 때, 우주선의 약점을 구하는 함수를 작성하세요.

**_※ 정사각행렬: 같은 수의 행과 열을 갖는 행렬 (n\*n 행렬)_**

**예시**

```
weakPoint([[7, 2, 7, 2, 8],
           [2, 9, 4, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]]) == [3, 3]
weakPoint([[7, 2, 4, 2, 8],
           [2, 8, 1, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]]) == [1, 2]
```

---

모범 답안

```
function weakPoint(m){
    let h = m.map((v, i, ar) => v.reduce((a, b) => a + b));
    let v = m.reduce((a, b) => b.map((va, i, ar) => va + a[i]));

    let hmin = h.indexOf(Math.min(...h));
    let vmin = v.indexOf(Math.min(...v));

    return [hmin, vmin]
}
```

---

```
function weakPoint(m) {
  const n = m.length
  const rows = new Array(n)
  const cols = new Array(n)
  for (let j = 0; j < n; j++) {
    let row = 0, col = 0
    for (let i = 0; i < n; i++) {
      row += m[j][i]
      col += m[i][j]
    }
    rows[j] = row
    cols[j] = col
  }
  return [
    rows.indexOf(Math.min(...rows)),
    cols.indexOf(Math.min(...cols))
  ]
}
```

---

```
function weakPoint(matrix){
    let size = matrix.length,
        rSum = [], cSum = [];
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            rSum[r] = (rSum[r] || 0) + matrix[r][c];
            cSum[c] = (cSum[c] || 0) + matrix[r][c];
        }
    }
    return [rSum.indexOf( Math.min.apply(Math, rSum) ),
            cSum.indexOf( Math.min.apply(Math, cSum) )];
}
```

**공부해야 될 부분**

- map(): 배열의 각 요소에 주어진 함수를 적용한 새로운 배열을 생성하는 메서드 / 참고자료: [Array.prototype.map() - JavaScript / MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**개선해야 될 부분**

- 배열 내 요소를 매개변수로 하는 메서드 사용 시 가독성 개선하기
  - 배열 내 요소가 특정 의미를 가질 경우, 매개변수 명칭에 의미를 반영하기
  - 이 문제의 경우 matrix.forEach(row => row ...)가 matrix.forEach(cur => cur ...)보다 더 직관적
- 기존 배열을 기반으로 한 별도의 배열이 필요할 때, 해당 배열을 생성하는 방법
  - 기존 배열과 새로운 배열의 길이가 같을 경우, 배열을 따로 생성하지 말고 map() 메서드 활용하기

내 답안

```
"use strict";

function weakPoint(matrix){
    let rowDurability = [], colDurability = [];

    for(let i=0; i < matrix.length; i++) {
        rowDurability.push(0);
        colDurability.push(0);
    };

    matrix.forEach((cur, index) => {
        // add the sum of each row to current index of rowDurability
        rowDurability[index] += cur.reduce((acc, cur) => acc + cur);
        // add each column of current row to each index of colDurability
        cur.forEach((cur, index) => colDurability[index] += cur);
    });

    // find index of weakest column & row
        // if there're more than one weak point, indexOf() finds the one with the smallest index
    const weakRow = rowDurability.indexOf(Math.min(...rowDurability));
    const weakCol = colDurability.indexOf(Math.min(...colDurability));

    return [weakRow, weakCol];
}
```

