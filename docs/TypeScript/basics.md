---
title: TS Basics 基礎觀念
---

## 前言

雖然讀過不少 TypeScript 教學系列文章、官方文件也翻看了幾次，但總覺得使用起來還是有些綁手綁腳，因此決定透過撰寫筆記來重新複習重要觀念。

## 文章目錄

- 型別註記 Type Annotations & 型別推論 Type Inference
- 原始資料型別 Primitive Data Type
- 特殊型別 Special Type
- 函式的型別 Function Type
- 物件的型別 Object Type
- 陣列的型別 Array Type
- 字面量型別 Literal Type
- 元組 Tuple Type
- 列舉 Enums Type
- 聯集 Union & 交集 Intersection Type
- 型別斷言 Type Assertion

## 型別註記 & 型別推論

**型別註記（Type Annotations）**：明確指定變數、函式參數或函式回傳值的資料型別。

```typescript
let age: number;
let name: string;
let isStudent: boolean;
```

**型別推論（Type Inference）**：就算無明確註記資料型別，TS 也能聰明地根據一套規則推導出變數型別。

```typescript
//雖沒有註記變數 myName 型別，但 TS 能自動推論其型別為 "string"
let myName = 'Alice';

//因此，當嘗試賦予變數 myName 其他型別的值時（如 "number" 12），則會報錯。
myName = 12;

//TS Error: Type 'number' is not assignable to type 'string'.
```

## 原始資料型別

- number
- string
- boolean
- null
- undefined

## TS 特殊型別

- void：空值，沒有回傳值的函式

```typescript
function sayHi(): void {
  console.log('hi');
}
```

- any：任意型別，不會進行型別檢查

```typescript
//若宣告變數但未賦值，則 TS 會預設它的型別為 any
let userName;

//因此，賦予該變數任何型別的值都不會報錯
userName = 'Annie';
userName = 100;
userName = true;
```

## 函式的型別

```typescript
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2); //3

/** 參數型別有誤會報錯 */
add('100', 50); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.

/** 參數有少會報錯 */
add(100); //Error: Expected 2 arguments, but got 1.

/** 參數有多也會報錯 */
add(100, 50, 30); //Error: Expected 2 arguments, but got 3.
```

### 可選參數

當某參數為可有可無時，可使用 `?` 註記，注意可選參數（optional parameter）必須放在最後面，也就是說可選參數後面不能放必要參數（required parameter）。

```typescript
//參數 c 註記為 optional，TS 會視其型別為 number 或是 undefined
const multiply = (a: number, b: number, c?: number): number => {
  //因此，需先判斷 c 是否為 undefined，再依情況進行不同運算
  if (c) {
    //當有傳入參數 c 時
    return a * b * c;
  } else {
    //沒有傳入參數 c 時
    return a * b;
  }
};

multiply(1, 2);
multiply(1, 2, 3);
```

### 參數預設值

ES6 中，可透過 `=` 賦予參數預設值，當沒有傳入該參數時，則會自動使用預設值進行運算。
而 TS 也會自動將有設定預設值的參數視為「可選參數」，不需要另外使用 `?` 進行註記，且也放的位置也無限制。

```typescript
const multiply = (a: number, b: number, c: number = 1): number => {
  return a * b * c;
};
```

## 陣列的型別

1. 型別＋方括號

```typescript
/** 數字陣列 **/
let numArray: number[];

numArray = [1, 2, 3];
numArray = [];
numArray = ['1', '2', '3']; //Error: Type 'string' is not assignable to type 'number'.
numArray = [undefined, 1, 2]; //Error: Type 'undefined' is not assignable to type 'number'.

/** 接受任意型別的陣列 **/
let anyArray: any[] = [1, 2, 'a', true, {}, undefined, null];
```

2. 陣列泛型

```
let strArray: Array<string> = ['a', 'b', 'c'];
strArray = [true, false]; //Error: Type 'boolean' is not assignable to type 'string'.
```

## 字面量型別

字面量型別（Literal Type）能夠將型別限定為特定的值，如以下範例中，將變數 myTheme 的型別設定為 'dark' | 'light'，意味著 myTheme 的值必須是 'dark' 或是 'light' 其中一者，除此之外的值會報錯。

```typescript
let myTheme: 'dark' | 'light';
myTheme = 'light'; //OK
myTheme = 'gray'; //Error: Type '"gray"' is not assignable to type '"dark" | "light"'.
```

## 元組 Tuple

Tuple 可以被視為一種嚴格版本的陣列，其元素的數量和型別都是已知且固定的。

```typescript
let myTuple: [number, string, boolean];
myTuple = [1, 'hello', true];
myTuple = [1, 100, true]; //Error: Type 'number' is not assignable to type 'string'.
```

## 列舉 Enum

Enum 是一種用來管理同類別常數（使用 const 宣告的變數）的結構，使用 Enum 可增加程式碼可讀性。

### Numeric Enum

