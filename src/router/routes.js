const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/rommel',
    component: () => import('pages/home/Index.vue')
  },
  {
    path: '/login',
    component: () => import('pages/login/Index.vue')
  },
  {
    path: '/register',
    component: () => import('pages/register/Index.vue')
  }
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
