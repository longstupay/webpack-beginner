const {resolve} = require('path');
const HtmlWrbpackPlugin = require('html-webpack-plugin')


module.exports={
    entry:'./src/index.js',
    output:{
        path:resolve(__dirname, 'dist'),
        filename:'built.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|png|svg)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    esModule:false,
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWrbpackPlugin({template:'./src/index.html'})
    ],
    mode:'development'
}