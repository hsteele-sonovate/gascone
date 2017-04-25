module.exports = {
    entry: './src/App.tsx',
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
     },
     resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
     },
     externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
 }