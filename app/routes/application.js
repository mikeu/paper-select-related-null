import Ember from 'ember';

const { get, Route } = Ember;
const { service } = Ember.inject;
const { hash } = Ember.RSVP;

export default Route.extend({

  store: service(),

  model () {
    const store = get(this, 'store');
    // Create a new Post, with no prior associations.
    const post = store.createRecord('post');
    // Mock a couple of authors and categories.
    const authors = [
      store.createRecord('author', { id: 1, name: 'Alice' }),
      store.createRecord('author', { id: 2, name: 'Bob' }),
    ];
    const categories = [
      store.createRecord('category', { id: 1, name: 'boring' }),
      store.createRecord('category', { id: 2, name: 'interesting' }),
    ]

    return hash({
      post,
      authors,
      categories,
    });
  },

});
