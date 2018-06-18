import Vue from 'vue/dist/vue.js'

let growler = new Vue({
  el: '#growler',
  data: {
    query: ''
  },
  methods: {
    executeSearch:function() {
      this.isRunning = true;
      document.forms[0].submit();
    }
  }
});
