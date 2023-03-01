// export default UpdateAgent;
import React, { useEffect, useState } from "react";
import "../css/register.css";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import base_url from "../api/bootapi";
import axios from "axios";

function UpdateAgent() {
  useEffect(() => {
    document.title = "Update Agent";
  }, []);

  let [uname, setUname] = useState("");
  let [uphone, setUphone] = useState("");
  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");
  let userdata = JSON.parse(sessionStorage.getItem("userdata"));

  let unameinp = (e) => setUname(e.target.value);
  let uphoneinp = (e) => setUphone(e.target.value);
  let uemailinp = (e) => setUemail(e.target.value);
  let upasswordinp = (e) => setUpassword(e.target.value);

  let agent = {
    id: userdata.id,
    name: uname,
    phone: uphone,
    email: uemail,
    password: upassword,
  };

  //Register data
  const updateAgent = (agent) => {
    axios.put(`${base_url}/agent/${agent.id}`, agent).then(
      (response) => {
        swal
          .fire({
            icon: "success",
            title: "Success",
            text: "Details updated",
          })
          .then(function () {
            sessionStorage.setItem("userdata", JSON.stringify(agent));
            window.location = "/Agentprofile";
          });
        clearFields();
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Enter Correct Details",
        });
      }
    );
  };

  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [phone, setPhone] = useState();
  let [password, setPassword] = useState();

  function clearErrors() {
    document.getElementById("name").classList.remove("is-invalid");
    setName("");

    document.getElementById("phone").classList.remove("is-invalid");
    setPhone("");

    document.getElementById("email").classList.remove("is-invalid");
    setEmail("");

    document.getElementById("password").classList.remove("is-invalid");
    setPassword("");
  }

  function clearFields() {
    setUname("");
    setUphone("");
    setUemail("");
    setUpassword("");
  }

  let validate = () => {
    if (
      uname.trim() === "" ||
      uphone.trim() === "" ||
      uemail.trim() === "" ||
      upassword.trim() === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      uname.search(/^[a-zA-Z ]*$/) < 0 ||
      uname.length < 3 ||
      uname.length > 40
    ) {
      document.getElementById("name").classList.add("is-invalid");
      setName(
        "Please enter valid name having length of minimum 3 and maximum 30"
      );
    } else if (uphone === "" || uphone.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("phone").classList.add("is-invalid");
      setPhone("Enter valid Mobile Number");
    } else if (
      uemail === "" ||
      uemail.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setEmail("Enter valid Email ID");
    } else if (
      upassword === "" ||
      upassword.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      upassword.length < 6
    ) {
      document.getElementById("password").classList.add("is-invalid");
      setPassword(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else {
      updateAgent(agent);
    }
  };

  return (
    <div>
      <div className="vh-100 d-flex reg">
        <div className="m-auto w-25 pt-2 ps-5 pe-5 pb-3  align-self-center text-white reg-form">
          <h1 className="text-center display-6">Update Profile</h1>

          <form className="row g-3 mt-1">
            <div className="col-md-12">
              <label for="name" className="form-label fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder={userdata.name}
                onChange={unameinp}
                onFocus={clearErrors}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{name}</div>
            </div>

            <div className="col-md-12">
              <label for="phone" className="form-label fs-5">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder={userdata.phone}
                onChange={uphoneinp}
                onFocus={clearErrors}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{phone}</div>
            </div>
            <div className="col-md-12">
              <label for="email" className="form-label fs-5">
                Email-ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder={userdata.email}
                onChange={uemailinp}
                onFocus={clearErrors}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{email}</div>
            </div>
            <div className="col-md-12">
              <label for="password" className="form-label fs-5">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={upasswordinp}
                onFocus={clearErrors}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{password}</div>
            </div>
            <div class="row pt-3 text-center">
              <div className="col-md-6 text-center">
                <input
                  type="button"
                  className="btn btn-lg btn-primary"
                  value="Update"
                  onClick={validate}
                />
              </div>
              <div className="col-md-6 text-center">
                <Link to="/agentprofile" className="btn btn-lg btn-primary">
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateAgent;
