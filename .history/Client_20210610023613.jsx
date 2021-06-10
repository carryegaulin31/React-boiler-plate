import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


render(
  render(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={ColorsPage} />
    <Route path="*" component={ErrorPage} />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root'),
)
