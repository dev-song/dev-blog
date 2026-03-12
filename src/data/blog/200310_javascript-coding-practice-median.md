---
title: "JavaScript 코딩 연습 - Median"
pubDatetime: 2020-03-10T16:12:56+09:00
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

[중앙값 (Median)](https://js.checkio.org/en/mission/median/) / CheckiO

**난이도**

Simple / 초급

**내용**

숫자로 이루어진 배열에서, 중앙값(median)을 구하는 함수를 작성하세요.

**_※ 중앙값(median): 주어진 값들을 순서대로 정렬했을 때 중앙에 위치하는 값. 값이 짝수개일 경우 중앙에 위치한 두 값의 평균이 됨._**

**예**

```
median([1, 2, 3, 4, 5]) == 3
median([3, 1, 2, 5, 3]) == 3
median([1, 300, 2, 200, 1]) == 2
median([3, 6, 20, 99, 10, 15]) == 12.5
```

---

모범 답안

```
"use strict";

function median(data) {
    data = data.sort((a, b) => a - b)
    n = Math.floor(data.length / 2)
    return (data[n] + data[data.length - 1 - n]) / 2
}
```

---

```
"use strict";

function median(data) {
    // We should copy array to avoid modification external data.
    let sorted = data.slice().sort((a,b) => a - b);
    // "- 1" makes middle pointer whole,
    // if length is odd and rational, if length is even.
    let middle = (data.length - 1) / 2;
    // So, if length is odd, floor and ceil will be equal.
    // If length is even, we will get its average.
    return (sorted[Math.floor(middle)] + sorted[Math.ceil(middle)])/2;
}
```

---

```
"use strict";

function median(array) {
    const arrayLength = array.length;
    const sorted = array.sort((a, b) => a - b);
    if (arrayLength % 2) {
        return sorted[(arrayLength-1)/2];
    } else {
        return (sorted[arrayLength/2] + sorted[arrayLength/2-1]) / 2;
    }
}
```

**공부해야 될 부분**

- Math.floor(): 주어진 값 이하의 가장 큰 정수를 반환하는 메서드 / 참고자료: [Math.floor() - JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

**개선해야 될 부분**

- 목표 인덱스 외 값을 다 지워버리지 말고, 인덱스의 위치 자체를 계산할 수 있는 알고리즘을 만들려고 하기

내 답안

```
"use strict";

function median(data) {
    // Sort numbers from the smalles to biggest
    data.sort((a,b) => a - b);

    // if array has an odd number of entities, find the one in the middle of the array
    if (data.length % 2 != 0) {
        while (data.length > 1) {
            data.pop();
            data.shift();
        }
        return data[0];
    // if array has an even number of entities, find the two in the middle of the array and make an average of them
    } else {
        while (data.length > 2) {
            data.pop();
            data.shift();
        }
        return (data[0] + data[1]) / 2;
    }
}
```

