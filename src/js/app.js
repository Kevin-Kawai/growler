import Vue from 'vue/dist/vue.js'

let growler = new Vue({
  el: '#growler',
  data: {
    beers: [
      {name: 'Tikibalang Barley Wine', abv: 9.6},
      {name: 'Hyote Chocolate Stout', abv: 7.4},
      {name: 'Pope Lick Porter', abv: 6.5},
      {name: 'Ahool Ale ', abv: 5.4},
      {name: 'North Adjule Lager', abv: 3.7},
    ],
    maxAbv: 7.0
  }
});
