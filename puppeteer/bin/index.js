#!/usr/bin/env node
const { program } = require('commander');
const md2png = require('..')

program.version('0.0.1');
program
 .option('-p, --path <path>', 'output extra debugging')
 .parse(process.argv);
md2png(program.opts())

