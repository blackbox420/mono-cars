import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StoresProvider } from "./common/AppContext";
import Layout from "./layouts/Layout";
import CarDetailsPage from "./pages/CarDetailsPage";
import EditCarPage from "./pages/EditCarPage";
import HomePage from "./pages/HomePage";
import NewCarPage from "./pages/NewCarPage";

const App = () => {
  return (
    <StoresProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cars" exact component={HomePage} />
            <Route path="/cars/add" exact component={NewCarPage} />
            <Route path="/cars/:key" exact component={CarDetailsPage} />
            <Route path="/cars/:key/edit" exact component={EditCarPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </StoresProvider>
  );
};

export default App;
