# Formula Addon

在 sheet 上支援 Google Spreadsheet 風格的公式 ( `=SUM(A1:A3)` )，
以可開關、獨立的 addon 形式提供，不啟用時對現有行為零影響。


## 現況與結論

sheet 本身是 `@_data` 的薄 view，寫入與渲染路徑集中，對 addon 有利。
真正的成本不在 parser，而在引擎周邊 ( 依賴圖、重算、reference rewriting )。

建議：parser 自建，函式庫外接。

 - parser / AST 是最便宜的一塊。試算表文法很小 ( 中綴運算子、函式呼叫、
   `A1` / `$A$1` / `A1:B9` / 字串 / 百分比 / `&` )，Pratt parser 約 200 至 300 行即可，
   完全可控、無授權問題、bundle 小、風格與現有程式一致。
 - 貴的是引擎：依賴圖、拓樸重算、循環偵測、error 傳播 ( `#REF!`、`#DIV/0!`、
   `#VALUE!` )、range 與 array 語意、reference rewriting。現成套件不會幫我們接好，
   因為它們不認識我們的 `@_data` 與 `insert` / `slice` / `sort`。
 - 值得外接的只有函式廣度。預設內建 20 個常用函式，需要 Excel 廣度時讓使用者
   自行接上 `@formulajs/formulajs` ( MIT，純函式庫，沒有 parser )。

評估過的現成方案：

 - `HyperFormula` — 唯一連 CRUD reference rewriting 都做好的完整引擎，但為
   GPLv3 與商用雙授權，與本套件的 MIT 授權直接綁定會有麻煩。可做成 optional
   peer dependency 讓使用者自行安裝。
 - `fast-formula-parser` — MIT，parser 加 evaluator，由呼叫端提供 cell resolver，
   函式覆蓋不錯，但沒有依賴圖與 reference rewriting。
 - `@formulajs/formulajs` — MIT，只有函式庫。適合當函式表後端。


## 需要的核心接點

 - `_content` — 目前直接把 `@_data` 的值寫進 `textContent`。需要
   display value 與 raw value 分離的一層。
 - `edit` — 已修正為讀 `@_data` 的原始值 ( 待進版 )。公式的編輯行為直接受益，
   不必再處理一次。
 - `set` — 唯一的寫入點，且會 fire `change`。重算掛在這裡最乾淨。
 - `sort` / `insert` / `slice` / `data()` — 直接動 `@_data`，繞過 `set`。
   需要補上通知，否則 addon 的 cache 會髒掉。
 - `_to-text` 與 `copy` — 要決定複製的是公式還是值。Google 的作法是站內複製
   公式並平移 reference，跨應用程式複製值。

最麻煩的是 reference rewriting：`insert` / `slice` / `sort` 會平移或刪除列欄，
所有公式的 `A1` 都得跟著改寫，被引用的格子被刪掉時要變成 `#REF!`。
這部分與 parser 無關，是自己的資料結構工作，也最容易寫出細微的錯誤。

另有一個本專案特有的坑：`@_data` 會因 `[]` 這個 auto-vivify 存取子而長大且稀疏
( v0.7.3 那個 NaN 的來源 )。range 求值必須走 `_data-size` 那套，不能直接 `map`。


## 預計結構

獨立 package ( `@plotdb/sheet-formula` )，分三層：

    parser  ->  AST ( 自建，約 300 行 )
    engine  ->  依賴圖、重算、reference rewrite、error ( 自建，核心價值 )
    adapter ->  掛上 sheet 的接點 ( display value / edit raw / change / structural ops )

sheet 這邊只加最小的擴充點：一個 `opt.formula` 開關，加上一組 plugin 介面
( `onSet`、`display(row, col, raw)`、`onStructural` )。不預設載入，不開就零成本，
也不動到現有行為。


## 工作項目

 - [x] `edit` 讀原始值而非渲染後的文字 ( 已完成，待進版 )
 - [ ] `_content` 拆出 display value 的擴充點
 - [ ] plugin 介面與 `opt.formula` 開關
 - [ ] `sort` / `insert` / `slice` / `data()` 的 structural 通知
 - [ ] parser 與 AST
 - [ ] 依賴圖、拓樸重算、循環偵測
 - [ ] error 型別與傳播
 - [ ] reference rewriting
 - [ ] 內建函式表與可注入的函式後端
 - [ ] copy / paste 的公式語意


## 不做

追求 Excel 完整相容是另一個量級的工程，不列入目標。
