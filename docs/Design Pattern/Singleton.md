---
sidebar_position: 1
tags: [Design Pattern, JavaScript]
---

# Singleton Design Pattern

## 定義

在此設計模式下，一個 class 僅能創建一個實例，而且它是全域的，不同元件皆能一起共享此實例。

## 優點

- 確保 class 只會建立唯一一個實例，避免資源浪費、節省記憶體
- 提供一個全域入口存取此實例：任何地方都可輕鬆存取，不需仰賴變數傳遞

## 缺點

- 隱藏依賴：因為存取入口是全域的，容易忽略模組與模組之間的依賴關係。

## 實作

```=js
let instance;
let globalState = {
  data: 'Hello world',
};

class Singleton {
  constructor() {

    //防止創建多個實例
    if (instance) {
      throw new Error('You can only create one instance!');
    }
    instance = this;
  }
  getPropByName(name) {
    return globalState[name];
  }
  setPropByName(name, value) {
    globalState[name] = value;
  }
}
//Object.freeze() 來防止誤改物件的 property 和 method。
const singletonA = Object.freeze(new Singleton());
```

## 應用舉例

React 內建的 React Context 以及 Redux 是狀態管理的好夥伴，而它們的概念類似 Singleton，但不同的是常見的 React 狀態管理工具都是「唯讀（readonly）」，不像 Singleton 是 mutable。

## Resources

https://www.freecodecamp.org/news/singleton-design-pattern-with-javascript/
