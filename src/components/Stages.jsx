import React from 'react';

const Stages = () => {
  return (
    <section className="stage" id="stages">
      <div className="container">
        <h2 className="stage__title-two">Этапы</h2>
        <div className="stage__image">
          <div className="stage__shape">
            <h3 className="stage__title-three">Этап планирования и возведения</h3>
            <p className="stage__paragraph">
              Процесс строительства начинается с&nbsp;детального изучения технического задания и&nbsp;подготовки площадки. В&nbsp;рамках современных строительных стандартов, мы&nbsp;применяем передовые методы возведения фундаментов и&nbsp;несущих конструкций. Каждое решение проходит строгий инженерный контроль.
              Наши специалисты используют только сертифицированные материалы, что&nbsp;обеспечивает долговечность и&nbsp;безопасность будущих объектов. Мы&nbsp;пристально следим за&nbsp;соблюдением графиков работ и&nbsp;технологических процессов, гарантируя результат, превосходящий ожидания самых требовательных заказчиков.
            </p>
            <div className="stage__buttons">
              <button aria-label="Кнопка подробнее" className="stage__button-first button">Подробнее</button>
              <a href="/docs/contract.txt" download aria-label="Скачать договор" className="stage__button-second">Договор</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stages;
