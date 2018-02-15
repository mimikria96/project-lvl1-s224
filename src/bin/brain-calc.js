#!/usr/bin/env node
import * as calc from '../games/calc';
import {braingame} from '..';

console.log('Welcome to the Brain Games!');
console.log(braingame(calc.welcomeCalc, calc.getNumCalc(), calc.checkNumCalc(), calc.correcCalc()));
