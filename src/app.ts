#!/usr/bin/env node

import minimist from 'minimist';
import Conf from 'conf';
import CliCommands from './commands';
import { setArweaveInstance } from './utils/utils';

const argv = minimist(process.argv.slice(2));
const config = new Conf();
const debug = !!argv.debug;
const arweave = setArweaveInstance(argv, debug);

const cliCommands = new CliCommands();
cliCommands.cliTask({
  argv,
  config,
  debug,
  arweave
}).finally(() => {
  process.exit(0);
});