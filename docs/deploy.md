# デプロイ環境構築(git hub pages)
参考：https://github.com/gitname/react-gh-pages  
一応手順抜粋

1.gh-pages3.npm パッケージをインストールする  
npm install gh-pages --save-dev

2.package.jsonにhomepageプロパティを追加  
https://{username}.github.io/{repo-name} の様式で追加  
```
{
  "name": "my-app",  
  "version": "0.1.0",  
  "homepage": "https://gitname.github.io/react-gh-pages", ここを追加  
  "private": true,
```

3.デプロイコマンドをpackage.jsonファイルに追加  
```
"scripts": {  
  "predeploy": "npm run build", ここを追加  
  "deploy": "gh-pages -d build", ここを追加  
  "start": "react-scripts start",  
  "build": "react-scripts build",  
```
4.React アプリを GitHub Pages にデプロイ  
```
$ npm run deploy -- -m "comment"  
```

5.ここまでの作業をコミット  
```
$ git add .
$ git commit -m "Configure React app for deployment to GitHub Pages"
$ git push origin master
```

# メモ
・1度やってしまえばあとは手順4だけやれば良い  
・環境変数はビルド時に埋め込まれる