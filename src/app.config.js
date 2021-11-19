const pages = [
  'pages/index/index',
  'pages/mine/index',
  'pages/dinner/index',
  'pages/dinner/order',
  'pages/dinner/checkout',
  'pages/take-out/index',
  'pages/take-out/order',
  'pages/address/index',
  'pages/address/edit',
  'pages/coupon/index',
  'pages/coupon/my',
  'pages/order/index',
  'pages/order/detail',
  'pages/comment/index',
  'pages/about/index'
];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: 'Remax Ali Template',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: '餐饮小程序',
    navigationBarBackgroundColor: '#282c34',
  },
  tabBar:{
    color:'#000000',
    selectedColor:'#1296db',
    list:[
      {
        pagePath:'pages/index/index',
        text:'首页',
        iconPath:'/icon/home.png',
        selectedIconPath:'/icon/home-active.png'
      },
      {
        pagePath:'pages/mine/index',
        text:'我的',
        iconPath:'/icon/account.png',
        selectedIconPath:'/icon/account-active.png',
      },
      
    ]
  }
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Toutiao Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: 'Remax Web Template',
};
