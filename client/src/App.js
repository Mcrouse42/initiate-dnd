import React from 'react';

// Apollo provider required files
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import MonsterSearch from './pages/MonsterSearch';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import BattlePrep from './pages/BattlePrep';
import GenerateNPC from './pages/GenerateNPC';

// import Home from './pages/Home';

// establish connection to the back end
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path ="/" component={MonsterSearch} />
              <Route exact path ="/login" component={Login} />
              <Route exact path ="/signup" component={Signup} />
              <Route exact path="/profile/:dungeonMaster?" component={Profile} />
              <Route exact path="/battleprep" component={BattlePrep}/>
              <Route exact path="/generatenpc" component={GenerateNPC}/>

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
