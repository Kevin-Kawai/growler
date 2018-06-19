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
      return value.toString();
    },
    removePeriods: function(value) {
      return value.replace(/\./g, '');
    },
    toUpperCase: function(value) {
      return value.toUpperCase();
    }
  }
});
