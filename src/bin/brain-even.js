#!/usr/bin/env node
import * as even from '../games/even';
import {braingame} from '..';

console.log('Welcome to the Brain Games!');
console.log(braingame(even.welcomeEven, even.getNumEven(), even.checkNumEven(), even.correcEven()));
