import Vue from "vue"
import Hello from "./components/App.vue"

// document.addEventListener("DOMContentLoaded", () => {
//   new Vue({
//     el: "#app",
//
//     components: {
//       Hello
//     },
//
//     template: "<Hello />"
//   })
// })

var app = new Vue({
  el: '#app',
  data: {
    message: 'hellow vue'
  }
})
