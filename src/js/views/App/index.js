import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Route, Switch, withRouter } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import Menu from 'components/Menu';

import Loadable from 'react-loadable';
import Loading from 'components/Utils/Loading';

const Dashboard = Loadable({ loader: () => import('views/Dashboard'), loading: Loading });
const About = Loadable({ loader: () => import('views/About'), loading: Loading });
const NotFound = Loadable({ loader: () => import('views/NotFound'), loading: Loading });

class App extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return (
      <div className='App'>
        <Menu />
        <div className='Page'>
          { this.props.message }
          <Switch>
            <Route exact path={routeCodes.DASHBOARD} component={Dashboard} />
            <Route path={routeCodes.ABOUT} component={About} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  message: state.app.get('message'),
});

export default withRouter(connect(mapStateToProps, null)(App));
