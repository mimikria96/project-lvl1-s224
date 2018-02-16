#!/usr/bin/env node
import * as gcd from '../games/gcd';
import braingame from '..';

braingame(gcd.welcomeGcd, gcd.getNumGcd(), gcd.correctGcd());
