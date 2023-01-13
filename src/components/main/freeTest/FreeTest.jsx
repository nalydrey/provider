import React from "react";
import window from './window.jpg'
import Container from "../../container/Container";
import './FreeTest.scss'

const FreeTest = () => {
  return (
    <Container name='freeTest'>
        <h2 className="freeTest__head">БЕСПЛАТНЫЙ ТЕСТ </h2>
        <div className="freeTest__wrap">
            <div className="freeTest__foto">
                <img src={window} alt="window" />
            </div>
            <div className="freeTest__discription">
                <p>
                    После <span className="registration">регистрации</span> в MULTIACCOUNT вы можете пользоваться всеми
                    возможностями Антидетект браузера первые 24 часа!
                </p>
                <p>Вы так же можете БЕСПЛАТНО протестировать наши прокси</p>
            </div>
        </div>
    </Container>
    
  );
};

export default FreeTest;
