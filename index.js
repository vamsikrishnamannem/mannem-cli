#!/usr/bin/env node

var cmd = require('commander');
var exec = require('child_process').exec;
cmd.version("1.0.0")
    .arguments('<cmd>')
    .parse(process.argv);
if (typeof task === 'undefined') {
    console.log("Missing argument");
    // process.exit(1);
}
// console.log('Running ' + task);
// let command = "npm" + " " + "run" + " " + task;
// console.log(command);

// exec(command);
exec('node -v', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});