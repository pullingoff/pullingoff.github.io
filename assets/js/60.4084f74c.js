(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{515:function(t,e,c){"use strict";c.r(e);var n=c(59),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h2",{attrs:{id:"exception"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#exception"}},[t._v("#")]),t._v(" Exception")]),t._v(" "),c("p",[t._v("설계 당시에 예상하지 못했던 모든 상황을 Throwable로 캡슐화한 것")]),t._v(" "),c("ul",[c("li",[t._v("Error: 개발자가 직접 처리할 수 없는 예외")]),t._v(" "),c("li",[t._v("Exception: 개발자가 처리할 수 있는 예외")])]),t._v(" "),c("h3",{attrs:{id:"checked-exception"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#checked-exception"}},[t._v("#")]),t._v(" checked Exception")]),t._v(" "),c("ul",[c("li",[t._v("최상위 객체: Exception")]),t._v(" "),c("li",[t._v("반드시 처리해야함")])]),t._v(" "),c("p",[t._v("e.g. IOException. SQLException, ServletException")]),t._v(" "),c("h3",{attrs:{id:"unchecked-exception"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#unchecked-exception"}},[t._v("#")]),t._v(" unchecked Exception")]),t._v(" "),c("ul",[c("li",[t._v("최상위 객체: RuntimeException")]),t._v(" "),c("li",[t._v("처리하지 않아도 VM에게 예외 제어권이 전달됨")])]),t._v(" "),c("p",[t._v("-> (UserNotFoundException 나중에 스프링에서 쓰는데, 걔가 여기 속함)")]),t._v(" "),c("p",[t._v("e.g. NullPointerExcpetion, IllegalArgumentException, ArithmeticException, IndexOutOfBound")]),t._v(" "),c("h2",{attrs:{id:"자바-예외-처리방법"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#자바-예외-처리방법"}},[t._v("#")]),t._v(" 자바 예외 처리방법")]),t._v(" "),c("p",[t._v("try - catch - finally\ntry(closable객체 선언) : try with resource 구문 (since JAVA 1.7)")]),t._v(" "),c("ul",[c("li",[t._v("throws : 예외를 호출한 곳으로 보냄. 거기에 try catch있으면 try catch 됨")]),t._v(" "),c("li",[t._v("throw: 예외 객체를 생성하고, 해당 예외를 메소드 호출구조 상에 올릴 때 (exception을 일부러 내가 만든다)")])]),t._v(" "),c("p",[c("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKDZWN%2FbtqHT0Rh34b%2FfFzTP3wlubaRfBwUqkoL7K%2Fimg.png",alt:"예외"}})]),t._v(" "),c("p",[t._v("1번에서 ArithmeticException이 발생 -> 2번에서 catch로 무언가 해주고 나면 해결됨 -> 3번에서 정상 작동 => value가 sysout 된다.")])])}),[],!1,null,null,null);e.default=i.exports}}]);