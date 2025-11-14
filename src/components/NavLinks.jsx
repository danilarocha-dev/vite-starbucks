import { Link } from 'react-router-dom';

/**
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {boolean} props.isOpen - Controla a visibilidade no mobile.
 */
const NavLinks = ({ isOpen }) => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/trending', label: 'Em alta' },
    { to: '/about', label: 'Sobre nós' },
    { to: '/products', label: 'Novidades' },
  ];

  return (
    <ul
      id="nav-links"
      className={`
        ${isOpen ? 'flex' : 'hidden'}  // Controla a visibilidade com base no 'isOpen'
        
        // Estilos Mobile (default)
        list-none flex-col gap-2 w-full absolute top-[80px] bg-neutral-1 left-0 p-4 shadow-md
        
        // Estilos Desktop (breakpoint 'md')
        md:flex md:flex-row md:static md:gap-4 md:w-auto md:p-0 md:shadow-none md:bg-transparent
      `}
    >
      {links.map((link) => (
        <li key={link.to} className="text-center">
          <Link
            to={link.to}
            className="
              text-neutral-8 no-underline text-base font-medium 
              transition-all duration-300 ease-in-out
              hover:text-primary-1 hover:border-b-2 hover:border-primary-1
            "
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;