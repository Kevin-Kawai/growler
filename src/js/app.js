import Vue from 'vue/dist/vue.js'

let growler = new Vue({
  el: '#growler',
  data: {
    query: ''
  },
  methods: {
    executeSearch: function() {
      if (this.query) {
        document.forms[0].submit();
      } else {
        alert('Please enter a query');
      }
    }
  }
});
