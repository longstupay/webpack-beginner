# webpack4入门三  

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
css-loader@3.4.2
style-loader@1.1.3
less-loader@5.0.0
less@3.11.1
```

>
**loader**  
webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。

## webpack.config.js  

1.webpck配置文件  

1.1手动在根目录下创建webpack.config.js文件  
1.2入口文件中引入css、less、html、src等文件  
1.3了解node的commonJS模块化规范
1.4运行指令webpack进行打包  

入口文件引入其它不能识别的文件前通过指令webpack打包，未配置module（loader）  

```js
//index.js
import style from './index.css'

const a = (a, b)=>{
    console.log(a+b)
}

a(3, 5)
console.log(style)
```

未配置loader的webpack.config.js

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

可以看到如果未配置loader会报错

```bash
F:\每日学习\末学\webpack>webpack
Hash: 3d3cd9e85ddb5c1b1e04
Version: webpack 4.41.6
Time: 69ms
Built at: 12/22/2021 3:37:53 PM
   Asset      Size  Chunks             Chunk Names
built.js  4.87 KiB    main  [emitted]  main
Entrypoint main = built.js
[./src/index.css] 298 bytes {main} [built] [failed] [1 error]
[./src/index.js] 170 bytes {main} [built]

ERROR in ./src/index.css 1:10
Module parse failed: Unexpected token (1:10)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> html,body {
|     background-color: aquamarine;
|     margin: 0;
 @ ./src/index.js 2:0-31 11:12-17
```

此时配置添加module(loader)后webpack.confg.js配置

```js
//webpack.config.js
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
    // loader配置
    module:{
        rules:[{
            //详细配置
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        
        }
    ]

    },
    // 打包模式
    mode:'development'
    // mode:'prodution'
}
```

配置后，运行webpack指令，发现css文件已经被打包

```bash
F:\每日学习\末学\webpack>webpack
Hash: da9702aeddf6e328d116
Version: webpack 4.41.6
Time: 279ms
Built at: 12/22/2021 3:46:42 PM
   Asset      Size  Chunks             Chunk Names
built.js  16.6 KiB    main  [emitted]  main
Entrypoint main = built.js
[./node_modules/css-loader/dist/cjs.js!./src/index.css] 324 bytes {main} [built]
[./src/index.css] 561 bytes {main} [built]
[./src/index.js] 170 bytes {main} [built]
    + 2 hidden modules
```

## 总结  

1. 只有详细配置好webpack.config.js文件webpack才能编译其它文件，如css\html\img\等，而这都是为了构建项目的依赖关系  
2. webpack就是把项目中所需的每一个模块组合成一个或多个 bundles  
