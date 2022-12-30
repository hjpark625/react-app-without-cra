/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';

/**
 * @설명 webpack의 번들링에 대한 셋팅
 * @mode 프로덕션 모드인지 개발 모드인지 확인하는 옵션
 * @devtool 프로덕션 모드인 경우엔 hidden-source-map을 권장(외부에서 리액트 구조를 확인할 수 없음)
 * @entry 번들링이 시작되는 시점?으로 이해함
 * @resolve 확장자나 경로를 알아서 처리할 수 있도록 설정하는 옵션
 * @stats 이건 좀 더 알아봐야 할 듯...
 * @module 이 옵션에 설치한 ts-loader와 babel-loader를 설정하면 됨, loader들은 오른쪽에서 왼쪽 방향으로 적용되기 때문에 ts-loader를 babel-loader보다 오른쪽에 위치시켜야 함
 * @output 번들화 된 파일을 export할 경로와 파일명을 설정
 * @historyApiFallback 히스토리 API를 사용하는 SPA 개발 시 설정하며 404에러가 발생하면 index.html로 리다이렉트 시킴
 * @port 접속 포트 설정
 * @hot webpack의 HMR기능을 활성화(리로드 기능)
 * @plugins 설치한 플러그 인들을 적용하는 옵션
 */
module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  stats: { children: true },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
