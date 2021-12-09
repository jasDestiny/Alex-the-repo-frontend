import React from "react";
import "./service-card.styles.scss";

const request = require("../../utility/utility-functions");

function ServiceCard({ providerName, providerCity, description, location }) {
  const getCrowdStats = async () => {
    
  };


  const joinVQ = async () => {

    const userAuthData = JSON.parse(localStorage.getItem("userAuthData"));

    const result = await request("/users/vq/entervq", {
      userid: userAuthData.userid,
      placename: providerName,
      authtoken: userAuthData.authtoken,
    });

    console.log(result);
    alert(`Your queue position is ${result.position}`);
  };

  return (
    //View VQ stats modal
    <div>
      {/* The card */}
      <div class="card-body service-card">
        <h5 class="card-title">{providerName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          <a
            href={`https://www.google.com/maps/search/${location}/@+${location}17z`}
            target="_blank"
          >
            📍
            {providerCity}
          </a>
        </h6>
        <p class="card-text">{description}</p>
        <button
          className="btn btn-primary card-link"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={getCrowdStats}
        >
          Crowd stats
        </button>
        <button className="btn btn-success card-link" onClick={joinVQ}>
          Join VQ
        </button>
      </div>

      {/* <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ServiceCard;
