#!/usr/bin/env node

var program = require('commander');
program.arguments('script');
if (args[0] === '-v') {
    console.log("1.0.0");
    process.exitCode = 0;
    return;
}