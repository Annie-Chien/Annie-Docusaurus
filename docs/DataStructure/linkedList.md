---
tags: [JavaScript, Data Structure]
title: Linked List
---

## 介紹

Linked List 是節點與節點透過指標相互連接所形成的一條鏈結串列，和陣列一樣是一種線形（linear）資料結構，而與陣列不同之處在於 Linked List 儲存資料的記憶體位置為「非連續」。

節點（node）由兩個部分組成：

- value：值
- next：指向下一個節點位址的指標

優點：插入或刪除節點時比較簡單，僅需調整 next 所指向的位址

缺點：存取特定節點較費時，因為不像陣列有索引（index），所以會需要從頭開始找，時間複雜度為 BigO(n)

## 種類

（待補圖）

1. Singly linked list
   最基礎的 linked list，鏈結方向為單向
2. Double linked list
   鏈結方向為雙向，也就是每個節點除了有指向下一個節點的指標（next）外，還有指向上一個節點的指摽（prev）
3. Circular linked list
   串列的頭和尾彼此連接在一起，行程環狀鏈結串列

## 實作

### Node

```js
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

### Linked List

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  Methods...
}
```

#### Methods：新增（append）

在 Linked List 尾端新增節點。分別處理兩種情況：

- Linked List 內尚無節點：將 head 指向新節點
- Linked List 已存在節點：遍歷至串列尾端再將 next 指向新節點

```js
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    this.length++;
  }
```

#### Methods：刪除（removeAt）

移除指定 index 節點。

- 指定 index 為第一個節點：將串列的頭指向下一個節點
- 反之，遍歷找到指定 index 節點後，將前一個節點的 next 指向下一個節點

```js
  removeAt(index) {
    檢查 index 是否為有效值
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let prev = null;
    let idx = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (idx < index) {
        prev = current;
        current = current.next;
        idx++;
      }
      prev.next = current.next;
    }
    this.length--;
  }
```

#### Methods：插入（insertAt）

insertAt(index, val) 接受兩個參數：

- index：指定欲插入串列的位置
- val：新節點的值

```js
 insertAt(index, val) {
    if (index < 0 || index > this.length) return null;

    let newNode = new ListNode(val);
    let current = this.head;
    let prev = null;
    let idx = 0;

    if (index === 0) {
      this.head = newNode;
      node.next = current;
    } else {
      while (idx < index) {
        prev = current;
        current = current.next;
        idx++;
      }
      prev.next = newNode;
      newNode.next = current;
    }
    this.length++;
  }
```

## 練習

### [876. Middle of the Linked List](https:leetcode.com/problems/middle-of-the-linked-list/description/)
給定一個單向 Linked List，請找出其中間的節點並回傳。

#### 方法一、計算 Linked List 總長度

```js
function findMiddleNode(head) {
  let listLength = 1;
  let curr = head;

  while (curr.next !== null) {
    listLength++;
    curr = curr.next;
  }

  const middleIndex = Math.floor(listLength / 2);
  let middleNode = head;

  for (let i = 0; i < middleIndex; i++) {
    middleNode = middleNode.next;
  }
  return middleNode;
}
```

#### 方法二、快慢指標

```js
function findMiddleNode(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```

### [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)

給定一個單向鏈結串列的 head，請判斷這個鏈結串列是否包含一個「環」。

```js

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // 然後再檢查是否相遇
    if (slow === fast) return true;
  }

  return false;
}

```
### [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/description/)
給定一個帶有「環」的鏈結串列，請找出環開始的節點。如果沒有環，則回傳 null。

```js

function detectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    //當 slow === fast，代表已經進入了環中。
    if (slow === fast) {

      //這時再從 head 新起一個指針 finder，和 slow 一起一步一步走，它們會在環的起點相遇。
      let pointer = head;

      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
      }

      return finder;
    }
  }

  return null;
}

```