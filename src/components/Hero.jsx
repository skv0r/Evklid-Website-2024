import React from 'react';

const Hero = () => {
  return (
    <section className="order">
      <div className="container">
        <div className="order__banner">
          <h1 className="order__title">Проектные решения любой сложности</h1>
          <p className="order__paragraph">Есть над чем задуматься: базовые сценарии поведения пользователей и&nbsp;по&nbsp;сей день остаются уделом проектантов</p>
          <button aria-label="Кнопка заказать расчёт" className="button order__button">Заказать расчёт</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
