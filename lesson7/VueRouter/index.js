let _Vue = null
export default class VueRouter {
    static install(Vue) {
        // 1. 判读插件有无
        if (VueRouter.install.installed) return;
        VueRouter.install.installed = true;
        // 2. 把 Vue 构造函数记录到全局
        _Vue = Vue;
        // 3. router 注入到Vue实例上
        _Vue.mixins({
            beforeCreate() {
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router;
                    this.init();

                }
            },
        })
    }

    constructor(options) {
        this.options = options;
        this.routerMap = {}
        this.data = _Vue.observable({
            current: '/'
        })
    }
    init() {
        this.createRouteMap()
        this.initComponents(_Vue)
        this.initEvent();
    }
    createRouteMap() {
        this.options.routes.forEach(route => {
            this.routerMap[route.path] = route.component
        })
    }

    initComponents(Vue) {
        Vue.component('router-link', {
            props: {
                to: {
                    type: String,
                    default: ''
                }
            },
            render(h) {
                return h('a', {
                    attrs: {
                        href: this.to
                    }
                }, [this.$slots.default])
            },
            methods: {
                click(e) {
                    e.preventDefault();
                    history.pushState({}, '', this.to);
                    this.$router.data.current = this.to
                }
            },
        })
        let self = this
        Vue.component('router-view', {
            render(h) {
                let component = self.routerMap[self.data.current]
                return h(component)
            }
        })
    }
    initEvent() {
        window.addEventListener('popstate', () => {
            this.data.current = window.location.pathname
        })
    }
}