export default {
   items: [
      {
         id: 'navigation',
         title: 'Navigation',
         type: 'group',
         icon: 'icon-navigation',
         children: [
            {
               id: 'home',
               title: 'Kezdőlap',
               type: 'item',
               url: '/home',
               icon: 'feather icon-home',
            },
            {
               id: 'calendar',
               title: 'Naptár',
               type: 'item',
               url: '/calendar',
               icon: 'feather icon-calendar',
            },
         ],
      },
      {
         id: 'ui-element',
         type: 'group',
         icon: 'icon-ui',
         children: [
            {
               id: 'asd1',
               title: 'HR',
               type: 'collapse',
               icon: 'feather icon-user',
               children: [
                  {
                     id: 'Doc1',
                     title: 'Személyes adatok változása',
                     type: 'item',
                     url: '/documents/personal-data-change',
                  },
                  {
                     id: 'Doc2',
                     title: 'Doc2',
                     type: 'item',
                     url: '/basic/badges',
                  },
                  {
                     id: 'Doc3',
                     title: 'Doc3',
                     type: 'item',
                     url: '/basic/breadcrumb-paging',
                  },
                  {
                     id: 'Doc4',
                     title: 'Doc4',
                     type: 'item',
                     url: '/basic/collapse',
                  },
               ],
            },
            {
               id: 'control',
               title: 'Controlling',
               type: 'collapse',
               icon: 'feather icon-user',
               children: [
                  {
                     id: 'Doc1',
                     title: 'Doc1',
                     type: 'item',
                     url: '/basic/badges',
                  },
                  {
                     id: 'Doc2',
                     title: 'Doc2',
                     type: 'item',
                     url: '/basic/badges',
                  },
                  {
                     id: 'Doc3',
                     title: 'Doc3',
                     type: 'item',
                     url: '/basic/breadcrumb-paging',
                  },
                  {
                     id: 'Doc4',
                     title: 'Doc4',
                     type: 'item',
                     url: '/basic/collapse',
                  },
               ],
            },
         ],
      } /*
       {
           id: 'ui-forms',
           title: 'Forms & Tables',
           type: 'group',
           icon: 'icon-group',
           children: [
               {
                   id: 'form-basic',
                   title: 'Form Elements',
                   type: 'item',
                   url: '/forms/form-basic',
                   icon: 'feather icon-file-text'
               },
               {
                   id: 'bootstrap',
                   title: 'Table',
                   type: 'item',
                   icon: 'feather icon-server',
                   url: '/tables/bootstrap'
               }
           ]
       },
       {
           id: 'chart-maps',
           title: 'Chart & Maps',
           type: 'group',
           icon: 'icon-charts',
           children: [
               {
                   id: 'charts',
                   title: 'Charts',
                   type: 'item',
                   icon: 'feather icon-pie-chart',
                   url: '/charts/nvd3'
               },
               {
                   id: 'maps',
                   title: 'Map',
                   type: 'item',
                   icon: 'feather icon-map',
                   url: '/maps/google-map'
               }
           ]
       },
       {
           id: 'pages',
           title: 'Pages',
           type: 'group',
           icon: 'icon-pages',
           children: [
               {
                   id: 'auth',
                   title: 'Authentication',
                   type: 'collapse',
                   icon: 'feather icon-lock',
                   badge: {
                       title: 'New',
                       type: 'label-danger'
                   },
                   children: [
                       {
                           id: 'signup-1',
                           title: 'Sign up',
                           type: 'item',
                           url: '/auth/signup-1',
                           target: true,
                           breadcrumbs: false
                       },
                       {
                           id: 'signin-1',
                           title: 'Sign in',
                           type: 'item',
                           url: '/auth/signin-1',
                           target: true,
                           breadcrumbs: false
                       }
                   ]
               },

               {
                   id: 'sample-page',
                   title: 'Sample Page',
                   type: 'item',
                   url: '/sample-page',
                   classes: 'nav-item',
                   icon: 'feather icon-sidebar'
               },
               {
                   id: 'docs',
                   title: 'Documentation',
                   type: 'item',
                   url: '/docs',
                   classes: 'nav-item',
                   icon: 'feather icon-help-circle'
               },
               {
                   id: 'menu-level',
                   title: 'Menu Levels',
                   type: 'collapse',
                   icon: 'feather icon-menu',
                   children: [
                       {
                           id: 'menu-level-1.1',
                           title: 'Menu Level 1.1',
                           type: 'item',
                           url: '#!',
                       },
                       {
                           id: 'menu-level-1.2',
                           title: 'Menu Level 2.2',
                           type: 'collapse',
                           children: [
                               {
                                   id: 'menu-level-2.1',
                                   title: 'Menu Level 2.1',
                                   type: 'item',
                                   url: '#',
                               },
                               {
                                   id: 'menu-level-2.2',
                                   title: 'Menu Level 2.2',
                                   type: 'collapse',
                                   children: [
                                       {
                                           id: 'menu-level-3.1',
                                           title: 'Menu Level 3.1',
                                           type: 'item',
                                           url: '#',
                                       },
                                       {
                                           id: 'menu-level-3.2',
                                           title: 'Menu Level 3.2',
                                           type: 'item',
                                           url: '#',
                                       }
                                   ]
                               }
                           ]
                       }
                   ]
               },
               {
                   id: 'disabled-menu',
                   title: 'Disabled Menu',
                   type: 'item',
                   url: '#',
                   classes: 'nav-item disabled',
                   icon: 'feather icon-power'
               },*/,
      /*{
                   id: 'buy-now',
                   title: 'Buy Now',
                   type: 'item',
                   icon: 'feather icon-user',
                   classes: 'nav-item',
                   url: 'https://codedthemes.com',
                   target: true,
                   external: true,
                   badge: {
                       title: 'v1.0',
                       type: 'label-primary'
                   }
               }
           ]
       }*/
   ],
};
