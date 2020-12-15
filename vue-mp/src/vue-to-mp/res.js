Compontents({
  //组件的对外属性
  properties: {
    max: {
      type: Number,
      value: 99
    }
  },
  data: {
    num: 10000 // fn() {}

  },
  //组件的方法
  methods: {
    textFn() {
      console.log(this.data.num);
    },

    onMyButtonTap: function () {
      this.data.num = 666;
    }
  }
});