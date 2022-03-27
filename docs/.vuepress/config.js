module.exports = {
    title: '개발자 박하은 : TIL',
    description: '하루하루 배운 것을 적어봅니당',
    themeConfig: {
      logo: '', // 로고 이미지
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: '/blah/' }
      ],
      sidebar: getSidebarArr(), 
      smoothScroll: true
    },
    base: "/vue-til/",  // github.io 뒤 주소
    plugins: [
      ["@vuepress/back-to-top"],
      ["@vuepress/last-updated"],
    ],
    configureWebpack: {
      resolve: {
        alias: {
          '@base': '/vue-til'
        }
      }
    }
  }

function getSidebarArr() {
  const fs = require("fs");
  let docsPath = __dirname + "/../til/";
  let sidebarArr = [];
  let HomeFilelist = [];
  let filelist = fs.readdirSync(docsPath);

  // Next.js 처럼 폴더명에 . 들어가도 되게 수정하기

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
  if (folder) {
    const dotIdx = folder.indexOf(".");
    var title = Number(folder.substr(0, dotIdx))
      ? folder.substr(dotIdx + 1)
      : folder;
  } else {
    title = "HOME";
  }
  // console.dir(mdfileList)
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
  