import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Route, Switch, withRouter } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import Menu from 'components/Menu';

import Loadable from 'react-loadable';
import Loading from 'components/Utils/Loading';

import { getAppData } from 'actions/app';

const Dashboard = Loadable({ loader: () => import('views/Dashboard'), loading: Loading });
const NotFound = Loadable({ loader: () => import('views/NotFound'), loading: Loading });

class App extends PureComponent {
  static propTypes = {
    getAppData: PropTypes.func,
    message: PropTypes.string,
  };

  componentDidMount() {
    this.props.getAppData();
  }

  render() {
    return (
      <div className='App'>
        <Menu />
        <div className='Page'>
          <Switch>
            <Route exact path={routeCodes.DASHBOARD} component={Dashboard} />
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

const mapDispatchToProps = dispatch => ({
  getAppData: () => dispatch(getAppData()),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
