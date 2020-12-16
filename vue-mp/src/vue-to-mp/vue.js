export default {
  props: {
    max: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {
      num: 10000,
      b: 66,
      arr: [1, 2, 4],
      obj: { a: 1, b: 2 }
    }
  },
  //组件的方法
  methods: {
    textFn() {
      this.arr.splice(1, 3)
      this.max = 33
      this.$emit('click', { a: this.num })
    },

    onMyButtonTap: function() {
      this.a = this.b + 44
      this.b = this.b + 666
      this.num = 666

      Object.assign(this.obj, { c: 3 })
    },
  }
}