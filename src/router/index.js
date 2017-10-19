import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import Hello3 from '@/components/Hello3'

import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueBlu)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Hello2',
      name: 'Hello2',
      component: Hello2
    },
    {
      path: '/Hello3',
      name: 'Hello3',
      component: Hello3
    }
  ]
})
