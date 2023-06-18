const Controller = require('egg').Controller;
class JwtController extends Controller {

    async index() {
        let data = this.ctx.params;
        this.ctx.body = data;
    }
    async login() {
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        if (username == 'admin' && password == '123456') {
            let token = this.ctx.app.jwt.sign({ username: username }, this.ctx.app.config.jwt.secret);
            this.ctx.body = {
                code: 2000,
                token: token,
            };
        }
        else {
            this.ctx.body =
            {
                code: 5000,
                msg: '用户名或密码错误',
            };
        }
    }
    async getMessage() {
        let token = this.ctx.request.header.token;
        try {
            let decode = this.ctx.app.jwt.verify(token, this.ctx.app.config.jwt.secret);
            this.ctx.body = {
                code: 2000,
                msg: "jwt success",
                data: decode,
            }
        }
        catch (err) {
            this.ctx.body = {
                code: 5000,
                msg: "token error",
            }
        }
    }
}
module.exports = JwtController;