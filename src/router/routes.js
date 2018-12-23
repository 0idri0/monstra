
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '/', name: 'Home', component: () => import('pages/index') },
      { path: '/stuecke', name: 'Stücke', component: () => import('pages/stuecke') },
      { path: '/termine', name: 'Termine', component: () => import('pages/termine') },
      { path: '/about', name: 'About', component: () => import('pages/about') },
      { path: '/kontakt', name: 'Kontakt', component: () => import('pages/kontakt') },
      { path: '/impressum', name: 'Impressum', component: () => import('pages/impressum') },
      { path: '/:id', name: 'Stückinfo', component: () => import('pages/stueckinfo') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
