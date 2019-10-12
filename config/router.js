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
        component: 'Editor',
      }
    ]
  }
]
