(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{509:function(t,a,e){"use strict";e.r(a);var s=e(59),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"서론"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#서론"}},[t._v("#")]),t._v(" 서론")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.banksalad.com/tech/become-an-organization-that-deploys-1000-times-a-day/",target:"_blank",rel:"noopener noreferrer"}},[t._v("뱅크샐러드 블로그 '하루에 1000번 배포하는 조직 되기' 읽으러가기"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("뱅크샐러드 블로그를 보다가 엄청난 제목에 이끌려 읽게 된 아티클.")]),t._v(" "),e("p",[t._v("하루에 1000번을 배포한다구...?")]),t._v(" "),e("h2",{attrs:{id:"내용-요약"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#내용-요약"}},[t._v("#")]),t._v(" 내용 요약")]),t._v(" "),e("p",[t._v("VC가 기업이 확장 가능한 기술 역량을 보유하고 있는지 판단하는 지표 중 하나가 '1일 배포 수'. => "),e("strong",[t._v("비즈니스 요구가 얼마나 충족되고 있는지를 보여줌")])]),t._v(" "),e("p",[t._v("뱅샐은 더 잦은 배포를 위해 "),e("strong",[t._v("배포 과정을 개선하고 새로운 배포 시스템")]),t._v("을 구축했다.")]),t._v(" "),e("h2",{attrs:{id:"기존-배포-프로세스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기존-배포-프로세스"}},[t._v("#")]),t._v(" 기존 배포 프로세스")]),t._v(" "),e("h3",{attrs:{id:"tech-stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tech-stack"}},[t._v("#")]),t._v(" Tech Stack")]),t._v(" "),e("ul",[e("li",[t._v("GitHub로 버전 컨트롤")]),t._v(" "),e("li",[t._v("MSA(MicroService Architecture)를 적용해 비즈니스 도메인별로 여러 서비스 운영")]),t._v(" "),e("li",[t._v("모든 서비스는 Docker로 컨테이너화되며 모든 도커 이미지는 Docker Hub를 통해 관리.")]),t._v(" "),e("li",[t._v("수십개의 서비스와 컨테이너를 쿠버네티스 환경에서 운영")])]),t._v(" "),e("h3",{attrs:{id:"git-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-flow"}},[t._v("#")]),t._v(" Git-Flow")]),t._v(" "),e("ul",[e("li",[t._v("깃 브랜칭 모델은 Git-Flow을 사용")])]),t._v(" "),e("h3",{attrs:{id:"tag-based-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag-based-deployment"}},[t._v("#")]),t._v(" Tag Based Deployment")]),t._v(" "),e("ul",[e("li",[t._v("최종 배포 커밋이 main에 머지되면 해당 커밋에 git tag를 생성해 푸시. (Semantic 버저닝)")]),t._v(" "),e("li",[t._v("푸시 후, 해당 태그와 같은 태그를 사용해 docker img에 빌드한 뒤 docker hub에 푸시")]),t._v(" "),e("li",[t._v("모든 PR의 Lint, Test 등의 CI와 CD는 travis CI를 사용해서 진행")])]),t._v(" "),e("h3",{attrs:{id:"chatops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chatops"}},[t._v("#")]),t._v(" ChatOps")]),t._v(" "),e("p",[t._v("travis CI에서 도커 이미지를 도커헙에 push-> 기존 배포관리서비스에 HTTP로 배포 요청 (서비스명, 배포환경, 이미지 tag 포함)-> 요청받으면 배포 전용 슬랙 채널에 배포 준비 알림 -> 개발자가 확인 후 직접 진행 버튼 누름 -> 실제 배포")]),t._v(" "),e("h3",{attrs:{id:"이런-프로세스의-pain-points"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이런-프로세스의-pain-points"}},[t._v("#")]),t._v(" 이런 프로세스의 Pain Points")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Git-Flow를 쓰므로 한 기능을 배포하는데 5번의 브랜치 스위칭, 6번의 PR+코드리뷰 필요\n=> 간단한 수정 사항을 develop 브랜치에 merge한 뒤 배포하지 않는 경우, 한번에 너무 많은 변경사항을 배포해야하는 경우 발생 => 장애 확률 증가 + 심적 부담")])]),t._v(" "),e("li",[e("p",[t._v("Tag-based 배포의 경우 기능 하나가 장애를 일으키면 전체 기능을 롤백할 수 밖에 없음.")])]),t._v(" "),e("li",[e("p",[t._v("semantic versioning은 뱅샐처럼 PR의 크기를 작게 가져가고 빈번히 배포가 일어나는 상황에 어울리지 않음")])]),t._v(" "),e("li",[e("p",[t._v("ChatOps의 경우 서비스 새로 배포하려면 기존 배포 서비스의 소스코드를 직접 수정했어야")])])]),t._v(" "),e("h2",{attrs:{id:"cross-teams-cross-repositories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cross-teams-cross-repositories"}},[t._v("#")]),t._v(" Cross Teams, Cross Repositories")]),t._v(" "),e("ul",[e("li",[t._v("뱅크샐러드가 추구하는 개발 문화. 한 개발자는 본인 팀 외에도 여러 팀의 여러 Repo의 코드를 수정할 수 있다.")]),t._v(" "),e("li",[t._v("팀, 언어, 프레임워크, 비즈니스 도메인 등 제한없이 기여하고 개선한다.")])]),t._v(" "),e("h2",{attrs:{id:"개선된-배포-프로세스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#개선된-배포-프로세스"}},[t._v("#")]),t._v(" 개선된 배포 프로세스")]),t._v(" "),e("h3",{attrs:{id:"가벼운-브랜칭-모델"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#가벼운-브랜칭-모델"}},[t._v("#")]),t._v(" 가벼운 브랜칭 모델")]),t._v(" "),e("ul",[e("li",[t._v("main 브랜치만 남기고 모두 제거")]),t._v(" "),e("li",[t._v("feature, hotfix 등 모든 작업은 main을 base로 해 만든 새 브랜치에서 작업. 브랜치 이름은 작업할 내용을 명확하게 설명하기만 하면 됨")]),t._v(" "),e("li",[t._v("작업이 끝나면 PR로 코드 리뷰 요청")]),t._v(" "),e("li",[t._v("lint와 unit test를 포함한 CI+ 서비스 오너의 approve => main 브랜치에 merge")]),t._v(" "),e("li",[t._v("main에 머지할 땐 "),e("code",[t._v("squash and merge")]),t._v(" 방식을 사용. (브랜치의 모든 커밋을 squash해 하나의 커밋으로 만든 뒤, 해당 커밋을 base branch에 merge하는 방식임) => "),e("code",[t._v("Revert PR")]),t._v(" 기능으로 기능 하나 단위로 롤백 가능")]),t._v(" "),e("li",[t._v("한 PR의 크기가 작아져 서비스 오너도 더 부담없이 리뷰 가능")]),t._v(" "),e("li",[t._v("다만, Github-flow와의 차이점은 "),e("strong",[t._v("master에 커밋이 merge될때마다 배포하는게 아님")])])]),t._v(" "),e("h3",{attrs:{id:"commit-train-based-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-train-based-deployment"}},[t._v("#")]),t._v(" Commit-Train Based Deployment")])])}),[],!1,null,null,null);a.default=r.exports}}]);