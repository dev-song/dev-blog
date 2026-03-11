---
title: "99-[JS]-bind-메서드를-활용한-this-제어"
pubDatetime: 2020-06-18T18:18:01+09:00
description: "티스토리 아카이브"
---

강의: [\[edwith 부스트코스\] 웹 프로그래밍](https://www.edwith.org/boostcourse-web/) 챕터 4, 웹 앱 개발: 예약서비스 2/4

학습일: 2020년 6월 18일

* * *

## 1\. 객체지향 JavaScript 구현 - FE

### bind 메서드로 this 제어하기

#### this의 참조

Part 2에서 언급했듯이, this는 함수의 실행 시점에 결정된다. this의 이런 특성으로 인해서 예상과 다르게 동작하는 경우가 발생하게 된다. 아래의 코드를 보자.


showHealth 메서드를 실행하면, this.name과 this.lastTime이 undefined로 출력된다. 왜일까?

setTimeout 메서드는 일정 시간 후 인자로 전달받은 함수를 실행하는 메서드이므로, 전달받은 출력 함수가 이벤트 큐에 저장되어 있다가 실행되기 때문이다. 출력 함수의 실행 시점에 showHealth 메서드는 이미 반환이 끝난 상황이므로, this는 Window를 가리키게 된다. Window에는 name과 lastTime 속성이 설정되어 있지 않기 때문에 undefined가 출력된다.

#### bind를 활용한 this 제어

this가 setTimeout 메서드 안에 있더라도 해당 객체를 가리키도록 하려면 어떻게 해야 할까? 이럴 때 bind 메서드를 사용하면 된다.


첫 번째 예시와의 차이점은 setTimeout 메서드 뒤에 추가된 .bind(this)이다.

여기에서 bind 메서드와 함께 사용된 this는 setTimeout 메서드에 전달된 함수의 외부에 있으므로 healthObj를 가리키게 된다. 이렇게 동작하는 이유는, bind 메서드가 지정한 this 값을 사용해 원본 함수를 변경한 새로운 함수를 반환하는 메서드이기 때문이다.

#### **※ 화살표 함수 표현식과 this 키워드**

setTimeout 메서드에 전달하는 함수를 화살표 함수 표현식 (각주: 참고자료: 화살표 함수 - JavaScript | MDN)으로 작성하면 본문과 다르게 정상적으로 this.name과 this.lastTime을 출력한다. 화살표 함수는 그 함수의 바로 바깥 함수나 Class의 this를 전달받아 사용하기 때문이다. 그러므로 bind 메서드 등 별도로 처리하지 않아도 healthObj를 가리킨다.

* * *

#### 더 알아보기

> 단골로 나오는 JavaScript 면접 주제

this, scope, bind, apply, call의 개념과 사용방법

> bind의 polyfill 코드 (각주: 참고자료: Function.prototype.bind() - JavaScript | MDN)와 동작원리

```
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // ECMAScript 5 내부 IsCallable 함수와
      // 가능한 가장 가까운 것
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // Function.prototype은 prototype 속성이 없음
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

* * *

  

#javascript #This #bind #front end #화살표 함수