import Ember from 'ember';

export function starRating(params/*, hash*/) {
  var rating = params[0];
  return params;
}

export default Ember.Helper.helper(starRating);
