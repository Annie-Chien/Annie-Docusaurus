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
- [x] [e.currentTarget vs. e.target](#q5)
- [x] [什麼是 event loop](#q6)
- [x] [什麼是 closure（閉包）](#q7)
- [x] [函式宣告式 vs. 函式運算式](#q8)
- [x] [什麼是 Prototype Chain](#q9)
- [x] [什麼是 Scope（作用域）](#q10)
- [x] [什麼是 AJAX](#q11)
- [x] [by sharing vs. by reference](#q12)
- [x] [解釋 == 和 === 的差異](#q13)
- [x] [什麼是 IIFE](#q14)
- [x] [.call vs. .apply](#q15)
- [x] [for...in vs. for...of](#q16)

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

## e.currentTarget vs. e.target{#q5}

|          | `e.currentTarget`  | `e.target`         |
| -------- | ------------------ | ------------------ |
| **定義** | 綁定事件監聽的元素 | 實際觸發事件的元素 |

## 什麼是 event loop{#q6}

舉 addEventListener(‘click’, callbackFunc) 為例，當物件被點擊而觸發 click 事件，該 callback function 就會被調用，callback function 會被放進 callback queue 中排隊等待被執行，而當 call stack 有空時，正在排隊等待執行的 callback function 就會被傳入 call stack 中來執行，而這樣的協調機制就稱為「事件循環 (event loop) 」。

初認識 event loop 的時候，就覺得它好像水上樂園裡滑水道入口的工作人員，他會負責確認滑水道已經沒有人了，才開放下一個遊客溜下去。所以一但發現「喔～現在 call stack 空了呦」，便會引導在 callback queue 乖乖排隊的任務們依序進入 call stack 中執行。

## 什麼是 closure 閉包{#7}

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

易造成 memory leak（內存洩露） 的問題，也就是變數未被使用卻仍存在記憶體內、沒被釋放，進而造成內存資源耗盡。

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

**宣告式與運算式的差異**

hoisting 效果：function declaration 可以在宣告程式碼之前呼叫，不會出問題。
反之， function expression 則會報錯：

- 用 var 宣告：`TypeError: print is not a function`
- 用 let、const 宣告的話：`ReferenceError: Cannot access 'print' before initialization`

## 什麼是 prototype chain{#9}

JS 有 OOP（物件導向）的特性，但它並不全然是一個 OOP 語言。
因為一般的 OOP 的語言是建構在 class 之上，而 JS 其實是 prototype-based（以原型為基礎），也就是利用一個叫做 prototype 的物件去建立「繼承」關係。

**什麼是 prototype?**

簡單來說，就是一個作為接下來欲創造的新物件的模型，以此模型為核心基礎，加以改良和調整。
所以說，任何依據此模型所生產出來的物件，都會保有模型原本的特色（繼承關係）。

當每一個函式被建立的時候，都會有一個隱藏內建的 prototype 屬性。

**什麼是 prototype chain?**

JS 每一個物件都有一個 `.__proto__` 屬性（除了用 `Object.create(null)` 所建立的物件），這個屬性會指向建構式的 prototype。當今天在物件內找不到某方法，就會跑到 `.__proto__` 指向的 prototype 去尋找，如果還是找不到，那就繼續往這個 prototype 的 `.__proto__` 去找…依此類推，直到 `.__proto__` 是 null 為止。

而這個透過`.__proto__`不斷往上尋找，像是有一條無形的線把物件與物件聯繫起來，就是「原型鏈」。
物件實體會優先存取自己的屬性和方法，找不到的時候才會往原型物件尋找。

```=js
function Person (name, birthYear){
  this.name = name;
  this.birthYear = birthYear;
}

Person.prototype.greet = function (){
  console.log(`Hi, I'm ${this.name}`)
}

const justin = new Person('Justin', 1996); //Person {name: 'Justin', birthYear: 1996}

console.log(justin.hasOwnProperty('greet')); //false
console.log('greet' in justin); //true

justin.greet(); //"Hi, I'm Justin"
```

- 建構函式 Person 內有 name 和 birthYear 兩個屬性
- 在 建構函式 Person 的 Prototype 放進 greet 函式
- 使用 new 創建物件 justin，列印出來後發現物件 justin 本身並未包含 greet 函式，可由 hasOwnProperty() 來驗證。
- operator `in` 可用來檢查物件本身以及其原型鍊上是否包含該屬性。然而我們發現 `'greet' in justin` 為 true。
- 結論：在 justin 物件內找不到 greet 函式，JS 會往它的 `.__proto__`(指向 Person.Prototype) 尋找，直到找到或是 null 才停止，這正是「原型鍊」的概念。

## 什麼是 Scope（作用域） {#10}

Scope（作用域）指變數的生存範圍，一但離開了這個生存範圍，就無法存取。

JS 內作用域目前有三種：

**1. block scope**

- block scope 是在 ES6 才出現，在這之前，最小作用域範圍是 function scope。
- 所有在 {} 括號內的東西都稱作 block（區塊）
- 在區塊內宣告的變數只能在區塊內取用
- block scope 只適用於用 let 和 const 宣告的變數；若用 var 宣告，則在區塊之外仍可使用。

**2. function scope**

- 變數只能在函式內部取用
- 亦稱作「區域變數(local scope)」
- var 宣告的變數皆是 function scope

**3. global scope**

- 所有在函式或區塊之外的程式碼(top-level)都屬於全域範疇
- 在任何地方都可取用
- 如果你沒有使用宣告關鍵字（var, const, let）則會自動變成 global scope

:::info[local scope]
指的是 function scope & block scope
:::

**scope chain 範疇鏈**

在自己的作用域內查找變數，若找不到時會往外層繼續尋找，直到全域範疇，尋找變數的這個動作又稱作「Variable lookup（變數查找）」。

> 只能由內而外，無法由外而內！

## 什麼是 AJAX {#q11}

AJAX 全名為 Asynchronous JavaScript And XML，透過 AJAX 這項技術，我們可以動態向遠端伺服器請求資料（request data）。讓我們在不需要重整網頁的情況下，就能夠即時地與伺服端交換資料。

✏️ AJAX 裡面的 X 代表 XML。XML 是一種以前常用來交換資料的格式，現在多用 JSON！不過因為 AJAX 這個詞是以前當 XML 還盛行時所創的，所以才會包含 XML（即便現在已經很少用了）。

**AJAX 的運作方式**

當事件發生時（如載入網頁或是點擊按鈕）...

瀏覽器會透過 JS 創建一個 XMLHttpRequest 物件，並傳送請求（request）給網路伺服器
伺服器接收到請求後開始進行處理，完成後回應（response）瀏覽器
OK！你或許注意到了以上有個叫做 XMLHttpRequest 的酷東東～
它就是那位幫助我們實行非同步請求的大功臣...嗎？
以前是，但現在不是。

現在大家都在用 Fetch API，因為它比 XMLHttpRequest(XHR) 更簡單方便。

## by value vs. by reference{#q12}

**基本型別的變數傳遞方式是 pass by value （傳值）**

```=js
let a = 'yes';
let b = a; //複製 a 的值給 b
a = 'no'; // 重新賦予 a 新的值
console.log(a, b);//結果是， a: 'no', b:'yes'。
```

改變 a 的值並不會影響到 b，因為變數內容傳遞的方式為傳值，a, b 內容為互相獨立。

**物件則是 pass by reference**

```=js
let obj = {
  name: 'annie',
  age: 24,
};

let obj2 = obj;
obj2.name = 'jim';
obj2.age = 99;
console.log(obj, obj2);
//obj , obj2 都變成 { name: 'jim', age: 99 }！
```

我們明明是改變 obj2 的屬性，卻連帶影響到了原本的 obj
因為物件的變數內容傳遞方式為傳址，意思是傳遞的並不是物件的內容，而是記憶體的地址。因此 obj 與 obj2 其實指向的都是同一個記憶體位置，因此修改 obj2 就會影響到 obj。

**pass by sharing**

雖然我們說物件是傳址的，但在某些情況下似乎例外：

```=js
let obj1 = {
  name: 'a',
  age: 1,
};

let obj2 = obj1;
console.log(obj1, obj2); //兩個都是{ name: 'a', age: 1 }
obj1 = {
  name: 'b',
  age: 100,
};
console.log(obj1, obj2);
//obj1: { name: 'b', age: 100 }
//obj2: { name: 'a', age: 1 }
```

咦？奇怪了！剛剛不是說，改變其中一個物件也會影響到另一個物件嗎？那怎麼 obj2 竟然沒有受到影響。
仔細看看，我們在改變 obj1 的變數內容時，是使用物件實字去重新賦值的，因此其實 obj1 已經指向了一個全新的記憶體位置，和 obj2 指向的記憶體已經不同了，所以並不會互相影響。

**重點統整**

1. 基本型別是 pass by value
2. 物件型別如果是針對變數內容進行更改等操作，是 pass by reference
3. 物件型別如果是直接重新賦值，則被稱作 pass by value

因為物件有兩種特殊情況，故有人說 js 屬於 pass by sharing。

## 解釋 == 和 === 的差異{#q13}

| `==`           | `===`            |
| -------------- | ---------------- |
| 相等運算符     | 嚴格相等運算符   |
| 會自動轉換型別 | 不會自動轉換型別 |
| 5 == '5'(true) | 5 === '5'(false) |

**Object.is(value1, value2)**

`Object.is()` 與 `===` 行為類似，差別在於對待 +/-0 和 NaN 的方式：

```=js
NaN === NaN //false
+0 === -0 // true
Object.is(NaN, NaN); //true
Object.is(+0, -0); //false;
```

## 什麼是 IIFE

IIFE 為 Immediately Invoked Function Expressions 的縮寫，是一種能在宣告函式同時執行函式的手段。

```=js
(function () {
    // Code to be executed immediately
})();

```

## `.call` vs. `.apply`{#q15}

.call 和 .apply 都是用來觸發函式執行，且第一個參數指定 this 的值。最大的差別在於 .call 是用逗號來分隔要傳入函式參數值，而 .apply 則是用陣列[]。

```=js
function multiply(a, b) {
  return a * b;
}

console.log(add.call(null, 1, 2)); // 2
console.log(add.apply(null, [1, 2])); // 2

```

## `for...in` vs. `for...of`{#q16}

| 比較   | `for...in`                                                 | `for...of`                                            |
| ------ | ---------------------------------------------------------- | ----------------------------------------------------- |
| 對象   | object                                                     | 可迭代物件（iterable objects）                        |
| 做什麼 | 取出 object 的 key                                         | 取出可迭代物件的元素                                  |
| 注意   | 若物件的屬性為 integer properties 時，迭代順序可能不如預期 | 不可使用在 object，因為 object 並不是 iterable object |

:::note[可迭代物件]
可迭代物件的特色是有個 [Symbol.iterator] 方法，此方法會回傳「迭代器（iterator）」，而迭代器內提供 next() 函式，可用來依序迭代可迭代物件內的元素。
:::

參考之前寫的文章 🔗[【JS 學習筆記】認識 for…in 與他的兄弟 for…of](https://medium.com/@annie.chien105/js學習筆記-認識-for-in-與他的兄弟-for-of-6e71d61709dd)

## Resources

[Frontend Interview handbook](https://www.frontendinterviewhandbook.com/javascript-questions/)
