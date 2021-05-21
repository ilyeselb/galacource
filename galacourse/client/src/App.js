import React from "react";
import LandingPage from "./components/landingPage";
import MainNav from "./components/headers/MainNav";
import Footer from "./components/footer";
import {Switch,Route} from "react-router-dom"
import CoursePage from "./components/landingPage/coursePage/coursePage";
const App = () => {
  return (
   
    <div >
      <MainNav />
      <hr />
      <div >
      <Switch>
    <Route exact path="/video/:title" component={CoursePage} />
    <Route exact path="/" component={LandingPage} />
</Switch>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
