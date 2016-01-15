'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Main } from './main';

// we need the user passed in a parameter
render(
    <Main url='/api/items'/>,
    document.getElementById('example')
);
