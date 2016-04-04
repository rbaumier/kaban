'use strict';

module.exports = (domains, codes) => {
  return function $post(request, reply) {
    reply('TODO');
    // domains.Quotes.create(request.payload.content, request.user.id)
    //   .then(() => reply().code(codes.created))
    //   .otherwise(err => reply(err).code(err.code || codes.internalError));
  }
};
