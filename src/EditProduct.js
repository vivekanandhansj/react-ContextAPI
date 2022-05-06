import React from 'react'
import { useFormik } from 'formik';

function UserEdit() {
    let formik = useFormik({
        initialValues: {
          name: "",
          price: 0,
          category: "",
          offer: 0,
          
          model: ""
        },
        onSubmit: values => {
        alert("Product submited")
        },
      });
    


  return (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Add Product</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <label>Name</label>
              <input
                type={"text"}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <label>Price</label>
              <input
                type={"number"}
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <label>Category</label>
              <input
                type={"text"}
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <label>Offer</label>
              <input
                type={"number"}
                name="offer"
                onChange={formik.handleChange}
                value={formik.values.offer}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <label>Model</label>
              <input
                type={"text"}
                name="model"
                onChange={formik.handleChange}
                value={formik.values.model}
                className="form-control"
              />
            </div>
     
            <div className="col mt-3">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}



export default UserEdit