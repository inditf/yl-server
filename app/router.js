'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.jwt.createUserPage);
  router.post('/jwtlogin', controller.jwt.login);
  //用户注册 不需要token验证
  router.post('/jwtcreatuser', controller.jwt.createUser);
  //jwt middleware验证token 
  const checkToken = app.middleware.checktoken();
  router.get('/jwtmessage', checkToken, controller.jwt.getMessage);
  // //restful
  // //router.resources('posts', '/api/posts', controller.posts);
  //user operation
  //删除 修改 查询 需要token验证
  router.post('/jwtdeleteUser', checkToken, controller.jwt.deleteUser);
  router.post('/jwtupdateUser', checkToken, controller.jwt.updateUser);
  router.get('/jwtqueryUser', checkToken, controller.jwt.queryUser);
  //注销用户
  router.get('/jwtdestory', checkToken, controller.jwt.destoryUser);

};
