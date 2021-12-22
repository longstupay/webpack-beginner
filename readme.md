# webpack4入门  

<!-- 
## 初体验  

```js
//版本
npm i webpack@4.41.6  
npm i webpack-cli@3.3.11  
```

### 1.通过简单案列了解**入口**（Entry)和输出（Output）  

1.1.新建两个文件夹**build**、**src**  
1.2.了解build文件夹对应**Output**和src文件夹对应**入口**概念  
1.3.运行指令

```js
// 打包入口文件到指定目录
webpack ./src/index.js -o ./build/built.js

//添加参数--mode=v指定开发和生产环境
//开发环境
webpack ./src/index.js -o ./build/built.js --mode=development
//生产环境
webpack ./src/index.js -o ./build/built.js --mode=production
```

1.4.可在src目录下新建index.html并引入打包好的入口js文件  
1.5.了解开发模式和生产模式打包方式的不同，即生产环境打包的文件是压缩的  

### 2.在第1的基础上通过新建css,json，img等文件了解webpack可以识别什么类型的文件  

2.1在项目根目录下新建data.json文件,运行指令重新打包后，查看是否相关文件是否打包成功  
2.1.1json文件

```bash
   Asset      Size  Chunks             Chunk Names
built.js  1.05 KiB       0  [emitted]  main
Entrypoint main = built.js
[0] ./data.json 46 bytes {0} [built]
[1] ./src/index.js 111 bytes {0} [built]

```

2.1.2css文件  
可以看到ERROR in ...

```bash
Hash: e853c600a00bc34339e2
Version: webpack 4.41.6
Time: 66ms
Built at: 12/22/2021 12:42:51 PM
   Asset      Size  Chunks             Chunk Names
built.js  5.41 KiB    main  [emitted]  main
Entrypoint main = built.js
[./data.json] 46 bytes {main} [built]
[./src/index.css] 279 bytes {main} [built] [failed] [1 error]
[./src/index.js] 164 bytes {main} [built]

ERROR in ./src/index.css 1:5
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> body {
|     background-color: aquamarine;
| }
 @ ./src/index.js 2:0-31 11:12-17
```

## 总结  

1. webpack可以将ES6模块编译打包成一个浏览器能识别的模块化  
2. 生产环境将会压缩打包后的代码  
3. webpack打包编译时本身不能识别除了js以外的其它文件  
4. 了解本章知识（entery和output）后,理解总结（3），借此引入核心概念**loader**   -->

## 实验依赖版本  

```bash
npm i webpack@4.41.6  
npm i webpack-cli@3.3.11 
```

## webpack.config.js  

1.webpck最基本配置文件（entry和output）  

1.1手动在根目录下创建webpack.config.js文件  
<!-- 1.2入口文件中引入css、less、html、src等文件   -->
1.2了解node的commonJS模块化规范
1.3运行指令webpack进行打包  

未引入其它文件前通过指令webpack打包，配置entry、output、mode  

```bash
F:\每日学习\末学\webpack>webpack
Hash: 3b01269002a37090296e
Version: webpack 4.41.6
Time: 57ms
Built at: 12/22/2021 2:54:50 PM
   Asset      Size  Chunks             Chunk Names
built.js  3.96 KiB    main  [emitted]  main
Entrypoint main = built.js
[./src/index.js] 170 bytes {main} [built]
```

初始化的webpack.config.js

```js
const {resolve} = require('path')

//五个核心配置
module.exports = {
    entry:'./src/index.js',
    //输出
    output:{
        filename:'built.js',
        //输出路径
        path: resolve(__dirname, 'build')
    },
    //打包模式
    mode:'development'
    // mode:'prodution'
}
```

下一p将引入css文件,配置添加module(loader),webpack.confg.js配置

```js

```

## 总结  

1. 之前是通过带参数（webpack ./src/index.js -o ./build/built.js --mode=development）的webpack指令编译打包文件，这P是建立webpack配置文件，用不带参数的webpack指令打包文件  

2. 在配置文件简单配置entry和output达到最基本的webpack配置  
