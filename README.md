# 地獄變テスト2

## 概要
これは卒業制作『地獄變』において、スマホの加速度センサの値を取得し、それをWebSocketでTouchDesigner側に送るウェブである。

## ファイル構成
```
.
├── README.md
├── credit
│   └── index.html
├── index.html
├── reset.css
└── style.css
```

## iOSの加速度センサの仕様

|  OS  | バージョン | 対策　　　　|
|:-----|:---------|:----------|
|Android|9以上|不要|
|iOS|12.1以下|不要|
|   |12.2以上13未満|Safariの設定を変更|
|   |13以上|ユーザの許可が必要|

以下のサイトから引用

[iOS（特に 13 以降）でのモーションセンサー有効化 : まだプログラマーですが何か？]（https://dotnsf.blog.jp/archives/1076737232.html）

## 特記事項
### 外部JSファイルの不使用について
test-jigokuhenにおいて、外部JSファイルにしたところ不具合が起こり、加速度センサの許可等が出来なくなったため、HTMLにすべて併記した。

### section18の横書きについて
Chrome, Edge, Safari ではbuttonを縦書きに出来ないとのことだったので、横書きに変更。またここの部分は回想であるため、本編との時間軸とは異なるという意図も併せて横書きにした。
[writing-mode: vertical-lr; がbuttonタグにだけ効かない。。。 - teratail](https://teratail.com/questions/frvtbi60o04vj2)

### コードの生成
index.htmlのjsのほとんどは、ChatGPTによって生成された。

## 参考文献
[全画面ぴたっとスクロール](https://ics.media/entry/191211/)