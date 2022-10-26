import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function HospitalList(props){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Level ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
               {props.hospitals.map(hospital => {
                return(
                    <tr key={hospital.id}>
                        <td><Link to={"/hospital/" + hospital.slug }>{hospital.name} </Link></td>
                        <td>{hospital.levelId}</td>
                        <td>{hospital.category}</td>
                    </tr>
                );
               })}
            </tbody>
        </table>
    );
}
HospitalList.propTypes = {
    hospitals: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        levelId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    })).isRequired
}

export default HospitalList;