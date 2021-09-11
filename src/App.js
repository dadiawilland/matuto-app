import React from "react";
import {QueryClient, QueryClientProvider} from 'react-query'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./containers/Home/Home"
import OnBoarding from "./containers/OnBoarding/OnBoarding"
import Header from "./components/Header/Header";
import colors from "./helpers/colors"
import Top from "./containers/Top/Top"
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
            <Route exact path='/home'>
              <Top/>
            </Route>
            <Route path={["/login", "/register", "/payment"]}>
              <OnBoarding/>
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
