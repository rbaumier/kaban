'use strict';

module.exports = (models) => ({
  $get: require('./$get.project')(models),
  sprints: require('./sprints')(models),
  $put(request, reply){
  	model.project.findById(request.params.project_id)
  	.then(project => project.updateAttribute(request.payload)
  		.then(project => reply(project))
  		).catch(err => reply(Boom.wrap(err)));
  }
});
