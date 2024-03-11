<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  responsible: {
    type: String,
    required: true
  },
  completed: Boolean
})
const emit = defineEmits(['change-complete'])

const formatDate = (date) => date.toLocaleDateString()
const changeComlete = (e) => {
  emit('change-complete', e.target.checked)
}
</script>

<template>
  <article class="common-task">
    <label>
      <input :checked="completed" type="checkbox" @change="changeComlete" />
      {{ text }}
    </label>
    <span class="common-task__responsible"> for: {{ responsible }}</span>

    <div class="common-task__time">
      <span uk-icon="icon: calendar; ratio:1.2 " class="common-task__time-icon"></span>
      <time :datetime="date">
        {{ formatDate(date) }}
      </time>
    </div>
  </article>
</template>

<style scoped>
.common-task__time-icon {
  opacity: 0.5;
}

.common-task__time {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
.common-task__responsible {
  font-style: italic;
  color: black;
}
</style>
