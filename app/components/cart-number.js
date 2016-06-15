import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartLength: Ember.computed('shoppingCart.items', function(){
    console.log(this.get('shoppingCart'));
    return this.get('shoppingCart').length;
  })
});
