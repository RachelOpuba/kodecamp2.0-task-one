import React from "react";

function Card(props) {
  const currencies = props.currencies;

  const curency = currencies.map((name) => <li>{name}</li>);
  console.log(currencies.length);

  return (
    <main className="cardheight">
      <div className="card-design">
        <div className="shape s1"></div>
        <div className="shape s2"></div>
        <div className="shape s3"></div>
        <div className="shape s4"></div>
        <h2>GIFT CARD</h2>
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="currencies">
        <h4>Conversion Currencies:</h4>
        <ul className="ul">{curency}</ul>
      </div>
    </main>
  );
}

export default Card;
