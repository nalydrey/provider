import React from "react";
import './Item.scss'


const Item = (props) => {

  const { data } = props

  console.log(data);

  return (
    <div className="item__container">
      <div className="item__label">
          {data.icon}
      </div>
      <div className="item__discription">
        <h3>{data.head}</h3>
        <p>
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default Item;
