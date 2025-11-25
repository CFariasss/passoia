import React from "react";
import "./Card.scss";
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.jpg";
import Card3 from "../../assets/Card3.png";
import Card4 from "../../assets/Card4.png";

const cards = [
  { image: Card1, title: "Lábios" },
  { image: Card2, title: "Olhos" },
  { image: Card3, title: "Rosto" },
  { image: Card4, title: "Tendência" },
];

const Card = () => (
  <section className="cards-section">
    <h1 className="cards-title">LOOKS E DICAS DE MAQUIAGEM</h1>

    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={`Card ${index + 1}`} />
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
  </section>
);

export default Card;
