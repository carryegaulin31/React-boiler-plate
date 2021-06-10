import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


render(
  render(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/nsn" component={PartsPage}
    <Route path="*" component={ErrorPage} />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root'),
)
