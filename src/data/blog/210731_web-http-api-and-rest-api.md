---
title: "API"
pubDatetime: 2021-07-31T23:21:02+09:00
description: "티스토리 아카이브"
tags:
  - "WEB"
  - "API"
  - "web api"
  - "rest api"
  - "HTTP API"
---

> 회사에서 API 관련 논의 중, HTTP API는 REST API와는 다르다는 얘기가 나왔습니다.  
> 작년 초에 [학습](https://til-devsong.tistory.com/33)했었으나 둘의 차이에 대해서 다소 헷갈려, 복습 겸 정리하려 합니다.

* * *

```
tl;dr
통신을 통해 한 곳의 자원들을 다른 곳에서 쉽게 접근할 수 있도록 하는 것을 Web API라고 합니다.
그 중에서도 HTTP 통신을 활용하는 API를 HTTP API라고 하며, REST API의 특성들을 가지는 API를 REST API라고 합니다.
```

# API

HTTP API와 REST API에 공통으로 들어가는 API란 단어부터 먼저 살펴볼까요.  
API(Application Programming Interface)는 컴퓨터 혹은 컴퓨터 프로그램끼리의 연결, 좀 더 인간적인 표현으로는 소통을 뜻합니다. 이러한 소통을 어떻게 할 지 문서로 정리하거나 공통의 기준을 정한 것을 API 명세라고 하죠.  
한 컴퓨터/프로그램이 소통하는 방식이 상대방 컴퓨터/프로그램과 다를 수 있기 때문에, 서로가 공통적으로 이해할 수 있는 기준을 정한 것입니다. 일종의 통역과 비슷하다고 볼 수 있겠네요.  
다양한 형태의 API 중, HTTP API와 REST API는 웹에서의 소통에 사용되기 때문에 Web API에 해당합니다.

# Web API

Web API가 다른 API와 다른 점은 뭘까요? Web API는 웹에서의 통신을 기반으로 한다는 것이 가장 큰 특징입니다.  
소통 당사자끼리 웹을 통해 소통하는 방식, 즉 어떻게 상대방에게 접근할 것인가, 어떤 자원들(JavaScript, HTML 요소, 메타데이터, 이미지 등)에 대해서 소통할 것인가 등에 대한 기준을 추가로 필요로 하죠.

# HTTP API

HTTP(Hypertext Trasnfer Protocol)를 통신 방식으로 사용하는 API를 HTTP API라고 합니다. HTTP API는 endpoint를 API gateway로 활용하여, HTTP 요청을 통해서 서버에 접근할 수 있도록 만들어줍니다. 현대 Web API의 상당 부분이 HTTP API로 이루어지고 있습니다.

# REST API

REST(Representational State Transfer)는 웹 서비스의 구조를 만드는 데 활용되는 패턴(architectural pattern)입니다.  
다른 컴퓨터/프로그램과의 소통을 좀 더 쉽게 할 수 있어 많은 개발자들이 활용하고 있습니다.  
REST한 프로그램이 되려면 CRUD 방식의 메소드, HTTP 메소드 중에서는 POST, GET, PUT, DELETE만을 활용해야 합니다.  
아무리 복잡한 기능을 만들더라도 제한된 방식만을 허용하기 때문에, 근본적으로는 **디자인 스타일**이라고 할 수 있죠.  
의도적으로 방법을 제한하는 게 얼핏 이해가 되지 않을수도 있지만, 인터페이스가 단순해지고 추후 확장도 쉬운 장점이 있습니다. 클라이언트와 서버가 데이터를 공유하기 위한 모범 답안이라고도 할 수 있겠네요.

## REST API로 불리기 위해 필요한 조건들

*   클라이언트 - 서버 구조: REST 어플리케이션의 데이터와 상태는 서버가 관리합니다. 클라이언트는 사용자와의 상호 작용을 담당하고, 서버는 클라이언트와 통신하는 방식이죠. 서버와 클라이언트를 분리함에 따라, 각각을 독립적으로 관리하고 업데이트할 수 있습니다.
*   상태 없음: 클라이언트의 상태는 자체적으로 관리됩니다. 클라이언트가 서버에 보내는 요청은 요청을 실행하기 위한 모든 정보를 포함해야 합니다.
*   캐시화 가능: 서버는 응답을 캐시화할 수 있는지 아닌지 표시해야 합니다. 클라이언트는 캐시화할 수 있는 응답은 캐시로 관리해 성능을 향상시킬 수 있죠. 또한 캐시화가 불가능한 정보를 클라이언트가 없앨 수 있으므로, 오래된 데이터를 쓰는 상황을 막습니다.
*   균일한 인터페이스: **가장 잘 알려진 특성입니다.** 서버가 제공하는 데이터는 일관적인 네임스페이스를 사용합니다.
*   계층 시스템: 구성요소들은 서로의 정보를 알 수 없는 계층으로 나뉩니다. 각각의 범위가 제한되므로, 개발자들이 인증 관련 보안을 강화하거나 성능을 개선하기 위해 로드 밸런서나 프록시를 추가하는 것이 쉽습니다.

## 까다로운 제한에도 불구하고 REST API를 사용하는 이유

어플리케이션을 만들 때 이런 특성들을 혼합하면, 견고한 경계를 가지면서 관심사가 잘 분리된 구조로 만들 수 있습니다.  
클라이언트는 서버에 요청했을 때만 데이터를 받아, 그 데이터를 가공하거나 표시하는 데 활용하죠. 만약 클라이언트의 상태가 변경된다면 서버에 알립니다.  
REST API에서 데이터가 구현되는 과정은 클라이언트가 알 수 없지만, 데이터 그 자체를 클라이언트에게 숨기지는 않습니다.

* * *

### 참고자료

*   [No! HTTP APIs are not necessarily REST APIs](https://aboullaite.me/http-rest-apis/)
*   [What are REST APIs? HTTP API vs REST API](https://www.educative.io/blog/what-are-rest-apis)
*   [API - Wikipedia](https://en.wikipedia.org/wiki/API)
*   [Web API - Wikipedia](https://en.wikipedia.org/wiki/Web_API)
*   [REST API 제대로 알고 사용하기](https://meetup.toast.com/posts/92)

