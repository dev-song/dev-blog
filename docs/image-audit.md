# 이미지 수동 확인 필요 목록

생성일: 2026. 3. 11.

## 개요

아래 파일들은 이미지 관련 처리가 필요합니다:
- **HTML img**: 본문에 `<img>` HTML 태그가 남아 있어 마크다운으로 변환 또는 제거 필요
- **이미지 파일 있음**: `images/` 폴더에 해당 파일이 존재 — 경로 확인 필요

Tistory에서 export된 `./img/img.png` 형태의 이미지(322개, 79개 파일)는 빌드 오류를 막기 위해
마이그레이션 과정에서 자동 제거됐습니다. Tistory 관리자에서 원본 이미지를 내려받은 뒤
`src/data/blog/images/` 에 추가하고 아래 파일들의 이미지 경로를 복원해야 합니다.

| 파일 | 제목 | HTML img 태그 | images/ 파일 |
|------|------|:---:|:---:|
| `100-HTML-<script>-태그를-사용하는-또-다른-방법,-defer-속성.md` | 100-HTML-<script>-태그를-사용하는-또-다른-방법,-defer-속성 | ⚠️ 있음 | - |
| `86-JavaScript-이벤트-버블링과-이벤트-캡쳐.md` | 86-JavaScript-이벤트-버블링과-이벤트-캡쳐 | - | ✅ 있음 |

## 전체 포스트 이미지 복원 체크리스트

Tistory 포스트에서 이미지를 다운로드한 후 아래 목록을 체크하세요.
이미지 파일명은 `{포스트번호}_{인덱스}.{확장자}` 형식으로 저장 권장.

