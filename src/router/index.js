import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import PaymentComponent from '../components/paymentComponent'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },

  {
    path: '/payment/:projectId',
    name: 'PaymentComponent',
    component: PaymentComponent,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
