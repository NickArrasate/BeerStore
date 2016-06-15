import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  brand: attr(),
  price: attr(),
  sold: attr(),
  image: attr(),
  notes: attr(),
  type: attr()
});
