import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newBeer(){
      var params = {
        name: this.get('name') ? this.get('name') : "",
        brand: this.get('brand') ? this.get('brand') : "",
        price: this.get('price') ? this.get('price') : "",
        image: this.get('image') ? this.get('image') : "",
        sold: false,
        notes: this.get('notes') ? this.get('notes') : "",
        type: this.get('type')
      };
      this.sendAction('newBeer', params);
      console.log(params);
      this.set('name', "");
      this.set('brand', "");
      this.set('price', "");
      this.set('image', "");
      this.set('notes', "");
    }
  }
});
