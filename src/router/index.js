import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import GameBoard from '../components/GameBoard.vue'
import ResultsPage from '../components/ResultsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/play', component: GameBoard },
  { path: '/results', component: ResultsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router