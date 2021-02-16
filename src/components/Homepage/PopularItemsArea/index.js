import React from "react";

import ProductCard from "../../ProductCard";

import LoadMoreIcon from "../../../assets/images/load-more-icon.svg";

import {
  Container,
  LoadMoreButton
} from "./styled";

const PopularItemsArea = () => {
  return (
    <Container>
      Popular Items
      <ProductCard />
      <LoadMoreButton>LOAD MORE <img src={LoadMoreIcon} alt="Load More Icon" /> </LoadMoreButton>
    </Container>
  );
};

export default PopularItemsArea;