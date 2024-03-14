<script setup>
import MainNav from '@/components/MainNav.vue'
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('tasks/syncTasksFromStorage')
</script>

<template>
  <MainNav />
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
<style>
:root {
  --text-color: rgba(54, 53, 53, 0.918);
  --shadow-color: rgba(95, 95, 95, 0.466);
  --error-color: rgba(156, 37, 37, 0.644);
  --warning-color: rgb(212, 163, 55);
}

#app {
  display: flex;
}
main {
  flex-grow: 1;
  padding: 20px 30px;
  overflow: auto;
  height: 100vh;
  width: auto;
  & h1 {
    margin-bottom: 10px;
  }
}

* {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: var(--text-color);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
