import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isEmpty } from './utils/LangUtils';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import BeerPage from './components/BeerPage/BeerPage';
import BreweryPage from './components/BreweryPage/BreweryPage';
import FetchBreweryPage from './components/FetchBreweryPage/FetchBreweryPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Signup from './components/Signup/Signup';
import LoginPageContainer from './redux/containers/LoginPageContainer';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { fetchBeers } from './redux/actions/beers';
import { fetchBreweries } from './redux/actions/breweries';
import { fetchBrewery } from './redux/actions/fetchBrewery';
import { getAuth } from './redux/actions/auth_actions';
import auth_actions from './redux/actions/auth_actions';

import setupStore from './redux/store';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const store = setupStore();

store.dispatch(fetchBeers());
store.dispatch(getAuth());
store.dispatch(fetchBreweries());
// store.dispatch(fetchBrewery());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={() => <Redirect to="/cheers" />} />
            <Route exact path="/login" component={LoginPageContainer} />
            <Route path="/cheers" render={props => <Main />} />
            <Route path="/beers" render={props => <BeerPage />} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={ProfilePage} />
            <Route exact path="/breweries" component={BreweryPage} />
            <Route
              exact
              path="/breweries/:id"
              render={props => <FetchBreweryPage />}
            />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapDispatchToProps = () => {
  return { auth: auth_actions.getAuth() };
};

connect(mapDispatchToProps)(App);
