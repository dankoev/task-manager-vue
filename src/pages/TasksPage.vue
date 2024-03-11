<script setup>
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
</script>

<template>
  <h1>Tasks</h1>
  <TaskForm />
  <section>
    <h3>Current tasks:</h3>
    <TaskList />
  </section>
</template>

<style scoped></style>
