import React from "react";

import FbButton from "../../../assets/images/fb-follow-button.png";
import SummerSalesBanner from "../../../assets/images/summer-sales-img.png";
import CarouselBanner from "../../CarouselBanner";

import {
  Container,
  LeftWrapper,
  RightWrapper
} from "./styled";

const CarouselArea = () => {
  return (
    <Container>
      <LeftWrapper>
        <CarouselBanner />
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