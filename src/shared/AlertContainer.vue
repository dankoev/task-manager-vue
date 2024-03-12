<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    validaror(value) {
      return ['error', 'warning'].include(value)
    }
  }
})
</script>
<template>
  <span :class="['alert', type]"> {{ text }}</span>
</template>

<style scoped>
.alert {
  font-size: 0.9rem;
}
.error {
  color: var(--error-color);
}

.warning {
  color: var(--warning-color);
}
</style>
