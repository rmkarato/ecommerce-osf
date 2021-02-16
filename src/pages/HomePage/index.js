import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import CarouselArea from "../../components/Homepage/CarouselArea";
import PopularItemsArea from "../../components/Homepage/PopularItemsArea";
import BannerArea from "../../components/Homepage/BannerArea";
import FeaturedProductsArea from "../../components/Homepage/FeaturedProductsArea";
import PurposeArea from "../../components/PurposeArea";

const HomePage = () => {
  return (
      <div>
        <PageHeader />
          <CarouselArea />
          <PopularItemsArea />
          <BannerArea />
          <FeaturedProductsArea />
          <PurposeArea />
        <PageFooter />
      </div>
  );
};

export default HomePage;