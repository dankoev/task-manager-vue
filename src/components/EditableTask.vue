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
const updateTask = (newTask) => {
  const { id, complited } = props.task
  const { text, date, responsible } = newTask
  store.commit({
    type: 'tasks/updateTask',
    id,
    text,
    date,
    responsible,
    complited
  })

  toggleEdit()
}
const dateObj = computed(() => new Date(props.task.date))
</script>

<template>
  <div class="editable-task">
    <CommonTask :text="task.text" :date="dateObj" :responsible="task.responsible" />
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
      <GeneralButton class="delete-btn">Delete</GeneralButton>
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
