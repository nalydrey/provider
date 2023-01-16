import React, { useState } from "react";
import Container from "../../container/Container";
import dataImprint from "../../../data/dataImprint";
import './Imprint.scss'

const Imprint = () => {

    const [buttonState, setText] = useState(dataImprint[0].name)

    const displayData = (buttonName) => {
        const display = dataImprint.find((el) => {
           return el.name === buttonName            
        })
        setText(buttonName)
    }    

    const text = dataImprint.find((el)=>{
        console.log(el.name, buttonState);
        return el.name === buttonState
    }).text

  return (
    <Container name="imprint">
      <h2>
        Отпечатки браузера (Browser fingerprint) Что это? и какие отпечатки
        подменяет Multiaccount
      </h2>
      <div className="accordion">
        <div className="accordion__buttons">        
            {dataImprint.map((button) => 
            <button className={`accordion__button ${button.name===buttonState&&'accordion__button--active'}`} key={button.name} onClick={()=> {displayData(button.name)}}>{button.name}</button>
            ) }          
        </div>
        <div className="accordion__display">
          <p>
            {text}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Imprint;
