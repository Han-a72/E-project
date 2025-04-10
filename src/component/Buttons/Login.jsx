import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content   p-4">
            <div className="modal-header">
              <h3 className="modal-title" id="loginModalLabel">
                Login
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-200 h-200 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>

              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label ">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="email"
                    placeholder="Enter email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label ">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-light"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3 form-check m-4 ">
                  <input
                    type="checkbox"
                    className="form-check-input p-2 "
                    id="rememberMe"
                  />
                  <label className="form-check-label " htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
