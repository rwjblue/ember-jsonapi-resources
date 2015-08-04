/**
  @module ember-jsonapi-resources
  @submodule store
**/

import StoreService from 'ember-jsonapi-resources/services/store';

/**
  Initializer for the store service, injects into the route and controller

  @method initialize
  @requires StoreService
*/
export function initialize(container, application) {
  const store = 'service:store';

  application.inject('route', 'store', store);
  application.inject('controller', 'store', store);
}

export default {
  name: 'store',
  initialize: initialize
};
