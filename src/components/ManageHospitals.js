import React, { useState, useEffect } from "react";
import HospitalForm from "./HospitalForm";
import * as hospitalApi from "../api/hospitalApi";
import { toast } from "react-toastify";

const ManageHospitals = props => {
  const [errors, setErrors] = useState({});
  const [hospital, setHospital] = useState({
    id: null,
    slug: "",
    name: "",
    levelId: null,
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path `/hospitals/:slug`
    if (slug) {
      hospitalApi.getHospitalBySlug(slug).then(_hospital => setHospital(_hospital));
    }
  }, [props.match.params.slug]);

  function handleChange({ target }) {
    setHospital({
      ...hospital,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!hospital.name) _errors.name = "Name is required";
    if (!hospital.levelId) _errors.levelId = "Level ID is required";
    if (!hospital.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    hospitalApi.saveHospital(hospital).then(() => {
      props.history.push("/hospitals");
      toast.success("hospital saved.");
    });
  }

  return (
    <>
      <h2>Manage hospital</h2>
      <HospitalForm
        errors={errors}
        hospital={hospital}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageHospitals;
