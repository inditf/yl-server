'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //get请求
  router.get('/queryGet', controller.user.queryGet);
  router.get('/paramsGet/:username/:password', controller.user.paramsGet);
  //post请求
  router.post('/add', controller.user.add);
  router.post('/postservice', controller.user.postservice);
  router.get('/getservice', controller.user.getservice);
  //ejs
  router.get('/index', controller.ejs.index);
  //cookie
  router.post('/addCookies', controller.cookies.addCookies);
  router.post('/delCookies', controller.cookies.delCookies);
  router.post('/getCookies', controller.cookies.getCookies);
  router.post('/updateCookies', controller.cookies.updateCookies);
  //session
  const counter = app.middleware.counter();
  router.post('/addSession', controller.session.addSession);
  router.post('/delSession', controller.session.delSession);
  router.get('/session', counter, controller.session.sessionIndex);
  //login
  router.get('/home', controller.home.index);
  router.get('/login', controller.home.login);
  router.post('/login', controller.home.loginPost);
  router.post('/logout', controller.home.logout);
  //jwt
  router.get('/jwt', controller.jwt.index);
  router.post('/jwtlogin', controller.jwt.login);
  router.get('/jwtmessage', controller.jwt.getMessage);

};
