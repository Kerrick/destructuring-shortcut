import Ember from 'ember';

const { get, computed } = Ember;
// The following works, the above does not.
// const { get: get, computed } = Ember;

export default Ember.Controller.extend({
  foo: computed('bar', function() {
    return [].indexOf(get(this, 'bar'));
  })
});
