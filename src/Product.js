import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Product() {
  const userContext = useContext(UserContext);


  return (
    <>
      {" "}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to={"/add-product"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Add Product
        </Link>
      </div>
      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Offer</th>
                  <th>Model</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Offer</th>
                  <th>Model</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {userContext.product.map((product,index) => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>Rs {product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.offer}%</td>
                      <td>{product.model}</td>

                      <td>
                        <Link
                          to={`/product-view/${index}`}
                          className="btn btn-secondary btn-sm"
                        >
                          View
                        </Link>{" "}
                        <Link
                          to={`/product-edit/${index}`}
                          className="btn btn-primary btn-sm"
                        >
                          {" "}
                          Edit
                        </Link>{" "}
                        <button className="btn btn-danger btn-sm">
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
