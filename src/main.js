import { createApp } from 'vue'
import App from './App.vue';
import HomeComponent from './FirstPage.vue'
import AboutComponent from './SecondPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueRellax from 'vue-rellax'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/products', component: AboutComponent },
    // Add more routes as needed
  ]
})


createApp(App).use(router).use(VueRellax).mount('#app')