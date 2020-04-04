export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: 'index',
      },
      {
        path: '/editor',
        name: '富文本',
        component: './Editor',
      },
      {
        path: '/lottie',
        name: 'lottie动画',
        component: './Lotties',
      },
    ]
  }
]
