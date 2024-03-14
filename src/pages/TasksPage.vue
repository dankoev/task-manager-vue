<script setup>
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import { useStore } from 'vuex'

const store = useStore()
const createTask = (task) => {
  const { text, date, responsible } = task
  if (text && date && responsible) {
    store.dispatch({
      type: 'tasks/saveTask',
      text,
      date,
      responsible
    })
    return
  }
}
</script>

<template>
  <h1>Tasks</h1>
  <TaskForm title="Create task" buttonName="Create" @send-task="createTask" />
  <section>
    <h3>Current tasks:</h3>
    <TaskList />
  </section>
</template>

<style scoped></style>