Enums 的成員會從 0 開始自動被賦予數值，依次遞增。

```typescript
//定義 Enum
enum Weekday {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
}

//存取 Enum 成員
console.log(Weekday.Mon); //0
console.log(Weekday.Wed); //2

//反向映射 (Reverse Mapping)
console.log(Weekday[0]); //"Mon"
console.log(Weekday.Mon); //0
```

也可以自行定義數值，而沒有明確賦值的成員會接續上一個成員的值進行遞增：

```typescript
enum Weekday {
  Mon = 1,
  Tue,
  Wed = 100,
  Thu,
  Fri,
}

console.log(Weekday.Mon); //1
console.log(Weekday.Tue); //2
console.log(Weekday.Wed); //100
console.log(Weekday.Fri); //102
```

### String Enum

Enum 成員除了可賦予數值外，也可以是字串。要注意的是 String Enum 並沒有 Reverse Mapping 功能。

```typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

## 物件的型別

```typescript
//interface
interface Person {
  name: string;
  age: number;
}
//type alias
type Person = {
  name: string;
  age: number;
};
```

### optional properties 可選屬性

```typescript
//屬性 gender 為 optional property
interface Person {
  name: string;
  age: number;
  gender?: 'male' | 'female';
}

const userA: Person = {
  name: 'Monica',
  age: 30,
  gender: 'female',
};

const userB: Person = {
  name: 'Phoebe',
  age: 31,
};
```

### readonly properties 唯讀屬性

```typescript
interface Person {
  name: string;
  age: number;
  gender?: 'male' | 'female';
  readonly id: number;
}

const userA: Person = {
  name: 'Monica',
  age: 30,
  gender: 'female',
  id: 1,
};

userA.id = 100; //Error: Cannot assign to 'id' because it is a read-only property.
```

### Index Signatures

有時還不清楚物件內總共會有哪些屬性或是屬性非常多而不想一一列出時，可利用 Index Signatures。

```typescript
interface Product {
  //key 可以自行命名，一般大多習慣使用 key
  [key: string]: string | number;
}

const productA: Product = {
  name: 'productName',
  date: '2024/12/25',
  price: 500,
};
```

## Union 聯集 & Intersection 交集

使用程式的邏輯運算子（&& , ||）來理解 TS 裡面的 Union 和 Intersection 型別會簡單許多。

**Union 聯集**

```typescript
//變數 strOrNum 的型別為 string 或 number，除此之外的值都會報錯
let strOrNum: string | number;
strOrNum = 999;
strOrNum = 'Typescript is fun';
strOrNum = undefined; //Error: Type 'undefined' is not assignable to type 'string | number'
```

使用在物件型別時：

```typescript
interface Dog {
  age: number;
  isBarking: boolean;
}

interface Cat {
  color: string;
  isMeowing: boolean;
}

//Pet：必須符合 Dog 或 符合 Cat
type Pet = Dog | Cat;

//OK! 屬性皆符合 Dog
const johnPet: Pet = {
  age: 5,
  isBarking: true,
};

//OK! 屬性皆符合 Cat
const anniePet: Pet = {
  color: 'black',
  isMeowing: false,
};

//OK! 屬性符合 Dog，雖然多了屬性 isMeowing 但還是 OK！
const tedPet: Pet = {
  age: 5,
  isBarking: true,
  isMeowing: false,
};

/** 以下範例會報錯 **/
//既不符合 Dog，也不符合 Cat
const rosePet: Pet = {
  isBarking: true,
  isMeowing: false,
};
//空物件也不符合 Dog、Car
const noPet: Pet = {};
```

**Intersection 交集**

```typescript
interface IProductInfo {
  name: string;
  price: number;
}

interface IProductAppearance {
  width: number;
  height: number;
  color: 'red' | 'blue' | 'green';
}

type Product = IProductInfo & IProductAppearance;

const myProduct: Product = {
  name: 'box',
  price: 12,
  width: 100,
  height: 50,
  color: 'red',
};

/** 以下為報錯示範 **/

//多了屬性 id
const productA: Product = {
  name: 'bottle',
  price: 350,
  width: 100,
  height: 50,
  color: 'blue',

  id: 10, //Error: Object literal may only specify known properties, and 'id' does not exist in type 'Product'.
};

//少了屬性 color
const productB: Product = {
  name: 'pen',
  price: 10,
  width: 5,
  height: 20,
};

//空物件也不行
const noProduct: Product = {};
```

## 型別斷言 Type Assertion

Type Assertion 是一種由開發者主動告訴 TS 編譯器某個變數的確切型別的方式。例如，使用 document.getElementById('...') 來選取元素時，TS 僅僅知道會回傳 HTMLElement，但身為開發者的我們這時所擁有的資訊比 TS 還多，我們就可以透過型別斷言來告訴 TS 更精確的型別為何。

```typescript
//型別斷言有兩種表達方式：
/** `as` keyword **/
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

/** angle-bracket syntax **/
const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas');
```
