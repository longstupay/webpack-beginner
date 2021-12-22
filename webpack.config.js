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
    // module:{
    //     rules:[{
    //         //详细配置
    //         test:/\.css$/,
    //         use:[
    //             'style-loader',
    //             'css-loader'
    //         ]
        
    //     }
    // ]

    // },
    //plugind配置
    // plugins:{

    // },
    //打包模式
    mode:'development'
    // mode:'prodution'
}