import React from "react";
import LandingPage from "./components/landingPage";
import MainNav from "./components/headers/MainNav";
import Footer from "./components/footer";
import {Switch,Route} from "react-router-dom"
import CoursePage from "./components/landingPage/coursePage/coursePage";
const App = () => {
  return (
    <Switch>

    <div >
      <MainNav />
      <hr />
      <div >
    <Route exact path="/video/:title" component={CoursePage} />
    <Route exact path="/" component={LandingPage} />
      </div>
      <hr />
      <Footer />
    </div>
    </Switch>

  )
};

export default App;
