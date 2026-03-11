import React from 'react';

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header__shape">
        <a className="header__image" href="#">
          <img className="header__logo" src="/img/Logo.svg" alt="Логотип" />
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list list-reset">
            <li className="header__nav-list-item">
              <a className="header__text" href="#about" onClick={(e) => handleScroll(e, 'about')}>О нас</a>
            </li>
            <li className="header__nav-list-item">
              <a className="header__text" href="#stages" onClick={(e) => handleScroll(e, 'stages')}>Этапы</a>
            </li>
            <li className="header__nav-list-item">
              <a className="header__text" href="#faq" onClick={(e) => handleScroll(e, 'faq')}>Вопросы</a>
            </li>
            <li className="header__nav-list-item">
              <a className="header__text" href="#footer" onClick={(e) => handleScroll(e, 'footer')}>Оставить заявку</a>
            </li>
          </ul>
        </nav>
        <button aria-label="Кнопка найти" className="header__button btn-reset">
          <svg className="header__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="7.56126" height="1.89031" transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6064 17.3762)" fill="currentColor"/>
            <path d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z" stroke="currentColor" strokeWidth="2"/>
          </svg>                    
        </button>
      </div>
    </header>
  );
};

export default Header;
