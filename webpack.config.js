const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const path = require('path')

const generatePlugins = () => {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, 'src'))

  return templateFiles
    .map((templateFile) => {
      const parts = templateFile.split('.')
      const name = parts[0]
      const extension = parts[1]

      if (extension !== 'html') return null

      return new HtmlWebpackPlugin({
        inject: 'head',
        scriptLoading: 'blocking',
        filename: `${name}.html`,
        template: path.resolve(__dirname, `src/${name}.${extension}`),

        minify: {
          collapseWhitespace: false,
        },
      })
    })
    .filter((templateFile) => templateFile !== null)
}

module.exports = {
  mode: 'production',

  entry: {
    filename: path.resolve(__dirname, 'src/webpack.tsx'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],

    alias: {
      '@src': path.resolve(__dirname, 'src/'),
    },
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/application.js',
    clean: true,
  },

  devtool: 'source-map',

  plugins: [
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    ...generatePlugins(),

    new CopyPlugin({
      patterns: [
        {
          from: 'src/img/',
          to: 'img/',
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },

      {
        test: /\.m?[jt]s$/i,
        exclude: /(node_modules|bower_components)/,

        use: {
          loader: 'babel-loader',

          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },

      {
        test: /\.?[jt]sx$/i,
        exclude: /(node_modules|bower_components)/,

        use: {
          loader: 'babel-loader',

          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',

        generator: {
          filename: 'img/pictures/[name][ext]',
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',

        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  devServer: {
    port: 9000,
    compress: false,
    hot: true,
    historyApiFallback: true,

    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
}
