export default {
    //组件的对外属性
    props: {
        max: {
            type: Number,
            default: 99
        }
    },
    //组件的内部数据
    data() {
        return {
            num: 10000,
            // fn() {}
        }
    },
    //组件的方法
    methods: {
        textFn() {
            console.log(this.num)
        },
        onMyButtonTap: function() {
            this.num = 666
        },
    }
}