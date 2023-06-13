'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {

    async queryGet() {
        const { ctx } = this;
        const { username, password } = ctx.query;
        ctx.body = { username, password };
    }
    //queryGet?username=nick&&password=123456

    async paramsGet() {
        const { ctx } = this;
        const { username, password } = ctx.params;
        ctx.body = { username, password };
    }
    //paramsGet/nike/123456

    async add() {
        const { ctx } = this;
        const { title, content } = ctx.request.body;
        ctx.body = { title, content, id: "1" };
    }
    // {
    // "title":"this is title",
    // "content":"this is content"
    // }
    async postservice() {
        const { ctx } = this;
        const { title, content } = await ctx.service.user.user();
        ctx.body = { title, content, id: "2" };
    }
    // { }
    async getservice() {
        const { ctx } = this;
        const { username, password } = ctx.query;
        const data = await ctx.service.user.getuser(username, password);
        ctx.body = data;
    }
    //getservice?username=nick&&password=123456

}


module.exports = UserController;