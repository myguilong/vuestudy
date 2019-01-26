import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import find from './views/order.vue'
import index from './views/index.vue'
import user from './views/user.vue'
import search from './views/search.vue'
import shopgoods from './views/shop.vue'
import shopfoods from './views/shops/shopgoods.vue'
import shopracting from './views/shops/ratcing.vue'
import shopinfo  from './views/shops/info.vue';
=======
import Home from './views/Home.vue'
>>>>>>> init

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
    routes: [{
            path: '/',
            redirect:'/index',
            meta:{
                menushow:true
            }
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            meta:{
                menushow:true
            }

        },
        {
            path:'/shops',
            component:shopgoods,

            children:[
                {
                    path:'/shops/shopsracting',
                    component:shopracting,
                },
                {
                    path:'/shops/shopsfoods',
                    component:shopfoods
                },
                {
                    path:'/shops/shopsinfo',
                    component:shopinfo
                },
                {
                    path: '',
                    redirect: '/shops/shopsfoods'
                  },
              
                
            ]
        },
        {
            path: '/order',
            name: 'order',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: find,
            meta:{
                menushow:true
            }
        },
        {
            path: '/search',
            name: 'search',
            component: search,
            meta:{
                menushow:true
            }

        },
        {
            path: '/user',
            name: 'user',
            component: user,
            meta:{
                menushow:true
            }
        }

    ]
})
=======
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
>>>>>>> init
