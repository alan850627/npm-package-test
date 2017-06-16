#! /usr/bin/env node

const commander = require('commander');

const add = require('./lib/commands/add')();
const multiply = require('./lib/commands/multiply')();
const average = require('./lib/commands/average')();

commander
  .command(`add [numbers...]`)
  .description(`Adds the numbers`)
  .action(add);

commander
  .command(`mul [numbers...]`)
  .description(`multiply the numbers`)
  .action(multiply);

commander
  .command(`avg [numbers...]`)
  .description(`calculates the average`)
  .action(average);

commander.parse(process.argv);

if (noArgs()) {
  commander.help();
}

function noArgs() {
  return !process.argv.slice(2).length;
}
