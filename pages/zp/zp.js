
Page({

  data: {
    animationInfo: {},
    name: null,
    disable: false,
  },

  onReady: function (e) {
    var animation = wx.createAnimation({
      duration: 4000,
      timeFunction: 'ease',
    });

    this.animation = animation;

    this.setData({
      animationInfo: animation.export()
    });
  },

  onRollWheel:function(){
    const { disable } = this.data
    if (disable) {
      return;
    }

    var awardIndex = 8;
    var runNum = 8;//旋转8周

    // 旋转角度
    this.runDeg = this.runDeg || 0;
    this.runDeg = this.runDeg + (360 - this.runDeg % 360) + (360 * runNum - awardIndex * (360 / 11))


    this.animation.rotate(this.runDeg).step();
    this.setData({
      disable: true,
      animationInfo: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        disable: false,
        name: "鼠你最电力十足"
      });
    }, 4000)
  },

})
