import React from "react";
import { ReactComponent as Marker } from "./marker.svg";
import './Card.scss'

const Card = (props) => {

    const { data } = props

    console.log(data);

    const listTemplate =    
            {
                tariff: `доступность к браузеру на ${data.termin}`,
                backup: 'моментальный бэкап',
                save: 'хранение профилей в облаке',
                change: 'подмена Browser fingerprint',
                separate: 'разделение куки',
            }
      
    const output = []

    for(const key in listTemplate){
        for(const dataKey in data){
            if(dataKey === key){
              if(data[key]) output.push(listTemplate[key])
            }
        }
    }

    console.log(output);


  return (
    <div className="card">
        <h3 className="card__name">{data.tariff}</h3>
        <p className="card__date">{data.termin}</p>
        <p className="card__price">{data.price} ₴</p>
        <div className="button-box">
            <button className="card__button">Выбрать</button>
        </div>
        <ul className="card__list">
            {output.map((listItem,i)=>{ 
                return (
                    <li key={i}>
                        <Marker className="marker"/>
                        <p>{listItem}</p>
                    </li>
                )
            })}   
       
        </ul>
    </div>
  );
};

export default Card;
