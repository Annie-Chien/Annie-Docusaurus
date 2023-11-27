---
title: 認識 SVG：在網頁上製圖
---

## 簡介

SVG 全名為 Scalable Vector Graphics（可縮放向量圖形），是一種二維向量的圖型格式，其特色如下：

- 畫質不會因放大縮小而產生變化
- 檔案通常比較小
- 圖像是使用 XML 程式碼編寫

## 創建 SVG

要開始繪製 SVG 圖片之前，需要先創建一張 SVG 圖片，就像使用 Canvas 時，我們得使用 `<canvas>` 創建一塊畫布。

```=html
<svg width="100" height="100"></svg>
```

- width 和 height 指定 SVG 圖片的寬與高

創建好圖片後，可以開始在裡面畫一些圖型，接著會介紹幾個已經定義好的 SVG Shape（已定義好的圖型元素）。

## 長方形 `<rect/>`

```
<svg width="500" height="500" class="rect">
  <rect width="200" height="100" x="200" y=“50" />
</svg>
```

![svg-rect](/img/frontend/svg-rect.png)

- width/height : 定義長方形的寬與高
- x/y：定義長方形左上角的座標位置

## 圓形 `<circle>`

```=html
<svg height="500" width="500">
  <circle cx="150" cy="100" r="40" />
</svg>
```

![svg-circle](/img/frontend/svg-circle.png)

- cx/cy：定義圓心的座標位置，預設為（0,0）
- r：圓形半徑

## 橢圓 `<ellipse/>`

```=html
<svg height="500" width="500">
  <ellipse cx="200" cy="80" rx="100" ry="50" />
</svg>
```

![svg-ellipse](/img/frontend/svg-ellipse.png)

- cx/cy：定義橢圓圓心的座標位置，預設為（0,0）
- rx：橢圓 x 半徑
- ry：橢圓 y 半徑

## 線 `<line/>`

```=html
<svg height="500" width="500">
  <line x1="0" y1="0" x2="200" y2="100" stroke="black" />
</svg>
```

![svg-line](/img/frontend/svg-line.png)

- x1/y1：第一點點的座標
- x2/y2：第二點的座標

## 多邊形 `<polygan/>`

```= html
<svg height="500" width="500">
  <polygon points="200,10 250,190 160,210" />
</svg>
```

- points : 定義多邊形的各點座標，座標和座標之間以空白分隔

{未完待續...}

## Resources

[W3 Schools- SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp)
