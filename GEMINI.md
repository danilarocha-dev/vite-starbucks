# Instruções para o Assistente de Código (Gemini)

Este documento serve como um guia de diretrizes para o assistente de IA (Gemini Code Assist) ao trabalhar no projeto "starbucks". O objetivo é manter a consistência, a qualidade e a manutenibilidade do código.

---

## 1. Visão Geral do Projeto

O projeto "starbucks" é uma aplicação React Single Page Application (SPA) criada para representar uma cafeteria moderna. A proposta inclui uma interface visual elegante, responsiva e fluida, destacando produtos, serviços e promoções — além de oferecer uma experiência de usuário otimizada.


**Referência Principal:** Antes de qualquer modificação ou adição, consulte o arquivo [`README.md`](./README.md) para obter uma visão completa das funcionalidades, scripts disponíveis, dependências instaladas, tecnologias e estrutura do projeto.

---

## 2. Pilha de Tecnologia (Tech Stack)

O projeto é construído com as seguintes tecnologias:

- **React + Vite:** Framework e bundler moderno para criação de interfaces reativas com performance otimizada no desenvolvimento e build.
- **Tailwind CSS:** Framework de utilitários para estilização rápida, responsiva e consistente, com suporte a modo escuro, responsividade nativa e design system reutilizável.
- **JavaScript (ES6+):** Utilizado na lógica da aplicação, manipulação de estados e integração de componentes.
- **Font Awesome:** Biblioteca de ícones vetoriais usada em botões, menus e elementos de interface.
- **Swiper.js:** Biblioteca moderna para criação de carrosséis interativos, perfeita para seções de destaque.
- **PostCSS + Autoprefixer:** Ferramentas configuradas automaticamente pelo Tailwind para garantir compatibilidade entre navegadores.

---

## 3. Padrões de Código e Convenções

Siga rigorosamente as diretrizes abaixo para garantir clareza, reuso e escalabilidade do código.

### 3.1. Estrutura de Pastas (Vite + React)

src/
├── assets/              # Imagens, ícones e fontes
├── components/          # Componentes reutilizáveis (Navbar, Hero, Footer, etc.)
├── pages/               # Páginas principais (Home, Menu, About, etc.)
├── hooks/               # Hooks personalizados
├── styles/              # Arquivos CSS globais e utilitários
├── App.jsx              # Componente raiz
└── main.jsx             # Ponto de entrada da aplicação


### 3.2. TailwindCSS

- **Estrutura:**
- Use classes utilitárias diretamente nos JSX.
- Crie estilos personalizados apenas quando realmente necessário em src/App.css ou em módulos CSS (.module.css).

- **Convenções:**
- Prefira className com múltiplas utilitárias do Tailwind.
- Agrupe classes em ordem lógica:
layout → espaçamento → tipografia → cor → interação.

<button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
  <i className="fa-solid fa-mug-hot"></i>
  Fazer Pedido
</button>

- **Cores e Temas:**
Configure cores personalizadas em tailwind.config.js no campo theme.extend.colors.

  /* Exemplo de paleta de cores a ser implementada */
  :root {
    --color-neutral-0: #FFFFFF;
    --color-neutral-1: #eee4db;
    --color-neutral-2: #d4c3b6;
    --color-neutral-3: #b8a99e;
    --color-neutral-4: #9e8f85;
    --color-neutral-5: #7e6e65;
    --color-neutral-6: #5e4e45;
    --color-neutral-7: #3e2e25;
    --color-neutral-8: #1e0e05;
    --color-neutral-9: #000000;

    --color-primary-1: #34815d;
    --color-primary-2: #2c6e4f;
    --color-primary-3: #245c42;

    --color-secundary-1: #f5c518;
}


### 3.3. Componentes React

- **Padrão:** Utilize componentes funcionais e Hooks (como `useState` , `useEffect` etc).

- **Nomenclatura:**
- Componentes em `PascalCase` (`Header.jsx`, `ProductCard.jsx`).

- Funções e variáveis em `camelCase`.

- Props desestruturadas nos parâmetros:

function ProductCard({ name, price }) {
  return <p>{name}: R$ {price}</p>;
}

- **Responsabilidade Única:**
- Cada componente deve ter uma função clara e isolada (ex: exibir um card, controlar o carrossel, renderizar uma seção).

- **Boas Práticas:**

- Prefira fragmentos (<> ... </>) ao invés de <div> desnecessários.

- Centralize configurações e constantes reutilizáveis (ex: cores, textos, links).

- Use prop-types para validação de props, quando necessário.


### 3.4. Acessibilidade

- **Imagens:** Sempre inclua alt descritivo.

- **Botões e Ícones:** Devem possuir aria-label quando não houver texto visível.

<button aria-label="Abrir menu" className="btn-mobile">
  <i className="fa-solid fa-bars"></i>
</button>

### 3.5 Swiper.js

- **Instalação:**

- `npm install swiper`

- **Importação:**

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


- **Uso básico:**

<Swiper slidesPerView={1} loop autoplay>
  <SwiperSlide><img src="/img/banner1.jpg" alt="Promoção 1" /></SwiperSlide>
  <SwiperSlide><img src="/img/banner2.jpg" alt="Promoção 2" /></SwiperSlide>
</Swiper>


- **Configuração personalizada:**

- Armazene parâmetros em um objeto (swiperConfig.js) dentro de src/config/.


- **Organização:** Separe a lógica em blocos bem definidos (ex: um bloco para a navegação, outro para a inicialização do Swiper).

---

## 4. Formato das Respostas

Ao fornecer código, siga estas regras:

1.  **Formato Diff:** Apresente todas as modificações de código no formato `diff`. Isso torna a revisão e aplicação das mudanças mais fácil e segura.
2.  **Caminhos Absolutos:** Use o caminho absoluto completo para cada arquivo modificado (ex: `/home/danila/starbucks/src/components/Header.jsx`).
3.  **Novos Arquivos:** Para criar um novo arquivo, use `/dev/null` como o arquivo de origem no `diff`.
4.  **Tom de Voz:** As respostas devem ser claras, diretas e instrutivas, explicando o "porquê" das alterações, não apenas o "o quê".

---

## 5. Exemplo de Tarefa

**Requisição do usuário:** “Adicionar um botão com ícone do Font Awesome no componente Header.”

**Resposta esperada:**

> Claro! Adicionei um botão de login no Header, com ícone do Font Awesome. Ele usa classes utilitárias do Tailwind e segue o padrão de responsividade do projeto.


```diff
--- a/home/danila/starbucks/src/components/Header.jsx
+++ b/home/danila/starbucks/src/components/Header.jsx
@@ -12,6 +12,11 @@
       <nav className="flex items-center gap-4">
         <a href="#menu" className="hover:text-green-600 transition">Menu</a>
         <a href="#contato" className="hover:text-green-600 transition">Contato</a>
+        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
+          <i className="fa-solid fa-user"></i>
+          Entrar
+        </button>
       </nav>


> ```

✅ Motivo: melhora a usabilidade e destaca a ação principal do usuário.