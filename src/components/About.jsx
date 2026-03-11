import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title-two">О нас</h2>
        <div className="about__paragraph-block">
          <p className="about__paragraph-text paragraph-text">
            Также как перспективное планирование создаёт необходимость включения в&nbsp;производственный план целого ряда внеочередных мероприятий с&nbsp;учётом комплекса экспериментов, поражающих по&nbsp;своей масштабности и&nbsp;грандиозности. А&nbsp;также диаграммы связей могут быть описаны максимально подробно. Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что убеждённость некоторых оппонентов требует от&nbsp;нас анализа как самодостаточных, так и&nbsp;внешне зависимых концептуальных решений! Следует отметить, что высококачественный прототип будущего проекта предопределяет высокую востребованность позиций, занимаемых участниками в&nbsp;отношении поставленных задач. Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что высококачественный прототип будущего проекта способствует повышению качества экспериментов.
          </p>
        </div>
        <div className="about__card-list">
          <div className="about__card-left">
            <div className="about__card-dark about__card-dark-bg">
              <p className="about__card-paragraph-text paragraph-text">Принимая во&nbsp;внимание показатели успешности, перспективное планирование способствует подготовке и&nbsp;реализации новых принципов</p>
              <button aria-label="Кнопка подробнее" className="about__card-dark-button button">Подробнее</button>
            </div>
          </div>
          <div className="about__card-block-right">
            <div className="about__card-item about__card-top-image">
              <h3 className="about__title-three">Консультация с&nbsp;широким активом</h3>
              <p className="paragraph-text">А&nbsp;также свежий взгляд на&nbsp;привычные вещи&nbsp;&mdash; безусловно открывает новые горизонты для как самодостаточных, так и&nbsp;внешне зависимых концептуальных решений</p>
            </div>
            <div className="about__card-item about__card-bottom-image">
              <h3 className="about__title-three">В&nbsp;своём стремлении повысить</h3>
              <p className="paragraph-text">Качество жизни, они&nbsp;забывают, что&nbsp;сплочённость команды профессионалов представляет собой интересный эксперимент проверки прогресса профессионального сообщества</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
