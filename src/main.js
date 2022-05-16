import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fontsource/fredoka-one"
import "@fontsource/source-sans-pro"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
