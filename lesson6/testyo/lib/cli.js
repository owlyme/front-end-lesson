#!/usr/bin/env node
'use strict';
const meow = require('meow');
const myYoTest = require('./');

const cli = meow(`
Usage
  $ my-yo-test [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ my-yo-test
  unicorns
  $ my-yo-test rainbows
  unicorns & rainbows
`);
