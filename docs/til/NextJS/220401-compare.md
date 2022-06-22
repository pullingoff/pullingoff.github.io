# 내가 보려고 쓰는 Next.js SSR 메서드 비교 (+ fallback)

## 서버 사이드 렌더링 (SSR)

### getServerSideProps

- SSR
- 요청 시 필요한 데이터를 미리 렌더링하는 경우에만 사용
- 페이지 요청 시마다 실행됨
- **정말 필요한 때만** 사용할 것 (CDN에 캐싱되지 않아 느림)! 데이터를 미리 렌더링할 필요가 없다면 클라이언트 측에서 데이터 페칭하기.

## 정적 사이트 생성 (SSG)

### getStaticProps

- 정적 페이지 생성 방식(Static Site Generation),
- 항상 서버에서 실행 (CSR 아님)
- 빌드(번들링) 단계에서 data fetching, JSON으로 저장하여 고정적으로 사용함
- 가져온 데이터를 Props에 담고 리턴하여 컴포넌트에 전달
- 페이지 요청 때마다 데이터를 가져오는게 아니라 성능 측면에서 뛰어남
- **빌드 후 고정된 내용**을 보여주는 페이지, SEO를 위해 속도가 빨라야하는 페이지에 적합

### getStaticPaths

`pages/[id].tsx`같은 형태의 다이나믹 라우팅 페이지 중 빌드 단계에서 **정적으로 생성할** 페이지를 정함

## fallback (true, false, blocking)

Next.js에서 fallback은 사용자가 `getStaticPaths`에서 만들어지지 않은 페이지에 접속했을 경우를 말한다.  
이런 상황에 fallback값을 두어 404를 띄우거나, 다른 방법으로 생성한 페이지를 보여줄 수 있다.

### fallback: true

`getStaticPaths`에서 만들어지지 않은 페이지에 접속했을 경우, 먼저 사용자에게 fallback 페이지를 보여줌.
이후 서버에서 static하게 페이지를 만들고 해당 페이지를 사용자에게 보여줌.

`js
// fallback = true일때 fallback 페이지

if(router.isFallback) {
    return `<Loading />`
}
`

### fallback: false

`getStaticPaths`에서 만들지 않은 페이지는 404로 연결됨

### fallback: blocking

`getStaticPaths`에서 만들지 않은 페이지에 접속하면 사용자에게 SSR한 static 페이지를 보여줌.
(동적 라우팅 페이지를 정적 페이지로 제공해야할 때 사용)
