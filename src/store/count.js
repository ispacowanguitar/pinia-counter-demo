import {defineStore} from "pinia";

const useCountStore = defineStore("count", {
  state: () => {
    return { count: 123 }
  },
  actions: {
    addOne() {
      this.count++
    },
    subtractOne() {
      this.count--
    }
  }
})

export default useCountStore;