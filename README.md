# knight-pool

## 前置工作
```
yarn
```

## 运行
```
yarn run serve
```

## 编译生产环境
```
yarn run build
```

## Lints and fixes files
```
yarn run lint
```

## 相关信息
vue-cli      https://cli.vuejs.org/zh/guide/
element-ui   https://element.eleme.cn/#/zh-CN/component/installation

## 目录结构
```shell
├── public                     //   
├── src                        // 源代码
│   ├── api                    // 请求API
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件（首字母大写）
│   ├── directive              // 全局指令
│   ├── filters                // 全局filter
│   ├── routers                 // 路由
│   ├── vuex                   // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // 页面
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── router.js               // 路由 入口
│   └── store.js                // vuex 入口
├── vue.config.js               // webpack打包
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
