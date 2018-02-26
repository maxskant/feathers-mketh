// Initializes the `blockchain-info` service on path `/blockchain-info`
const createService = require('feathers-nedb');
const createModel = require('../../models/blockchain-info.model');
const hooks = require('./blockchain-info.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'blockchain-info',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/blockchain-info', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('blockchain-info');

  service.hooks(hooks);
};
