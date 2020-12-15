class MyVue {
    constructor(param = {}) {
        this.$options = param;

        this.$data = param.data;

        this.init()
    }

    init() {
        document.querySelector(this.$options.el)
        this.defineReact(this.$data)
    }

    defineReact(data) {
        new Observe(data)
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    console.log('vue get')
                    return data[key]
                },
                set(newVal) {
                    console.log('vue set')
                    if (newVal === data[key]) return;

                    data[key] = newVal;
                }
            })
        })
    }


}