// CardComponent.jsx
import React from "react";
import CardItem from "./CardItem";

const CardComponent = () => {
  const cards = [
    {
      image: "cards/card1.png",
      title: "Card Title 1",
      text: "This is a short description for card 1.",
      link: "#"
    },
    {
      image: "cards/card2.png",
      title: "Card Title 2",
      text: "This is a short description for card 2.",
      link: "#"
    },
    {
      image: "cards/card3.png",
      title: "Card Title 3",
      text: "This is a short description for card 3.",
      link: "#"
    },
    {
      image: "cards/card4.png",
      title: "Card Title 4",
      text: "This is a short description for card 4.",
      link: "#"
    },
    {
      image: "cards/card5.png",
      title: "Card Title 5",
      text: "This is a short description for card 5.",
      link: "#"
    },
    {
      image: "cards/card1.png",
      title: "Card Title 1",
      text: "This is a short description for card 1.",
      link: "#"
    }
  ];

  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
             <h3>All Events</h3>
        </div>
      </div>
    </div>
    <div className="container my-4">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-2" key={index}>
            <CardItem
              image={card.image}
              title={card.title}
              text={card.text}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default CardComponent;
