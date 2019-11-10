
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/linha.vue') },
      { path: 'chatt', component: () => import('pages/chat.vue') }
    ]
  },
  {
    path: '/form',
    component: () => import('pages/formulario.vue'),
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
