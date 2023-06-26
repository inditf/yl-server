# yl-server

egg.js后台，jwt验证登录

前台地址：[`yl-web`](https://github.com/inditf/yl-web)
### 1.用户账号操作
1.  用户注册： `/jwtcreatuser` “post”               
2.  获取用户列表：`/jwtqueryUser` "get" `token验证`
3.  更新密码：`/jwtupdateUser` "post" `token验证`
4.  删除用户：`/jwtdeleteUser` "post" `token验证`
5.  注销当前用户：`/jwtdestory`    "get" `token验证`
### 2.登录验证
1. 用户登录：`/jwtlogin` “post”
2. 用户token验证：`/jwtmessage` "get" `token验证`

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