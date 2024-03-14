<script setup>
import { useStore } from 'vuex'
import EditableTask from './EditableTask.vue'
import { computed } from 'vue'
const store = useStore()
const tasks = computed(() => store.getters['tasks/getTasks'])
</script>

<template>
  <div class="task-list">
    <p v-if="tasks.length == 0" class="task-list__no-message">No scheduled tasks</p>
    <EditableTask v-else v-for="task in tasks" :task :key="task.id" />
  </div>
</template>

<style>
.task-list__no-message {
  margin-left: auto;
  margin-right: auto;
}
.task-list {
  margin-top: 20px;
  display: flex;
  justify-items: center;
  flex-flow: row wrap;
  gap: 10px;
  align-items: start;
}
</style>
