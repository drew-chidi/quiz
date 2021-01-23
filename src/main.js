import { createApp } from 'vue'

// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// import App from './App.vue'

import Vue from 'vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import App from './App.vue'
import Chakra from '@chakra-ui/vue'

Vue.use(Chakra)

Vue.use(Chakra)

new Vue({
  el: '#app',
  render: (h) => h(CThemeProvider, [h(App)])
}).$mount()

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
createApp(App).mount('#app')
