const path = require('path');
module.exports = {
    //這個webpack打包的對象，這裡面加上剛剛建立的index.js
    mode:"development",
    entry: {
        index: './index1.jsx'
    },
    output: {
        //這裡是打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./'),
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            { 
                test: /\.jsx$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader',
                    options: { 
                        presets: ['@babel/preset-react']
                    }
                }
            },
            { 
                test: /.js$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { 
                        presets: ['@babel/preset-env'] } } }
        ],
    },

};