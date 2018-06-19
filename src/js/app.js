import Vue from 'vue/dist/vue.js'
import axios from 'axios'

let growler = new Vue({
  el: '#growler',
  data: { canConnect: false },
  computed: {
    isOnline: function() {
      return this.canConnect ? 'Yes' : 'No';
    }
  },
  created: function() {
    axios.get('https://www.ecofic.com').then(function (res) {
      growler.canConnect = true;
    }).catch(function (err) {
      growler.canConnect = false;
    })
  }
});
