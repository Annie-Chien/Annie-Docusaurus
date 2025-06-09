---
title: 模組系統：ESM 和 CJS 有什麼差別
---

這篇筆記整理 ESM（ECMAScript Modules）與 CJS（CommonJS）的主要差異

## ✨ TL;DR

CJS（CommonJS） 是 Node.js 傳統模組系統，使用 require 和 module.exports。

ESM（ECMAScript Modules） 是 JavaScript 標準模組系統，使用 import 和 export。

CJS 是同步載入，ESM 是非同步靜態分析。

ESM 支援 Tree Shaking、Top-Level Await 等現代功能。

Node.js 同時支援兩種模組系統，但混用時需注意相容性。

## 什麼是 CJS？

CJS 是 Node.js 預設支援的模組系統，語法簡單、易懂，廣泛應用於早期 Node.js 專案中。

語法範例：

```js
// utils.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// main.js
const utils = require("./utils");
console.log(utils.add(2, 3)); // 5
```

載入是同步的，執行時期動態決定模組內容

## 什麼是 ESM？

ESM 是 JavaScript 的官方模組標準，原生支援在瀏覽器與 Node.js 中使用，支援靜態分析與現代優化技巧。

語法範例：

```js
// utils.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from "./utils.js";
console.log(add(2, 3)); // 5
```

載入是非同步的，模組結構可被靜態分析（支援 Tree Shaking）

可使用 top-level await

## 差異比較

| 項目         | CommonJS (CJS)           | ECMAScript Module (ESM) |
| ------------ | ------------------------ | ----------------------- |
| 語法         | require / module.exports | import / export         |
| 載入方式     | 同步                     | 非同步                  |
| 是否靜態分析 | 否                       | 是（支援 Tree Shaking） |
| 適用環境     | 傳統 Node.js 專案        | 現代瀏覽器、Node.js     |
| 檔案副檔名   | .js                      | .mjs 或 type: "module"  |
