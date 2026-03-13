import React, { useState } from 'react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    
    const keywords = {
      'о нас': 'about',
      'о компании': 'about',
      'кто мы': 'about',
      'этапы': 'stages',
      'как мы работаем': 'stages',
      'вопросы': 'faq',
      'ответы': 'faq',
      'чаво': 'faq',
      'заявка': 'footer',
      'оставить заявку': 'footer',
      'контакты': 'footer',
      'связь': 'footer'
    };

    const targetId = keywords[query];
    if (targetId) {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setIsSearchOpen(false);
        setSearchQuery('');
        return;
      }
    }
    
    // If no exact keyword match, try fuzzy matching
    const foundKeyword = Object.keys(keywords).find(k => query.includes(k) || k.includes(query));
    if (foundKeyword) {
      const elem = document.getElementById(keywords[foundKeyword]);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    }
  };

  return (
    <header className="header">
      <div className="container header__shape">
        <a className="header__image" href="#">
          <img className="header__logo" src="/img/Logo.svg" alt="Логотип" />
        </a>
        <nav className={`header__nav ${isSearchOpen ? 'header__nav--hidden' : ''}`}>
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
        
        <div className={`header__search-container ${isSearchOpen ? 'header__search-container--open' : ''}`}>
          <form className="header__search-form" onSubmit={handleSearch}>
            <input 
              className="header__search-input" 
              type="text" 
              placeholder="Что будем искать?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="header__search-submit btn-reset" type="submit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="7.56126" height="1.89031" transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6064 17.3762)" fill="#FF9900"/>
                <path d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z" stroke="#FF9900" strokeWidth="2"/>
              </svg>
            </button>
          </form>
          <button 
            className="header__search-close btn-reset" 
            onClick={() => setIsSearchOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8.93542" y="7.60205" width="11" height="1.89031" transform="rotate(45 8.93542 7.60205)" fill="#666666"/>
              <rect x="7.60156" y="15.3809" width="11" height="1.89031" transform="rotate(-45 7.60156 15.3809)" fill="#666666"/>
            </svg>
          </button>
        </div>

        <button 
          aria-label="Кнопка найти" 
          className={`header__button btn-reset ${isSearchOpen ? 'header__button--hidden' : ''}`}
          onClick={() => setIsSearchOpen(true)}
        >
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
