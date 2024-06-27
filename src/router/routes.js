const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'PagesTypeGraphy', name: "PagesTypeGraphy", component: () => import('pages/PagesTypeGraphy.vue') },
      { path: 'createTareas', name: "createTareas", component: () => import('pages/createTareas.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
