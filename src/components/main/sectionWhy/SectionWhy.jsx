import React from "react";
import "./SectionWhy.scss";
import social from './social.png'
import Container from "../../container/Container";

export const SectionWhy = () => {
  return (
    <Container name='why'>
        <div className="why__discription">
          <h2>Почему сайты не заблокируют за несколько аккаунтов ?</h2>
          <p>
            Антифрод система сайтов, это алгоритм который преднозначен что бы
            отслеживать мошейнические действия на сайте В том числе
            мультиаккаунты сделаные с одного комьютера.
          </p>
          <p>
            При создании профиля в браузере MULTIACCOUNT, он подменяет все
            известные цифровые отпечатки браузера, по которым антифрод системы
            Вас и отслеживают
          </p>
        </div>
        <div className="why__img">
            <img src={social} alt="social" />
        </div>
    </Container>
  );
};
