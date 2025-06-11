---
title: 其他
sidebar_position: 4
---

:::note[目錄]

- [x] [什麼是 CORS](#q1)
- [x] [localStorage vs. sessionStorage vs. cookie](#q2)
- [ ] [介紹一下 HTTP methods](#q5)
- [ ] [什麼是 RESTful API](#q6)


:::

## 什麼是 CORS{#q1}

**同源政策**

瀏覽器訂定安全政策來確保傳輸資料的安全性，同源政策（Same origin policy）即是其中一項規範，用來限制只能存取相同來源的資料（只會阻擋回應，不阻擋請求）。
以下三項皆相同才符合所謂的「同源（Same origin）」：

- Scheme (Protocol)
- Host (Domain)
- Port

而 「CORS (Cross-Origin Resource Sharing) 跨來源資源共用」定義了讓我們訪問不同來源資料的方式

**如何解決 CORS**

在伺服端設定 HTTP Header `Access-Control-Allow-Origin` 來允許特定網域訪問。

**跨來源請求的流程**

- 簡單請求 Simple requests

  HTTP method 必須是 GET / HEAD / POST 其一，以及 request Header 內的設定值必須符合限定條件才會被歸類為簡單請求

  1. 瀏覽器會在 request header 加上 Origin
  2. 伺服器端會檢查 Origin 是否是被允許的（是否寫在`Access-Control-Allow-Origin`）
  3. 允許則成功回傳資料，不允許則回報錯誤訊息

- 預檢請求

  在發出真正的請求之前，瀏覽器會先發送一次 HTTP 請求來檢查此來源是否被允許，若確定 OK，才會接著發送真正的請求。

## localStorage vs. sessionStorage vs. cookie{#q2}

localStorage、sessionStorage、cookie 是三種在 client 端儲存資料的方式，

以下將比較這三種方式的異同：

**cookie**

儲存於瀏覽器的字串，伺服器透過 HTTP Header 中的 Set-cookie 傳送給瀏覽器，瀏覽器收到後會記錄下來，並在之後造訪該網頁時，會自動在請求中帶上 cookie 資料。不同網站有不同的 cookie。

:::info[讀取 cookies]
`document.cookie`
//[cookie 名稱]=[cookie 值];[cookie 名稱]=[cookie 值];
:::

**localStorage**

- Shared between all tabs and windows from the same origin.
- 資料不會過期，除非手動刪除

**currentStorage**

- 僅存在當前的分頁，即便是同一個網頁但若用不同分頁開啟就會有不同的 storage
- 重新整理頁面資料不會消失，但若是關閉分頁則會消失
- 可儲存的資料量比較多
- 伺服器端無法利用 HTTP Header 來操作 storage
- storage 是根據 origin(domain/port/protocal) 不同而區分

| 比較       | Cookie                               | localStorage                                     | sessionStorage                                   |
| :------------- | :----------------------------------- | :----------------------------------------------- | :----------------------------------------------- |
| **空間大小** | 最小 (約 4KB)                        | 較大 (約 5~10MB)                                 | 較大 (約 5~10MB)                                 |
| **資料生命週期** | 可自行設定過期時間，**預設為關閉瀏覽器時清除**。 | **基本上是永久的**，除非手動刪除或清除瀏覽器資料。 | **最短，關閉分頁 (Tab) 或瀏覽器時就消失。** |
| **HTTP 請求** | **每一次發送 HTTP 請求時會自動帶上資料**。 | 不會自動帶上資料。                               | 不會自動帶上資料。                               |
| **使用時機** | **身份認證、追蹤用戶行為** | **Dark/Light mode、用戶偏好設定、離線資料儲存，以及一些需要跨分頁共享資料的情境。** | **暫存表單資料、單次會話狀態 (例如瀏覽路徑)、不需跨分頁共享的臨時資料。** |
| **安全性** | **較差**，易受 **CSRF** (跨站請求偽造) 及 **XSS** (跨站腳本攻擊)，除非設定 `HttpOnly`。 | **較佳**，但仍可能受 **XSS 攻擊**。              | **較佳**，但仍可能受 **XSS 攻擊**。              |

**🔗 Resources**

- [LocalStorage - javascript.info](https://javascript.info/localstorage)
- [Understanding Cookies - web.dev](https://web.dev/articles/understanding-cookies)
