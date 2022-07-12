(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{538:function(a,t,s){"use strict";s.r(t);var e=s(59),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"내가-보려고-쓰는-next-js-ssr-메서드-비교-fallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#내가-보려고-쓰는-next-js-ssr-메서드-비교-fallback"}},[a._v("#")]),a._v(" 내가 보려고 쓰는 Next.js SSR 메서드 비교 (+ fallback)")]),a._v(" "),s("h2",{attrs:{id:"서버-사이드-렌더링-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#서버-사이드-렌더링-ssr"}},[a._v("#")]),a._v(" 서버 사이드 렌더링 (SSR)")]),a._v(" "),s("h3",{attrs:{id:"getserversideprops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getserversideprops"}},[a._v("#")]),a._v(" getServerSideProps")]),a._v(" "),s("ul",[s("li",[a._v("SSR")]),a._v(" "),s("li",[a._v("요청 시 필요한 데이터를 미리 렌더링하는 경우에만 사용")]),a._v(" "),s("li",[a._v("페이지 요청 시마다 실행됨")]),a._v(" "),s("li",[s("strong",[a._v("정말 필요한 때만")]),a._v(" 사용할 것 (CDN에 캐싱되지 않아 느림)! 데이터를 미리 렌더링할 필요가 없다면 클라이언트 측에서 데이터 페칭하기.")])]),a._v(" "),s("h2",{attrs:{id:"정적-사이트-생성-ssg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정적-사이트-생성-ssg"}},[a._v("#")]),a._v(" 정적 사이트 생성 (SSG)")]),a._v(" "),s("h3",{attrs:{id:"getstaticprops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstaticprops"}},[a._v("#")]),a._v(" getStaticProps")]),a._v(" "),s("ul",[s("li",[a._v("정적 페이지 생성 방식(Static Site Generation),")]),a._v(" "),s("li",[a._v("항상 서버에서 실행 (CSR 아님)")]),a._v(" "),s("li",[a._v("빌드(번들링) 단계에서 data fetching, JSON으로 저장하여 고정적으로 사용함")]),a._v(" "),s("li",[a._v("가져온 데이터를 Props에 담고 리턴하여 컴포넌트에 전달")]),a._v(" "),s("li",[a._v("페이지 요청 때마다 데이터를 가져오는게 아니라 성능 측면에서 뛰어남")]),a._v(" "),s("li",[s("strong",[a._v("빌드 후 고정된 내용")]),a._v("을 보여주는 페이지, SEO를 위해 속도가 빨라야하는 페이지에 적합")])]),a._v(" "),s("h3",{attrs:{id:"getstaticpaths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstaticpaths"}},[a._v("#")]),a._v(" getStaticPaths")]),a._v(" "),s("p",[s("code",[a._v("pages/[id].tsx")]),a._v("같은 형태의 다이나믹 라우팅 페이지 중 빌드 단계에서 "),s("strong",[a._v("정적으로 생성할")]),a._v(" 페이지를 정함")]),a._v(" "),s("h2",{attrs:{id:"fallback-true-false-blocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback-true-false-blocking"}},[a._v("#")]),a._v(" fallback (true, false, blocking)")]),a._v(" "),s("p",[a._v("Next.js에서 fallback은 사용자가 "),s("code",[a._v("getStaticPaths")]),a._v("에서 만들어지지 않은 페이지에 접속했을 경우를 말한다."),s("br"),a._v("\n이런 상황에 fallback값을 두어 404를 띄우거나, 다른 방법으로 생성한 페이지를 보여줄 수 있다.")]),a._v(" "),s("h3",{attrs:{id:"fallback-true"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback-true"}},[a._v("#")]),a._v(" fallback: true")]),a._v(" "),s("p",[s("code",[a._v("getStaticPaths")]),a._v("에서 만들어지지 않은 페이지에 접속했을 경우, 먼저 사용자에게 fallback 페이지를 보여줌.\n이후 서버에서 static하게 페이지를 만들고 해당 페이지를 사용자에게 보여줌.")]),a._v(" "),s("p",[a._v("`js\n// fallback = true일때 fallback 페이지")]),a._v(" "),s("p",[a._v("if(router.isFallback) {\nreturn "),s("code",[a._v("<Loading />")]),a._v("\n}\n`")]),a._v(" "),s("h3",{attrs:{id:"fallback-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback-false"}},[a._v("#")]),a._v(" fallback: false")]),a._v(" "),s("p",[s("code",[a._v("getStaticPaths")]),a._v("에서 만들지 않은 페이지는 404로 연결됨")]),a._v(" "),s("h3",{attrs:{id:"fallback-blocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback-blocking"}},[a._v("#")]),a._v(" fallback: blocking")]),a._v(" "),s("p",[s("code",[a._v("getStaticPaths")]),a._v("에서 만들지 않은 페이지에 접속하면 사용자에게 SSR한 static 페이지를 보여줌.\n(동적 라우팅 페이지를 정적 페이지로 제공해야할 때 사용)")])])}),[],!1,null,null,null);t.default=r.exports}}]);