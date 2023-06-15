'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    if (ctx.session.user) {
      await ctx.render('home.html');
    }
    else {
      ctx.redirect('/login');
    }
  }
  async login() {
    const { ctx } = this;
    await ctx.render('login.html');
  }

  async loginPost() {
    let { ctx } = this;
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if (username == 'admin' && password == '123456') {
      ctx.session.user = username;
      ctx.redirect('/home');
    }
    else {
      ctx.session.user = null;
      ctx.redirect('/login');
    }
  }

  async logout() {
    const { ctx } = this;
    ctx.session.user = null;
    ctx.redirect('/login');
  }
}
module.exports = HomeController;
