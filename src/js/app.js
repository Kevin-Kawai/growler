import Vue from 'vue/dist/vue.js'

let growler = new Vue({
  el: '#growler',
  data: {
    beers: [
      {name: 'Ahool Ale', price: 2.80},
      {name: 'Agogwe Ale', price: 2.38}
    ],
    shoppingCart: [],
    subTotal: 0.00
  },
  watch: {
    shoppingCart: function() {
      this.updateSubTotal();
    }
  },
  methods: {
    updateSubTotal: function() {
      var s = this.shoppingCart.length;
      var t = 0;
      for (var i=0; i<s; i++) {
        t += this.shoppingCart[i].price;
      }
      this.subTotal = t;
    },
    buy: function(beer) {
      this.shoppingCart.push(beer);
    }
  }
});
