function checktoken() {
    return async function (ctx, next) {
        try {
            let token = ctx.request.header.token;
            let secret = ctx.app.config.jwt.secret;
            let decode = ctx.app.jwt.verify(token, secret);
            if (decode.username) {
                console.log("middle checktoken success");
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



        // if (token) {
        //     try {
        //         const payload = await verify(token.split(' ')[1], secret)
        //         ctx.state.user = {
        //             id: payload.id,
        //             name: payload.name,
        //             email: payload.email
        //         }
        //         await next()
        //     } catch (err) {
        //         ctx.throw(401, err)
        //     }
        // } else {
        //     ctx.throw(401, '没有token')
        // }
    }
}
module.exports = checktoken;