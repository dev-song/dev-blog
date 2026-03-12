---
title: "JavaScript 코딩 연습 - 모의고사"
pubDatetime: 2020-03-17T16:29:36+09:00
description: "정해진 패턴대로 찍기 전략을 쓰는 3명의 수포자 중 가장 많은 문제를 맞힌 학생을 찾는 프로그래머스 문제 풀이"
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

[모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840) / 프로그래머스

**난이도**

Level 1

**내용**

모의고사를 치게 된 3명의 학생이 각각 \[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...\], \[2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...\], \[3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5\]의 패턴대로 문제를 찍기로 했습니다. 1번부터 마지막 문제까지의 정답이 들어있는 'answers' 배열이 주어질 때, 가장 많은 문제를 맞힌 학생의 번호을 구하는 함수를 작성하세요.

**_※ 가장 높은 점수를 받은 사람이 여럿일 경우, return 값은 오름차순으로 정렬되어 있어야 합니다._**

\***\*예시\*\***

**answers**

**return**

\[1, 2, 3, 4, 5\]

\[1\]

\[1, 3, 2, 4, 2\]

\[1, 2, 3\]

---

모범 답안

```
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};

    return answer;
}
```

**공부해야 될 부분**

- 객체로 이루어진 배열에서의 reduce() 메서드 사용
  - 형태: const arr = \[ {key: 1, no: 100}, {key: 3, no: 200}, {key: 5, no: 400} \]
  - arr.reduce( (a, b) => (a.no + b.no) ) 실행할 경우 NaN 을 반환
  - reduce() 메서드: 매 반복 시 accumulator + currentValue의 값이 다음 반복 시의 accumulator가 됨
    - 첫번째 반복에서 a.no + b.no인 100 + 200 = 300을 반환하고, 이 값이 두번째 accumulator가 됨
    - 두번째 반복에서도 a.no + b.no를 시행하나, 300.no의 값이 없으므로 NaN + 400 = NaN을 반환
  - 그러므로 이런 경우에는 reduce() 메서드의 반환 값에 객체의 key를 명시해줘야 정상 실행됨
    - 형태: arr.reduce( (a, b) => (no: a.no + b.no) )
  - 참고자료: [Javascript reduce on array of objects - Stack Overflow](https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects)

**개선해야 될 부분**

- filter() 메서드의 효율적 활용
  - 모범 답안과 내 답안의 차이점
    - 모범 답안은 주어진 answers를 각 학생의 패턴별로 filter
    - 나는 각 학생의 패턴을 answers의 길이만큼 확장시켜 배열을 생성하고 answer의 패턴으로 filter
    - 내 방식은 각 학생별로 answers 길이만큼의 배열이 추가적으로 생성됨
    - 학생들의 답안은 일정한 패턴을 따르므로 패턴의 길이를 넘는 정보는 필요하지 않음
- 반복문 최소화
  - 학생이 3명이고 학생별 데이터 종류가 적기 때문에 reduce와 map을 굳이 사용할 필요 없음
    - 반복문보다 단순 나열이 코드의 양이 적을 경우는 단순 나열도 나쁜 선택지는 아님
    - 대상 학생 또는 학생별 데이터 종류가 많아지면서 반복문의 효율적 사용이 필수적으로 되는 것

내 답안

```
function solution(answers) {
    let answerData = [];
    let patterns = [[1, 2, 3, 4, 5],
                    [2, 1, 2, 3, 2, 4, 2, 5],
                    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

    // answerData 배열에 {studentNo: 학생번호, answerCount: 맞힌 정답 수} 객체를 인원수대로 추가
    for (let i = 0; i < patterns.length; i++) {
        let studentAnswer = [];
        for (let j = 0; j < answers.length; j++) {
            studentAnswer.push(patterns[i][j % patterns[i].length]);
        }
        let answersCorrect = studentAnswer.filter((cur, index) => cur === answers[index % answers.length]);
        answerData.push({studentNo: i + 1, answerCount: answersCorrect.length});
    }

    // 가장 높은 점수를 산출
        // 객체로 이루어진 배열의 reduce 사용법(https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects)
    let highestScore = answerData.reduce((a, b) => ({answerCount: Math.max(a.answerCount, b.answerCount)})).answerCount;

    // 가장 높은 점수를 얻은 학생들만 반환
    let bestStudents = answerData.filter(data => data.answerCount === highestScore).map(data => data.studentNo);

    // 최종 배열을 오름차순으로 정렬한 후 반환
    return bestStudents.sort((a, b) => a - b);
}
```

