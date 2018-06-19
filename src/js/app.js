import Vue from 'vue/dist/vue.js'

let growler = new Vue({
  el: '#growler',
  data: {
    pages: [
      { number: 1, url: '?page=1', sections: [ 'A', 'B', 'C' ]},
      { number: 2, url: '?page=2', sections: [ 'Y', 'Z' ]},
    ]
  }
});
