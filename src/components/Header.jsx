// src/components/Header.jsx
import React from 'react';

// Importando os hooks
import { useToggleMenu } from '../hooks/useToggleMenu';
import { useScrollShadow } from '../hooks/useScrollShadow';

// Importando os sub-componentes
import MobileButton from './MobileButton';
import NavLinks from './NavLinks';

// Importando a imagem (caminho relativo)
import logoSrc from '../img/logo-starbucks.png';

const Header = () => {
  // 1. Lógica do Menu Mobile
  const { isOpen, toggleMenu } = useToggleMenu();

  // 2. Lógica da Sombra no Scroll
  const hasShadow = useScrollShadow(0); // Adiciona sombra se scrollY > 0

  return (
    <header
      id="header"
      className={`
        bg-white py-3 px-[4%] sticky top-0 z-10 
        transition-shadow duration-300 ease-in-out
        ${hasShadow ? 'shadow-lg' : 'shadow-none'} 
      `}
    >
      <nav className="navbar flex justify-between items-center">
        
        {/* Logo */}
        <img src={logoSrc} alt="Logo Starbucks" className="logo w-[180px]" />

        {/* Botão Mobile (passando props) */}
        <MobileButton isOpen={isOpen} onClick={toggleMenu} />

        {/* Links de Navegação (passando props) */}
        <NavLinks isOpen={isOpen} />

        {/* Botão "Contratar" (Desktop) */}
        {/* Adicionei estilos Tailwind para replicar um .btn-default */}
        <a
          href="#"
          className="
            btn btn-default hidden 
            bg-green-700 text-white px-5 py-2 rounded-full font-medium 
            hover:bg-green-800 transition-colors
            md:block 
          "
        >
          Contratar
        </a>

      </nav>
    </header>
  );
};

export default Header;