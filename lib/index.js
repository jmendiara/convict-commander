'use strict';

module.exports = function(commander) {

  commander.convict = function conv(convict) {
    //TODO: need to access private definitions in convict, cause conf.toSchemaString()
    //      does not give all needed
    Object.keys(convict._def).forEach(function (paramName) {
      //TODO: will convict support short options?
      var param = convict._def[paramName];

      if (!param.arg) {
        return;
      }
      var def = '--' + param.arg + (param.format !== Boolean ?
          ' <' + paramName + '>' :
              '');
      var doc = param.doc + (param.default == null ? ' (mandatory)' : ' [default: ' + param.default + ']');

      commander.option(def, doc);

      if (typeof convict._def[paramName].env !== 'undefined') {
        commander.option('', 'Environment var: ' + convict._def[paramName].env);
      }
    });

    return this;
  };
  return commander;
};
