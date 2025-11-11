import { useState, useEffect } from 'react';

/**
 * Hook customizado que rastreia a posição do scroll e retorna 
 * um booleano se o scroll ultrapassar um limite.
 * @param {number} threshold - O ponto de scroll (em pixels) a partir do qual 
 * o hook deve retornar true (padrão: 0).
 * @returns {boolean} - Retorna true se window.scrollY > threshold, senão false.
 */
export const useScrollShadow = (threshold = 0) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se a posição do scroll é maior que o limite
      if (window.scrollY > threshold) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Função de limpeza: remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]); // O hook só roda novamente se o 'threshold' mudar

  return hasShadow;
};