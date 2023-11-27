---
title: 【D3.js】簡介：基本操作 - Part 1
---

## 簡介{#intro}

D3 是 Data-Driven Documents（資料驅動文件）的縮寫，是個資料視覺化的 JS 函式庫。
比起其他資料視覺化工具，D3 給了開發者更多的掌控權，更能夠隨心所欲地創建視覺圖形，因此學習門檻也相對高了一些（我覺得啦 🤣）

## 環境設定{#setup}

方法一、CDN 載入

```=html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js" integrity="sha512-M7nHCiNUOwFt6Us3r8alutZLm9qMt4s9951uo8jqO4UwJ1hziseL6O3ndFyigx6+LREfZqnhHxYjKRJ8ZQ69DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

方法二、npm 安裝

```
npm install d3
```

## 基本語法{#syntax}

### Select: 選取 DOM 元素

d3 提供了兩種選取 DOM 元素的方式，都是透過傳入 CSS 選擇器來指名要選取的元素為何。

- `d3.select(“css selector”)`：回傳第一個符合選擇器的元素
- `d3.selectAll(“css selector”)`：回傳所有符合選擇器的元素

📌 範例：

```=html
<div class="container">
  <p></p>
  <p></p>
  <p></p>
</div>
```

若要選取外層的 div，可以這樣寫：`d3.select(“.container”)`

若要選取 div 裡面所有 p，可以這樣寫：`d3.selectAll(“p”)`

### Manipulation: 操作 DOM 元素

學會選取 DOM 元素後，下一步就是要試著針對已選取的 DOM 元素進行操作，D3 提供了以下方法：

| Method                                | 功能                                                     |
| ------------------------------------- | -------------------------------------------------------- |
| `.attr(“name”, “value”)`              | 新增元素屬性（attribute）                                |
| `.classed(“class”, boolean)`          | 套用或不套用特定 CSS class                               |
| `.style(“name”, “value”)`             | 新增 CSS 樣式                                            |
| `.property：新增元素屬性（property）` | 新增元素屬性（property），例如 input 的 checked property |
| `.text(“content”)`                    | 新增/修改元素內文字內容                                  |
| `.html(“content”)`                    | 設定元素內 html 內容                                     |
| `.append(“element name”)`             | 在元素內的最後方新增新的元素                             |
| `.insert(“name”, “before”)`           | 在元素內後方插入                                         |
| `.remove()`                           | 移除元素                                                 |

> ✏️ 如果 insert() 沒有指定要在誰的後方插入，則結果會和 .append() 一樣。

## 小練習：製作聖誕樹{#practice}

應用前面所學的 D3 語法來製作一棵一點都不聖誕的 SVG 聖誕樹吧！

![christmas-tree](/img/tree.png)
P.S. 後面的練習為求方便快速，我會使用 CDN 載入 的方式。

**步驟拆解：**

1. 載入 D3.js (使用 CDN)

   `<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js" integrity="sha512-M7nHCiNUOwFt6Us3r8alutZLm9qMt4s9951uo8jqO4UwJ1hziseL6O3ndFyigx6+LREfZqnhHxYjKRJ8ZQ69DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`

2. 分析圖型

- 使用 `<polygon>` 製作樹的三層
- 使用 `<rect>` 製作樹木底座
- 使用 `<circle>` 製作燈飾

3. 擬定 HTML 架構

   先擬定出樹的三層，其他東西練習使用 d3 的 append() 依序加上。

   ```=html
   <svg height="500" width="500">
   <polygon id="top"/>
   <polygon id="middle"/>
   <polygon id="bottom"/>
   </svg>
   ```

4. 運用 D3 操作 DOM 元素

   以下簡單示範如何做出最上層的樹：

   ```=js
   d3.select("#top").attr("points", "300,10 250,60 350,60")
   ```

   - `.select(#top)`：選取 `<polygon id="top"/>`
   - `.attr("point", "....")`：新增 point attribute 畫出三角形

   如果還不太認識 SVG 可能會被那串數字給嚇到，不果只要想像自己在座標上玩連連看就會簡單許多。

5. 想像力就是你的超能力

   發揮想像力替聖誕樹加上一些裝飾吧～
   這邊附上我的 codepen 連結：[一點都不聖誕的聖誕樹 SVG](https://codepen.io/annie-chien/pen/vYvKBYd)

## Resources

[D3.js Tutorial – Data Visualization for Beginners](https://www.freecodecamp.org/news/d3js-tutorial-data-visualization-for-beginners/)
