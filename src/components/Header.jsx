import React from 'react';
import { useToggleMenu } from '../hooks/useToggleMenu';
import { useScrollShadow } from '../hooks/useScrollShadow';
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
        font-poppins bg-neutral-1 py-3 px-[4%] sticky top-0 z-10 
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
          className="hidden bg-primary-1 text-neutral-0 py-2.5 px-5 border-none cursor-pointer text-base font-semibold rounded-lg transition-colors duration-300 ease-in-out text-2xl hover:bg-primary-2 md:block"
        >
          Contratar
        </a>

      </nav>
    </header>
  );
};

export default Header;