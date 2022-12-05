import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/residentCard.css";

const ResidentInfo = ({ url }) => {
  const [residentUrl, setResidentUrl] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResidentUrl(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(residentUrl?.name);

  return (
    <article className="card">
      <header className="card_header">
        <img className="card_avatar" src={residentUrl?.image} alt="" />
        <div className="card_circle-container">
          <div className={`card_circle Alive ${residentUrl?.status}`}></div>
          <span className="card_circle-label">{residentUrl?.status} </span>
        </div>
      </header>
      <section className="card_body">
        <h3 className="card_name">{residentUrl?.name} </h3>
        <ul className="card_list">
          <li className="card_item">
            <span className="card_item-label">Species </span>
            <span className="card_item-value">{residentUrl?.species}</span>
          </li>
          <li className="card_item">
            <span className="card_item-label">Origin </span>
            <span className="card_item-value">{residentUrl?.origin.name} </span>
          </li>
          <li className="card_item">
            <span className="card_item-label">Episodes where appear </span>
            <span className="card_item-value">
              {residentUrl?.episode.length}
            </span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentInfo;
