<script setup>
import { ref } from 'vue'
import AlertContainer from './AlertContainer.vue'
import LabeledInput from './LabeledInput.vue'

const { validationFn } = defineProps({
  title: {
    type: String,
    required: true
  },
  validationFn: {
    type: Function,
    required: true
  },
  noValidMessage: {
    type: String,
    required: true
  }
})
const showError = ref(false)
const emit = defineEmits(['submit'])

const validation = (e) => {
  const isValid = validationFn(e.target.value)
  if (isValid) {
    showError.value = false
    emit('submit', e.target.value)
    return
  }
  showError.value = true
}
</script>

<template>
  <div class="validated-input">
    <LabeledInput v-bind="$attrs" :title @change.stop="validation" />
    <AlertContainer v-if="showError" :text="noValidMessage" type="error" />
  </div>
</template>
<style scoped>
.validated-input {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
