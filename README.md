# 🛍️ Vértice Store - Modern E-Commerce UI

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-blue.svg?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.0-purple.svg?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.2-38B2AC.svg?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
</p>

Uma interface de E-Commerce incrivelmente rápida, responsiva e polida, construída com foco em **Clean Code**, componentização e as melhores práticas modernas de desenvolvimento Front-end.

## ✨ Recursos Principais

- 🌗 **Suporte Nativo a Temas (Light/Dark Mode)**: Implementado através de um sistema robusto de **variáveis CSS** acopladas ao motor do Tailwind V4, garantindo trocas de temas instantâneas sem "flickers" ou dependências pesadas do DOM.
- 📱 **Mobile-First & Totalmente Responsivo**: Layouts baseados em grids flexíveis que se adaptam perfeitamente desde telas de 320px (smartphones) até larguras generosas de Desktop, oferecendo consistência visual em todos os dispositivos.
- ✨ **Micro-interações e Animações Fluidas**: Alimentado pela biblioteca `AOS` (Animate On Scroll), proporcionando entradas suaves, efeitos de "cascata" e transições de hover (escalonamento 3D) que trazem uma sensação de modernidade ao usuário.
- 🧩 **Arquitetura Escalável (DRY)**: Componentização inteligente. Dados de produtos, links institucionais e depoimentos foram extraídos de marcações repetitivas no JSX e transformados em arrays dinâmicos, facilitando a manutenção e a futura implementação com back-ends reais.
- 🖼️ **Carrosséis Responsivos**: Integração suave do `react-slick` ajustada para se adaptar agressivamente às dezenas de resoluções de tela sem quebrar as proporções.

## 🛠️ Tecnologias Utilizadas

A stack foi escolhida a dedo para oferecer a melhor *Developer Experience* e *Performance* em produção:

- **Core:** [React 19](https://react.dev/) instanciado via [Vite](https://vitejs.dev/) (Extremamente rápido e moderno).
- **Estilização:** [Tailwind CSS v4.2](https://tailwindcss.com/) (Totalmente customizado com CSS variáveis adaptativas ao tema).
- **Ícones:** [Lucide-React](https://lucide.dev/) (Leve, consistente e limpo).
- **Animações:** [AOS - Animate On Scroll](https://michalsnik.github.io/aos/).
- **Slider/Carrossel:** [React-Slick](https://react-slick.neostack.com/).

## 🚀 Como Rodar o Projeto

Siga os passos abaixo, ou copie e rode as instruções no seu terminal para rodar o projeto localmente:

```bash
# 1. Clone este repositório 
git clone https://github.com/Mkael-doug/vertice-store.git

# 2. Navegue até o diretório do projeto
cd ecommerce

# 3. Instale as dependências (Usamos NPM mas você pode usar o CLI de sua preferência)
npm install

# 4. Rode o ambiente de desenvolvimento local
npm run dev
```

O servidor começará rodando na porta padrão (geralmente `http://localhost:5173`).

## 🔗 Acesse o Projeto

👉 **Ver o projeto ao vivo:** [Clique Aqui](https://vertice-store.vercel.app/)
<br/>
<br/>

## 📂 Estrutura de Diretórios 

Aqui está uma visão ágil de como o projeto está arquitetado sob o capô:

```bash
src/
 ├── assets/                # Imagens, Mockups, e Logos 
 ├── components/            # Todos os blocos reutilizáveis do sistema
 │   ├── Navbar/            # Sistema de navegação e DarkMode config
 │   ├── Hero/              # Banner principal com Sliders de Promos
 │   ├── Products/          # Listagem limpa e componentizada
 │   ├── TopProducts/       # Produtos de destaque com efeitos 3D css
 │   ├── Testimonial/       # Avaliações com Slick-Carousel config
 │   └── Footer/            # Rodapé responsivo componentizado 
 ├── index.css              # As sagradas Variáveis CSS do Tema Claro/Escuro
 └── App.jsx                # Orquestrador inicial e declaração do AOS
```

## 🧠 Arquitetura e Decisões Técnicas (Notas do Desenvolvedor)

Como desenvolvedor, mantive meu foco ao longo das manutenções nesse projeto voltado a manter um **código limpo e desacoplado**. Aqui vão duas estratégias interessantes adotadas:

1. **Evitando Poluição no JSX**: 
Um dos maiores erros em projetos React é misturar lógica robusta de marcação HTML e "Listas Gigantes" no mesmo arquivo Front-end (ex: a repetição infinita de tags `<li/>`). Este projeto evita isso, adotando o `.map()` em arrays de dados locais para os *cards*, menus de *footer* e estrelinhas dos itens. Reduzi blocos enormes de 50 linhas em JSX elegante de 5-10 linhas com leitura suave.

2. **Tailwind CSS v4 e Variáveis**: 
Para driblar limitações e manter a compatibilidade do Dark Mode imaculada, removemos dependências difíceis e antigas de media querys do Tailwind, focando numa lógica atráves do `:root` para gerenciar Cores do Tema nativamente com Variáveis CSS dinâmicas (`--color-main-text`, `--color-hero-bg`), resultando numa base de código altamente customizável e à prova de falhas.

---

<p align="center">
  Desenvolvido com ☕ e paixão pelo Clean Code.
</p>
