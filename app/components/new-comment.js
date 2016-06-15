import Ember from 'ember';

export default Ember.Component.extend({
  makeNewPost: false,
  actions:{
    showPostForm(){
      this.set('makeNewPost', true)
    },
    newPost(){
      var params = {
        name: this.get('name') ? this.get('name') : "",
        comment: this.get('comment') ? this.get('comment') : ""
    };
    this.sendAction('newPost', params);
    this.set('name', "");
    this.set('comment', "");
    }
  }
});
