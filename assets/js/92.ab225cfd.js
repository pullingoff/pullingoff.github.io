(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{561:function(t,a,v){"use strict";v.r(a);var e=v(59),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"react의-특징"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react의-특징"}},[t._v("#")]),t._v(" React의 특징")]),t._v(" "),v("ul",[v("li",[t._v("컴포넌트. 반복되는 부분을 하나의 구성요소로 만들어 코드 재사용")]),t._v(" "),v("li",[t._v("state 관리.")]),t._v(" "),v("li",[t._v("virtual dom: 연산 줄여줌. 리소스 재활용. (처음에는 로드하느라 조금 느릴 수 있지만 그다음부터는 페이지 전환이 빠름)")]),t._v(" "),v("li",[t._v("단방향 데이터 바인딩")])]),t._v(" "),v("h3",{attrs:{id:"단방향-데이터-바인딩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#단방향-데이터-바인딩"}},[t._v("#")]),t._v(" 단방향 데이터 바인딩")]),t._v(" "),v("p",[t._v("데이터 바인딩 : "),v("strong",[t._v("화면에 보이는 데이터와 브라우저 메모리에 있는 데이터를 일치시키는 것")])]),t._v(" "),v("p",[t._v("양방향 데이터 바인딩의 경우, 데이터의 변화를 감시하는 "),v("code",[t._v("watcher")]),t._v("가 두개라 컨트롤러(자바스크립트)와 뷰(HTML) 서 데이터가 변경될 수 있다."),v("br"),t._v("\n단방향 데이터 바인딩의 경우 템플릿과 모델(데이터)을 합쳐 뷰에 반영한다. 즉, 자바스크립트의 데이터가 HTML에 표현되는 것이다."),v("br"),t._v("\n단방향 데이터 바인딩을 하면 데이터의 변화를 예측/감지하기 쉽고, 데이터를 추적하거나 디버깅하는 데 용이하다.")]),t._v(" "),v("h2",{attrs:{id:"리액트의-라이프사이클-함수-생애주기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#리액트의-라이프사이클-함수-생애주기"}},[t._v("#")]),t._v(" 리액트의 라이프사이클 함수 (생애주기)")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("constructor()")])]),t._v(" "),v("li",[v("code",[t._v("componentWillMount()")])]),t._v(" "),v("li",[v("code",[t._v("render()")])]),t._v(" "),v("li",[v("code",[t._v("componentDidMount()")])])]),t._v(" "),v("h2",{attrs:{id:"클래스형-컴포넌트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#클래스형-컴포넌트"}},[t._v("#")]),t._v(" 클래스형 컴포넌트")]),t._v(" "),v("ul",[v("li",[t._v("옛날 문법")]),t._v(" "),v("li",[t._v("render() 안에서 return")])]),t._v(" "),v("h2",{attrs:{id:"함수형-컴포넌트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#함수형-컴포넌트"}},[t._v("#")]),t._v(" 함수형 컴포넌트")]),t._v(" "),v("ul",[v("li",[t._v("함수(function)를 기반으로 작성")])]),t._v(" "),v("h2",{attrs:{id:"비교"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비교"}},[t._v("#")]),t._v(" 비교")]),t._v(" "),v("ul",[v("li",[t._v("함수형에서 props 접근할 때는 {props.text} vs class에서는 this.props.text")]),t._v(" "),v("li",[t._v("class 형에서 componentDidMount 는 함수형의 useEffect로 대체 가능")])]),t._v(" "),v("h2",{attrs:{id:"리액트-개발-시-주의할-점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#리액트-개발-시-주의할-점"}},[t._v("#")]),t._v(" 리액트 개발 시 주의할 점")]),t._v(" "),v("ul",[v("li",[t._v("react 사용할땐 DOM 직접 조작을 피할 것. 변경하려는 유일한 것은 state여야.")]),t._v(" "),v("li",[t._v("클래스 이름 변경 시엔 classnames사용하기")]),t._v(" "),v("li",[t._v("NavLink (reactRouter) 쓰면 active classname 설정 가능")]),t._v(" "),v("li",[t._v("리액트에서 prop을 주고 받을때 필요한 컴포넌트가 여럿 넓게 펼쳐져 있는 경우, 주고 받기 복잡하고 유지보수 또한 어려워진다. 그럴땐 리액트 자체 context api를 사용하면 좋다. 이 둘은 context 형식을 사용해 필요한 상태가 있는 컨텍스트를 따로 만들어두고 필요할 때 그때그때 값을 사용할 수 있게 한다.")])]),t._v(" "),v("h2",{attrs:{id:"리액트-최적화-방법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#리액트-최적화-방법"}},[t._v("#")]),t._v(" 리액트 최적화 방법")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("useMemo")]),t._v("로 복잡한 연산이 필요한 함수는 캐싱. 함수의 디펜던시(파라미터)가 같을 경우 이전에 리턴했던 참조값을 재사용함.")]),t._v(" "),v("li",[t._v("클래스형 컴포넌트에서는 "),v("code",[t._v("React.memo")]),t._v("로 메모이제이션 (useMemo와 같음)")]),t._v(" "),v("li",[v("code",[t._v("useCallback")]),t._v("으로 함수 선언을 메모이제이션")]),t._v(" "),v("li",[t._v("자식 컴포넌트에게 props를 전달할 때, 새로 객체를 생성해 보내지 말고 state 그대로 넘기고, 필요한 데이터 가공은 자식 컴포넌트 안에서 하기. props 값이 변경될 때마다 컴포넌트를 렌더링하므로 state만 전달해주고 자세한 연산은 자식 컴포넌트 안에서 하도록 하는게 좋다.")]),t._v(" "),v("li",[v("code",[t._v("map()")]),t._v(" 함수 사용시 컴포넌트의 key값으로 인덱스 값 넣지 않기. 배열 중간에 요소가 삽입 또는 수정, 삭제될 경우 그 이후의 요소들은 전부 인덱스가 변경되기 때문이다.")])])])}),[],!1,null,null,null);a.default=_.exports}}]);