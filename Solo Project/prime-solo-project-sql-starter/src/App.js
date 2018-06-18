import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import Search from './components/Search/Search';
import FavoritePage from './components/FavoritePage/FavoritePage';
import TrailDetails from './components/TrailDetails/TrailDetails';
import FavoriteDetails from './components/FavoriteDetails/FavoriteDetails';



import './styles/main.css';


const App = () => (
  <div>
    <Header/>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />

        <Route
          path="/search"
          component={Search}
        />

        <Route
          path="/favorite"
          component={FavoritePage}
        />
       
       <Route
          path="/details"
          component={TrailDetails}
        />

        <Route
          path="/favoritedetails"
          component={FavoriteDetails}
        />

        {/* <Route
          path="/favoritedetails"
          component={FavoriteDetails}
        /> */}

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
