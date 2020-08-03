export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/index',
          },
          {
            path: '/index',
            name: 'News',
            icon: 'icon-ziyuan1',
            component: './Welcome',
          },
          {
            path: '/test',
            name: 'Where To Buy',
            icon: 'icon-ziyuan1',
            component: './Welcome',
          },
          {
            path: '/admin',
            name: 'Yeezy Release',
            icon: 'crown',
            component: './Admin',
            // authority: ['admin'],
            // routes: [
            //   {
            //     path: '/admin/sub-page',
            //     name: 'sub-page',
            //     icon: 'smile',
            //     component: './Welcome',
            //     authority: ['admin'],
            //   },
            // ],
          },
          {
            name: 'Nike Release',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]