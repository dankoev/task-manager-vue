<script setup>
import { ref } from 'vue'
import ValidatedInput from '@/shared/ValidatedInput.vue'
import AlertContainer from '@/shared/AlertContainer.vue'
import GeneralButton from '@/shared/GeneralButton.vue'

const hasValidError = ref(false)

const props = defineProps({
  text: String,
  date: String,
  responsible: String,
  buttonName: String,
  title: String
})

const localTask = ref({
  text: props.text,
  date: props.date,
  responsible: props.responsible
})

const emit = defineEmits(['send-task'])

const submitForm = () => {
  const { text, date, responsible } = localTask.value
  if (text && date && responsible) {
    hasValidError.value = false
    emit('send-task', {
      text,
      date,
      responsible
    })
    localTask.value = {}
    return
  }
  hasValidError.value = true
}
</script>

<template>
  <form class="task-creator" @submit.prevent="submitForm">
    <h3>{{ title }}</h3>
    <AlertContainer
      class="task-creator__error"
      v-if="hasValidError"
      text="Validation error"
      type="error"
    />

    <ValidatedInput
      type="date"
      title="Date"
      :value="localTask.date"
      :noValidMessage="`Must be more then '${new Date().toLocaleDateString()}''`"
      :validationFn="(val) => new Date(val) > Date.now()"
      @submit="(val) => (localTask.date = val)"
    />
    <ValidatedInput
      title="Text"
      :value="localTask.text"
      noValidMessage="Must be more than 10 characters."
      :validationFn="(val) => val.length >= 10"
      @submit="(val) => (localTask.text = val)"
    />

    <ValidatedInput
      title="Responsible"
      placeholder="@nickname"
      :value="localTask.responsible"
      noValidMessage="Must be more than 5 characters and start with '@'"
      :validationFn="(val) => /^@\w{3,}/.test(val)"
      @submit="(val) => (localTask.responsible = val)"
    />
    <GeneralButton type="submit">{{ buttonName }}</GeneralButton>
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
