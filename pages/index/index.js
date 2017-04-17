Page({
  data:{
    password: '',
    array: ['MD5', 'SHA-1', 'SHA-265', 'SHA-512','RIPEMD-160'],
    objectArray: [
      {
        id: 0,
        name: 'MD5'
      },
      {
        id: 1,
        name: 'SHA-1'
      },
      {
        id: 2,
        name: 'SHA-265'
      },
      {
        id: 3,
        name: 'SHA-512'
      },
      {
        id:4,
        name: 'RIPEMD-160'
      }
    ],
    index: 0,
    text:''
  },
    getpassword: function(e){
        this.setData({
        password: e.detail.value
        })
    },


    bindPickerChange: function(e) {
        this.setData({
        index: e.detail.value
        })
    },

   changeHash: function(e) {
    var hmd5 = require('../../utils/md5.js');
    var hsha1 = require('../../utils/sha1.js');
    var hsha256 = require('../../utils/sha256.js');
    var hsha512 = require('../../utils/sha512.js');
    var hrmd160 = require('../../utils/ripemd160.js');
    if (e.target.dataset.aaa == 0) {
       var pass = hmd5.md5(e.target.dataset.bbb)
    };
    if (e.target.dataset.aaa == 1) {
       var pass = hsha1.sha1(e.target.dataset.bbb)
    };
    if (e.target.dataset.aaa == 2) {
       var pass = hsha256.sha256(e.target.dataset.bbb)
    };    
    if (e.target.dataset.aaa == 3) {
       var pass = hsha512.sha512(e.target.dataset.bbb)
    };    
    if (e.target.dataset.aaa == 4) {
       var pass = hrmd160.rmd160(e.target.dataset.bbb)
    };    
       this.setData({
           text:pass
       })
   },







  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '哈希密码', // 分享标题
      desc: '一个简单的哈希密码转换器', // 分享描述
      path: 'pages/index/index' // 分享路径
    }
  }
})