import React from 'react';
import Header from './header/Header';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Study from '../views/Study';
import Me from '../views/Me';
import Life from '../views/Life';
export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout-container'>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route path='/type/tech' component={Study} name='学无止境' />
              <Route path='/type/life' component={Life} />
              <Route path='/me' component={Me} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
