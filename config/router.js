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
      {
        path: '/myUi',
        name: '自定义UI库测试',
        routes: [
          {
            path: '/myUi/tabSelect',
            name: 'tabSelect',
            component: './TabSelect',
          },
          {
            path: '/myUi/modal',
            name: 'modal',
            component: './Modal',
          }
        ],
      },
      {
        path: '/advanceTabSelector',
        name: '高阶组件/函数作为子组件',
        component: './AdvancedTabSelectorSample',
      },
    ]
  }
]
