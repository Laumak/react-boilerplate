import path from "path";
import webpack from "webpack";
import autoprefixer from "autoprefixer";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"],
    },
    debug: true,
    devtool: "inline-source-map",
    noInfo: false,
    target: "web",
    entry: [
        "webpack-hot-middleware/client?reload=true",
        "react-hot-loader/patch",
        path.resolve(__dirname, "src/index"),
    ],
    output: {
        path: path.resolve(__dirname, "src"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: true,
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }, {
                test: /\.(scss|css)$/,
                loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            }, {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: "file-loader",
            },
        ],
    },
    postcss: () => [autoprefixer],
};