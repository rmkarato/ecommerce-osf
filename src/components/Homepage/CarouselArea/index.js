import React from "react";

import FbButton from "../../../assets/images/fb-follow-button.png";
import SummerSalesBanner from "../../../assets/images/summer-sales-img.png";
import CarouselBanner1 from "../../../assets/images/carousel-banner-1.png";

import {
  Container,
  LeftWrapper,
  TextWrapper,
  RightWrapper
} from "./styled";

const CarouselArea = () => {
  return (
    <Container>
      <LeftWrapper>
        <img src={CarouselBanner1} alt="Banner 1" />
        <TextWrapper>
          <p>Control and manage any device with cloud solutions</p>
          <p>Improve business performance and the user experience with the right mix of IoT technology and processes</p>
          <button>VIEW MORE</button>
        </TextWrapper>
      </LeftWrapper>
      <RightWrapper>
        <img src={SummerSalesBanner} alt="Summer Sales Banner" />
        <p>Follow us on Facebook</p>
        <p>Sed ut perspiciatus unde omnis iste natus erros sit</p>
        <img src={FbButton} alt="Facebook Follow Button" />
      </RightWrapper>
    </Container>
  );
};

export default CarouselArea;