'use strict';
const Controller = require('egg').Controller;
class SessionController extends Controller {

    async addSession() {
        const { ctx } = this;
        //增加session
        ctx.session.username = 1;
        ctx.body = {
            status: 200,
            data: "添加成功"
        };
    }
    async delSession() {
        const { ctx } = this;
        //删除session
        ctx.session.username = null;
        ctx.body = {
            status: 200,
            data: "删除成功"
        };
    }
    async sessionIndex() {
        const { ctx } = this;
        const counter = ctx.session.counter;
        //获取session
        const username = ctx.session.username;
        await ctx.render(
            'session.html', {
            id: 1,
            name: '张三',
            age: 18,
            // 赋值给模板
            username,
            counter,
        });
    }

}

module.exports = SessionController;