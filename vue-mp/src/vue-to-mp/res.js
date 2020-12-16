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
    arr: [1, 2, 4]
  },
  //组件的方法
  methods: {
    textFn() {
      this.data.arr.splice(1, 3);
      this.max = 33;
      this.triggerEvent('click', this.data.num);
    },

    onMyButtonTap: function () {
      this.a = 44;
      this.setData({
        b: 666
      });
      this.setData({
        num: 666
      });
    }
  }
});