| # | 파일 | 완료 |
|---|------|:----:|
| 1 | `1-JavaScript-코딩-연습-_-Long-Repeat.md` | [ ] |
| 10 | `10.md` | [ ] |
| 100 | `100-HTML-<script>-태그를-사용하는-또-다른-방법,-defer-속성.md` | [ ] |
| 101 | `101-웹페이지를-다룰-때-주의해야-할-속성,-innerHTML.md` | [ ] |
| 102 | `102-[JS]-한-시대를-풍미한-jQuery,-그리고-프레임워크의-대두.md` | [ ] |
| 103 | `103.md` | [ ] |
| 104 | `104.md` | [ ] |
| 105 | `105-[JS]-이해하기-쉬운-코드,-클린-코드.md` | [ ] |
| 106 | `106-[VSC]-ESLint-라이브러리가-작동하지-않는-에러.md` | [ ] |
| 107 | `107.md` | [ ] |
| 109 | `109-Markdown-표시-테스트-(basic_extended).md` | [ ] |
| 11 | `11.md` | [ ] |
| 110 | `110-[Bitcoin]-비트코인-채굴이-친환경-발전의-수익성을-높인다고.md` | [ ] |
| 111 | `111-[Web]-HTTP-API와-REST-API.md` | [ ] |
| 112 | `112-Parallels-Desktop에서-Mac의-로컬-React-앱에-접근하기.md` | [ ] |
| 12 | `12.md` | [ ] |
| 13 | `13-HTML과-CSS-(Front-End).md` | [ ] |
| 14 | `14-SQL-(Back-End)-...-Part-1.md` | [ ] |
| 15 | `15-Java-개발환경-설정-(Back-End).md` | [ ] |
| 16 | `16-Java-Servlet-(Back-End)-...-Part-1.md` | [ ] |
| 17 | `17-Maven-(Back-End).md` | [ ] |
| 18 | `18-Java-Servlet-(Back-End)-...-Part-2.md` | [ ] |
| 19 | `19-JavaScript-(Front-End)-...-Part-1.md` | [ ] |
| 2 | `2-JavaScript-코딩-연습-_-Non-unique-Elements.md` | [ ] |
| 20 | `20-JavaScript-(Front-End)-...-Part-2.md` | [ ] |
| 21 | `21-JDBC-(Back-End)-...-Part-1.md` | [ ] |
| 22 | `22-Web-UI-개발-(Front-End)-...-Part-1.md` | [ ] |
| 23 | `23-Web-UI-개발-(Front-End)-...-Part-2.md` | [ ] |
| 24 | `24-JSP-(Back-End)-...-Part-1.md` | [ ] |
| 25 | `25-JSP-(Back-End)-...-Part-2.md` | [ ] |
| 26 | `26-HTTP-redirect-&-forward-(Back-End).md` | [ ] |
| 27 | `27-JDBC-(Back-End)-...-Part-2.md` | [ ] |
| 28 | `28-JSP-Scope-(Back-End).md` | [ ] |
| 29 | `29-EL과-JSTL-(Back-End).md` | [ ] |
| 3 | `3-JavaScript-코딩-연습-_-Median.md` | [ ] |
| 30 | `30-MySQL-(Back-End).md` | [ ] |
| 31 | `31-SQL-(Back-End)-...-Part-2.md` | [ ] |
| 32 | `32-JDBC-(Back-End)-...-Part-3.md` | [ ] |
| 33 | `33-Web-API-(Back-End)-...-Part-1.md` | [ ] |
| 34 | `34-Web-API-(Back-End)-...-Part-2.md` | [ ] |
| 35 | `35-SpaceX의-Starlink.md` | [ ] |
| 36 | `36-Java-Web-Programming-Tips-...-Part-1.md` | [ ] |
| 37 | `37-JavaScript---Array-&-Object-(Front-End).md` | [ ] |
| 38 | `38-Lottery-Info-Check---Data-Crawler.md` | [ ] |
| 39 | `39-DOM-API-(Front-End).md` | [ ] |
| 4 | `4-JavaScript-코딩-연습-_-Moore-Neighborhood.md` | [ ] |
| 40 | `40-AJAX-(Front-End).md` | [ ] |
| 41 | `41-JavaScript-드럼-재생기.md` | [ ] |
| 42 | `42-Web-Animation-(Front-End).md` | [ ] |
| 43 | `43-CSS와-JavaScript로-시계-만들기.md` | [ ] |
| 44 | `44-Web-UI-심화-(Front-End).md` | [ ] |
| 45 | `45-Tab-UI-(Front-End).md` | [ ] |
| 46 | `46-JavaScript로-CSS-변수-조절하기.md` | [ ] |
| 47 | `47-Spring-Core-(Back-End)-...-Part-1.md` | [ ] |
| 48 | `48-Spring-Core-(Back-End)-...-Part-2.md` | [ ] |
| 49 | `49-JavaScript-배열-다루기-1.md` | [ ] |
| 5 | `5-JavaScript-코딩-연습-_-Weak-Point.md` | [ ] |
| 50 | `50-Spring-Core-(Back-End)-...-Part-3.md` | [ ] |
| 51 | `51-Spring-JDBC-(Back-End)-...-Part-1.md` | [ ] |
| 52 | `52-Flex-이미지-갤러리.md` | [ ] |
| 53 | `53-AJAX-검색어-자동완성.md` | [ ] |
| 54 | `54-Spring-JDBC-(Back-End)-...-Part-2.md` | [ ] |
| 55 | `55-Spring-JDBC-(Back-End)-...-Part-3.md` | [ ] |
| 56 | `56-JavaScript-배열-다루기-2.md` | [ ] |
| 57 | `57-HTML5-캔버스로-무지개빛-선-그리기.md` | [ ] |
| 58 | `58-Spring-JDBC-(Back-End)-...-Part-4.md` | [ ] |
| 59 | `59-개발자-도구-정복하기.md` | [ ] |
| 6 | `6-JavaScript-코딩-연습-_-완주하지-못한-선수.md` | [ ] |
| 60 | `60-쉬프트-클릭으로-여러-체크박스-선택하기.md` | [ ] |
| 61 | `61-커스텀-HTML5-동영상-플레이어.md` | [ ] |
| 62 | `62-Spring-MVC-(Back-End)-...-Part-1.md` | [ ] |
| 63 | `63-Spring-MVC-(Back-End)-...-Part-2.md` | [ ] |
| 64 | `64-특정-키-조합에-반응하는-웹페이지.md` | [ ] |
| 65 | `65-이미지-슬라이드-효과-마우스-스크롤과-연동시키기.md` | [ ] |
| 66 | `66-JavaScript-데이터-참조-vs-복사.md` | [ ] |
| 67 | `67-JavaScript-localStorage와-이벤트-위임.md` | [ ] |
| 68 | `68-정관사-The,-A,-An이-포함된-문자열-정렬하기.md` | [ ] |
| 69 | `69-Spring-MVC-(Back-End)-...-Part-3.md` | [ ] |
| 7 | `7-JavaScript-코딩-연습-_-모의고사.md` | [ ] |
| 70 | `70-Spring-MVC-(Back-End)-...-Part-4.md` | [ ] |
| 71 | `71-JavaScript-.reduce(-)-메서드로-시간-더하기.md` | [ ] |
| 72 | `72-Layered-Architecture-(Back-End)-...-이론.md` | [ ] |
| 73 | `73.md` | [ ] |
| 74 | `74-브라우저로-웹캠-화면-갖고-놀기.md` | [ ] |
| 75 | `75-Layered-Architecture-(Back-End)-...-실습-(1).md` | [ ] |
| 76 | `76-Layered-Architecture-(Back-End)-...-실습-(2).md` | [ ] |
| 77 | `77-음성을-인식하는-웹-메모장-만들기.md` | [ ] |
| 78 | `78-웹페이지에-현재-위치-정보-표시하기.md` | [ ] |
| 79 | `79-Layered-Architecture-(Back-End)-...-실습-(3).md` | [ ] |
| 8 | `8-JavaScript-코딩-연습-_-K번째-수.md` | [ ] |
| 80 | `80-Layered-Architecture-(Back-End)-...-실습-(4).md` | [ ] |
| 81 | `81-마우스-커서-하이라이트-이어지듯이-전환하기.md` | [ ] |
| 82 | `82-RestController-(Back-End)-...-이론.md` | [ ] |
| 83 | `83-RestController-(Back-End)-...-실습.md` | [ ] |
| 84 | `84-브라우저로-음성-합성하기.md` | [ ] |
| 85 | `85-스크롤하면-상단에-달라붙는-내비게이션-바.md` | [ ] |
| 86 | `86-JavaScript-이벤트-버블링과-이벤트-캡쳐.md` | [ ] |
| 87 | `87-내비게이션-바-드롭다운-메뉴-이어지게-하기.md` | [ ] |
| 88 | `88-마우스-드래그로-좌우-스크롤이-되는-슬라이더-만들기.md` | [ ] |
| 89 | `89-실시간-재생-속도-조절-슬라이더-만들기.md` | [ ] |
| 9 | `9-JavaScript-코딩-연습-_-The-Most-Wanted-Letter.md` | [ ] |
| 90 | `90-카운트다운-타이머-만들기.md` | [ ] |
| 91 | `91-두더지-잡기-게임-만들기.md` | [ ] |
| 93 | `93-[비공개]-파일-업로드용.md` | [ ] |
| 94 | `94-Java-Web-Programming-Tips-...-Part-2.md` | [ ] |
| 95 | `95-SQL-Join-알아보기-...-Join이란.md` | [ ] |
| 96 | `96-SQL-Join-알아보기-...-기본-유형-4가지.md` | [ ] |
| 97 | `97-[JS]-배열의-함수형-메소드,-forEach,-map,-filter.md` | [ ] |
| 98 | `98-[JS]-JavaScript-객체와-this-키워드.md` | [ ] |
| 99 | `99-[JS]-bind-메서드를-활용한-this-제어.md` | [ ] |
| - | `hello-world.md` | [ ] |