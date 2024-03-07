<script setup>
import MainNav from './components/MainNav.vue'
</script>

<template>
  <MainNav />
  <main></main>
</template>

<style scoped></style>
<style>
:root {
  --text-color: rgba(54, 53, 53, 0.918);
}

* {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: large;
  color: var(--text-color);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
