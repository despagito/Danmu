import React from 'react'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from 'components/App'

let routes =
  <Router
    history={createHistory()}
  >
    <Route
      path="/"
      component={App}
    />
  </Router>

// only needs ReactDOM when final render
ReactDOM.render(routes, document.getElementById(`root`))


/*

if (module.hot) {
  module.hot.accept('components/App', () => {
    const NextRootContainer = require('components/App').default;
    render(NextRootContainer);
  });
}
*/

// open ES2015 in babel, then you don't have to re-require app root in module.hot.accept.
if (module.hot) {
  module.hot.accept('components/App', () => {
    render(App);
  });
}
