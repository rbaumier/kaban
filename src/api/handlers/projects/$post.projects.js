'use strict';

module.exports = (domains, codes) => {
  return function $post(request, reply) {
    reply('YOLO');
    // domains.Users.create(request.payload)
    //   .then(() => {
    //     reply().code(codes.created);
    //   })
    //   .otherwise(err => reply(err).code(err.code || codes.internalError));
  }
};
