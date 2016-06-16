import Ember from 'ember';

export default Ember.Component.extend({
  selectedCategory : 'all',
  actions: {
    selectCategory(category){
      this.set('selectedCategory', category);
    }
  }
});
