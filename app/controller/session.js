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
    async sessionIndex() {
        const { ctx } = this;
        //获取session
        const username = ctx.session.username;
        await ctx.render(
            'session.html', {
            id: 1,
            name: '张三',
            age: 18,
            // 赋值给模板
            username,
        });
    }

}

module.exports = SessionController;