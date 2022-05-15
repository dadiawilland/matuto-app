import React, { useState, useMemo, useContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Home from './containers/Home/Home';
import OnBoarding from './containers/OnBoarding/OnBoarding';
import Header from './components/Header/Header';
import Admin from './containers/Admin/Admin';
import colors from './helpers/colors';
import Top from './containers/Top/Top';
import { useAuth } from './providers/CreateAuthProvider';

const queryClient = new QueryClient();

const App = () => {
  const [logged] = useAuth();

  // const location = useLocation().pathname

  return (
    <div style={styles().bodyContainer} className="App">
      <BrowserRouter>
        <div>
          <Route
            render={({ location }) => {
              return location.pathname.indexOf('/admin') === -1 ? (
                <Header />
              ) : null;
            }}
          />
        </div>

        <QueryClientProvider client={queryClient}>
          <Switch>
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route
                path={[
                  '/login',
                  '/register',
                  '/payment-info',
                  '/step1',
                  '/step2',
                  '/step3'
                ]}
              >
                <OnBoarding />
              </Route>
            </>
            {logged && (
              <>
                <Route
                  path={[
                    '/admin',
                    '/admin-student',
                    '/admin-career',
                    '/admin-recruitment',
                    '/admin-partner'
                  ]}
                >
                  <Admin />
                </Route>
                <Route
                  path={[
                    '/home',
                    '/pricing',
                    '/payment',
                    '/home-subscribed',
                    '/lesson'
                  ]}
                >
                  <Top />
                </Route>
              </>
            )}
          </Switch>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const styles = () => ({
  bodyContainer: {
    padding: 0,
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    minHeight: '100vh'
  }
});

export default App;
