
Page({

  data: {
    count: 0,
    animationInfo: {},
    name: null,
    disable: false,
    showed: false
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

  },

})
