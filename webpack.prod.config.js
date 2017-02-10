import path from "path";
import webpack from "webpack";
import autoprefixer from "autoprefixer";
import WebpackMd5Hash from "webpack-md5-hash";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"],
    },
    devtool: "source-map",
    noInfo: true,
    target: "web",
    entry: {
        vendor: path.resolve(__dirname, "src/vendor"),
        main: path.resolve(__dirname, "src/index"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].[chunkhash].js",
    },
    plugins: [
        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true,
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
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