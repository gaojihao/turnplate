
Page({

  data: {
    animationInfo: {},
    name: null,
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

    var awardIndex = 8;
    var runNum = 8;//旋转8周

    // 旋转角度
    this.runDeg = this.runDeg || 0;
    this.runDeg = this.runDeg + (360 - this.runDeg % 360) + (360 * runNum - awardIndex * (360 / 11))


    this.animation.rotate(this.runDeg).step();
    this.setData({
      animationInfo: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        name: "鼠你最电力十足"
      });
    }, 4000)
  },

})
