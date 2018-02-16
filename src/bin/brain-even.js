#!/usr/bin/env node
import * as even from '../games/even';
import braingame from '..';

braingame(even.welcomeEven, even.getNumEven(), even.correcEven());
