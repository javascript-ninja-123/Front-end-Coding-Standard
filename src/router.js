import React, {PropTypes} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import Asset from './containers/asset/asset';

 class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Asset}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
