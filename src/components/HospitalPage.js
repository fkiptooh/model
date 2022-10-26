import React,{useEffect, useState} from "react";
import { getHospitals } from "../api/hospitalApi";
import HospitalList from "./HospitalList";
import { Link } from 'react-router-dom';

function HospitalPage(){
    const [hospitals, setHospitals] = useState([]);

    useEffect( () => {
        getHospitals().then(_hospitals => setHospitals(_hospitals));
    }, []);

    return (
        <>
        <h1>Hospital Page</h1>
        <Link className="btn btn-primary" to="/hospital" >Add Hospital</Link> <br></br>
        <HospitalList hospitals={hospitals}/>
        </>
        );
    }
export default HospitalPage;