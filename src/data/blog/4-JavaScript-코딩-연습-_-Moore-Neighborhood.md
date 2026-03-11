---
title: "4-JavaScript-코딩-연습-_-Moore-Neighborhood"
pubDatetime: 2020-03-11T16:24:25+09:00
description: "티스토리 아카이브"
---

**문제 / 웹사이트**

[무어의 이웃(Moore Neighbourhood)](https://js.checkio.org/en/mission/count-neighbours/) / CheckiO

**난이도**

Simple / 초급

**내용**

격자형 보드게임판에 말들을 무작위로 얹어놓는다고 할 때, 특정 칸과 1칸 이내(가로/세로/대각선)로 이웃하는 말의 개수를 구하세요. 말이 놓인 격자는 1, 말이 없는 격자는 0으로 표현됩니다.

**예시**

```
countNeighbours([[1, 0, 0, 1, 0],
                 [0, 1, 0, 0, 0],
                 [0, 0, 1, 0, 1],
                 [1, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0]], 1, 2) == 3
countNeighbours([[1, 0, 0, 1, 0],
                 [0, 1, 0, 0, 0],
                 [0, 0, 1, 0, 1],
                 [1, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0]], 0, 0) == 1
```

* * *

모범 답안

```
"use strict";

function countNeighbours(data, row, col){
    var s = 0, adj = [[-1, 1], [-1, 0], [-1, -1], [0, 1], [0, -1], [1, 1], [1, 0], [1, -1]];
    for (let a of adj){
      let x = row + a[0], y = col + a[1];
      if (data[x] && data[x][y]) s++;
    }
    return s;
}
```

* * *

```
"use strict";

function countNeighbours(data, r, c) {
    sum = 0
    for(i = Math.max(0, r - 1); i < Math.min(data.length, r + 2); i++){
        for(j = Math.max(0, c - 1); j < Math.min(data[0].length, c + 2); j++){
            sum += data[i][j]
        }
    }
    return sum - data[r][c]
}
```

* * *

```
"use strict";

const countNeighbours = (data, row, col) => {
    let ans = 0;    
    for(let i = row-1; i <= row+1; i++)
        for(let j=col-1; j <= col+1; j++)
            if(i !== row || j !== col)
                ans += (data[i]||[])[j] || 0;

    return ans;
}
```

* * *

```
"use strict";

function countNeighbours(data, row, col) {
    return [[-1, -1], [-1, 0], [-1, 1], 
            [ 0, -1],          [ 0, 1], 
            [ 1, -1], [ 1, 0], [ 1, 1]].reduce((a, c) => a + !!(data[row + c[0]]||[])[col + c[1]], 0); 
}
```

**공부해야 될 부분**

*   reduce(): 누산자(accumulator)에 배열의 값을 reducer 함수로 처리하는 메서드 / 참고자료: [Array.prototype.reduce() - JavaScript / MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

**개선해야 될 부분**

*   화살표 함수 표현(Arrow function expression) 사용 시 가독성 개선하기
    *   화살표 함수는 중첩시키지 않기
    *   화살표 함수 내 메서드 사용 지양하기

내 답안

```
"use strict";

function countNeighbours(data, row, col) {
    let nearCellCount = 0;
    
    // make a new array for adjacent row data
    let nearRows = data.filter((elm, index) => (index <= row + 1 && index >= row - 1));
    // add each nearby row's elements satisfying conditions (nearby column && value === 1)
    nearRows.forEach((cur, index) => nearCellCount += cur.filter((elm, index) => (index >= col - 1 && index <= col + 1) && elm === 1).length);

    // if there're a chip on the center, exclude that  from the total count
    if (data[row][col] === 1) {
        nearCellCount--;
    }

    return nearCellCount;
}
```

  

#자바스크립트 #javascript #코딩 #coding #checkio #coding practice #코딩 연습