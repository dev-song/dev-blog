/**
 * Renames all blog post files to English slugs.
 * Uses git mv to preserve git history.
 * Run: node scripts/rename-to-english.mjs
 */
import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

const BLOG_DIR = "src/data/blog";

// Map: old filename (without .md) → new filename (without .md)
const RENAME_MAP = {
  // JavaScript Coding Practice series (1-9)
  "1-JavaScript-코딩-연습-_-Long-Repeat": "1-javascript-coding-practice-long-repeat",
  "2-JavaScript-코딩-연습-_-Non-unique-Elements": "2-javascript-coding-practice-non-unique-elements",
  "3-JavaScript-코딩-연습-_-Median": "3-javascript-coding-practice-median",
  "4-JavaScript-코딩-연습-_-Moore-Neighborhood": "4-javascript-coding-practice-moore-neighborhood",
  "5-JavaScript-코딩-연습-_-Weak-Point": "5-javascript-coding-practice-weak-point",
  "6-JavaScript-코딩-연습-_-완주하지-못한-선수": "6-javascript-coding-practice-runner-who-couldnt-finish",
  "7-JavaScript-코딩-연습-_-모의고사": "7-javascript-coding-practice-mock-exam",
  "8-JavaScript-코딩-연습-_-K번째-수": "8-javascript-coding-practice-kth-number",
  "9-JavaScript-코딩-연습-_-The-Most-Wanted-Letter": "9-javascript-coding-practice-most-wanted-letter",

  // Pure-number files (use content as guide)
  "10": "10-intro",
  "11": "11-web-development-overview-fe-be-part-1",
  "12": "12-web-development-overview-fe-be-part-2",
  "73": "73-layered-architecture-back-end-guestbook-practice",
  "103": "103-handlebars-template-front-end",
  "104": "104-handlebars-array-data-front-end",
  "107": "107-security-vulnerability-analysis",

  // Files with Korean in the name
  "13-HTML과-CSS-(Front-End)": "13-html-and-css-front-end",
  "15-Java-개발환경-설정-(Back-End)": "15-java-dev-environment-setup-back-end",
  "22-Web-UI-개발-(Front-End)-...-Part-1": "22-web-ui-development-front-end-part-1",
  "23-Web-UI-개발-(Front-End)-...-Part-2": "23-web-ui-development-front-end-part-2",
  "29-EL과-JSTL-(Back-End)": "29-el-and-jstl-back-end",
  "35-SpaceX의-Starlink": "35-spacex-starlink",
  "41-JavaScript-드럼-재생기": "41-javascript-drum-machine",
  "43-CSS와-JavaScript로-시계-만들기": "43-building-a-clock-with-css-and-javascript",
  "44-Web-UI-심화-(Front-End)": "44-web-ui-advanced-front-end",
  "46-JavaScript로-CSS-변수-조절하기": "46-controlling-css-variables-with-javascript",
  "49-JavaScript-배열-다루기-1": "49-javascript-array-handling-1",
  "52-Flex-이미지-갤러리": "52-flex-image-gallery",
  "53-AJAX-검색어-자동완성": "53-ajax-search-autocomplete",
  "56-JavaScript-배열-다루기-2": "56-javascript-array-handling-2",
  "57-HTML5-캔버스로-무지개빛-선-그리기": "57-drawing-rainbow-lines-on-html5-canvas",
  "59-개발자-도구-정복하기": "59-mastering-developer-tools",
  "60-쉬프트-클릭으로-여러-체크박스-선택하기": "60-selecting-multiple-checkboxes-with-shift-click",
  "61-커스텀-HTML5-동영상-플레이어": "61-custom-html5-video-player",
  "64-특정-키-조합에-반응하는-웹페이지": "64-webpage-responding-to-specific-key-combinations",
  "65-이미지-슬라이드-효과-마우스-스크롤과-연동시키기": "65-image-slide-effect-linked-to-mouse-scroll",
  "66-JavaScript-데이터-참조-vs-복사": "66-javascript-data-reference-vs-copy",
  "67-JavaScript-localStorage와-이벤트-위임": "67-javascript-localstorage-and-event-delegation",
  "68-정관사-The,-A,-An이-포함된-문자열-정렬하기": "68-sorting-strings-with-articles-the-a-an",
  "71-JavaScript-.reduce(-)-메서드로-시간-더하기": "71-adding-time-with-javascript-reduce-method",
  "72-Layered-Architecture-(Back-End)-...-이론": "72-layered-architecture-back-end-theory",
  "74-브라우저로-웹캠-화면-갖고-놀기": "74-playing-with-webcam-in-browser",
  "75-Layered-Architecture-(Back-End)-...-실습-(1)": "75-layered-architecture-back-end-practice-1",
  "76-Layered-Architecture-(Back-End)-...-실습-(2)": "76-layered-architecture-back-end-practice-2",
  "77-음성을-인식하는-웹-메모장-만들기": "77-building-a-voice-recognition-web-notepad",
  "78-웹페이지에-현재-위치-정보-표시하기": "78-displaying-current-location-on-webpage",
  "79-Layered-Architecture-(Back-End)-...-실습-(3)": "79-layered-architecture-back-end-practice-3",
  "80-Layered-Architecture-(Back-End)-...-실습-(4)": "80-layered-architecture-back-end-practice-4",
  "81-마우스-커서-하이라이트-이어지듯이-전환하기": "81-transitioning-mouse-cursor-highlight-smoothly",
  "82-RestController-(Back-End)-...-이론": "82-restcontroller-back-end-theory",
  "83-RestController-(Back-End)-...-실습": "83-restcontroller-back-end-practice",
  "84-브라우저로-음성-합성하기": "84-speech-synthesis-in-browser",
  "85-스크롤하면-상단에-달라붙는-내비게이션-바": "85-sticky-navigation-bar-on-scroll",
  "86-JavaScript-이벤트-버블링과-이벤트-캡쳐": "86-javascript-event-bubbling-and-capture",
  "87-내비게이션-바-드롭다운-메뉴-이어지게-하기": "87-navigation-bar-smooth-dropdown-menu",
  "88-마우스-드래그로-좌우-스크롤이-되는-슬라이더-만들기": "88-slider-with-horizontal-drag-scroll",
  "89-실시간-재생-속도-조절-슬라이더-만들기": "89-realtime-playback-speed-control-slider",
  "90-카운트다운-타이머-만들기": "90-building-a-countdown-timer",
  "91-두더지-잡기-게임-만들기": "91-building-a-whack-a-mole-game",
  "93-[비공개]-파일-업로드용": "93-private-file-upload",
  "95-SQL-Join-알아보기-...-Join이란": "95-sql-join-what-is-join",
  "96-SQL-Join-알아보기-...-기본-유형-4가지": "96-sql-join-four-basic-types",
  "97-[JS]-배열의-함수형-메소드,-forEach,-map,-filter": "97-js-functional-array-methods-foreach-map-filter",
  "98-[JS]-JavaScript-객체와-this-키워드": "98-js-javascript-objects-and-this-keyword",
  "99-[JS]-bind-메서드를-활용한-this-제어": "99-js-controlling-this-with-bind-method",
  "100-HTML-<script>-태그를-사용하는-또-다른-방법,-defer-속성": "100-html-script-tag-defer-attribute",
  "101-웹페이지를-다룰-때-주의해야-할-속성,-innerHTML": "101-html-innerhtml-attribute-caution",
  "102-[JS]-한-시대를-풍미한-jQuery,-그리고-프레임워크의-대두": "102-js-jquery-and-the-rise-of-frameworks",
  "105-[JS]-이해하기-쉬운-코드,-클린-코드": "105-js-readable-and-clean-code",
  "106-[VSC]-ESLint-라이브러리가-작동하지-않는-에러": "106-vsc-eslint-not-working-error",
  "109-Markdown-표시-테스트-(basic_extended)": "109-markdown-display-test-basic-extended",
  "110-[Bitcoin]-비트코인-채굴이-친환경-발전의-수익성을-높인다고": "110-bitcoin-mining-boosts-renewable-energy-profitability",
  "111-[Web]-HTTP-API와-REST-API": "111-web-http-api-and-rest-api",
  "112-Parallels-Desktop에서-Mac의-로컬-React-앱에-접근하기": "112-accessing-mac-local-react-app-from-parallels-desktop",

  // Files already mostly English — clean up special chars only
  "14-SQL-(Back-End)-...-Part-1": "14-sql-back-end-part-1",
  "16-Java-Servlet-(Back-End)-...-Part-1": "16-java-servlet-back-end-part-1",
  "17-Maven-(Back-End)": "17-maven-back-end",
  "18-Java-Servlet-(Back-End)-...-Part-2": "18-java-servlet-back-end-part-2",
  "19-JavaScript-(Front-End)-...-Part-1": "19-javascript-front-end-part-1",
  "20-JavaScript-(Front-End)-...-Part-2": "20-javascript-front-end-part-2",
  "21-JDBC-(Back-End)-...-Part-1": "21-jdbc-back-end-part-1",
  "24-JSP-(Back-End)-...-Part-1": "24-jsp-back-end-part-1",
  "25-JSP-(Back-End)-...-Part-2": "25-jsp-back-end-part-2",
  "26-HTTP-redirect-&-forward-(Back-End)": "26-http-redirect-and-forward-back-end",
  "27-JDBC-(Back-End)-...-Part-2": "27-jdbc-back-end-part-2",
  "28-JSP-Scope-(Back-End)": "28-jsp-scope-back-end",
  "30-MySQL-(Back-End)": "30-mysql-back-end",
  "31-SQL-(Back-End)-...-Part-2": "31-sql-back-end-part-2",
  "32-JDBC-(Back-End)-...-Part-3": "32-jdbc-back-end-part-3",
  "33-Web-API-(Back-End)-...-Part-1": "33-web-api-back-end-part-1",
  "34-Web-API-(Back-End)-...-Part-2": "34-web-api-back-end-part-2",
  "36-Java-Web-Programming-Tips-...-Part-1": "36-java-web-programming-tips-part-1",
  "37-JavaScript---Array-&-Object-(Front-End)": "37-javascript-array-and-object-front-end",
  "38-Lottery-Info-Check---Data-Crawler": "38-lottery-info-check-data-crawler",
  "39-DOM-API-(Front-End)": "39-dom-api-front-end",
  "40-AJAX-(Front-End)": "40-ajax-front-end",
  "42-Web-Animation-(Front-End)": "42-web-animation-front-end",
  "45-Tab-UI-(Front-End)": "45-tab-ui-front-end",
  "47-Spring-Core-(Back-End)-...-Part-1": "47-spring-core-back-end-part-1",
  "48-Spring-Core-(Back-End)-...-Part-2": "48-spring-core-back-end-part-2",
  "50-Spring-Core-(Back-End)-...-Part-3": "50-spring-core-back-end-part-3",
  "51-Spring-JDBC-(Back-End)-...-Part-1": "51-spring-jdbc-back-end-part-1",
  "54-Spring-JDBC-(Back-End)-...-Part-2": "54-spring-jdbc-back-end-part-2",
  "55-Spring-JDBC-(Back-End)-...-Part-3": "55-spring-jdbc-back-end-part-3",
  "58-Spring-JDBC-(Back-End)-...-Part-4": "58-spring-jdbc-back-end-part-4",
  "62-Spring-MVC-(Back-End)-...-Part-1": "62-spring-mvc-back-end-part-1",
  "63-Spring-MVC-(Back-End)-...-Part-2": "63-spring-mvc-back-end-part-2",
  "69-Spring-MVC-(Back-End)-...-Part-3": "69-spring-mvc-back-end-part-3",
  "70-Spring-MVC-(Back-End)-...-Part-4": "70-spring-mvc-back-end-part-4",
  "94-Java-Web-Programming-Tips-...-Part-2": "94-java-web-programming-tips-part-2",
};

let renamed = 0;
let skipped = 0;
let errors = 0;

for (const [oldName, newName] of Object.entries(RENAME_MAP)) {
  const oldPath = `${BLOG_DIR}/${oldName}.md`;
  const newPath = `${BLOG_DIR}/${newName}.md`;

  if (!existsSync(oldPath)) {
    console.warn(`[SKIP] Not found: ${oldName}.md`);
    skipped++;
    continue;
  }

  if (oldPath === newPath) {
    skipped++;
    continue;
  }

  try {
    execSync(`git mv "${oldPath}" "${newPath}"`, { stdio: "pipe" });
    console.log(`[OK] ${oldName}.md → ${newName}.md`);
    renamed++;
  } catch (e) {
    console.error(`[ERR] Failed: ${oldName}.md — ${e.message}`);
    errors++;
  }
}

console.log(`\nDone: ${renamed} renamed, ${skipped} skipped, ${errors} errors.`);
