(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{578:function(t,a,s){"use strict";s.r(a);var e=s(59),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"프론트엔드-프레임워크-cra-next-js-개츠비-비교"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프론트엔드-프레임워크-cra-next-js-개츠비-비교"}},[t._v("#")]),t._v(" 프론트엔드 프레임워크 (CRA, Next.js, 개츠비) 비교")]),t._v(" "),s("h3",{attrs:{id:"create-react-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app"}},[t._v("#")]),t._v(" Create React App")]),t._v(" "),s("p",[t._v("브라우저 접근 -> CDN이 스크립트와 스타일을 포함하는 HTML 페이지를 반환 -> js를 실행한 후 클라이언트 사이드에서 HTML 컨텐츠가 렌더링 -> 데이터까지 받으면 동적 컨텐츠가 렌더링됨")]),t._v(" "),s("h4",{attrs:{id:"장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("ul",[s("li",[t._v("리액트 팀에서 생성 및 유지 관리")])]),t._v(" "),s("h4",{attrs:{id:"단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),s("ul",[s("li",[t._v("서버 사이드 렌더링 없음. 라우팅 라이브러리 필요")]),t._v(" "),s("li",[t._v("Code splitting과 같은 기능을 직접 구현해야함")]),t._v(" "),s("li",[t._v("eject 시 복잡성 증가")])]),t._v(" "),s("h3",{attrs:{id:"next-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-js"}},[t._v("#")]),t._v(" Next.js")]),t._v(" "),s("p",[t._v("렌더링된 HTML 페이지를 클라이언트가 받음 -> JS 앱이 시작되고 hydration 단계에 들어섬 -> 데이터를 받아 동적 컨텐츠 로딩")]),t._v(" "),s("h4",{attrs:{id:"장점-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점-2"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("ul",[s("li",[t._v("페이지마다 data-fetch, pre-rendering 전략을 다르게 할 수 있음")]),t._v(" "),s("li",[t._v("다양한 상태관리, 스타일링 라이브러리 지원")]),t._v(" "),s("li",[t._v("파일 시스템 라우팅")]),t._v(" "),s("li",[t._v("API route")])]),t._v(" "),s("h4",{attrs:{id:"단점-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점-2"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),s("ul",[s("li",[t._v("프레임워크 지식이 필요("),s("code",[t._v("_app.js")]),t._v(", "),s("code",[t._v("_document.js")]),t._v(", "),s("code",[t._v("getServerSideProps")]),t._v(" 등)")]),t._v(" "),s("li",[t._v("플러그인 시스템 없음")]),t._v(" "),s("li",[t._v("이미지 최적화")])]),t._v(" "),s("h4",{attrs:{id:"next-js로-인증-없이는-접근조차-못하게-막기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-js로-인증-없이는-접근조차-못하게-막기"}},[t._v("#")]),t._v(" Next.js로 인증 없이는 접근조차 못하게 막기")]),t._v(" "),s("p",[t._v("Next.js는 로그인/인증이 없으면 페이지에 접근조차 못하게 막을 수 있다. (핵심적인 스크립트 파일 유출을 막을 수 있음)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getInitialProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ServicePageContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"gatsby"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gatsby"}},[t._v("#")]),t._v(" Gatsby")]),t._v(" "),s("h4",{attrs:{id:"장점-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점-3"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("ul",[s("li",[t._v("GraphQL(단점이자 장점)")]),t._v(" "),s("li",[t._v("플러그인 생태계")]),t._v(" "),s("li",[t._v("이미지 최적화")]),t._v(" "),s("li",[t._v("정적 페이지 성능이 Next.js보다 약간 더 좋음")])]),t._v(" "),s("h4",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("ul",[s("li",[t._v("빌드시간이 오래걸림 (이미지 최적화, 정적 페이지)")])]),t._v(" "),s("h2",{attrs:{id:"프레임워크-별-응답값"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프레임워크-별-응답값"}},[t._v("#")]),t._v(" 프레임워크 별 응답값")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("CRA")]),t._v(" "),s("th",[t._v("Gatsby")]),t._v(" "),s("th",[t._v("Next.js")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("응답값")]),t._v(" "),s("td",[t._v("- 빈 HTML  - JS")]),t._v(" "),s("td",[t._v("- 그려진 HTML  - JS")]),t._v(" "),s("td",[t._v("- 그려진 HTML   - JS   - JSON (페이지 데이터)")])])])]),t._v(" "),s("p",[s("strong",[t._v("이 때 Next.js가 렌더링에 필요한 데이터도 브라우저로 같이 보내므로 브라우저에서 최초에 데이터를 요청하지 않음")])])])}),[],!1,null,null,null);a.default=r.exports}}]);