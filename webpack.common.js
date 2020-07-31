const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },


    module: {
        rules: [
            // rulesbabel
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            },
            /* rules buat component */
            {
                test: /\.css$/i,
                exclude: /styles/,
                use: ["to-string-loader", "css-loader"]
            },
            /* rules buat global style */
            {
                test: /\.css$/i,
                include: /styles/,
                use: ["style-loader", "css-loader"]
            },
            // rules images
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputhPath: 'images/',
                            publicPath: 'images/',

                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html"
        })
    ]
};
