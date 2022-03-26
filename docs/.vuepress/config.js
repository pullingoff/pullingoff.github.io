module.exports = {
    title: '개발자 박하은 : TIL', // 사이트 타이틀
    description: '하루하루 배운 것을 적어봅니당',
    themeConfig: {
      logo: '', // 로고 이미지
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: '/blah/' }
      ],
      sidebar: getSidebarArr(), // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
      smoothScroll: true
    },
    base: "/vue-til/"  // github.io 두ㅣ 주소 
  }

function getSidebarArr() {
  const fs = require("fs");
  // let docsPath = __dirname + "/../";
  let docsPath = __dirname + "/../til/";
  // console.log(docsPath)
  let sidebarArr = [];
  let HomeFilelist = [];

  // 이 디렉토리들은 안 보이게
  // const hideSet = new Set(['node_modules', '.git']);
  let filelist = fs.readdirSync(docsPath);

  // filelist = filelist.filter((name) => {
  //   return !hideSet.has(name);
  // });
  

  filelist.forEach(function(file) {
    if (file === ".vuepress") return;
    var til_path = docsPath + "/" + file
    var stat = fs.lstatSync(til_path);
    if (stat.isDirectory()) {
      var docsFolderPath = til_path;
      var list = fs.readdirSync(docsFolderPath);
      sidebarArr.push(makeSidebarObject(file, list));
    } else {
      HomeFilelist.push(file);
    }
  });
  sidebarArr.unshift(makeSidebarObject("", HomeFilelist));
  // console.dir(sidebarArr)
  // console.error(`HomeFile----: ${HomeFilelist}`)
  return sidebarArr;
}
function makeSidebarObject(folder, mdfileList) {
  let til_path = "/til/"
  let path = folder ? til_path + folder + "/" : til_path;
  mdfileList = aheadOfReadme(mdfileList);
  let tmpMdfileList = [];
  // remove .md, add Path
  mdfileList.forEach(function(mdfile) {
    if (mdfile.substr(-3) === ".md") {
      mdfile = mdfile.slice(0, -3) === "README" ? "" : mdfile.slice(0, -3);
      tmpMdfileList.push(path + mdfile);
    }
  });
  mdfileList = tmpMdfileList;
  // remove folder prefix number
  // console.log(`folder: ${folder}`)
  if (folder) {
    const dotIdx = folder.indexOf(".");
    var title = Number(folder.substr(0, dotIdx))
      ? folder.substr(dotIdx + 1)
      : folder;
  } else {
    title = "HOME";
  }
  // console.log(`/${folder}${title}`)
  return {
    title: title,
    // path: `/${folder}`,
    children: mdfileList
  };
}
function aheadOfReadme(arr) {
  // ['1.test.md','README.md'] => ['README.md','1.test.md']
  let readmeIdx = arr.indexOf("README.md");
  if (readmeIdx > 0) {
    arr.unshift(arr.splice(readmeIdx, 1)[0]);
  }
  return arr;
}
  