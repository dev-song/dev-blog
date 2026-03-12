---
title: "JavaScript 코딩 연습 - Non unique Elements"
pubDatetime: 2020-03-07T09:43:07+09:00
description: "배열에서 딱 하나만 존재하는 고유한 값을 제거하고 중복 값만 남기는 CheckiO 코딩 문제 풀이"
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

[고유하지 않은 값(Non-unique Elements)](https://js.checkio.org/en/mission/non-unique-elements/) / CheckiO

**난이도**

Simple / 초급

**내용**

숫자값으로 이루어진 배열에서, 하나만 존재하는 값을 제외시킨 배열을 반환하는 함수를 작성하세요.

**예**

```
nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
```

---

모범 답안

```
"use strict";

function checkio(data) {
    return data.filter(function(a){
        return data.indexOf(a) !== data.lastIndexOf(a)
    });
}
```

**_→ 특정 element가 여러 개가 있을 경우 first index와 last index가 다를 수 밖에 없다는 점에서 착안한 답안_**

---

```
"use strict";

function nonUniqueElements(data)
{
    return data.filter(e => data.filter(k => k == e).length > 1);
}
```

---

```
"use strict";

function nonUniqueElements(data) {
    let counts = {}, results = [];
    data.forEach(el => counts[el] = (counts[el] || 0) + 1);
    //console.log(counts);
    data.forEach(el => {
        if (counts[el] > 1) {
            results.push(el);
        }
    });
    return results;
}
```

**공부해야 될 부분**

- 배열에 filter 메서드를 중첩 적용했을 때의 효과 (2번째 모범 답안)

**개선해야 될 부분**

- 배열 내 모든 요소에 접근할 땐 반복문 대신 forEach 메서드 활용하기

내 답안

```
"use strict";

function nonUniqueElements(data) {

    console.log(data)

    let numCount = 0;
    let countArray = [];

    // count how many times each element appears and save it in the array
    for (var i = 0; i < data.length; i++) {
        numCount = 1;

        // compare data[i] to other elements of data
        for (var j = 0; j < data.length; j++) {
            if (i != j && data[i] === data[j]) {
                numCount++;
            }
        }

        // save the number count in the array
        countArray.push(numCount)
    }

    // filter data with the count array
    let filteredData = data.filter(function(num, index) {
        if (countArray[index] > 1) {
            return true;
        }
    })

    return filteredData;
}
```

