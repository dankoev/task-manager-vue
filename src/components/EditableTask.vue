<script setup>
import { computed, ref } from 'vue'
import CommonTask from './CommonTask.vue'
import GeneralButton from '@/shared/GeneralButton.vue'
import ModalWindow from './ModalWindow.vue'
import TaskForm from './TaskForm.vue'
import store from '@/store'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const editable = ref(false)

const toggleEdit = () => {
  editable.value = !editable.value
}
const deleteTask = () => {
  const { id } = props.task
  store.dispatch({
    type: 'tasks/deleteTaskSyncWithStorage',
    id
  })
}
const updateTask = (newTask) => {
  const { id, completed } = props.task
  const { text, date, responsible } = newTask
  store.dispatch({
    type: 'tasks/updateTaskSyncWithStorage',
    id,
    text,
    date,
    responsible,
    completed
  })

  toggleEdit()
}
const changeComplete = (val) => {
  store.dispatch({
    type: 'tasks/updateTaskSyncWithStorage',
    ...props.task,
    completed: val
  })
}
const dateObj = computed(() => new Date(props.task.date))
</script>

<template>
  <div class="editable-task">
    <CommonTask
      :text="task.text"
      :date="dateObj"
      :responsible="task.responsible"
      :completed="task.completed"
      @change-complete="changeComplete"
    />
    <ModalWindow v-if="editable" @close="toggleEdit">
      <TaskForm
        title="Edit task"
        buttonName="Save"
        :text="task.text"
        :date="task.date"
        :responsible="task.responsible"
        @send-task="updateTask"
      />
    </ModalWindow>
    <div class="editable-task__control">
      <GeneralButton @click="toggleEdit">Edit</GeneralButton>
      <GeneralButton @click="deleteTask" class="delete-btn">Delete</GeneralButton>
    </div>
  </div>
</template>

<style scoped>
.editable-task {
  display: flex;
  gap: 5px;
}
.editable-task__control {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.delete-btn {
  background-color: rgba(211, 56, 17, 0.904);
}
</style>
