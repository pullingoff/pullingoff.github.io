(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{525:function(t,a,s){"use strict";s.r(a);var e=s(59),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"export-default를-쓰지-말아야할-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-default를-쓰지-말아야할-이유"}},[t._v("#")]),t._v(" export default를 쓰지 말아야할 이유")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://yceffort.kr/2020/11/avoid-default-export",target:"_blank",rel:"noopener noreferrer"}},[t._v("yceffort님의 글 보러가기"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("평소에 한 컴포넌트에 내보낼 게 하나만 있으면 당연스럽게 export default를 썼었는데 yceffort님의 글을 읽고 다시 한번 생각해보았다.")]),t._v(" "),s("h2",{attrs:{id:"검색이-어렵다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#검색이-어렵다"}},[t._v("#")]),t._v(" 검색이 어렵다")]),t._v(" "),s("p",[t._v("default로 export를 하니까 그 컴포넌트에 다른 내보내기가 있는지 직관적이지 않다.")]),t._v(" "),s("h2",{attrs:{id:"commonjs를-쓰는-사람에게-불편을-준다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs를-쓰는-사람에게-불편을-준다"}},[t._v("#")]),t._v(" commonjs를 쓰는 사람에게 불편을 준다")]),t._v(" "),s("p",[s("code",[t._v("commonjs")]),t._v("는 JS 모듈을 만들때 쓰는 규칙이다. default export를 commonjs로 바꾸면")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("이렇게 중복으로 적어줘야해서 번거롭다.")]),t._v(" "),s("h2",{attrs:{id:"dynamic-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-import"}},[t._v("#")]),t._v(" Dynamic Import")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("만약 "),s("code",[t._v("default")]),t._v("가 아니면 foo()로 가능함.")]),t._v(" "),s("h2",{attrs:{id:"리팩토링의-어려움"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리팩토링의-어려움"}},[t._v("#")]),t._v(" 리팩토링의 어려움")]),t._v(" "),s("p",[t._v("default export의 경우 import할 때 네이밍을 제멋대로 할 수 있어서 리팩토링하기 어렵다.")]),t._v(" "),s("h1",{attrs:{id:"결론"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[t._v("#")]),t._v(" 결론")]),t._v(" "),s("p",[t._v("그럼에도 내보낼 것이 한 개인 경우엔 export default를 권장하는 라이브러리도 많다.\n편하지만 마냥 좋은 것만은 아니라는 것을 염두하고 코딩하자!")])])}),[],!1,null,null,null);a.default=r.exports}}]);