import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../api/bootapi";
import "../css/view.css";
import ImageUploader from "./image-upload.component";
//import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
const Viewcard = ({ request }) => {
  const [load, setLoad] = useState(false);
  const setID = () => {
    sessionStorage.setItem("reqid", request.reqid);
  };
  const checkimageuploadstatus = () => {
    axios.get(`${base_url}/imageuploadstatus/${request.reqid}`).then(
      (answer) => {
        console.log(answer);
        console.log(typeof answer + "REsponse");
        console.log(typeof answer.data + "type of Response");
        if (answer.data == true) {
          setLoad(true);

          console.log("LOAD" + load);
        }
      },
      (error) => {
        console.log("error");
      }
    );
  };
  const deleteReq = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest();
          swal
            .fire("Deleted!", "Your file has been deleted.", "success")
            .then(function () {
              window.location = "/view";
            });
        }
      });
  };

  const deleteRequest = () => {
    axios.delete(`${base_url}/requests/${request.reqid}`).then(
      (response) => {
        //console.log(response);
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };

  return (
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="container mar">
        <div
          class="card mb-4  viewcard_bg"
          style={{ width: "20rem", height: "25rem" }}
        >
          <div class="card-header text-left">
            <h4>Request Id:&nbsp;{request.reqid}</h4>
          </div>
          <div class="card-body text-justify">
            <table>
              <tr>
                <td>
                  <h5>
                    <u>Name</u>
                  </h5>
                </td>
                <td>
                  <h5>: {request.name}</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <u>Email</u>
                  </h5>
                </td>
                <td>
                  <h5>: {request.email} </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <u>Address</u>
                  </h5>
                </td>
                <td>
                  <h5>: {request.address} </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <u>Qty</u>
                  </h5>
                </td>
                <td>
                  <h5>: {request.quantity} </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <u>Item</u>
                  </h5>
                </td>
                <td>
                  <h5>: {request.ewasteQty} </h5>
                </td>
              </tr>
            </table>
            <div class="row">
              <div class="col-lg-6 text-right">
                <Link
                  class="btn btn-lg btn-primary"
                  to="/update"
                  onClick={setID}
                >
                  {" "}
                  Update{" "}
                </Link>
              </div>
              <div class="col-lg-6 text-left">
                <form>
                  <button
                    type="button"
                    class="btn btn-lg btn-primary"
                    onClick={deleteReq}
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
            <div class="row">
              {checkimageuploadstatus()}
              {load ? (
                "Image already uploaded"
              ) : (
                <ImageUploader reqdetails={request} />
              )}
            </div>
            <div class="card-footer text-muted text-center">
              <p>Collection is pending, we will contact you soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewcard;
