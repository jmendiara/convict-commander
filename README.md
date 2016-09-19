## convict-commander

Integrates your [convict](https://github.com/mozilla/node-convict) configuration 
with the [commander.js](https://github.com/tj/commander.js/) command-line tool.
 
As you define your config with an schema, you have defined all the metadata needed 
by the command-line. DRY.

Currently, very basic support is implemented, to solve simple use cases.

```js
var convict = require('convict');
var program = require('commander');
var convictCommander = require('convict-commander');

// Define a schema
var config = convict({
  port: {
    doc: "The port to bind",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port" // --> this is the command-line parameter. 
  }
});

convictCommander(program) // Enable convict-commander 
  .version('0.0.1')
  .convict(config) // Add the metadata
  .parse(process.argv);
```

That's it.
```sh
$> node index.js --help

  Usage: index [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    --port [port]  The port to bind [default: 3000]
                   Environment var: PORT
```

## LICENSE
MIT
  