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

## Typography

若沒有針對字型設定樣式，則預設會使用 User Agent stylesheets（不同瀏覽器有不同的設定）。

### Text size 字體大小

> Use smaller text sizes for smaller screens and larger text sizes for larger screens.

可使用 media query 針對不同尺寸設定字體大小：

```css
@media (min-width: 30em) {
  html {
    font-size: 125%;
  }
}

@media (min-width: 40em) {
  html {
    font-size: 150%;
  }
}
```

但缺點是這樣的階梯式變化可能會來得太突兀，使用者能明顯感受到字體一下子從 40px 跳到 30px，整體而言這樣的體驗不太好。

更好的做法是讓字體大小變化為「漸進式」，而這可以透過 vw 來達成。

```css
html {
  font-size: calc(0.75rem + 1.5vw);
}
```

發現除了設定 1.5vw 以外，還加上相對單位 0.75rem。因為如果僅設定 1.5vw，則使用者無法自行縮放字的大小。

但是！這個設定還有個致命缺點，在螢幕太窄或太寬的極端情況下，字的尺寸也會變得太小或太大。

因此，我們必須使用 clamp() 來替換掉 calc()。

```css
html {
  font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
}
```

clamp(min, VAL, MAX) 函式接收三個參數，當 VAL 大於 MAX 時採用 MAX；當 VAL 小於 min 時採用 min；其餘情況則採用 VAL。

### Line Length

單欄：一行文字最好控制在範圍 45~75 個字（66 最佳）
多欄：一行文字最好控制在範圍 40~50 個字

設定 article 最大寬度為 66ch，單位 ch 為「一個數字 0 的寬度」。

```css
article {
  max-inline-size: 66ch;
}
```

### Line Height

> Shorter lines of text can have larger line-height values. But if you use large line-height values for long lines of text, it's hard for the reader's eye to move from the end of one line to the start of the next line.

在設定 line-height 屬性時，盡可能**不要**使用任何單位，確保行高的數值是根據字體大小自動計算出來的。

```css
article {
  max-inline-size: 66ch;
  line-height: 1.65;
}
blockquote {
  max-inline-size: 45ch;
  line-height: 2;
}
```

## Responsive Image

當圖片寬度大於螢幕寬時，圖片會超出畫面，並出現 scrollbar。

可透過設定最大寬度來避免圖片 overflow。

```css
img {
  max-inline-size: 100%;
  block-size: auto;
}
```

block-size:auto 可確保圖片寬高比不變，不會被拉伸或壓縮。

如果已知圖片長寬可標註在 img tag 內，這麼做可以幫助在圖片載入之前預留適當空間，減少內容跳動行為。

```html
<img
  src="image.png"
  alt="A description of the image."
  width="300"
  height="200"
  loading="lazy"
  fetchpriority="high"
/>
```

- loading: "lazy" 延遲載入，"eager" 為預設值，表示立即加載。
- fetchpriority: 通常瀏覽器會在 layout 大致渲染完成後才開始加載圖片，但如果有設定 fetchpriority="high" 則會優先加載，要注意的是這麼做勢必會影響到其他檔案（如 script 或 font file）的載入任務，因此只有在該張圖片非常重要的情況下才會加上此設定。

**認識 srcset**
srcset 用於提供多個不同尺寸圖片，以便瀏覽器能夠根據裝置條件（如設備螢幕尺寸和解析度）載入最合適的圖片。

```html
<img
  src="small-image.png"
  alt="A description of the image."
  width="300"
  height="200"
  loading="lazy"
  decoding="async"
  srcset="small-image.png 300w, medium-image.png 600w, large-image.png 1200w"
  sizes="(min-width: 66em) 33vw,
  (min-width: 44em) 50vw,
  100vw"
/>
```

- src: 是一個必要的屬性，用於指定預設的圖片，當 srcset 中指定的所有條件都不符合時將使用該圖片。
- srcset: 包含一系列用逗號分隔的圖片描述，括圖片的 URL 和其對應的 width descriptor/pixel density descriptor。
  使用 width descriptor 時，必須搭配 size 屬性一起使用，如以上範例：當螢幕寬度大於 66em 時，使用最大寬度為 33vw 的圖片 / 當螢幕寬度介於 44~66em，使用 50vw 的圖片，其餘顯示 100vw 的圖片。

**認識 Picture**
可以做到和 srcset 一樣的事情，但在使用上又更靈活一點。

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img
    src="image.jpg"
    alt="A description of the image."
    width="300"
    height="200"
    loading="lazy"
    decoding="async"
  />
</picture>
```
