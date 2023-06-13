const Controller = require('egg').Controller;

class EjsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('index.html');
    }
}
module.exports = EjsController;