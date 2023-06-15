module.exports = options => {
    return async function counter(ctx, next) {
        if (ctx.session.counter == null) {

            ctx.session.counter = 1;
        }
        else {
            ctx.session.counter++;
        }
        await next();
    }
}