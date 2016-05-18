'use strict';

module.exports = (models) => ({
  $get: require('./$get.project')(models),
  sprints: require('./sprints')(models),
  $put(request, reply){
  	models.project.findById(request.params.project_id)
  	.then(project => project.updateAttributes(request.payload)
  		.then(project => reply(project))
  	).catch(err => {
  		console.log(err)
  		reply(Boom.wrap(err))
  	});
  }
});
