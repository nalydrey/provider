import React from "react";
import { ReactComponent as Marker } from "./marker.svg";
import './Card.scss'

const Card = () => {
  return (
    <div className="card">
        <h3 className="card__name">1 Месяц</h3>
        <p className="card__date">на 32 дня</p>
        <p className="card__price">888 ₴</p>
        <div className="button-box">
            <button className="card__button">Выбрать </button>
        </div>
        <ul className="card__list">
            <li>
                <Marker className="marker"/>
                <p>доступ к браузеру на 32 дня</p>
            </li>
            <li>
                <Marker className="marker"/>
                <p>моментальный бэкап</p>
            </li>
            <li>
                <Marker className="marker"/>
                <p>хранение профилей в облаке</p>
            </li>
            <li>
                <Marker className="marker"/>
                <p>подмена Browser fingerprint</p>
            </li>
            <li>
                <Marker className="marker"/>
                <p>дразделение куки</p>
            </li>
        </ul>
    </div>
  );
};

export default Card;
