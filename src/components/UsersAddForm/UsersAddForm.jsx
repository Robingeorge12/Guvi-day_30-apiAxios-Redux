import React, { useState } from "react";
import "./UsersAddForm.css";

function UsersAddForm({userDetails}) {
  const [userForm, setUserForm] = useState({
    name: "",
    username: "",
    email: "",
    company: {
      name: "",
      bs: "",
    },
    id:Date.now()
  });


  const handleForm = () => {
    // e.preventDefault()
    userDetails(userForm)
// console.log(userForm)
    // const { name, value } = e.target;
    // setUserForm({ ...userForm, [name]: value });
  }

  return (
    <div className="container mb-3 input-container">
      <div className="row input-subdiv">
        <div className="col-sm-12 col-md-6 col-lg-6  gap-1  d-flex mb-2 mt-2">
          <span className="input-group-text " id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            aria-label="Username"
            onChange={(e) => setUserForm((prev)=>{
                return {...prev, name:e.target.value}
            })}
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 d-flex gap-1 mb-2 mt-2">
          <span className="input-group-text  input-username" id="basic-addon1">
            UserName
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            aria-label="Username"
            onChange={(e) => setUserForm((prev)=>{
                return {...prev, username:e.target.value}
            })}
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 d-flex  gap-1 mb-2 mt-2">
          <span
            className="input-group-text d-flex align-items-center justify-content-center"
            id="basic-addon1"
          >
            Email
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            aria-label="Username"
            onChange={(e) => setUserForm((prev)=>{
                return {...prev, email:e.target.value}
            })}
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 d-flex  gap-1 mb-2 mt-2">
          <span className="input-group-text" id="basic-addon1">
            Company Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Company name"
            aria-label="Username"
            onChange={(e) => setUserForm((prev)=>{

              return {...prev,company:{...prev.company,name:e.target.value}}

            })}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex gap-1 mb-2 mt-2">
          <span className="input-group-text" id="basic-addon1">
            Role
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Role"
            aria-label="Username"
            onChange={(e) => setUserForm((prev)=>{

                return {...prev,company:{...prev.company,bs:e.target.value}}
  
              })}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-2 mt-2">
          <input
            type="submit"
            className="form-control fw-600 btn bg-warning"
            onClick={handleForm}
          />
          {/* <button className="btn btn-primary">Add</button> */}
        </div>
      </div>
    </div>
  );
}

export default UsersAddForm;
