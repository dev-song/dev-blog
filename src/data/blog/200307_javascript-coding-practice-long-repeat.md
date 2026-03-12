---
title: "JavaScript 코딩 연습 - Long Repeat"
pubDatetime: 2020-03-07T08:08:13+09:00
description: "문자열에서 연속으로 가장 많이 반복되는 문자의 개수를 구하는 CheckiO 코딩 문제 풀이"
tags:
  - "javascript"
  - "코딩"
  - "coding"
  - "checkio"
  - "coding practice"
  - "코딩 연습"
---

**문제 / 웹사이트**

[장문 반복(Long Repeat)](https://js.checkio.org/en/mission/long-repeat/) / CheckiO

**난이도**

Elementary / 기초

**내용**

문자열 중 가장 많이 반복되는 문자의 갯수를 구하는 함수를 작성하세요.

**예**

```
longRepeat('sdsffffse') == 4
longRepeat('ddvvrwwwrggg') == 3
```

---

모범 답안

```
"use strict";

function longRepeat(line)
{
    return line.replace(/(.)(?!\1|$)/g, '$1_').split('_').sort(
        (a, b) => b.length - a.length
    )[0].length;
}
```

---

```
"use strict";

function longRepeat(line) {
    return line.length
            && Math.max.apply(null, line.match(/(.)(\1*)/g).map(x=>x.length));
}
```

---

```
"use strict";

function longRepeat(line) {
  let data = line.match(/(\w)\1*/g);
  return data ? Math.max(...data.map(n => n.length)) : 0;
}
```

**공부해야 될 부분**

- 문자열을 다루는 String 객체 관련 메서드 (replace, match 등) / 참고자료: [String - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- 수학적 연산을 담당하는 Math 객체 관련 메서드 (max, min 등) / 참고자료: [Math - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- 텍스트에서 일정 패턴을 찾아낼 때 사용하는 RegExp 객체의 사용법 / 참고자료: [RegExp - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

내 답안

```
"use strict";

function longRepeat(line) {
    // a variable that counts number of letters
    var letterCount = 0;
    // an array for counting numbers for each letter
    var countArray = [];

    // loop until the last letter of the line
    for (var i = 0; i <= line.length; i++) {
        switch (i) {
            case 0:
                letterCount++;
                break;
            default:
                if (line[i] === line[i-1]) {
                    // if the next letter is same as the formal one, increase the letter count
                    letterCount++;
                } else {
                    // if not, save the current count and make a new count
                    countArray.push(letterCount);
                    letterCount = 1;
                }
        }
    }

    var mostCount = 0;

    // find the biggest int in the array
    for (var i = 0; i < countArray.length; i++) {
        switch (i) {
            case 0:
                mostCount = countArray[0];
                break;
            default:
                if (countArray[i] >= mostCount) {
                    mostCount = countArray[i];
                }
        }
    }

    console.log(`line: ${line}`)
    console.log(`letter counts: ${countArray}`);
    console.log(`biggest count: ${mostCount}`);
    return mostCount;
}
```

