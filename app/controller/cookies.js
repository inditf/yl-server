'use strict';

const Controller = require('egg').Controller;

class CookiesControl extends Controller {
    async addCookies() {
        const { ctx } = this;
        const { username, password } = ctx.request.body;
        ctx.cookies.set('username', 1);
        ctx.cookies.set('password', 2);
        ctx.body = { "username": 1, "password": 2 };
    }//增
    async delCookies() {
        const { ctx } = this;
        ctx.cookies.set('username', null);
        ctx.body = {
            status: 200,
            data: "删除成功"
        };
    }//删
    async getCookies() {
        const { ctx } = this;
        const username = ctx.cookies.get('username');
        console.log(username);
        ctx.body = {
            status: 200,
            data: username,
        };
    }//查
    async updateCookies() {
        const { ctx } = this;
        if (ctx.cookies.get('username') == null) {
            ctx.body = {
                status: 200,
                data: "请先添加cookie"
            };
        }
        else {
            ctx.cookies.set('username', 3);
            ctx.body = {
                status: 200,
                data: "修改成功"
            };
        }
    }//改
}
module.exports = CookiesControl;