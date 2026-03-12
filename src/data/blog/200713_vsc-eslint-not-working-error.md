---
title: "106 [VSC] ESLint 라이브러리가 작동하지 않는 에러"
pubDatetime: 2020-07-13T12:26:41+09:00
description: "티스토리 아카이브"
---

![](./images/106.png)

### 요약

#### 발생 에러

Error: Failed to load plugin 'react' declared in '프로젝트 디렉토리 경로\\.eslintrc.json': Cannot find module 'eslint-plugin-react'...

#### 해결방법

ESLint가 작동하는 프로젝트 디렉토리를 ESLint 확장 프로그램의 Working Directories 설정에 추가

#### 시스템 환경

Windows 10 Home 1909

#### 프로젝트 환경

Node.js 12.8.1

Visual Studio Code 1.47.0

\- ESLint (Extension)

\- Prettier - Code Formatter (Extension)

#### 설치한 패키지

*   yarn 1.22.4
*   create-react-app 3.4.1
*   styled-components 5.1.1

* * *

## React 프로젝트 초기 설정 중 생긴 문제

create-react-app으로 초기 React 프로젝트를 생성하고, 문법오류를 잡아주고 모양을 다듬어주는 ESLint와 Prettier 패키지를 설치하기 위해 velopert 님의 [ESLint와 Prettier 끼얹기](https://velog.io/@velopert/eslint-and-prettier-in-react) 라는 글을 따라하던 중이었습니다.

정상적으로 ESLint가 설치되었는지 확인하기 위해 App.js 파일에 의도적으로 문법적 오류가 있는 JavaScript 구문 (각주:

```
// 문법적 오류가 있는 JavaScript 코드의 예시
  // 1. const 키워드를 통해 선언한 변수에 다시 값 할당
    const a = 5;
    a = 1;
  // 2. 선언하지 않은 함수를 호출
  	doSomething();
```

)을 몇 가지 작성해봤는데, ESLint가 이를 인식하지 못하는 상황이 발생했습니다.

## 문제 해결을 위해 거친 다양한 삽질

Visual Studio Code 사용 중, ESLint가 JavaScript 문법 오류를 잡아주지 못하는 현상이 발생했습니다.

우선 Visual Studio Code에서 Code Formatting 설정을 이것저것 만져봤는데, 어떻게 해도 전혀 변화가 없었습니다. 그러던 중 ESLint 확장프로그램의 Always Show Status 설정을 발견했고, 이를 활성화하니 상태바에 클릭해 ESLint의 현재 작동 상황을 알 수 있는 버튼이 생겼습니다. 이를 통해 문서 상단의 'Error: Failed to ...'라는 에러가 발생해 정상적으로 작동하지 않고 있다는 것을 확인할 수 있었습니다.

이 에러의 원인이 전혀 짐작가지 않아 ESLint을 글로벌/로컬 방식으로 번갈아 설치 (각주: 이 때는 정확히 몰랐지만, create-react-app 사용 시 ESLint는 포함되어 있으므로 별도로 설치하지 않아도 됩니다. 만약 create-react-app이 아닌 일반 프로젝트에서 ESLint를 설치하고자 한다면, [로컬로 설치하는 것이 권장](https://eslint.org/docs/user-guide/getting-started)됩니다.)해보고, 최신 버전으로도 설치 (각주: create-react-app으로 프로젝트 생성 후 최신인 7.4.0 버전의 ESLint를 추가로 설치하면, start 명령어와 충돌해 개발용 서버가 실행되지 않는 문제가 발생합니다.)해보기도 했습니다.

또한 패키지 매니저를 npm에서 yarn으로도 바꾼 뒤 다시 프로젝트 전체를 다시 생성해보기도 하고, 다양한 삽질을 거듭했습니다.

여느 때와 같이 구글이 해결의 실마리를 주었습니다. 에러 내용을 키워드로 검색하던 중, [ESLint의 workingDirectories 설정을 프로젝트 폴더를 포함시켜 주면 된다는 내용](https://github.com/microsoft/vscode-eslint/issues/759)을 발견했습니다.

설명을 따라서 Visual Studio Code 내 ESLint 확장 프로그램의 Working Directories 설정에 다음처럼 프로젝트 디렉토리를 추가하고 프로그램을 재시작했더니 정상적으로 작동을 하기 시작했습니다.

```
// 프로젝트 디렉토리를 Visual Studio Code 설정 JSON 파일에 추가
"eslint.workingDirectories": [ "projects/project-a" ]
```

## (아마도) 이것 때문에 문제가 생겼던 것이 아닐까...?

ESLint가 설치된 위치가 root 폴더가 아닐 때, 즉 프로젝트가 여러 단계로 구성되어 있고 ESLint가 하위 프로젝트에 설치되어 있는 경우 이런 상황이 발생하는 것으로 추측됩니다. 작동하는 프로젝트가 하위 프로젝트라는 것을 Working Directories 설정을 통해 ESLint에게 알려주는 방식으로 문제가 해결되었기 때문입니다.

* * *

#### 참고자료

[리액트 프로젝트에 ESLint와 Prettier 끼얹기](https://velog.io/@velopert/eslint-and-prettier-in-react)

[Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started) - ESLint - Pluggable JavaScript linter

[Failed to load plugin 'react' declared in 'react1/.eslintrc.js': Cannot find module 'eslint-plugin-react'](https://github.com/microsoft/vscode-eslint/issues/759)

* * *

  

#javascript #문제 해결 #front end #Extensions #확장프로그램 #React #visual studio code #create-react-app #eslint #workingDirectories