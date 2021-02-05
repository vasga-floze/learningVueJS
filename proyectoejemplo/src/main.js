import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

//Directivas Personalizadas...
//Enviar el puntero de enfoque a un elemento HTML
Vue.directive('focus',{
  inserted(el){
    el.focus();
  }
});

//Directiva para cambiar el color
Vue.directive('color',{
  bind(el, binding){
    el.style.color = binding.value;
  }
});


new Vue({
  render: h => h(App),
}).$mount('#app')
