const list = [
    (ctx, next) => {
        console.log(1)
        next();
        console.log(3)
    },
    (ctx, next) => {
        console.log(2)
        next();
        console.log(4)
    }
]

function compose(fnMiddles) {
    let index = -1;
    return function(ctx, next) {
        return dispatch(index)

        function dispatch(index) {
            let fn = fnMiddles[index]

            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn())
            } catch (err) {
                return Promise.reject(err)
            }
            
        }
    }
}