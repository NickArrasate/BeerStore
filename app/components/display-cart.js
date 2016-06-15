import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart','totalPrice', function(){
    var totalPrice = 0.00;
    this.get('shoppingCart.items').forEach(function(item){
      totalPrice += parseFloat(item.get('price'));
    });
    return '$ ' + totalPrice;
  })
});
