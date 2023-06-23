const Controller = require('egg').Controller;
let userList = [
    {
        username: 'admin',
        password: '123456',
    }
];
class JwtController extends Controller {

    async index() {//jwt
        let data = this.ctx.params;
        this.ctx.body = data;
    }
    async createUserPage() {//jwtcreateUserPage
        this.ctx.body = `
            <form method ='post' action='/jwtcreatuser'>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" value="添加" />
            </form>
            <form method ='post' action='/jwtdeleteUser'>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" value="删除" />
            </form>
            <form method ='post' action='/jwtupdateUser'>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" value="修改" />
            </form>
            <form method ='get' action='/jwtqueryUser'>
                <input type="submit" value="查询" />
            </form>
            <form>
            ${userList.map(user => {
            return (`<div>name:${user.username}  password:${user.password}</div>`)
        })}
            </form >
            `;

    }

    async createUser() {//jwtcreateUser 增加用户
        let user = {
            username: this.ctx.request.body.username,
            password: this.ctx.request.body.password,
        }
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].username == user.username) {
                return this.ctx.body = {
                    code: 5000,
                    msg: '用户名已存在',
                }

            }
        }
        userList.push(user);
        this.ctx.body = {
            code: 2000,
            msg: '创建用户成功',
            user: user.username,
        }
    }
    async deleteUser() {//jwtdeleteUser 删除用户
        let user = {
            username: this.ctx.request.body.username,
            password: this.ctx.request.body.password,
        }
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].username === user.username && userList[i].password === user.password) {
                userList.splice(i, 1);
                return this.ctx.body = {
                    code: 2000,
                    msg: '删除用户成功',
                    user: user.username,
                }
            }
        }
        this.ctx.body = {
            code: 5000,
            msg: '用户不存在或密码错误',
        }

    }
    async updateUser() {//jwtupdateUser 更新用户
        let user = {
            username: this.ctx.request.body.username,
            password: this.ctx.request.body.password,
        }
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].username === user.username) {
                userList[i].password = user.password;
                return this.ctx.body = {
                    code: 2000,
                    msg: '更新用户密码成功',
                    user: user.username,
                }
            }
        }
        this.ctx.body = {
            code: 5000,
            msg: '用户不存在',
        }

    }
    async queryUser() {//jwtgetUser 获取用户列表
        this.ctx.body = {
            code: 2000,
            msg: '获取用户成功',
            data: userList,
        }
    }
    //登录验证
    async login() {///jwtlogin
        let user = {
            username: this.ctx.request.body.username,
            password: this.ctx.request.body.password
        };
        let token = null;
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].username === user.username && userList[i].password === user.password) {
                token = this.ctx.app.jwt.sign({ username: user.username }, this.ctx.app.config.jwt.secret);
            }
        }
        if (token) {
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
    async getMessage() {//jwtmessage
        this.ctx.body = {
            code: 2000,
            msg: "jwt success",
        }

    }
}
module.exports = JwtController;