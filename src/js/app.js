import Vue from 'vue/dist/vue.js'

let growler = new Vue({
  el: '#growler',
  data: {
    query: ''
  },
  methods: {
    executeSearch:function(t, e) {
      var msg = 'Token: ' + ' Query: ' + this.query + ' Button: ' + event.target.innerText;
    alert(msg);
    }
  }
});
