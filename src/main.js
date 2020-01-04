import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import Filtering from './filters/filter';
import 'vue-material-design-icons/styles.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import alertcomp from '@/components/error.vue';

Vue.config.productionTip = false
Vue.component('app-alert' , alertcomp)

Vue.filter('date', Filtering)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp ({
    apiKey: "AIzaSyAGPRd8myZqAo91ow28TAyFV5cdH8PPwQ8",
    authDomain: "meetups-97bdb.firebaseapp.com",
    databaseURL: "https://meetups-97bdb.firebaseio.com",
    projectId: "meetups-97bdb",
    storageBucket: "meetups-97bdb.appspot.com",
    messagingSenderId: "295730922301",
    appId: "1:295730922301:web:4abcd0fb7dfaa640b5bb54"
    })

    this.$store.dispatch('meetupsfetch')
  }

}).$mount('#app')
