---
title: "Next.js 써보기: Pre-rendering and Data Fetching"
date: 2022-03-12 08:00
---

## Pre-rendering

![pre-rendering](https://nextjs.org/static/images/learn/data-fetching/pre-rendering.png)

Nextjs는 모든 페이지를 pre-render한다. 클라이언트 쪽의 JS에서 다 만들어놓지 않고, Next.js가 모든 HTML 페이지를 미리 만들어놓는다. 성능과 SEO 결과가 더 좋아진다. 각각의 만들어진 HTML은 그 페이지에서 필요한 최소한의 JS 코드를 포함한다. 
브라우저에서 그 페이지가 load되면 그때 그 JS 코드가 실행되어 페이지를 더 인터랙티브하게 한다. (이 과정을 hydration이라고 한다.)  
```<Link/>```같은 인터랙티브 컴포넌트는 js가 로드된 후 사용가능하다.

브라우저에서 자바스크립트를 꺼두고 Next.js로 만든 페이지에 들어가보면 더 확실히 알 수 있다.  
Next.js가 우리의 웹앱을 정적 HTML로 만들어놓았다는 것을!!!  
만약 그냥 리액트 웹앱이면 자바스크립트 없이 동작하지 않았을 것이다.  

## Pre-rendering의 2가지 방법 (정적 생성 & 서버사이드 렌더링)

Next.js에선 이 두 방법 중 뭐를 쓸지 내가 직접 고를 수 있고, 섞어서도 개발할 수 있다!!!
Static generation과 server-side rendering의 차이는 **언제 페이지의 HTML을 생성하느냐**다.  
(개발 모드에서는 무조건 매 요청마다 pre-render된다.)

### Static Generation: 빌드 시에 HTML 생성

![빌드 시 HTML 생성](https://nextjs.org/static/images/learn/data-fetching/static-generation.png)

- 왠만하면 이게 좋다. 왜냐면 한번 빌드된 페이지를 쓰면 되니까 서버가 매 요청마다 페이지를 렌더링하는 것보다 훨 속도가 빠르다.

### Server-side Rendering: 매 요청 시에 HTML 생성

![매 요청시 HTML 생성](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)

- 만약 자주 업데이트되는 데이터가 있거나 매 요청마다 페이지의 내용이 달라져야한다면 서버 사이드 렌더링을 쓰는게 좋다.
- 정적 생성 방식보다는 느릴지 몰라도 항상 up-to-date!

## ```getStaticProps```로 데이터가 들어간 Static Generation하기

Next.js에선 페이지 컴포넌트를 export할 때 getStaticProps라는 비동기 함수를 같이 export할 수 있다.

### getStaticProps

- 프로덕션 시 빌드 타임에 실행됨
- 파일 시스템, API, DB 등의 외부 데이터를 fetch해와 페이지의 props로 return할 수 있다.

#### 사용법

lib 디렉토리를 만들고 `gray-matter`를 사용해서 데이터를 내보낸다.  
참고로 그냥 await.fetch()를 해서 API로 가져온 데이터도 사용할 수 있다.  
`getStaticProps`는 **page에서 export된 파일만 가능하다**

```js
// lib/posts.js

import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts') // current directory/posts

export function getSortedPostsData() {
    const fileNames = fs/readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md&/, '') // .md 지우고 id로 설정

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8') // path에 있는 파일 내용 읽어오기

        const matterResult = matter(fileContents) // post의 metadata(frontmatter)
        
        return {
            id,
            ...matterResult.data
        }
    })
    
    // 날짜별로 sort
    return allPostsData.sort(({ data: a}, {data: b}) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}
```

```js
// pages/index.js  
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData  // prop으로 모든 블로그 포스트 넘겨주기
    }
  }
}

export default function Home({ allPostsData }) {
// ...
}
```