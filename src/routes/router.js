import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "./../pages/mainPage.vue"
import basket from "./../pages/basket.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: mainPage},
    {path: '/basket', component: basket}
  ]
})
export default router