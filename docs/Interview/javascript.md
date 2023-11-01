---
sidebar_position: 1
---

# JavaScript 問答集

此篇文章主要用來整理與複習常見的 JS 面試問答，因此回答會較精簡，之後再慢慢補上針對特定主題詳細版文章。

:::note[目錄]

- [x] [解釋 Event Bubbling](#q1)
- [x] [解釋 Event Delegation](#q2)
- [x] [什麼是 callback function](#q3)
- [x] [淺拷貝 vs. 深拷貝](#q4)
- [ ] [e.currentTarget vs. e.target](#q5)
- [x] [什麼是 event loop?](#q6)
- [x] [什麼是 closure（閉包）](#q7)
- [x] [函式宣告式 vs. 函式運算式](#q8)
- [ ] [什麼是 Prototype Chain](#q9)

:::

## 解釋 Event Bubbling{#q1}

event propagation（事件傳遞）分為三個階段：

1. event capturing 捕獲
2. event target：找到觸發事件
3. event bubbling 冒泡

冒泡和捕獲最大的差別就在事件傳遞的「順序」。
冒泡的順序是從觸發事件的節點為起點，向上傳遞。而捕獲則是從根節點開始，向下傳遞直到觸發事件的節點。

addEventListener 其實有第三個參數，用來決定要採用的是冒泡或是捕獲，預設是 false 也就是冒泡。

## 解釋 Event Delegation{#q2}

使用事件冒泡（或是捕獲）的特性的一種事件處理模式。假如現在有一個 ul，裡面包了數個 li，而我們在點擊 li 的時候都想要執行某任務。那麼與其在每一個 li 身上綁定 event handler，更有效率的做法就是直接在他們的共同父層 ul 綁定 event handler。

## 什麼是 callback function {#q3}

```=js
function print(callback) {
    callback();
}
```

像是以上範例，把一個函式當作參數傳入另一函式裡，並在裡面呼叫它。這個被當作參數傳入的函式就被稱作 callback function。我們利用 print function 來去執行 callback function。這個時候控制 callback function 執行的就不是主要程式，而是仰賴著執行 print() 才去執行 callback。這件事情又顯示了 callback function 另一個重要特性：透過函式去決定 callback function 的執行時機。在特定條件和時機時才去「回呼」callback function。

```=js
element.addEventListener("click", function() {
      console.log("User has clicked on the button!");
});
```

我們在操作 DOM 元素時一定會用到 addEventListener，其實裡面就使用了 callback function！仔細看看 addEventListenr 的第二個參數，和我們上面介紹 callback function 時所講的特性一樣：

1. 他被當作參數傳入另一函式
2. 在'click'事件被觸發的時候才執行。

** callback function 與非同步 **

callback function 最常使用也能發揮最大益處的地方是在非同步上，也就是要控制多個函式的執行順序時。
先看看以下程式碼：

```=js
function firstFn() {
  setTimeout(() => console.log('first'), 3000);
}

function secondFn() {
  console.log('second');
}

//Execute
firstFn();
secondFn();
```

雖然說我們主要的程式執行的順序是 firstFn() --> secondFn()，可是因為 setTimeout 的緣故，實際列印結果會是 'second', 'first'。
假設我們今天就是想要讓列印的結果依序為 'first', 'second' 該怎麼做？ 回呼函式就派上用場拉！

```=js
function firstFn(secFn) {
  setTimeout(() => {
    console.log('first');
    secFn();
  }, 3000);
}

function secondFn() {
  console.log('second');
}

//Execute
firstFn(secondFn);
```

這樣寫的結果就是 3 秒之後印出 'first' 'second'，符合了我們的期望。

以上只是很簡單很簡單的例子，但這概念在向伺服端請求資料的時候就變得相當重要。因為 fetch data 往往需要時間且屬於非同步的行為，而有些函式所做的事情又得仰賴 data，這時候執行順序就變得相當重要，否則會出錯。

:::info[callback hell]
指的就是在回呼函式裡面包回呼函式又包回呼函式又包回呼函式…相當多層的巢狀 callback，包到天荒地老眼花撩亂，導致維護上相當困難。
:::

## 淺拷貝 vs. 深拷貝{#q4}

淺拷貝(shallow copy) : 原始物件資料與複製物件資料「並非完全獨立」，可能第一層就有指向相同地址的資料，也可能第二層才有指向相同地址的資料。彼此資料內容的改變可能會互相影響。

深拷貝(deep copy) : 原始物件資料與複製物件資料「完全獨立」，沒有任何一層資料指向相同的地址。彼此資內容料的改變不會互相影響。

舉例來說，在 JavaScript 內我們經常用 spread operator 來複製物件：

```=js
const objA = {
  a: { a: 100 },
  b: 50,
};
//使用...將objA展開
const objC = { ...objA };
console.log(objA, objC); //兩個的資料看起來一模一樣

objC.a.a = 99;
objC.b = 'hi';

//猜猜 objA & objC 各自變成什麼模樣？

```

答案揭曉！
objA 是 `{ a: { a: 99 }, b: 50 }`
objC 是 `{ a: { a: 99 }, b: 'hi' }`

我們雖然是直接針對 objC 裡面的屬性做更改，但其實我們利用 spread operator 來複製一個新物件是屬於淺拷貝。淺拷貝定義如上，我們其實真正複製的只有第一層。
因此，`objC.b = 'hi'` 確確實實只改變了 objC 的 b，objA 的 b 並沒有受到影響。
但是，屬性 a 有兩層啊！兩層以上（包含第二層）的資料和原本的物件是共享記憶體的，因此雖然是直接修改 `objC.a.a = 99`，卻還是會同時改變了 objA。

複製物件的方法還有很多，不只有 spread operator，只不過要特別注意 JS 裡面提供的那些複製物件語法，全部都是「淺拷貝」，例如 Object.assign(target, source)等。

因此，當我們在複製巢狀物件時就要特別小心淺拷貝的問題。

**深拷貝怎麼做？**

想要使用 JS 實作深拷貝比較麻煩一些，因為它本身並未提供深拷貝函式。
其中一個方法：先把資料轉成 JSON，再由 JSON 轉回物件。
我們用上面的例子試試看：

```=js
const copy = JSON.parse(JSON.stringify(objA));
console.log(copy); //成功複製
objA.a.a = 'nono';
objA.b = 'yesyes';
console.log(objA, copy);
//{ a: { a: 'nono' }, b: 'yesyes' }
//{ a: { a: 100 }, b: 50 }

```

Perfect! 跟我們使用 spread operator 的時候不同，即便是巢狀的資料，也成功複製了一份，而非共享記憶體！
更改原本的物件內容，並沒有連帶影響到複製的物件。

**有沒有更輕鬆的作法啊？**

有的。可以使用 [lodash](https://lodash.com/docs/4.17.15#cloneDeep) 裡面提供的 `_.cloneDeep`。

## 什麼是 event loop?{#q6}

舉 addEventListener(‘click’, callbackFunc) 為例，當物件被點擊而觸發 click 事件，該 callback function 就會被調用，callback function 會被放進 callback queue 中排隊等待被執行，而當 call stack 有空時，正在排隊等待執行的 callback function 就會被傳入 call stack 中來執行，而這樣的協調機制就稱為「事件循環 (event loop) 」。

初認識 event loop 的時候，就覺得它好像水上樂園裡滑水道入口的工作人員，他會負責確認滑水道已經沒有人了，才開放下一個遊客溜下去。所以一但發現「喔～現在 call stack 空了呦」，便會引導在 callback queue 乖乖排隊的任務們依序進入 call stack 中執行。

## 什麼是 closure 閉包 ?{#7}

已經完成執行（已 return）的函式，其內部變數卻依舊存在著並可被存取：

```=js
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // innerFunction can access outerVariable
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // This will log "I am from the outer function"
```

在以上範例中，innerFunction 可以存取並記憶外部變數 outerVariable，這就是一個「閉包」效果。

**閉包使用情境**

- 狀態保存
- 緩存機制
- 模擬私有變數

**閉包缺點**

易造成 memory leak（內存洩露） 的問題，也就是「變數未被使用卻仍存在記憶體內、沒被釋放，進而造成內存資源耗盡」。

## 函式宣告式 vs. 函式運算式

**function declaration 函式宣告式**

使用 `function` 宣告函式

```=js
function fnName () {
    ...
    return ...
};
```

**function expression 函式運算式**

將函式指定給某變數，並直接使用這個變數名稱來呼叫函式。

```=js
//匿名函式
const add = function (a, b){
    return a + b;
}
// 也可以加上名字
const print = function greet() {
  console.log('hi');
};
```

只不過要注意，加上名字的的這個名字只有在自己的函式區塊裡面有效，請看：

```=js
const print = function greet() {
  console.log('hi');
  console.log(greet); //[Function: greet]
};

print();
console.log(greet); //ReferenceError: greet is not defined
```

經常配合 ES6 的 arrow function

```=js
const add = (a, b) => {
    return a + b;
}
```

**兩者差異**

hoisting 效果：function declaration 可以在宣告程式碼之前呼叫，不會出問題。
反之， function expression 則會報錯：

- 用 var 宣告：`TypeError: print is not a function`
- 用 let、const 宣告的話：`ReferenceError: Cannot access 'print' before initialization`

## Resources

[Frontend Interview handbook](https://www.frontendinterviewhandbook.com/javascript-questions/)
