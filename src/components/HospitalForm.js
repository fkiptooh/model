import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function HospitalForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        onChange={props.onChange}
        name="name"
        value={props.hospital.name}
        error={props.errors.name}
      />

      <div className="form-group">
        <label htmlFor="level">Level</label>
        <div className="field">
          <select
            id="level"
            name="levelId"
            onChange={props.onChange}
            value={props.hospital.levelId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Level 5</option>
            <option value="2">Level 4</option>
          </select>
        </div>
        {props.errors.levelId && (
          <div className="alert alert-danger">{props.errors.levelId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.hospital.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

HospitalForm.propTypes = {
  hospital: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default HospitalForm;
