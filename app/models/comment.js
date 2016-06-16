import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  comment: attr(),
  rating: attr(),
  beer: belongsTo('beer',{async:true})
});
