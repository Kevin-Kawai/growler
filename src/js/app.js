import Vue from 'vue/dist/vue.js'
import axios from 'axios'

let growler = new Vue({
  el: '#growler',
  data: {
    results: [
      {name: 'Ahool Ale', ibu:'33 i.b.u.'}
    ]
  },
  filters: {
    convertIBU: function(value, empty) {
      if (!value) { return empty; }
      value = value.toString();
      value = value.replace(/\./g, '');
      return value.toUpperCase();
    }
  }
});
