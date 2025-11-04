import React from "react";
import Cardcom from "./Cardcom";
import Net_header from "./Net_header";
import Net_footer from "./Net_footer";
import Net_carousel from "./Net_carousel";

function Netflix_card({ CardData }) {
  console.log(CardData);

  return (
    <>
          <Net_header />
          <Net_carousel />

      <div className="container d-flex justify-content-center gap-4 flex-wrap mb-4 text-center">
        {CardData.map((item, index) => (
          <Cardcom key={index} items={item} />
        ))}
      </div>

      <Net_footer />
    </>
  );
}

export default Netflix_card;
