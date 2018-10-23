import Vue from "vue"
import Hello from "./components/App.vue"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",

    components: {
      Hello
    },

    template: "<Hello />"
  })
})
