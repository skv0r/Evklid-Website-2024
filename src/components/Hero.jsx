import React from 'react';

const Hero = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const elem = document.getElementById('footer');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="order">
      <div className="container">
        <div className="order__banner">
          <h1 className="order__title">Строительные решения любой сложности</h1>
          <p className="order__paragraph">Комплексный подход к строительству: от&nbsp;идеи и&nbsp;проектирования до&nbsp;сдачи объекта «под ключ»</p>
          <button 
            aria-label="Кнопка заказать расчёт" 
            className="button order__button"
            onClick={handleScroll}
          >
            Заказать расчёт
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
