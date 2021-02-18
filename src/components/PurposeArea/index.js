import React from "react";

import PurposeDelivery from "../../assets/images/purpose_delivery.svg";
import PurposeTriangular from "../../assets/images/purpose_triangular.svg";
import PurposeClipboard from "../../assets/images/purpose_clipboard.svg";

import {
  Container
} from "./styled";

const PurposeArea = () => {
  return (
    <Container>
      <div>
        <img src={PurposeDelivery} alt="Focus" />
        <p>FOCUS</p>
        <p>Our unwavering focus on superior service delivery and building next generation competencies</p>
      </div>
        
      <div>
        <img src={PurposeTriangular} alt="Method" />
        <p>METHOD</p>
        <p>A standardized methodology designed to deliver measurable business results and predictable costs</p>
      </div>

      <div>
        <img src={PurposeClipboard} alt="Knowledge" />
        <p>KNOWLEDGE</p>
        <p>A highly skilled, proactive workforce that reliably improves each client’s ROI while mitigating their business risk</p>
      </div>
    </Container>
  );
};

export default PurposeArea;