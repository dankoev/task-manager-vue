const tasks = {
  namespaced: true,
  state: () => ({
    tasks: {}
  }),
  getters: {
    getTasks(state) {
      return Object.values(state.tasks)
    }
  },
  mutations: {
    addTask(state, { text, date, responsible }) {
      const id = Date.now()
      state.tasks[id] = {
        id,
        completed: false,
        text,
        date,
        responsible
      }
    },
    updateTask(state, { id, text, date, responsible, completed }) {
      state.tasks[id] = { id, text, date, responsible, completed }
    },
    deleteTask(state, { id }) {
      delete state.tasks[id]
    }
  },
  actions: {
    saveTask({ state, commit }, payload) {
      commit('addTask', payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTaskSyncWithStorage({ state, commit }, payload) {
      commit('updateTask', payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTaskSyncWithStorage({ state, commit }, payload) {
      commit('deleteTask', payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    syncTasksFromStorage({ state }) {
      const storageTasks = JSON.parse(localStorage.getItem('tasks'))
      state.tasks = storageTasks ?? []
    }
  }
}
export default tasks
