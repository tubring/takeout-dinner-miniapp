# About

基于 Remaxjs(React 技术栈)开发的在线点餐微信小程序. 支持堂食扫码点餐及外卖在线下单

# 功能/特性:

1. 在线点餐: 包括堂食扫码点餐和外卖在线下单
2. 加入购物车
3. 添加和选择收货地址
4. 在线支付
5. 历史订单列表
6. 订单详情查看
7. 查看用户点评
8. 微信登录(待完善)
9. 商家信息展示(待完善)



## Getting Start

安装依赖

```bash
npm install
```

调试项目

```bash
# 选定要进行开发的平台，如 wechat，并调试
$ npm run dev wechat
or
yarn dev wechat
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录。

## 构建

```bash
# 选定要构建的平台，如 wechat，并执行构建
$ npm run build wechat
or
$ yarn build wechat
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录，上传代码即可。
