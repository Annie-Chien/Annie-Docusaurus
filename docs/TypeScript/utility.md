---
title: TS Utility Types
---

## `Awaited<Type>`

用於解開 Promise Type 並獲取其回傳值的型別。比較特別的是，當遇到巢狀 Promise Type，Awaited 可以獲取最內層解析後的值的型別。

**Usage**

```ts
/* Baisc */
type MyPromiseType = Promise<string>;
type ResolvedType = Awaited<MyPromiseType>; // string

/* Nested Promise */
type NestedPromise = Promise<Promise<number>>;
type ResolvedNestedType = Awaited<NestedPromise>; //number;
```

**Example**

```ts
async function fetchData(): Promise<{ name: string; age: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John", age: 30 });
    }, 1000);
  });
}

type FetchDataType = ReturnType<typeof fetchData>; // Promise<{ name: string, age: number }>
type ResolvedType = Awaited<FetchDataType>; // { name: string, age: number }

async function displayData() {
  const data: ResolvedType = await fetchData();
  console.log(data.name); // John
  console.log(data.age); // 30
}
```

## `Partial<Type>`

用於將某個型別的所有屬性設為可選（optional）。

**Usage**

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;
/** 
等同於
type PartialUser = {
   name?: string | undefined;
    age?: number | undefined;
   email?: string | undefined;
} 
**/
```

**Example**

```ts
const updateUser = (user: User, updatedValues: Partial<User>): User => {
  return { ...user, ...updatedValues };
};

const user: User = {
  name: "Annie",
  age: 18,
  email: "annie@example.com",
};

const updatedUser = updateUser(user, { age: 25 });
```

## `Required<Type>`

與 `Partial<Type>` 相反，用於將某個型別的所有屬性設為必要。

**Usage**

```ts
interface User {
  name: string;
  age?: number;
  email?: string;
}

type RequiredUser = Required<User>;

/** 
等同於
type RequiredUser = {
   name: string;
    age: number;
   email: string;
} 
**/
```

## `Readonly<Type>`

用於將某個型別的所有屬性設為唯讀，意即在創建這種型別的物件後，你不能修改它的任何屬性。

**Usage**

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type ReadonlyUser = Readonly<User>;
```

**Example**

```ts
const user: ReadonlyUser = {
  name: "Annie",
  age: 18,
  email: "annie@example.com",
};

// 嘗試修改屬性會報錯
user.name = "Ann"; // Error: Cannot assign to 'name' because it is a read-only property.
```

## `Record<Keys, Type>`

用於創建一個物件型別，其屬性 key 為指定的 Keys，屬性 value 的型別為指定的 Type。

**Usage**

```ts
type DogName = "miffy" | "cheeto" | "owen";

interface DogInfo {
  age: number;
  breed: string;
}

const myDogs: Record<DogName, DogInfo> = {
  miffy: { age: 10, breed: "Bulldog" },
  cheeto: { age: 5, breed: "Labrador" },
  owen: { age: 16, breed: "Husky" },
};
```

## `Pick<Type, Keys>`

用於從一個對物件型別中挑選出部分屬性 Keys，並生成一個只包含這些屬性的物件型別。

**Usage**

```ts
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type BasicUserInfo = Pick<User, "name" | "email">;

const basicUser: BasicUserInfo = {
  name: "Alice",
  email: "alice@example.com",
};
```

## `Omit<Type, Keys>`

用來從一個物件型別中排除指定的屬性 Keys，並生成一個不包含這些屬性的物件型別。

**Usage**

```ts
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail: UserWithoutEmail = {
  id: 0,
  name: "Alice",
  age: 18,
};
```

## `Exclude<UnionType, ExcludedMembers>`

用來從 UnionType 中排除指定的型別，並生成一個新的型別。

```ts
type MyUnionType = "apple" | "banana" | "orange" | "grape";
type ExcludeOrange = Exclude<MyUnionType, "orange">;

//等同於 tpye ExcludeOrange = "apple" | "banana" | "grape"
```

## `Extract<Type, Union>`

用來從 UnionType 中提取與 Union 匹配的型別，並生成一個新的型別。

```ts
type MyFriendName = "Abby" | "Ben" | "Charlie";
type ExtractAbby = Extract<MyFriendName, "Abby">;
//等同於 type ExtractAbby = "Abby"

type Size = { w: 50; h: 100 } | { w: 100; h: 200 } | { w: 10; h: 10 };
type ExtractSize = Extract<Size, { w: 10 }>;
//等同於 type ExtractSize = {w: 10, h: 10}
```

## `NonNullable<Type>`

用來排除 Type 裡的 null 及 undefined。

```ts
type T1 = NonNullable<string[] | null | undefined>;
//等同於 type T1 = string[]
```

## `Parameters<Type>`

用來生成一個將函式參數型別集結在一起的 Tuple。

```ts
function f1(arg: { a: number; b: string }): void;

type T1 = Parameters<typeof f1>;

/** 
  type T3 = [arg: {
    a: number;
    b: string;
}]
*/
```
