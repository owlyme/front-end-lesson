Compontents({
  properties: {
    max: {
      type: Number,
      value: 99
    }
  },
  data: {
    num: 10000,
    b: 66,
    arr: [1, 2, 4],
    obj: {
      a: 1,
      b: 2
    }
  },
  //组件的方法
  methods: {
    textFn() {
      var _temp;

      (_temp = this.data.arr.splice, this.setData({
        arr: this.data.arr
      }), _temp)(1, 3);
      this.max = 33;
      this.triggerEvent('click', {
        a: this.data.num
      });
    },

    onMyButtonTap: function () {
      this.a = this.data.b + 44;
      this.setData({
        b: this.data.b + 666
      });
      this.setData({
        num: 666
      });
      Object.assign(this.data.obj, {
        c: 3
      });
    }
  }
});