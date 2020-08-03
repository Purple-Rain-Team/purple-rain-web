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
            component: './TestPage',
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
            icon: 'icon-yeezy',
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
            icon: 'icon-AJ-',
            path: '/list',
            component: './ListTableList',
          },
          {
            name: 'Sponsors',
            icon: 'icon-hezuohuoban',
            path: '/sponsors',
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