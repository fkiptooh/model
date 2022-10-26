import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import HospitalPage from "./HospitalPage";
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from "./NotFoundPage";
import ManageHospitals from "./ManageHospitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
    return(
    <div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Header />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/hospitals" component={HospitalPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/hospital/:slug" component={ManageHospitals} />
            <Route path="/hospital" component={ManageHospitals} />
            <Redirect from="/about-page" to="about" />
            <Route component={NotFoundPage} />
        </Switch>
    </div>);
}

export default App;