const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  devtool: "inline-source-map",
  mode: 'development',
  devServer: {
    compress: true,
    open: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]', // Customize the generated class names
              },
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new ESLintPlugin(),
    new PrettierPlugin({
      printWidth: 80,               // Указывает максимальную ширину строки
      tabWidth: 2,                  // Указывает количество пробелов на табуляцию
      useTabs: false,               // Индентация с использованием пробелов (false) или табуляции (true)
      semi: true,                   // Использование точек с запятой в конце предложений
      encoding: 'utf-8',            // Кодировка
      extensions: [ ".js", ".ts" ], // Файлы с этими расширениями будут отформатированы
      // ... вы можете указать другие настройки Prettier здесь ...
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
