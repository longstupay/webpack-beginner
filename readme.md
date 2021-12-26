# webpack4入门五  

## 实验目的  

前四节收悉，webpack通过loader（比如转换css模块）和plugin（打包html）但web世界的文件种类繁多，本节将拓展知识面，了解webpack是如何处理ttf字体文件  

```js
//依赖版本
//建议版本一致，太新会导致某些api被废弃，造成不必要的报错而浪费时间去排bug
//使用最新固然可以提高自己的排错能力，但当前的主要精力应放在webpack上
npm i webpack@4.41.6  
npm i webpack-cli@3.3.11  
//HtmlWebpackPlugin 将生成一个 HTML 文件，并在其中使用 script 引入打包好的built.JS 文件。
npm i css-loader@3.4.2 -D
npm i style-loader@1.1.3 -D
npm i html-webpack-plugin@3.2.0 -D
npm i url-loader@3.0.0 file-loader@5.0.2 -D

```

### webpack引用css,打包html,引用图片  

#### webpack引用图片  

在index.css中新建样式作背景图片
index.html中的元素使用样式

### webpack引用字体图标文件  

