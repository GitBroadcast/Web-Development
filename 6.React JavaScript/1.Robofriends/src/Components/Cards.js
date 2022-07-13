import React from "react";

const Cards = (props) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Robot friends" src={`https://robohash.org/${props.id}`} />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

export default Cards;
