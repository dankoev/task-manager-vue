<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import ValidatedInput from '@/shared/ValidatedInput.vue'
import AlertContainer from '@/shared/AlertContainer.vue'
import GeneralButton from '@/shared/GeneralButton.vue'

const store = useStore()
const task = ref({
  text: '',
  date: '',
  responsible: ''
})
const hasValidError = ref(false)

const createTask = () => {
  const { text, date, responsible } = task.value
  if (text && date && responsible) {
    hasValidError.value = false
    store.commit({
      type: 'tasks/addTask',
      text,
      date,
      responsible
    })
    return
  }
  hasValidError.value = true
}
</script>

<template>
  <form class="task-creator" @submit.prevent="createTask">
    <h3>Create task</h3>
    <AlertContainer
      class="task-creator__error"
      v-if="hasValidError"
      text="Validation error"
      type="error"
    />

    <ValidatedInput
      type="date"
      title="Date"
      :noValidMessage="`Must be more then '${new Date().toLocaleDateString()}''`"
      :validationFn="(val) => new Date(val) > Date.now()"
      @submit="(val) => (task.date = val)"
    />
    <ValidatedInput
      title="Text"
      noValidMessage="Must be more than 10 characters."
      :validationFn="(val) => val.length >= 10"
      @submit="(val) => (task.text = val)"
    />

    <ValidatedInput
      title="Responsible"
      placeholder="@nickname"
      noValidMessage="Must be more than 5 characters and start with '@'"
      :validationFn="(val) => /^@\w{5,}/.test(val)"
      @submit="(val) => (task.responsible = val)"
    />
    <GeneralButton type="submit">Create</GeneralButton>
  </form>
</template>

<style scoped>
.task-creator {
  margin: 20px 10px;
  display: flex;
  gap: 10px;
  flex-flow: column;
  position: relative;
  & h3 {
    margin: 0;
  }

  & button {
    align-self: start;
  }
}
.task-creator__error {
  position: absolute;
  top: 5px;
  left: 180px;
}
</style>
