(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{445:function(t,a,e){t.exports=e.p+"assets/img/vm1.3ef1ba73.png"},446:function(t,a,e){t.exports=e.p+"assets/img/vm2.d0b734ae.png"},447:function(t,a,e){t.exports=e.p+"assets/img/vm3.39fb1bfc.png"},448:function(t,a,e){t.exports=e.p+"assets/img/vm4.0e071527.png"},449:function(t,a,e){t.exports=e.p+"assets/img/vm5.9730a553.png"},450:function(t,a,e){t.exports=e.p+"assets/img/vm6.4f5b89d8.png"},451:function(t,a,e){t.exports=e.p+"assets/img/vm8.8da39549.png"},452:function(t,a,e){t.exports=e.p+"assets/img/vm9.f9921c58.png"},453:function(t,a,e){t.exports=e.p+"assets/img/vm10.3951caf1.png"},454:function(t,a,e){t.exports=e.p+"assets/img/vm7.14009dc2.png"},455:function(t,a,e){t.exports=e.p+"assets/img/vm11.d041f4ea.png"},456:function(t,a,e){t.exports=e.p+"assets/img/vm12.1aeacf30.png"},457:function(t,a,e){t.exports=e.p+"assets/img/vm13.4d4093e6.png"},458:function(t,a,e){t.exports=e.p+"assets/img/vm14.b7e88ad3.png"},459:function(t,a,e){t.exports=e.p+"assets/img/vm15.8c2e77bf.png"},460:function(t,a,e){t.exports=e.p+"assets/img/vm17.8776f154.png"},461:function(t,a,e){t.exports=e.p+"assets/img/vm16.021336a5.png"},462:function(t,a,e){t.exports=e.p+"assets/img/vm18.6f732451.png"},553:function(t,a,e){"use strict";e.r(a);var s=e(59),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("지난 번엔 논리 메모리 주소를 물리 주소로 변환하는 것에 대해 배웠는데, 이 작업은 운영체제가 전혀 관여하지 않는다.\n이번엔 운영체제가 관여하는 가상 메모리 시스템의 메모리를 효율적으로 관리하고자 사용하는 페이지 replacement algorithm에 대해 알아본다.")]),t._v(" "),s("h2",{attrs:{id:"demanding-paging-실제로-필요할때-페이지를-메모리에-올림"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demanding-paging-실제로-필요할때-페이지를-메모리에-올림"}},[t._v("#")]),t._v(" Demanding Paging: 실제로 필요할때 페이지를 메모리에 올림")]),t._v(" "),s("ul",[s("li",[t._v("IO 양 감소, 메모리 사용량 감소(한정된 메모리를 효율적으로 사용 가능), 빠른 응답시간, 더 많은 유저 수용")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(445),alt:"메모리에 없는 페이지의 페이지 테이블"}})]),t._v(" "),s("ul",[s("li",[t._v("처음엔 모든 페이지 엔트리가 invalid로 초기화되어있음.")]),t._v(" "),s("li",[t._v("Valid bit(당장 필요한 부분)은 demanding paging으로 메모리에 이미 올라가 있다 (4,6,9)")]),t._v(" "),s("li",[t._v("invalid bits는 backing store(스왑 영역)에 있다.")]),t._v(" "),s("li",[t._v("read나 write의 참조가 일어나 주소를 변환 해야할 때 invalid bit이 set되어있으면 page fault 났다고 함. (그럴때 os가 처리함)")])]),t._v(" "),s("h3",{attrs:{id:"page-fault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-fault"}},[t._v("#")]),t._v(" page fault")]),t._v(" "),s("p",[s("img",{attrs:{src:e(446),alt:"페이지 폴트의 순서"}}),t._v(" "),s("img",{attrs:{src:e(447),alt:"페이지 폴트 대처법"}})]),t._v(" "),s("ul",[s("li",[t._v("refer(1)하려고 했는데 invalid(메모리에 올라와있지않으면) trap 발생해 cpu가 운영체제로 넘어감")]),t._v(" "),s("li",[t._v("운영체제가 스왑영역에서 페이지 올림. 그다음 invalid를 valid로 바꾸고(5) restart(6)")]),t._v(" "),s("li",[t._v("page fault는 자주 발생하지 않는다. 하지만 한번 발생하면 운영체제가 넘어가고, 하드웨어적으로 처리하느라 엄청난 시간(오버헤드)이 소모됨")])]),t._v(" "),s("h3",{attrs:{id:"빈-페이지가-없는-경우-free-frame이-없는-경우"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#빈-페이지가-없는-경우-free-frame이-없는-경우"}},[t._v("#")]),t._v(" 빈 페이지가 없는 경우(=Free frame이 없는 경우)")]),t._v(" "),s("ul",[s("li",[t._v("Page replacement 필요함. 곧바로 사용하지 않을 페이지를 쫓아내고, 어떤 프레임을 뺏어올지 결정해야함")]),t._v(" "),s("li",[t._v("동일한 페이지가 여러번 메모리에서 쫓겨났다가 다시 들어올 수 있음")]),t._v(" "),s("li",[t._v("Replacement algorithm: page fault rate을 최대한 낮추는게 목표")]),t._v(" "),s("li",[t._v("위 알고리즘은. 주어진 페이지 레퍼런스 string에서 얼마나 page fault를 내는지로 조사함")])]),t._v(" "),s("h2",{attrs:{id:"페이지-replacement-알고리즘의-종류를-알아보자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#페이지-replacement-알고리즘의-종류를-알아보자"}},[t._v("#")]),t._v(" 페이지 Replacement 알고리즘의 종류를 알아보자")]),t._v(" "),s("h3",{attrs:{id:"optimal-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optimal-algorithm"}},[t._v("#")]),t._v(" Optimal Algorithm")]),t._v(" "),s("p",[s("img",{attrs:{src:e(448),alt:"옵티멀 알고리즘"}})]),t._v(" "),s("ul",[s("li",[t._v("page fault를 가장 적게 하는 알고리즘 (다른 알고리즘의 성능의 upper bound를 제공) / 가장 먼 미래에 참조되는 페이지를 쫓아낸다")]),t._v(" "),s("li",[t._v("미래에 참조되는 페이지를 모두 안다고 가정하고 (실제 시스템에선 사용될 수 없으므로 오프라인 알고리즘이라고도 불림) 운영")]),t._v(" "),s("li",[t._v("빨간색: 페이지 폴트나는 경우, 연보라: 페이지 폴트 없이 메모리에서 직접 참조된 경우")]),t._v(" "),s("li",[t._v("7번째 예시의 경우 5가 필요한데 메모리에 없음. 그니까 가장 먼미래에 참조되는 4를 쫓아낸다.")])]),t._v(" "),s("h3",{attrs:{id:"fifo-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fifo-algorithm"}},[t._v("#")]),t._v(" FIFO Algorithm")]),t._v(" "),s("p",[s("img",{attrs:{src:e(449),alt:"FIFO 알고리즘"}})]),t._v(" "),s("ul",[s("li",[t._v("이 알고리즘의 나쁜 성질: 메모리 프레임 크기를 늘리면 성능이 더 나빠짐 (FIFO Anomaly라고 부름)")])]),t._v(" "),s("h3",{attrs:{id:"lru-least-recently-used-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lru-least-recently-used-algorithm"}},[t._v("#")]),t._v(" LRU(Least Recently Used) Algorithm")]),t._v(" "),s("p",[s("img",{attrs:{src:e(450),alt:"LRU Algorithm "}}),t._v(" "),s("img",{attrs:{src:e(451),alt:"LRU Algorithm 구현법"}})]),t._v(" "),s("ul",[s("li",[t._v("과거를 중요하게 생각")]),t._v(" "),s("li",[t._v("최근은 아니더라도 자주 참조되는 페이지를 지울 우려가 있음")]),t._v(" "),s("li",[t._v("구현방법: 참조시점대로 페이지를 LinkedList 형태로 정렬함. 새 참조가 들어오면 중간에 끼우기만 하면됨. 쫓아낼때도 비교 필요 없이 맨 위에 있는 페이지(LRU)")])]),t._v(" "),s("h3",{attrs:{id:"lfu-least-frequently-used-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lfu-least-frequently-used-algorithm"}},[t._v("#")]),t._v(" LFU(Least Frequently Used) Algorithm")]),t._v(" "),s("p",[s("img",{attrs:{src:e(452),alt:"LFU 리스트로 구현"}}),t._v(" "),s("img",{attrs:{src:e(453),alt:"LFU 힙으로 구현"}})]),t._v(" "),s("ul",[s("li",[t._v("참조횟수가 가장 적은 페이지를 지움")]),t._v(" "),s("li",[t._v("최저 참조횟수인 페이지가 여럿이면 임의로 선정하거나 성능향상을 위해 가장 오래전에 참조된 페이지를 지우게 구현할수도 있음")]),t._v(" "),s("li",[t._v("장점: LRU처럼 직전만 보는게 아니라 장기적인 시간 규모를 보기때문에 페이지의 인기도를 좀 더 정확히 반영 가능")]),t._v(" "),s("li",[t._v("단점:")]),t._v(" "),s("li",[t._v("구현방법: LRU와 달리 새 참조가 들어오면 다른 참조의 횟수와 비교를 해서 자리를 정해야함 => 그래서 list 말고 힙을 사용 / root를")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(454),alt:"LRU, LFU 알고리즘 예제"}})]),t._v(" "),s("ul",[s("li",[t._v("둘다 장단점이 있음.")])]),t._v(" "),s("p",[t._v("가장 참조횟수가 적은 페이지를 운영체제는 알 수 없다. 왜냐면 프로세스가 요청한 페이지가 이미 메모리에 있으면 cpu가 운영체제에게 넘어가지않음. 그래서 접근 시간을 os가 모름. 그러나 페이지 폴트가 나면 cpu가 운영체제로 넘어가 언제 그 페이지가 메모리로 올라왔는지 등의 정보를 얻게 됨."),s("br"),t._v("\n사실 위 알고리즘을 os가 정렬하고 해야하는데 페이지가 이미 메모리에 존재하는 경우엔 os가 관련 정보를 알 수 없다. page fault 시에만 알 수 있다.\n-> 클락 알고리즘 등장")]),t._v(" "),s("h2",{attrs:{id:"cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" cache")]),t._v(" "),s("ul",[s("li",[t._v("한정된 빠른 공간(캐시)에 요청된 데이터를 저장해두었다가 이후에 요청이 오면 캐쉬에서 바로 서비스")]),t._v(" "),s("li",[t._v("paging system 외에도 캐시메모리, 버퍼 캐싱, 웹 캐싱 등 다양한 분야에서 사용")]),t._v(" "),s("li",[t._v("시간 제약: 교체 알고리즘에서 삭제할 항목을 결정하는 일에 지나치게 많은 시간이 걸리면 실제 시스템에서 사용 불가")])]),t._v(" "),s("h2",{attrs:{id:"clock-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clock-algorithm"}},[t._v("#")]),t._v(" Clock Algorithm")]),t._v(" "),s("p",[s("img",{attrs:{src:e(455),alt:"클락 알고리즘"}}),t._v(" "),s("img",{attrs:{src:e(456),alt:"클락 알고리즘의 시계모양 예시"}})]),t._v(" "),s("ul",[s("li",[t._v("LRU의 근사 알고리즘 (second change 알고리즘)")]),t._v(" "),s("li",[t._v("레퍼런스 빝을 운영체제가 바꾸면서 지나감. 레퍼런스 비트가 0이라는건 시계바늘이 한번 도는 동안 참조가 한번도 없었다는 것")]),t._v(" "),s("li",[t._v("하드웨어: refer bit을 1로 바꿈/ os는 이 비트가 0인걸 쫓아냄")]),t._v(" "),s("li",[t._v("modified bit과 reference bit를 함께 사용하면 좋다.")])]),t._v(" "),s("h2",{attrs:{id:"page-frame의-allocation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-frame의-allocation"}},[t._v("#")]),t._v(" page frame의 allocation")]),t._v(" "),s("p",[s("img",{attrs:{src:e(457),alt:"페이지 프레임 할당"}})]),t._v(" "),s("ul",[s("li",[t._v("지금까지는 프로그램 여러개가 물리메모리에 같이 올라가있었다. 쫓아낼땐 어떤 프로세스에 있는 건지 무관하게 쫓아냈다. 하지만 그 프로세스가 원활하게 실행되려면 다 같이 올라와있는게 좋다.")]),t._v(" "),s("li",[t._v("equal / proportional / priority allocation")])]),t._v(" "),s("h2",{attrs:{id:"global-vs-local-replacement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-vs-local-replacement"}},[t._v("#")]),t._v(" global vs. local replacement")]),t._v(" "),s("ul",[s("li",[t._v("전역: 교체시 다른 프로세스에 할당된 프레임을 뺏어올 수 있음, 프로세스별 할당량 조절하는 방법임, FIFO, LRU, LFU 등의 알고리즘을 전역으로 사용시에 해당")]),t._v(" "),s("li",[t._v("로컬: 자신에게 할당된 프레임 내에서만 교체, 여러 알고리즘을 프로세스 별로 운영시")])]),t._v(" "),s("h2",{attrs:{id:"thrashing-프로세스의-원활한-수행에-필요한-최소한의-페이지-프레임-수를-할당받지-못한-경우-발생"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thrashing-프로세스의-원활한-수행에-필요한-최소한의-페이지-프레임-수를-할당받지-못한-경우-발생"}},[t._v("#")]),t._v(" Thrashing : 프로세스의 원활한 수행에 필요한 최소한의 페이지 프레임 수를 할당받지 못한 경우 발생")]),t._v(" "),s("p",[s("img",{attrs:{src:e(458),alt:"thrashing diagram"}})]),t._v(" "),s("ul",[s("li",[t._v("IO 하는 동안 CPU가 놀기 때문에 CPU 사용률이 처음에 낮았다가, 멀티 프로그래밍이 더해질수록 CPU 사용률이 높아짐")]),t._v(" "),s("li",[t._v("그러다가 thrashing이 발생하면 cpu 사용률이 떨어지고 page fault가 빈번히 발생")]),t._v(" "),s("li",[t._v("운영체제가 보기엔 CPU 사용률이 낮네? 프로그램 더 올려야겠다. => 프로세스가 추가되면 프로세스당 할당된 프레임 수가 더욱 줄어들고, 프로세스는 swap in out하느라 바빠지고 CPU는 할일이 없어짐 (시스템이 비효율적이게 됨)")])]),t._v(" "),s("h3",{attrs:{id:"전역-교체-방법1-working-set-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전역-교체-방법1-working-set-model"}},[t._v("#")]),t._v(" 전역 교체 방법1. working set model")]),t._v(" "),s("p",[s("img",{attrs:{src:e(459),alt:"working set model"}}),t._v(" "),s("img",{attrs:{src:e(460),alt:"워킹 셋 결정하는 법"}})]),t._v(" "),s("ul",[s("li",[t._v("working set: 프로세스실행을 위해 한꺼번에 메모리에 올라와있어야하는 페이지, 집중적으로 참조되는 페이지들의 집합")]),t._v(" "),s("li",[t._v("프로세스의 워킹 셋 전체가 메모리에 올라오지 않으면 모든 프레임을 반납한 후 swap out")]),t._v(" "),s("li",[t._v("이 워킹 셋이 한번에 메모리에 올라와있도록 보장함으로써 page fault가 덜 일어나게 함 / thrashing 방지")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(461),alt:"워킹 셋 결정하는 법"}})]),t._v(" "),s("ul",[s("li",[t._v("과거 델타 시간동안 참조된 페이지의 집합을 보고 워킹 셋으로 간주 / 즉, 참조된 후 델타 시간동안 해당 페이지를 메모리에 유지한 후 버림")]),t._v(" "),s("li",[t._v("워킹 셋의 크기는 그때그때 바뀐다. (t1, t2를 보면 다르다는 걸 알 수 있음)")])]),t._v(" "),s("h3",{attrs:{id:"전역-교체-방법2-pff-page-fault-frequency-scheme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전역-교체-방법2-pff-page-fault-frequency-scheme"}},[t._v("#")]),t._v(" 전역 교체 방법2. PFF(Page-Fault Frequency) Scheme")]),t._v(" "),s("p",[s("img",{attrs:{src:e(462),alt:"워킹 셋 결정하는 법"}})]),t._v(" "),s("ul",[s("li",[t._v("page fault rate의 상한값, 하한값을 두고 상한값을 넘으면 프레임을 더 할당. 하한값 이하면 할당 프레임수를 줄임")]),t._v(" "),s("li",[t._v("프로그램의 상태에 따라 가파른 정도가 다름.")])]),t._v(" "),s("h2",{attrs:{id:"page-size가-너무-작으면"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-size가-너무-작으면"}},[t._v("#")]),t._v(" Page Size가 너무 작으면?")]),t._v(" "),s("ul",[s("li",[t._v("페이지 수 증가(더 잘게 썰게 되니까), 테이블의 크기 증가, 대신 internal fragmentaion 감소")]),t._v(" "),s("li",[t._v("꼭 필요한 정보만 메모리에 올라와 메모리 사용하기 효율적")]),t._v(" "),s("li",[t._v("Disk transfer의 효율성 감소 (seek/rotation vs. transfer): 페이지 폴트 때마다 seek해야해서")]),t._v(" "),s("li",[t._v("요즘은 페이지를 크게 하는게 트렌드임")])])])}),[],!1,null,null,null);a.default=r.exports}}]);