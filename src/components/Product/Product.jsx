import React, { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserData,
  editUserData,
  getAllUsers,
  postNewUser,
} from "../../Redux/actions";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UsersAddForm from "../UsersAddForm/UsersAddForm";

function Product() {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState();

  const { users, isLoading, isError, fetch } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(getAllUsers());
  }, [fetch]);

  const userDetails = (value) => {
    console.log(value);
    dispatch(postNewUser(value));
  };

  const handleEdit = (edit) => {
    console.log(edit);
    setModalEdit(edit);
  };
  const handleUpdate = (value) => {
    console.log(value);

    dispatch(editUserData({ value }));
  };

  const handleDelete = (id) => {

    dispatch(deleteUserData(id));
  };

  if (isLoading) {
    return (
      <div className="d-flex text-info justify-content-center align-items-center spinner-position">
        <div className="spinner-border color-info" text-info="true" role="status">
          <span className="visually-hidden text-info">Loading...</span>
        </div>
      </div>
    );
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  // console.log(users);
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center Todocontainer">
      <UsersAddForm userDetails={userDetails} />
      <hr style={{ width: "100%", marginTop: "0px", marginBottom: "24px" }} />
      <div className="container d-flex flex-column bg-subtle py-4 TodoSubDiv">
        <div className="row d-flex align-items-center justify-content-between">
          {users?.map((el, i) => {
        
            return (
              <div key={i} className="col-sm-12 mt-3 col-md-6 col-lg-4 ">
                <div
                  className="card d-flex text-start flex-column justify-content-start cardDiv"
                  style={{ "--bs-bg-opacity": 0.5 }}
                >
                  <p className="title ml-2 text-info">
                    Name :<span className="px-2"></span>
                    <span className="text-white fw-bold">{el.name}</span>
                  </p>
                  <p className="title pt-2 d-flex text-info overflow-auto todo-desc">
                    Description :<span className="px-2"></span>
                    <span className="text-warning">{el.username}</span>
                  </p>

                  <p className="title pt-2 text-info d-flex overflow-auto todo-desc">
                    Company :<span className="px-2"></span>
                    <span className="text-warning">{el.company.name}</span>
                  </p>

                  <div className="py-3 text-info pt-2 d-flex sel">
                    <label htmlFor="">
                      Role : <span className="px-2"></span>
                    </label>
                    <p className="text-warning d-flex text-align-left bsP-tag">
                      {el.company.bs}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-end mr-3 gap-2 py-3 but">
                    {/* <button onClick={() =>handleEdit(el)} className="btn btn-success edit">Edit</button> */}
                    {/* modal */}
                    <div>
                      {" "}
                      <button
                        onClick={() => handleEdit(el)}
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                        style={{ width: "71px" }}
                      >
                        Edit
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                USER'S UPDATION
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label
                                    htmlFor="recipient-name"
                                    className="col-form-label text-success fw-bold"
                                  >
                                    Name:
                                  </label>
                                  <input
                                    type="text"
                                    value={modalEdit ? modalEdit.name : ""}
                                    onChange={(e) =>
                                      setModalEdit((prev) => {
                                        return {
                                          ...prev,
                                          name: e.target.value,
                                        };
                                      })
                                    }
                                    // onChange={(e) =>
                                    //   setEdit({
                                    //     ...edit,
                                    //     taskName: e.target.value,
                                    //   })
                                    // }
                                    className="form-control recipient-name"
                                    // id="recipient-name"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label text-success fw-bold"
                                  >
                                    UserName:
                                  </label>
                                  <textarea
                                    className="form-control message-text"
                                    value={modalEdit ? modalEdit.username : ""}
                                    onChange={(e) =>
                                      setModalEdit((prev) => {
                                        return {
                                          ...prev,
                                          username: e.target.value,
                                        };
                                      })
                                    }
                                    // id="message-text"
                                  ></textarea>
                                </div>

                                <label
                                  htmlFor="message-text"
                                  className="col-form-label text-danger fw-bold"
                                >
                                  Role:
                                </label>
                                <div className="mb-3 form-floating">
                                  <input
                                    type="text"
                                    value={
                                      modalEdit ? modalEdit.company.bs : ""
                                    }
                                    onChange={(e) =>
                                      setModalEdit((prev) => {
                                        // return {...prev,comapny:{...}}
                                        return {
                                          ...prev,
                                          company: {
                                            ...prev.company,
                                            bs: e.target.value,
                                          },
                                        };
                                      })
                                    }
                                  />

                                  {/* <option value="Not Completed">Not Completed</option> */}
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                onClick={() => handleUpdate(modalEdit)}
                                data-bs-dismiss="modal"
                                className="btn btn-primary"
                              >
                                Updated
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* modal */}
                    <button
                      onClick={() => handleDelete(el.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex"></div>
      </div>
    </div>
  );
}

export default Product;
