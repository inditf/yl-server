/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1686561783643_401';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config/config.default.js
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'], // 配置白名单
  };

  config.cors = {
    origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    // origin: 'http://localhost:3000', //只允许这个域进行访问接口
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  //ejs
  config.view = {
    mapping: {
      ".html": "ejs"
    }
  };
  //session
  config.session = {
    key: "EGG_SESS",   // 设置Key的默认值    
    httpOnly: true,      // 设置服务端操作    
    maxAge: 1000 * 60,   // 设置最大有效时间     
    renew: true,        // 页面有访问动作自动刷新session 
  }
  //jwt
  config.jwt = {
    secret: "123456",//自定义 token 的加密条件字符串
    expiresIn: '1h',//token 有效期
  };
  // //mysql
  // config.mysql = {
  //   // database configuration
  //   client: {
  //     // host
  //     host: 'localhost',
  //     // port
  //     port: '3306',
  //     // username
  //     user: 'root',
  //     // password
  //     password: '12345678',
  //     // database
  //     database: 'react_blog',
  //   },
  //   // load into app, default is open
  //   app: true,
  //   // load into agent, default is close
  //   agent: false,
  // };
  return {
    ...config,
    ...userConfig,
  };
};
