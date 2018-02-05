import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>
);