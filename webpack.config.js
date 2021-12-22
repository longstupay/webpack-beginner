const {resolve} = require('path')

//五个核心配置
module.exports = {
    entry:'./src/index.js',
    //输出
    output:{
        filenme:'built.js',
        //输出路径
        path: resolve(__dirname, 'build')
    },
    //loader配置
    module:{
        reles:[
            //详细配置
        ]

    },
    //plugind配置
    plugins:{

    },
    //打包模式
    mode:'development'
    // mode:'prodution'
}