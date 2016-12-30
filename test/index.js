'use strict';

var convict = require('convict');
var program = require('commander');
var convictCommander = require('../lib/');

convictCommander(program);

// Define a schema
var config = convict({
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port" // --> this is the command-line parameter.
  }
});

program
    .version('0.0.1')
    .convict(config) // Add the metadata
    .parse(process.argv);
