---
title: "[JavaScript] 프로토타입에 대해 알아보자."
date: 2020-01-22 08:00
---

Array.something() - Array 클래스에서만 작동
Array.prototype.something() - Array 인스턴스에서만 작동

```javascript
	let arr = [1,2,3,4]; // arr is an instance of Array
    // = same as
    let arr = new Array(1,2,3,4);
```

OOP에서 클래스라는 틀을 기반으로 인스턴스(하나의 예시)들을 만들기 때문에 어레이 하나를 만들때 new Array를 사용해서 만들어주면 됨 

![meaning of prototype](https://images.velog.io/post-images/hailey99/1fef5170-3cbb-11ea-ba44-090a8d9d9ea5/Screen-Shot-2020-01-22-at-11.01.36-AM.png)

** Meaning of PROTOTYPE **

- 인스턴스는 원형(original form, prototype)의 모양을 따라 생성됨(instantiation).
- 인스턴스의 method는 Object.prototype.something으로 표현한다.

** How about 'class'? **

- JavaScript는 prototype 기반 언어
- prototype을 기반으로 OOP를 흉내낸다.
- Grammar의 convenience를 위해 class라는 키워드를 도입 (ES6)
  
```javascript
    function Car(model, brand) {
        this.model = model;
        this.brand = brand;
        }
        
    let spark = new Car("spark", "chevrolet");
    let avante = new Car("avante", "hyundai");
    
    Car.prototype.ride = function() {
        console.log("Vroooom! " + this.model )
        };
```
  
![extending prototype](https://images.velog.io/post-images/hailey99/34c2a0b0-3cbc-11ea-b99d-39928e6a7743/Screen-Shot-2020-01-22-at-11.09.04-AM.png)


![Screen Shot 2020-01-22 at 11.09.28 AM.png](https://images.velog.io/post-images/hailey99/3abfd4b0-3cbc-11ea-b99d-39928e6a7743/Screen-Shot-2020-01-22-at-11.09.28-AM.png)
 
**직접 객체(class)를 작성할 때에만, prototype method를 써라** 
 
![class keyword](https://images.velog.io/post-images/hailey99/60f8ae90-3cbc-11ea-b99d-39928e6a7743/Screen-Shot-2020-01-22-at-11.10.22-AM.png)
