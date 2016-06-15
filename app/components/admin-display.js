import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteBeer(beer){
      this.sendAction('deleteBeer', beer);
    }
  }
});
