import { useState, useCallback } from 'react';

/**
 * Hook customizado para gerenciar o estado de (aberto/fechado) de um menu.
 * @param {boolean} initialState - O estado inicial do menu (padrão: false).
 * @returns {object} - Retorna um objeto contendo o estado 'isOpen' e a função 'toggleMenu'.
 */
export const useToggleMenu = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // useCallback garante que a função não seja recriada em cada renderização
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return { isOpen, toggleMenu };
};