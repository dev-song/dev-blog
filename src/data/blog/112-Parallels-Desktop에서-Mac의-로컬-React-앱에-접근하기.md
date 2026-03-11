---
title: "112-Parallels-Desktop에서-Mac의-로컬-React-앱에-접근하기"
pubDatetime: 2025-04-28T16:08:20+09:00
description: "티스토리 아카이브"
---

회사에서 열심히 개발하다 보니 오랜만에 포스팅을 하네요.  
최근에 해결했던 이슈를 다른 분들도 많이 맞닥뜨렸을 것 같아 공유합니다.  
프론트엔드 개발을 하다 보면 다양한 환경에서 작업해야 할 때가 있는데요,  
최근 Mac에서 개발하면서 Parallels Desktop의 Windows 환경에서 테스트를 하고자 했는데, 생각보다 시작부터 간단하지 않더라고요.  
특히 로컬에서 돌아가는 React 앱과 API 서버에 접근하는 과정에서 여러 난관에 부딪혔습니다.

몇 시간 동안 헤맸던 경험을 바탕으로, 제가 찾은 해결 방법을 공유합니다.

## 왜 그냥 localhost로는 접근이 안 될까?

먼저 왜 이런 문제가 발생하는지 기본 개념부터 짚어볼게요.  
Parallels Desktop은 Mac에서 Windows를 가상 머신 형태로 실행하는 프로그램입니다.  
그런데 이 가상 머신은 자신만의 네트워크 환경을 가지고 있어요.  
따라서,

*   Windows에서 `localhost`를 입력하면, Mac의 localhost가 아닌 **Windows 자체의 localhost에 접속**하게 됩니다.
*   Mac에서 실행 중인 React 앱이나 API 서버는 Windows 입장에서는 '외부' 네트워크에 있는 셈이죠.

그럼 어떻게 해결할까요? Mac의 IP 주소를 통해 접근하면 됩니다!

## 1\. Mac의 IP 주소 확인하기

Parallels Desktop에서 Mac 호스트의 기본 IP 주소는 `10.211.55.2`입니다.  
하지만 설정에 따라 다를 수 있으니 한 번 더 확인해 봅시다.

1.  Parallels의 네트워크 모드가 **Shared Network**로 설정되어 있는지 확인해주세요.
2.  Mac의 터미널을 열고 다음 명령어를 실행합니다:
3.  `ifconfig | grep -A 5 "bridge"`
4.  결과 중 `inet` 옆에 표시된 IPv4 주소가 바로 우리가 찾는 Mac의 IP 주소입니다.

## 2\. 편리하게 접근하기: 호스트 별칭 설정

매번 IP 주소를 입력하기 번거롭죠?  
Windows에서 이 IP에 별칭을 만들어 줄 수 있어요.

1.  Windows에서 메모장을 **관리자 권한**으로 실행합니다.
    
2.  `C:\Windows\System32\drivers\etc\hosts` 파일을 엽니다.
    
3.  파일 맨 아래에 다음 줄을 추가합니다:
    
    ```
    10.211.55.2   localhost.mac
    ```
    
    (앞서 확인한 IP가 다르다면 그 주소를 사용하세요)
    
4.  저장 후 닫으면 이제 브라우저에서 `localhost.mac`으로 접속할 수 있습니다.
    

## 3\. React 개발 서버 외부 접근 허용하기

Vite, Create React App 등의 개발 서버는 기본적으로 외부 접근을 허용하지 않습니다.  
따라서 외부 접근을 허용하는 옵션을 활성화해야 해요.

Vite의 경우

```
npm run dev -- --host
# 또는
yarn dev --host
```

이제 Windows에서 `http://localhost.mac:포트번호`로 접속하면 React 앱이 보일 거예요!

## 4\. API 서버와의 통신 문제 해결하기

앱은 보이지만 API 요청이 실패한다면?  
React 앱이 API 서버와 통신하려면 두 가지 설정이 더 필요합니다.

### 환경 변수 수정

React 앱의 `.env` 파일에서 API 주소를 Mac의 IP 주소로 변경해주세요:

```
# 변경 전
REACT_APP_API_URL=http://localhost:8080

# 변경 후 (IP 주소 사용 시)
REACT_APP_API_URL=http://10.211.55.2:8080

# 또는 (별칭 사용 시)
REACT_APP_API_URL=http://localhost.mac:8080
```

Vite를 사용한다면 변수명 앞에 `VITE_`를 붙이는 것 잊지 마세요!

### CORS 설정 변경

이제 마지막 단계입니다! API 서버가 새로운 출처(origin)에서 오는 요청을 허용하도록 CORS 설정을 수정해주세요.

Express.js 백엔드의 경우:

```
const cors = require('cors');
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://10.211.55.2:5173',
    'http://localhost.mac:5173'
  ]
}));
```

Spring Boot의 경우:

```
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins(
                "http://localhost:5173",
                "http://10.211.55.2:5173",
                "http://localhost.mac:5173"
            )
            .allowedMethods("*");
    }
}
```

서버를 재시작하면 이제 모든 것이 정상적으로 작동할 거예요!

## 마무리

이렇게 설정하면 Parallels Desktop의 Windows 환경에서 Mac에서 실행 중인 React 앱과 API 서버에 접근할 수 있습니다.  
조금 복잡해 보일 수 있지만, 하나하나 원리를 이해하면 엄청 어렵지 않답니다.

혹시 궁금한 점이나 다른 팁이 필요하면 댓글로 남겨주세요 :)

* * *

```plain
본 게시글에 언급된 소프트웨어들의 버전입니다.
- Vite: 5.2.0
- macOS: 15.3.1 (Sequoia)
- Parallels: Parallels Desktop 20 for Mac (Standard Edition)
- Windows (Parallels Desktop): Windows 11 Pro
```

  

#Parallels #Vite #macos #Parallels Desktop #localhost #React #cors #로컬 환경