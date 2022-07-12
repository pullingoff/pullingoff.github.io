(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{554:function(t,s,a){"use strict";a.r(s);var e=a(59),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"블로그를-직접-만들다-보니까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#블로그를-직접-만들다-보니까"}},[t._v("#")]),t._v(" 블로그를 직접 만들다 보니까")]),t._v(" "),a("p",[t._v("고려할 게 한두가지가 아니다. 디자인부터 어떤 라이브러리를 사용할지 등등 고민할 게 엄청 많다! 그래서 아예 한 카테고리를 할애해서 내가 블로그를 만들면서 한 고민과 생각을 정리하려 한다.")]),t._v(" "),a("h2",{attrs:{id:"처음-지킬-블로그를-만들었을-땐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#처음-지킬-블로그를-만들었을-땐"}},[t._v("#")]),t._v(" 처음 지킬 블로그를 만들었을 땐")]),t._v(" "),a("p",[t._v("mobile first로 레이아웃을 만들어야한다는 걸 몰랐다. 그래서 기본을 데스크탑 뷰로 했었는데 Next.js로 다시 만들땐 mobile-first로 CSS를 바꿔야했다. 기존에 모바일 뷰를 위해 적용했던 미디어 쿼리들을 기본값으로 설정하고, 화면이 넓어질 때의 스타일값들을 미디어 쿼리로 적용했다.")]),t._v(" "),a("h2",{attrs:{id:"style-관련-라이브러리들-비교"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-관련-라이브러리들-비교"}},[t._v("#")]),t._v(" style 관련 라이브러리들 비교")]),t._v(" "),a("p",[t._v("Next.js로 개발을 하면서는 tailwind, module.scss, styled components를 사용했다.")]),t._v(" "),a("ul",[a("li",[t._v("Tailwind는 간단하게 클래스이름만으로 스타일 주고 싶을 때 (주로 padding, margin 값 주려고 사용)")]),t._v(" "),a("li",[t._v("Module.scss: 그 컴포넌트에만 CSS 적용하고 싶을 때, 애니메이션이나 transformation 등 효과를 미디어 쿼리를 사용해야할 때 주로 사용했다.")]),t._v(" "),a("li",[t._v("Styled Components: Tailwind로 하기엔 할 게 많고 module.scss를 쓰기엔 적은 양이었을때 사용했다. 또 일회성인 스타일이 필요할 때 사용했다.")])]),t._v(" "),a("p",[t._v("근데 이렇게 그때그때 유용한 놈들을 섞어 사용하니까... 관리하기가 너무 힘들었다. ㅜㅜ")]),t._v(" "),a("h2",{attrs:{id:"tailwind를-걷어내고-css-모듈을-최소화한다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwind를-걷어내고-css-모듈을-최소화한다"}},[t._v("#")]),t._v(" Tailwind를 걷어내고 CSS 모듈을 최소화한다.")]),t._v(" "),a("p",[t._v("tailwind는 부트스트랩처럼 html 요소의 클래스명만 바꿔주면 되고, 미디어 쿼리도 적용할 수 있어서 참 편했지만.... tailwind를 임포트할때 웹팩 에러가 몇번 나기도 했고, styled-component로 대체할 수 있을 것 같아서 큰맘먹고 걷어냈다.")]),t._v(" "),a("p",[t._v("Next.js가 내세운 module.scss의 장점은 그 컴포넌트에만 스타일을 적용할 수 있다는 거였다. 하지만 이건 styled-component의 장점이기도 해서, module.scss도 애니메이션이 많은 내비게이션 바만 남겨두고 다 styled-component로 바꿨다.")]),t._v(" "),a("h2",{attrs:{id:"썸네일을-넣을까-말까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#썸네일을-넣을까-말까"}},[t._v("#")]),t._v(" 썸네일을 넣을까 말까")]),t._v(" "),a("p",[t._v("프로젝트를 혼자 할 땐 디자인이 제일 어렵다. 블로그 글 목록을 보여줄 때 썸네일도 보여줄지 말지가 큰 고민이었다. 썸네일이 있으면 독자가 글의 내용을 좀 더 직관적으로 이해할 수 있긴 한데, 내가 지킬 블로그때 썼던 썸네일이 외부 리소스인 경우가 많았다. 근데 단순하게 적는 글의 경우 사실 썸네일이 필요없어서 고민이었다.")]),t._v(" "),a("p",[t._v("Next.js가 SSR이다보니 빌드할 때 그런 이미지들도 다 받아둬야한다. 외부에서 가져오는 건 next.config.js에 도메인을 다 추가해줘야했다.")])])}),[],!1,null,null,null);s.default=i.exports}}]);