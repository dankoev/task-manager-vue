<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const task = ref({
  text: '',
  date: '',
  responsible: ''
})
const isValidError = ref(false)

const createTask = () => {
  const { text, date, responsible } = task.value
  if (text && date && responsible) {
    isValidError.value = false
    store.commit({
      type: 'tasks/addTask',
      text,
      date,
      responsible
    })
    return
  }
  isValidError.value = true
}
</script>

<template>
  <form class="task-creator" @submit.prevent="createTask">
    <h3>Create task</h3>
    <span class="task-creator__error" v-if="isValidError"> Validation Error</span>

    <label>
      <input type="date" name="task-date" v-model.lazy="task.date" />
    </label>

    <label>
      <input type="text" placeholder="Название задачи" v-model.lazy.trim="task.text" />
    </label>

    <label>
      <input type="text" placeholder="@nickname" v-model.lazy.trim="task.responsible" />
    </label>

    <button class="common-button">Создать</button>
  </form>
</template>

<style scoped>
.task-creator {
  margin: 20px 10px;
  display: flex;
  gap: 10px;
  flex-flow: column;
  & h3 {
    margin: 0;
  }

  & button {
    align-self: start;
  }
}
.task-creator__error {
  color: red;
}
</style>
