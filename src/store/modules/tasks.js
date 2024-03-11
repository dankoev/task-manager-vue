const tasks = {
  namespaced: true,
  state: () => ({
    tasks: [
      {
        id: 1,
        text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus neque nam repellendus nobis praesentium in eius ',
        date: '2024-03-14',
        responsible: '@bob',
        complited: false
      },
      {
        id: 2,
        text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus neque nam repellendus nobis praesentium in eius ',
        date: '2024-03-14',
        responsible: '@tom',
        complited: true
      }
    ]
  }),
  getters: {
    getTasks(state) {
      return state.tasks
    }
  },
  mutations: {
    addTask(state, { text, date, responsible }) {
      state.tasks.push({
        id: Date.now(),
        complited: false,
        text,
        date,
        responsible
      })
    }
  },
  actions: {}
}
export default tasks
