---
title: 【D3.js】簡介：資料驅動 - Part 2
---

上一篇文章裡面介紹了 D3 操作 DOM 元素的方法，這一篇要介紹 D3 的重頭戲：資料驅動。

## 資料綁定{#p1}

使用 `.data()` 可以將特定資料綁定在選取的 DOM 元素身上。

**📌 範例：**

```=html
//index.html

<div class="classroom">
  <p class="seat"></p>
</div>
```

```=js
//index.js

let students = ['Monica', 'Phoebe', 'Rachel']
d3.selectAll(".seat").data(students).text((d, index) => d)
```

## 資料函式{#p2}

首先，先解釋 `.text()` 裡面以函式作為參數是怎麼一回事。

上一篇文章介紹了很多操作 DOM 元素的方法，而其實那些方法都可以用函式作為參數，如此一來便能接收到綁定的資料。

舉例來說，範例中將資料 `students` 綁定在 `<p class=“seat”>` 身上，接著只要傳入函式作為 text() 的參數就能接收到綁定的資料：

```=js
d3.selectAll(".seat")
  .data(students)
  .text((d, idx) => {console.log(d, idx); return d})
```

登愣！畫面上出現 "Monica"！
你可能會疑惑說，奇怪資料明明有三筆，為什麼結果只顯示了 Monica 呢？Phoebe 和 Rachel 跑去哪裡了？

回去看一下 HTML 結構，發現只有一個 `<p class=“seat”>` 元素，而這正是畫面當中只顯示 Monica 的原因。只有一個座位，當然只夠一個人坐啊～

解決的方式很簡單，座位不夠嗎？那就多搬一些椅子來啊！

```=html
<div class="classroom">
  <p class="seat"></p>
  <p class="seat"></p>
  <p class="seat"></p>
</div>
```

新增兩個 `<p class=“seat”>` 元素 後，畫面上出現正確的資料了。

## 認識 join(){#p3}

不過，好像有點麻煩啊...這樣只要有人來，我們就得繼續搬新椅子，不然又會出現有人沒位置的情況。

不擔心，D3 提供的 `join()` 可以解決上述困擾，它會自動根據資料來新增/移除 DOM 元素：

```=html
//裡面不擺放任何椅子 `<p class=“seat”>`
<div class="classroom"></div>
```

```
d3.select(".classroom")
  .selectAll("p")
  .data(students)
  .join("p")
    .text((d, idx)=>`${idx+1}. ${d}`);
```

一個步驟一個步驟看：

- 先選取外層 `<div class=“classroom”>`
- 選取所有 `<p`>，雖然現在 classroom 裡面沒有任何 `<p>`，但後面我們會透過 `join()` 來根據資料內容生成
- `.data()` 綁定資料
- `.join(“p”)` 生成所需的 `<p>`，資料有三筆所以會生成三個 `<p>`
- `.text()` 新增文字內容，記得使用資料函式作為參數來接收資料

## 載入資料{#p4}

剛剛我們使用的資料是隨意建立的陣列，不過大多數的情況資料可能會是某個事先載好的檔案或是透過 API 向伺服器取得的資料。

D3 提供了載入不同格式資料的方法，例如 `d3.json`、`d3.csv` 等。

```=js
d3.json(“data/file.json”).then((data)=> console.log(data))
```

我們來練習看看用 `d3.json()` 來接收 [JSONPlaceholder](https://jsonplaceholder.typicode.com) 的 User 假資料，並顯示在畫面上：

```=js
const el = d3.select(".classroom");

d3.json("https://jsonplaceholder.typicode.com/todos").then((data) => {
  console.log(data);
  el.selectAll("p")
    .data(data)
    .join("p")
    .text((d) => d.title);
});
```

這邊附上我的 codepen 連結：[資料驅動練習](https://codepen.io/annie-chien/pen/BaMVxmW)

## Resources

[D3.js Tutorial – Data Visualization for Beginners](https://www.freecodecamp.org/news/d3js-tutorial-data-visualization-for-beginners/)
