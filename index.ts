#!/usr/bin/env node
import { CommanderStatic } from "commander";

const program: CommanderStatic = require('commander');

program
    .version('1.0.0')
    .command('install')
    .parse(process.argv);