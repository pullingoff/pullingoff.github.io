# 라이트하우스로 성능 개선

웹 앱의 성능과 접근성 등 품질을 체크해볼 수 있는 사이트 [라이트하우스](https://web.dev/measure). [내 블로그](https://haeun.vercel.app)의 품질을 측정해보고, 개선하였다.

![총 점](./assets/score.png)

2022년 6월 6일 기준 라이트하우스 점수!  
퍼포먼스 77점, 접근성 92점, Best Practices 92점, SEO 92점에서 이미지 사이즈 관련 이슈만 제외하고 다 수정해서, 96, 100, 92, 100점으로 끌어올렸다. (이미지는 수정중...ㅎ )
자세한 개선 방법을 알아보자!

## 퍼포먼스 (성능)

![이미지 사이즈 ](./assets/imgsize.png)

## 접근성

### Document doesn't have a `<title>` element

사이트의 title이 있어야 스크린리더를 사용하는 사람들이 페이지의 개요를 알고, 서치엔진이 적절한 검색어와 사이트를 엮어줄 수 있다.

내 사이트의 경우, 커스텀 메타데이터를 적용해뒀다고 생각했는데 보니까 기본값이 지정되어있지 않았다.

그래서 js의 스프레드 연산자를 사용해 기본값을 먼저 넣어주고, 그 위에 커스텀 메타데이터를 덮어쓰도록 했다.  
타입스크립트 기본값을 사용해도 되는 것 같았는데 기존의 인터페이스를 건드리지않고 싶어서 그냥 이렇게 했다.

```js
const MetaContainer = ({customMeta}: {
    customMeta?: ICustomMeta,
}) => {
    const config = { 
        ...METADATA,        // 기본값
        ...customMeta,      // 커스텀 메타데이터
    } 
    
    return (
        <Head>
        <title>{config.title}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="robots" content="follow, index" />
            <meta content={config.description} name="description" />
        // 생략...
      </Head>
    )
}
```

### Links do not have a discernible name

블로그 `footer`에 깃허브, 트위터, 링트인 링크가 달린 로고를 걸어두었는데 이 링크에 아무 텍스트가 적혀있지 않아서 난 이슈다.  
저 링크(`<a>` 태그) 안에 글씨를 쓰고 싶진 않아서 어떻게 할까 찾아보니 `aria-label` 속성을 추가 해주면 된다고 한다. 추가해주니까 접근성이 100점이 되었다.

![aria-label 추가](assets/aria.png)

### `<html>` element does not have a [lang] attribute

문서에 언어가 지정되어있지 않다고 한다. `next.config.js`에서 수정해준다. 내 웹사이트는 주로 한국어니까 kr로 지정해준다.

```js
// next.config.js

module.exports = {
  // 생략
  i18n: {
    locales: ["kr"],
    defaultLocale: "kr",
  },
}
```