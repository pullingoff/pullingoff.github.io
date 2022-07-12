(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{425:function(t,r,a){t.exports=a.p+"assets/img/io2.e09ce161.jpg"},426:function(t,r,a){t.exports=a.p+"assets/img/io1.bb0cc1f4.jpg"},427:function(t,r,a){t.exports=a.p+"assets/img/io4.08a74767.png"},428:function(t,r,a){t.exports=a.p+"assets/img/io5.c6b3cc83.png"},429:function(t,r,a){t.exports=a.p+"assets/img/io6.57a7d9be.png"},430:function(t,r,a){t.exports=a.p+"assets/img/io7.0e14408f.png"},431:function(t,r,a){t.exports=a.p+"assets/img/io3.1feefd50.png"},549:function(t,r,a){"use strict";a.r(r);var s=a(59),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"메모리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메모리"}},[t._v("#")]),t._v(" "),s("strong",[t._v("메모리")])]),t._v(" "),s("p",[t._v(": 집이 늘어선 거리(street). 이 집에는 정해진 개수만큼 비트를 저장할 수 있는 방이 있다."),s("br"),t._v("\n이 데이터는 데이터 버스에 실어 나른다. (버스: 1개 이상의 장치가 공동으로 사용하는 회선, 회선의 집합)")]),t._v(" "),s("h2",{attrs:{id:"i-o-장치-입출력-장치-주변장치-peripheral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-o-장치-입출력-장치-주변장치-peripheral"}},[t._v("#")]),t._v(" I/O 장치 (입출력 장치, 주변장치, peripheral)")]),t._v(" "),s("p",[t._v(": 키보드, 마우스 등 사용자의 입력을 받는 장치와 프린터처럼 출력을 하는 컴퓨터 주변 장치")]),t._v(" "),s("h2",{attrs:{id:"과거-i-o-street과-memory-street을-분리했다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#과거-i-o-street과-memory-street을-분리했다"}},[t._v("#")]),t._v(" 과거: I/O Street과 Memory Street을 분리했다.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(425),alt:"과거의 IO 연결"}})]),t._v(" "),s("ul",[s("li",[t._v("이유 1. 작은 패키지에 우겨넣기엔 컴퓨터가 너무 컸음")]),t._v(" "),s("li",[t._v("이유 2. 메모리 Street에 집이 많지 않았어서 IO까지 담기엔 무리였음")])]),t._v(" "),s("h2",{attrs:{id:"현재-메모리-street의-일부를-i-o-장치에-할당"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#현재-메모리-street의-일부를-i-o-장치에-할당"}},[t._v("#")]),t._v(" 현재: 메모리 Street의 일부를 I/O 장치에 할당")]),t._v(" "),s("p",[s("img",{attrs:{src:a(426),alt:"현재의 io 연결"}})]),t._v(" "),s("ul",[s("li",[t._v("이유: 운영체제의 "),s("strong",[t._v("기본 데이터 처리 단위가 커져서")]),t._v("(32, 64비트) "),s("strong",[t._v("메모리 거리의 주소 수가 많아짐")]),t._v(" ⇒ 빈 집 늘어남")])]),t._v(" "),s("h2",{attrs:{id:"입출력-슬롯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#입출력-슬롯"}},[t._v("#")]),t._v(" 입출력 슬롯")]),t._v(" "),s("p",[t._v("컴퓨터에는 표준 입출력 슬롯이 있어 "),s("strong",[t._v("일관된 방식")]),t._v("으로 IO 장치를 연결할 수 있다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://t1.daumcdn.net/cfile/blog/0277363D51C2BBE23B",alt:"io slot"}})]),t._v(" "),s("h3",{attrs:{id:"입출력-장치에-메모리를-할당하는-방법-like-서부시대의-땅-분배"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#입출력-장치에-메모리를-할당하는-방법-like-서부시대의-땅-분배"}},[t._v("#")]),t._v(" 입출력 장치에 메모리를 할당하는 방법 (like 서부시대의 땅 분배)")]),t._v(" "),s("ol",[s("li",[t._v("(메모리가?) 빈 집들 중 IO 장치에게 할당할 수 있는 영역(주소들)을 고른다.")]),t._v(" "),s("li",[t._v("각 슬롯의 장치는 자신에게 할당된 주소를 모두 사용 가능하다.")]),t._v(" "),s("li",[t._v("각 슬롯은 CPU가 슬롯-장치 매핑을 할 수 있는 특별 주소를 가진다.")])]),t._v(" "),s("h2",{attrs:{id:"입출력-장치-컨트롤러"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#입출력-장치-컨트롤러"}},[t._v("#")]),t._v(" 입출력 장치 컨트롤러")]),t._v(" "),s("p",[s("img",{attrs:{src:a(427),alt:"IO Controller의 내부 구성도"}})]),t._v(" "),s("ul",[s("li",[t._v("프로세서는 이 입출력 컨트롤러의 레지스터에 비트들을 쓰거나 읽음으로써 입출력을 수행")])]),t._v(" "),s("h2",{attrs:{id:"memory-mapped-io-메모리-영역에-있는-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memory-mapped-io-메모리-영역에-있는-io"}},[t._v("#")]),t._v(" Memory Mapped IO (메모리 영역에 있는 IO)")]),t._v(" "),s("p",[s("img",{attrs:{src:a(428),alt:"memory mapped io"}})]),t._v(" "),s("ul",[s("li",[t._v("오늘날의 대부분")]),t._v(" "),s("li",[t._v("메모리, IO가 나란히, 연속된 주소 영역에 할당됨")]),t._v(" "),s("li",[t._v("IO가 차지하는 만큼 메모리 용량은 감소")]),t._v(" "),s("li",[t._v("CPU는 메모리, IO를 동일한 외부기기로 간주해 액세스할때 표준 데이터 전송 명령 ("),s("strong",[t._v("read, write)")]),t._v(" 사용\n"),s("ul",[s("li",[t._v("Read: IO 장치에서 읽어 오는 것")]),t._v(" "),s("li",[t._v("Write: IO 장치를 제어 / 출력")])])]),t._v(" "),s("li",[t._v("소프트웨어적으로도 메모리 액세스 & 데이터 입출력이 동일한 것으로 간주되어 load나 store 명령으로 수행 가능")])]),t._v(" "),s("h3",{attrs:{id:"장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("p",[t._v("포트 입출력 구현할 때 메모리, io 차이 없어서 CPU 로직이 "),s("strong",[t._v("간단함")]),t._v(" ⇒ 더 저렴하고 빠르고 쉬운 CPU ⇒ "),s("strong",[t._v("RISC가")]),t._v(" 추구하는 바(**‘하드웨어와 기계어 명령어의 단순화 원칙’)**와 일치!")]),t._v(" "),s("h3",{attrs:{id:"단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),s("p",[t._v("주소와 데이터 버스를 더 많이 사용")]),t._v(" "),s("h2",{attrs:{id:"io-mapped-io-io-영역에-있는-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io-mapped-io-io-영역에-있는-io"}},[t._v("#")]),t._v(" IO Mapped IO (IO 영역에 있는 IO)")]),t._v(" "),s("p",[s("img",{attrs:{src:a(429),alt:"io mapped io"}})]),t._v(" "),s("ul",[s("li",[t._v("Isolated IO라고도 한다. (분리된 IO)")]),t._v(" "),s("li",[t._v("메모리, IO가 별개의 주소 영역에 할당됨")]),t._v(" "),s("li",[t._v("CPU는 이 둘을 구분해야하므로 read/write 외에도 IO에 접근하는 신호(in/out)가 필요함")]),t._v(" "),s("li",[t._v("메모리 액세스: load, store")]),t._v(" "),s("li",[t._v("io 입출력: input, output 명령에 의해 수행됨")])]),t._v(" "),s("h3",{attrs:{id:"장점-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장점-2"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),s("p",[t._v("어드레싱 능력이 제한된 CPU 사용할 때 유리 (메모리 용으로 주소영역 전체를 사용 가능)")]),t._v(" "),s("h3",{attrs:{id:"단점-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점-2"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),s("p",[t._v("Memory mapped io 방식 대비 하드웨어 구조가 복잡")]),t._v(" "),s("h2",{attrs:{id:"명령어-비교"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#명령어-비교"}},[t._v("#")]),t._v(" 명령어 비교")]),t._v(" "),s("p",[s("img",{attrs:{src:a(430),alt:"memory-mapped io 의 예시"}})]),t._v(" "),s("ul",[s("li",[t._v("데이터 레지스터 주소: 412번지")]),t._v(" "),s("li",[t._v("상태/제어 레지스터 주소: 413번지")]),t._v(" "),s("li",[t._v("상태 레지스터 최하위비트 = RDY 비트로 사용 (3번째 줄)")]),t._v(" "),s("li",[t._v("제어 레지스터 최상위비트 = 프린트 동작 start 비트로 사용 (2번째 줄에서 clear, LOAD 80H에서 load)")])]),t._v(" "),s("hr"),t._v(" "),s("p",[s("img",{attrs:{src:a(431),alt:"io-mapped io의 예시"}})]),t._v(" "),s("p",[t._v("이미지 출처: "),s("a",{attrs:{href:"https://itstory07.tistory.com/881",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://itstory07.tistory.com/881"),s("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=e.exports}}]);