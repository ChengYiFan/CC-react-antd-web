import path from 'path';
import routerMap from './router';

const primaryColor = '#1BB8A8';
const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  devtool: isDevelopment ? 'cheap-module-source-map' : 'hidden-source-map',
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // 引入以解决移动端点击穿透问题
      fastclick: true,
    }],
  ],
  /** 路由相关配置 */
  routes: routerMap,
  /** 禁用 redirect 上提 */
  disableRedirectHoist: true,
  /** 是否开启 hash 文件后缀 */
  hash: true,
  /** 兼容 ie11 */
  targets: { ie: 11 },
  /** 开启treeShaking */
  treeShaking: true,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: { 'primary-color': primaryColor },
  /**
   * webpack 相关配置
   */
  define: {
    PRIMARY_COLOR: primaryColor,
    APP_TYPE: process.env.APP_TYPE || ''
  },
  // px2rem remUnit: 设计图宽度/10
  // extraPostCSSPlugins:[px2rem({remUnit: 37.5})],
  // 定义额外的 PostCSS 插件，格式为数组
  // extraPostCSSPlugins:[
  //   pxtorem({
  //     rootValue: 37.5,
  //     unitPrecision: 5,
  //     propList: ['*'],
  //     selectorBlackList: [
  //       '.web' //忽略的选择器 .web开头的都不会转换
  //     ],
  //     replace: true,
  //     mediaQuery: false,
  //     minPixelValue: 12,
  //   }),
  // ],
};
