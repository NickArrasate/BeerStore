import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(index){
    var newItemList = this.get('items');
    newItemList.splice(index, 1);
    this.set('items', newItemList );
  }
});
