---
title: "모던 자바스크립트 핵심 가이드"
date: 2022-03-29 08:00
---

## JS Tips

- var는 정의되기 전에 접근할 수 있지만 그 값에는 접근 불가능
- let, const는 정의하기 전에 접근 불가 
- 호이스팅: 모든 변수가 실행전 범위 내 상단으로 올라감. var는 정의되기 전에는 undefined, let은 변수가 선언될까지는 TDZ(Temporal Dead Zone비활성구역)에 있어서 오류가 발생
- 기본적으로 const 사용하자. 재할당 필요할 때만 let 사용하자. Var는 ES6에서 절대 사용X
- 디스트럭처링: 배열의 값 또는 객체의 속성을 풀어서 별개의 변수로 쓸 수 있게 하는 JS 표현식
- JS도 제너레이터 있음

## For loops 

- For of 루프/ 객체는 iterable이 아니니까 Object.keys()로 값 가져와서 for of 루프 돌리면 됨
- for in 루프는 순서 없이 객체의 모든 iterable props를 반복. for in 루프는 키 목록을 반환함

## Array 함수

```javascript
- Array.from() 객체를 배열로 받아서 변환(html elements 받아오기 유용) 
- Array.from('apple')하면 [a,p,p,l,e]
- Array.of() 전달받은 인수로 배열생성
```

## 스프레드 문법 : 배열 복사본 만들떄 매우 유용

```javascript
const veggie = [1,2]
const meat = [4,5]
Const menu = [...veggie, 3, ...meat]
// menu = [1,2,3,4,5] 됨. 
```

## Rest 문법: ...로 특정한 놈들만 빼고 압축해줌

```javascript
const runners = [1,2,3,4]
const [first, second, ...losers] = winners
console.log(losers) // 3,4
```
