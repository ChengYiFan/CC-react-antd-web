import path from 'path';
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
    }],
  ],
  routes:[{
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: 'index',
      }
    ]
  }]
};
