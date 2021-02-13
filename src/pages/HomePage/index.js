import React from "react";

import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import CarrouselWrapper from "../../components/CarrouselWrapper";

const HomePage = () => {
  return (
      <div>
        <PageHeader />
        <CarrouselWrapper />
        <PageFooter />
      </div>
  );
};

export default HomePage;