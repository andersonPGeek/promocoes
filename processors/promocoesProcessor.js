'use strict';

module.exports.executa = function (query, context) {

  var promocoes = context.service('promocoesService'),
    logger = context.logger;

  return function (callback) {

    promocoes.executa(function (error, result) {

      if (error) {
        logger.error(error, null);
        callback(error, null);
      } else {
        logger.info(result);
        callback(null, result);
      }
    });
  };

}