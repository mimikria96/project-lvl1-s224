#!/usr/bin/env node
import * as calc from '../games/calc';
import braingame from '..';

braingame(calc.welcomeCalc, calc.getNumCalc(), calc.correcCalc());
