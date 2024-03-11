<script setup>
import { useStore } from 'vuex'
import CommonTask from './CommonTask.vue'

const store = useStore()
const tasks = store.getters['tasks/getTasks']
</script>

<template>
  <div class="task-list">
    <CommonTask
      v-for="task in tasks"
      :text="task.text"
      :date="new Date(task.date)"
      :responsible="task.responsible"
      :key="task.id"
    />
  </div>
</template>

<style>
.task-list {
  margin-top: 20px;
  display: flex;
  justify-items: center;
  flex-flow: row wrap;
  gap: 10px;
  align-items: start;
}
</style>
