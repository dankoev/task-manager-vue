const tasks = {
  namespaced: true,
  state: () => ({
    tasks: {
      1: {
        id: 1,
        text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus neque nam repellendus nobis praesentium in eius ',
        date: '2024-03-14',
        responsible: '@bob',
        complited: false
      },
      2: {
        id: 2,
        text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus neque nam repellendus nobis praesentium in eius ',
        date: '2024-03-14',
        responsible: '@tom',
        complited: true
      }
    }
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
        complited: false,
        text,
        date,
        responsible
      }
    },
    updateTask(state, { id, text, date, responsible, complited }) {
      state.tasks[id] = { id, text, date, responsible, complited }
    }
  },
  actions: {}
}
export default tasks
