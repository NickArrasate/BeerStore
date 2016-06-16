import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart.items.[]','totalPrice', function(){
    var totalPrice = 0.00;
    this.get('shoppingCart.items').forEach(function(item){
      totalPrice += parseFloat(item.get('price'));
    });
    return '$ ' + totalPrice;
  }),

  actions: {
    removeFromCart(item){
      this.get('shoppingCart').remove(item);
    }
  }
});
