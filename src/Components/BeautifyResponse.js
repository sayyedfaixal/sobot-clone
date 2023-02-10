import React from "react";
import "./BeautifyResponse.css";
function BeautifyResponse(props) {
  return (
    <div>
      <span className="idResponse">
        <li key={props.id}>{props.title}</li>
      </span>
    </div>
  );
}

export default BeautifyResponse;
