import React from "react";
import {QueryClient, QueryClientProvider} from 'react-query'
import {NavLink, BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./containers/Home/Home"
import SignIn from "./containers/SignIn/SignIn"
import Header from "./components/Header/Header";
import colors from "./helpers/colors"
import Radium from 'radium'
const queryClient = new QueryClient()


const App = () => {
  return (
    <div style={styles().bodyContainer} className="App">
      <BrowserRouter>
        <div>
          <Header/>
        </div>

        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/signIn'>
              <SignIn/>
            </Route>
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
    minHeight: 1080
  }
})


export default App;
