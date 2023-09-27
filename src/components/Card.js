import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Establecer la base URL del backend de FastAPI
    axios.defaults.baseURL = "http://localhost:8080";
    // Obtener las tarjetas del backend de FastAPI
    axios.get("/cards").then((response) => {
    //console.log(response.data);
      setCards(response.data);
      
    });
  }, []);

  return (
    <div className="container-review">
      {cards.map((card) => (
        <div key={card.id} className="container-2">
          <h2>{card.player_name}</h2>
          <h3 className="type">{card.type}</h3>
          <img src={card.image} alt={card.name} className="imagen" />
          <p>{`Skills ${card.skills} ⭐`}</p>
          <p>{`P.Mala ${card.PMala} ⭐`}</p>
          <p>{card.review}</p>
          <div className="coin-container">
            <img src={card.coin} alt={card.name} className="coin-image" />    
            <p className="price"> {formatPriceWithSeparator(card.price)}</p>
          </div>
          <div className="button-container">
            <button>{`Me gusta 👍 (${card.likes})`}</button>
            <button>{`No me gusta 👎 (${card.dislikes})`}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatPriceWithSeparator = (price) => {
    // Formatear el precio con puntos como separadores de miles
    return price.toLocaleString();
  };

export default Card;