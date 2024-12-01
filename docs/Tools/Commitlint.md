---
title: commitlint - 檢查提交訊息的好幫手
---

## What

commitlint 是一個專門用來檢查 Git 提交訊息的工具。它會根據預先設定的 commit message 規範，檢查開發者的提交訊息是否符合要求，並在不合規時提示修改。

## Installation

```shell
npm install --save-dev @commitlint/cli
```

```shell
npm install @commitlint/config-conventional
```

:::info 補充
`@commitlint/config-conventional` 是基於 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 的預設規範，詳細規則內容可參考[此處](https://github.com/conventional-changelog/commitlint/blob/5403f0b5bcab43803708997c482a44a7d1151480/@commitlint/config-conventional/index.js)。

:::

## Configuration

在專案的根目錄下建立一個名為 `.commitlintrc` 的檔案（還有其他更多支援檔名請參考[此處](https://commitlint.js.org/reference/configuration.html#config-via-file)）。

```json
{
  ///告訴 commitlint 根據剛剛下載的 `@commitlint/config-conventional` 作為預設規範來檢查提交訊息
  "extends": ["@commitlint/config-conventional"],

  //用來新增或覆寫預設規則
  "rules": {
    "header-min-length": [2, "always", 5]
  }
}
```

例如：

- `header-min-length`：用以設定提交訊息的標題（header）的最小長度。

- `[2, "always", 5]` 為規則內容的格式 `[Level, Applicable, Value]`
  - 第一個值 level：代表規則的嚴重性（0 是 disable / 1 是 warning / 2 是 error）
  - 第二個值 applicable："always"（強制執行該規則） / "never"：當提交訊息符合規則時反而會報錯
  - 第三個值 value：指定該規則所需的具體值

## Test

測試看看規則是否被正確套用

```
echo "msg" | npx commitlint

⧗   input: msg
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]
✖   header must not be shorter than 5 characters, current length is 3 [header-min-length]
```

一個符合規範的 commit message 應該長得像這樣：

`feat: add new checkbox component`

其中 `feat` 為 [type]，而 `add new checkbox componenet` 為 [subject]，而整句話則是 commit header。

因此，如上述範例中，當 commit message 若為 "msg"，則會出現了三則錯誤提示：

1. subject may not be empty --> subject 不得為空
2. type may not be empty --> commit 前綴不得留空
3. header must not be shorter than 5 characters --> header 至少需要 10 個字元

## 使用 husky 新增 git hoook

雖然設定好了 commitlint 了，但每次都要自己手動下指令檢查的話費時又費力，因此我們可以透過 husky 讓 commitlint 在開發者提交訊息時自動執行檢查是否符合規範。

（請先確保已經專案內已設定好 husky）

下方指令會自動在 .husky 新增一個 commit-msg 檔案：

`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

如果是跟著 commitlint 的官方文件嘗試使用下方指令的的話，可能會遇到 commit-msg 未被正確執行的問題。

```
//Add commit message linting to commit-msg hook
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

因為上述指令等同於是自己手動新增 commit-msg 檔案，但這種非透過 husky 來新增的方式可能會讓檔案沒有執行的權限。

因此我們可能還需要手動替檔案加上執行權限：
`chmod +x .husky/pre-commit`
