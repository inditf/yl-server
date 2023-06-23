# yl-server

egg.js后台，jwt验证登录

前台地址：[`yl-web`](https://github.com/inditf/yl-web)
### 1.用户账号操作
1. `/jwtcreatuser` “post” 
2. `/jwtqueryUser` "get" `token验证`
3. `/jwtupdateUser` "post" `token验证`
4. `/jwtdeleteUser` "post" `token验证`
### 2.登录验证
1. `/jwtlogin` “post”
2. `/jwtmessage` "get" `token验证`

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org