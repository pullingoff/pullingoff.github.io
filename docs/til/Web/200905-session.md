---
title: "세션이란? 세션 트래킹 모드와 종료 조건"
date: 2020-09-05 08:00
---

## Session

- 통로(DB): 클라이언트와 서버 사이의 유일하게 개방되어있는 통로
- 시간(WEB): 클라이언트가 서버의 어플리케이션을 사용하고 있는 동안을 한 세션으로 정의 (최초의 요청 ~~~ 종료)

## HTTP: stateless(대화가 불가능하다)

- HTTP 프로토콜은 기본적으로 상태가 없다. = 요청, 응답이 끝나면 그걸로 끝이다.
- connectless('세션'이 web에선 '시간'이라는 의미로 쓰이는 이유. 비연결지향형:  웹에서 통로로 계속 열어놓으면 부하가 너무 크니 사용이 끝나면 다 끊어버린다)
- (HTTP1.1 은 connectful, 연결지향형 버전이긴 함)

## 세션과 쿠키의 차이점

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtYkEb%2FbtqHXDvmJRU%2F7hM6D66xT1TjFUgvzF4L10%2Fimg.png)

- 만약 알라딘에서 장바구니 담을때 정보를 클라이언트쪽에 저장하면 쿠키, 서버쪽에 저장하면 세션
- 세션의 경우 브라우저가 다르면 다름, 세션 ID존재

## Session Tracking Mode (세션 ID를 통해 세션을 식별하는 방법)

- 클라이언트한테서 요청이 왔는데 ID가 없으면 최초의 요청으로 인식하고 새로운 ID를 만든다. 그 후 응답데이터에 세션 ID를 포함시켜 보내면 클라이언트쪽에서 다시 그 세션 ID를 담아서 보냄

1. COOKIE: e.g. JSESSIONID 와 같은 세션 아이디를 식별할 수 있는 쿠키를 C-S 사이에서 주고 받는다.
2. SSL : Secure Layer를 통해 세션 아이디를 주고받는 방법. 전송 계층을 보안 처리하여 데이터를 보호하는 방법의 일종
     (http: non-secure, https: secure)
3. URL: 세션 식별을 위한 아이디를 request line을 통해 주고받는 방법 (보안에 취약)

### 쿠키란?

쿠키: 웹 서버가 클라이언트에 전송하는 작은 데이터 조각.

## 세션 종료 조건

1. timeout 이내에 동일한 클라이언트로부터의 새로운 요청이 없을 때 / 톰캣: 30분
2. 브라우저 종료
3. 더이상 쿠키(JSESSIONID) 전송이 없을 때 **세션과 쿠키의 차이점 기술면접 잘나옴
4. *직접 로그아웃을 했을 때 (session을 invalidation)

세션이 종료될 때 session scope도 사라진다.