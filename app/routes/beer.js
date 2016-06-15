import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('beer', params.beer_id);
  },

  actions:{
    newComment(params){
      var makeComment = this.store.createRecord('comment', params);
      var newBeer = params.beer;
      newBeer.get('comments').addObject(makeComment);
      makeComment.save().then(function(){
        return newBeer.save();
      });
      this.transitionTo('beer', newBeer.id);
    },
  }
});
