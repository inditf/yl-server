function checktoken() {
    return async function (ctx, next) {
        const token = ctx.request.header.token;
        if (token != 'null' && token) {
            try {
                let secret = ctx.app.config.jwt.secret;
                let decode = ctx.app.jwt.verify(token, secret);
                if (decode.username) {
                    await next();
                }
                else {
                    ctx.status = 200;
                    ctx.body = {
                        code: 401,
                        msg: "user error",
                    }
                }
            }
            catch (e) {
                console.log('error', e)
                ctx.status = 200;
                ctx.body = {
                    code: 401,
                    msg: "token过期，请重新登录",
                }
            }
        }
        else {
            ctx.status = 200;
            ctx.body = {
                code: 401,
                msg: 'token不存在',
            };
            return;
        }

    }
}
module.exports = checktoken;