import React from "react";

import Product1 from "../../assets/images/product-1.png";
import Product2 from "../../assets/images/product-2.png";
import Product3 from "../../assets/images/product-3.png";
import Product4 from "../../assets/images/product-4.png";
import Product5 from "../../assets/images/product-5.png";
import Product6 from "../../assets/images/product-6.png";
import Product7 from "../../assets/images/product-7.png";
import Product8 from "../../assets/images/product-8.png";

import {
  Container,
  ProductWrapper,
  TextWrapper
} from "./styled";

const productInformation = [
  {
    imgPath: Product1,
    description: "test test test",
    price: "$799.55",
  },
  {
    imgPath: Product2,
    description: "test test test",
    price: "$799.55",
  },
  {
    imgPath: Product3,
    description: "test test test",
    price: "$799.55",
  },
  {
    imgPath: Product4,
    description: "test test test",
    price: "$799.55",
  },
  {
    imgPath: Product5,
    description: "test test test",
    price: "$799.55",
  },
  {
    imgPath: Product6,
    description: "test test test",
    price: "$799.55",
  },
  {
    imgPath: Product7,
    description: "test test test",
    price: "$799.55",
  },
  {
    imgPath: Product8,
  },
];

const ProductCard = () => {
  return (
    <Container>
      {productInformation.map((card, index) => (
        <ProductWrapper>
          <img src={card.imgPath} alt={card.imgPath} />
          <TextWrapper>
            <p>{card.description}</p>
            <p>{card.price}</p>
          </TextWrapper>
        </ProductWrapper>
      ))}
    </Container>
  );
};

export default ProductCard;