function checktoken() {
    return async function (ctx, next) {
        try {
            let token = ctx.request.header.token;
            let secret = ctx.app.config.jwt.secret;
            let decode = ctx.app.jwt.verify(token, secret);
            if (decode.username) {
                // console.log("middle checktoken success");
                await next();
            }
            else {
                ctx.body = {
                    code: 5000,
                    msg: "user error",
                }
            }
        }
        catch (e) {
            ctx.body = {
                code: 5000,
                msg: "token error",
            }
        }
    }
}
module.exports = checktoken;