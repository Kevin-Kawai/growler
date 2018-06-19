import Vue from 'vue/dist/vue.js'

let growler = new Vue({
  el: '#growler',
  data: {
    currentUser: {
      firstName: 'Chad',
      fingers: 10,
      tags: ['male', 'scorpio'],
      socialMedia: {
        twitter: '@ecofic',
        youtube: 'ecofic'
      }
    }
  }
});
