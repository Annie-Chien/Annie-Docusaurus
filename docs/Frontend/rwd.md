---
title: 【筆記】學習響應式網頁（RWD）
---

本文章為 [web.dev- Learn Responsive Design](https://web.dev/learn/design/welcome) 系列文章的筆記。

---

## 網頁設計種類

### Fixed-width design

固定寬度的設計方式在螢幕尺寸相對單一的年代非常盛行。
但隨著裝置螢幕越來越多元，固定寬度的設計方式再也無法符合需求。

- 螢幕寬 > 設計寬度：會留下大片空白，造成空間浪費
- 螢幕寬 < 設計寬度：使用者必須透過 scrollbar 左右滑動來檢視超出螢幕範圍的內容

### Liquid layouts

這種設計方式讓內容隨著裝置螢幕尺寸來彈性變化。
比起 Fixed-width design 只能在一種特定寬度下呈現完美狀態，Liquid Layouts 則能夠在更多種寬度下呈現更好的排版設計。
但是，當碰到螢幕寬度過寬的情況，頁面內容也會跟著拉伸，增加閱讀難度。螢幕過窄時，頁面內容會被擠縮到無法閱讀。

### Adaptive layouts

> Adaptive layouts = media queries + fixed-width layouts

使用 media queries 設定，根據螢幕寬度來設定不同的固定尺寸。

### Responsive web design (RWD)

> Responsive web design = media queries + liquid layouts

Responsive web design 一詞由 Ethan Marcotte 於 2010 年提出，此種設計方式需符合下列三要素：

1. Fluid grids
2. Fluid media
3. Media queries

而在開始實作 RWD 之前，必須先做一項極為重要準備工作：告訴瀏覽器不要自動進行畫面縮放。

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- `width=device-width`：將可視區域的寬度設置為裝置的寬度。
- `initial-scale=1`：initial-scale 指定網頁載入時應使用的縮放級別。1 表示不進行縮放。

## Media Queries

Media Queries 讓開發者能根據不同的媒體（裝置）條件（如螢幕寬度、裝置類型、顏色能力等）套用不同的樣式設定。

> @media [media-type] and [(media-feature)] {/\*_ 在這裡放置相應的 CSS 規則 _/}

- media-type： 表示裝置類型，常見的值包括 screen（螢幕）、print（列印）和 all（所有媒體），預設為 all。
- media-feature： 表示裝置條件，例如 max-width（最大寬度）或 orientation: landscape（橫向方向）等。

接著，看幾個應用 @media 的例子：

1. 不同螢幕寬度

```css
@media screen and (max-width: 600px) {
  /** 在螢幕寬度小於或等於 600px 時應用的樣式 */
}
```

2. 列印

```css
body {
  color: black;
  background-color: grey;
}

/* 在列印時設定背景顏色為透明 */
@media print {
  body {
    background-color: transparent;
  }
}
```

3. 組合多種條件

```css
@media screen and (min-width: 768px) and (orientation: landscape) {
  /* 在螢幕寬度大於 768px 且為橫向方向時應用的樣式 */
}
```

> Tips: 根據網頁內容來設定 breakpoint

## Internationalization

### 使用 Logical Properties

不同的語言有不同的書寫方向，例如英文是從左寫到右、從上寫到下；阿拉伯文是從右寫到左、從上寫到下。

如果使用 left、right、top 和 bottom 關鍵字來進行版面配置，則當使用者切換網頁語言時，版面可能會因此跑掉。
因為 left、right、top 和 bottom 這類型的方向關鍵字是相對於裝置，並不會因為網頁語言不同而改變。

難道為了因應不同書寫方向就必須設定不同樣式嗎？別擔心，使用 CSS 邏輯屬性（logical properties）就能自動根據不同語言的書寫方向調整排版。

例如，若想要將文本統一靠書寫方向的底部對齊，你可能會這樣寫：

```css
.byline {
  text-align: right;
}
```

但更好的寫法其實是：

```css
.byline {
  text-align: end;
}
```

咦，但是這兩個設定看起來的效果是一樣的啊！

沒錯，text-align: end; 和 text-align: right; 對一般從左到右文本排版（如英文）是類似的，但碰到從右到左的文本（如阿拉伯文）時則會出現明顯差異：

- `text-align: right`： 這個屬性會將文本對齊到行的右邊，不論文本的書寫方向是什麼。對於左到右的文本，它將文本對齊到行的右邊；對於右到左的文本，它仍然將文本對齊到行的右邊。
- `text-align: end`： 這個屬性會將文本對齊到行的結尾，根據文本的書寫方向而定。對於左到右的文本，就像 text-align: right; 一樣，它會將文本對齊到行的右邊。對於右到左的文本，它會將文本對齊到行的左邊。

基本上，只要具有方向性的屬性都能夠轉換為邏輯的寫法：

**〔 寬高 〕**

- width --> inline-size
- height --> block-size

**〔 Text Align 〕**

- text-align: left --> text-align: start
- text-align: right --> text-align: end

**〔 Margin/Padding/Border 〕**

- margin-top --> margin-block-start
- margin-bottom --> margin-block-end

以上可簡寫為 margin-block

- margin-left --> margin-inline-start
- margin-right --> margin-inline-end

以上可簡寫為 margin-inline

margin 可替換成 padding 與 border

**〔 Position 〕**

- top --> inset-block-start
- bottom --> inset-block-end

以上可簡寫為 inset-block

- left --> inset-inline-start
- right --> inset-inline-end

以上可簡寫為 inset-inline

### 清楚標註網頁語言

例如，若網頁內容為美式英語，可在 html tag 內標明語言屬性：

```html
<html lang="en-us"></html>
```

這麼做能提升 SEO（搜尋引擎最佳化） 和 Web accessibility（網頁無障礙性）。

## Macro Layouts VS. Micro Layouts

Macro Layouts 指的是整個頁面的排版結構。
Micro Layouts 指的是針對單一元件的排版。

若使用 Grid 和 Flexbox 使用得好的話，有時甚至可以減少（甚至不需要）media queries 的設定。另外，也可以善加利用 CSS container queries 來更輕鬆完成 Micro Layouts 設計。

排版這一塊真正困難的地方不在於切出版面，而是如何聰明使用 CSS 樣式用最少的設定來切出版面。CSS 的屬性真的非～常多啊，沒有好好利用實在浪費。

一定要好好看一下這兩篇文章內的排版範例：[Macro Layouts](https://web.dev/learn/design/macro-layouts)、[Micro Layouts](https://web.dev/learn/design/micro-layouts)。

:::info
這個網站上面列了幾種常見排版的樣式設定範例：[1linelayouts](https://1linelayouts.glitch.me)
:::
