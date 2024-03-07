import { createApp } from 'vue'
import Home from './pages/HomePage.vue'
import Tasks from './pages/TasksPage.vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from './pages/NotFoundPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: Tasks },
  { path: '/roadmap', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
