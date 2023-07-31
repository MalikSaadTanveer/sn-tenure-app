import React from "react";
import DealsDetail from "../../component/dealsdetail";
import i18n from "../../locales/localization";

const FoodDeal = ({route}) => {
  const {location} = route.params;
 
  return (
    <DealsDetail detailDealsData={i18n.t("food_deal")} subTitle={"Back To Food deals"} requireMap={true} location={location} imageType = {3}/>
  );
};

export default FoodDeal;
