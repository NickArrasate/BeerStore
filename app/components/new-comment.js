import Ember from 'ember';

export default Ember.Component.extend({
  makeNewPost: false,
  actions:{
    showPostForm(){
      this.set('makeNewPost', true);
    },
    newComment(){
      var params = {
        name: this.get('name') ? this.get('name') : "",
        comment: this.get('comment') ? this.get('comment') : "",
        beer: this.get('beer')
    };
    this.sendAction('newComment', params);
    this.set('makeNewPost', false);
    this.set('name', "");
    this.set('comment', "");
    }
  }
});
