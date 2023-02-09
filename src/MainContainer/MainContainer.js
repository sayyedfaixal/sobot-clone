import { Button } from "react-bootstrap";
import React from "react";
import "./MainContainer.css";
function MainContainer() {
  return (
    <div className="mainContainer">
      <h6>
        <span className="whatsappChatbotBlue">Whatsapp Chatbot</span>
      </h6>
      <h2 className="mainContainertext">Grow your</h2>
      <br />
      <h2 className="mainContainertext">Business with</h2>
      <br />
      <h2 className="mainContainertext">Power of</h2>
      <br />
      <h2 className="mainContainertext">WhatsApp</h2>
      <br />
      <h6>Official WhatsApp Business API Provider. Ready to deploy Chatbots</h6>
      <Button id="getEarlyAccessButton" className="rounded-pill">
        Get early access
      </Button>
    </div>
  );
}

export default MainContainer;
