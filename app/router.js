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
  router.post('/addSession', controller.session.addSession);
  router.get('/session', controller.session.sessionIndex);
};
