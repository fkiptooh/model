import React from "react";
import { Link } from 'react-router-dom'

function HomePage(){
    return(
        <div className="jumbotron">
            <h1>Hospital Suitability Evaluation Model</h1>
            <p>A web based GIS to investigate the suitability of the Hospital within Muranga County</p>
            <Link to="/about" className="btn btn-primary">About</Link>
        </div>
    );
}

export default HomePage;