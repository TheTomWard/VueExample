import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'
import store from './store/index.js'

Vue.use(Vuex);
Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
