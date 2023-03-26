# COACHTECH Pro 開発パーツプロジェクト

## 必要なインストール
docker desktop 及び nodeをインストール

## セットアップ
```bash
git clone git@github.com:kaishu16/docker-laravel-parts.git
cd docker-laravel-parts
make install
```

## 注意点
機能パーツブランチはmainブランチにマージしないでください。

## 機能パーツブランチ作成方法
mainから開発ブランチを作成
その際機能を示すブランチ名とする。

例) 認証機能パーツのブランチを作成
git checkout -b auth

## 機能パーツ作成方法
- 記述は全てsrc/package/src/ブランチ名　ディレクトリの配下に作成してください。
- src/package/src/ブランチ名/composer.json のnameはpackage/ブランチ名としてください。(この後のcomposer requireで使用します。)
- 初めて動作確認する際は、add_composer_repositoryのurl部分を編集し、
```bash
node add_composer_respository.js
docker compose exec app composer require package/ブランチ名
```
を行ってください。



