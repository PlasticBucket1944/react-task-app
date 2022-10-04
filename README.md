## About
タスクを管理する簡単なアプリケーションです。  
サーバー側が起動している必要があります。  
https://github.com/PlasticBucket1944/nestjs-task-app

## Environment

```bash
typescript : 4.7.4
react : 18.2.0
```

## Setup

```bash
# アプリケーションをクローンします
# root直下に.env.localを作成します。
# 以下の設定を記載します。
REACT_APP_SERVER_PATH=サーバー側のパス
```

## Run

```bash
# development
$ npm start

# production deploy(git hub pages)
$ npm run deploy -- -m "comment"  
※詳しいデプロイ手順はdocs参照
```
