import Ember from 'ember';

const { reads } = Ember.computed;

export default Ember.Controller.extend({

  post: reads('model.post'),

  authors: reads('model.authors'),

  categories: reads('model.categories'),

});
