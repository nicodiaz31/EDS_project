import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponent from "./components/Footer";
import HomeComponent from "./components/Home";
import HeaderComponent from "./components/Header";
import CatContainer from "./containers/Cat";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalProvider from "./context/Global";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route exact path="/:category">
              <CatContainer/>
            </Route>
          </Switch>
          <FooterComponent />
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
