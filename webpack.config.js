var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    devtool: 'eval-source-map',
    
    entry:  __dirname + "/app/main.js",
        output: {
        path: __dirname + "/pubilc",
        filename: "bundle.js"
    },
    
    devServer: {
        contentBase: "./pubilc",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "style-loader"
                        },{
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                    getLocalIdent: (context, localIdentName, localName, options) => {
                                            return localName
                                    }
                                }
                        }, {
                            loader: "postcss-loader"
                            }
                    ]    
                })
            }
        ]
    }
}