import React from 'react';

/**
 * Botão do menu mobile que alterna o ícone com base no estado 'isOpen'.
 * @param {object} props
 * @param {boolean} props.isOpen - Estado que define se o menu está aberto.
 * @param {function} props.onClick - Função a ser executada ao clicar no botão.
 */
const MobileButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="bg-transparent
      py-2.5
      px-5
      border-none
      rounded-lg
      cursor-pointer
      font-semibold
      transition-colors duration-300 ease-in-out
      text-2xl
      md:hidden" // Esconde em telas 'md' ou maiores
      onClick={onClick}
      aria-label="Abrir menu"
      aria-expanded={isOpen}
    >
      {/* Alterna o ícone baseado no estado 'isOpen' */}
      <i className={isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
    </button>
  );
};

export default MobileButton;