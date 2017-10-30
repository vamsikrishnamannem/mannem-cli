#!/usr/bin/env node

var cmd = require('commander');
if (process.argv[0] === '-v') {
    console.log("1.0.0");
    process.exitCode = 0;
    return;
}