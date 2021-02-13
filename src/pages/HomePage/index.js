import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import CarouselArea from "../../components/CarouselArea";
import PopularItemsArea from "../../components/PopularItemsArea";

const HomePage = () => {
  return (
      <div>
        <PageHeader />
        <CarouselArea />
        <PopularItemsArea />
        <PageFooter />
      </div>
  );
};

export default HomePage;