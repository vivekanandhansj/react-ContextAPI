import React from "react";
import {  useFormik } from "formik";

function UserEdit() {
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      startdate: "",
      salary: 0,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "plz enter your name";
      }
      if (!values.age|| values.age < 18) {
        errors.age = "Age is required and should be greater than 18";
      }

      return errors;
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">User Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type={"text"}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="form-control"
                style={{border: formik.errors.name ? "1px solid red":" "  }}
              /><span style={{color:"red "}}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type={"text"}
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
                className="form-control"
              
              />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type={"text"}
                name="office"
                onChange={formik.handleChange}
                value={formik.values.office}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type={"number"}
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
                className="form-control"
                style={{border: formik.errors.age ? "1px solid red":" "  }}
              /><span style={{color:"red "}}>{formik.errors.age}</span>
            </div>
            <div className="col-lg-6">
              <label>Start date</label>
              <input
                type={"date"}
                name="startdate"
                onChange={formik.handleChange}
                value={formik.values.startdate}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type={"number"}
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
                className="form-control"
              />
            </div>
            <div className="col-lg-6 mt-3">
              <input disabled={Object.keys(formik.errors).length !== 0} type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </form>
        {/* <pre>{JSON.stringify(formik.errors)}</pre> */}
      </div>
    </>
  );
}

export default UserEdit;
