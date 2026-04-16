import React, { useState } from 'react'
import LogoLight from '../../assets/logo-light.svg';
import LogoDark from '../../assets/logo-dark.svg'
import { Search, ShoppingCart, ChevronDown, Menu as MenuIcon, X } from 'lucide-react';
import DarkMode from './DarkMode';

// Extraí os links do menu principal. Se ficassem jogados nas LIs do cabeçalho o código ia ser impossivel de ler.
const Menu = [
    { id: 1, name: "Home", link: "#hero" },
    { id: 2, name: "Mais Vendidos", link: "#products" },
    { id: 3, name: "Roupas infantis", link: "#" },
    { id: 4, name: "Roupas masculinas", link: "#" }, // Corrigi o ID duplicado aqui
    { id: 5, name: "Eletrônicos", link: "#" },
];

const DropdownLinks = [
    { id: 1, name: "Produtos Top", link: "#top-products" },
    { id: 2, name: "Novidades", link: "#" },
    { id: 3, name: "Ofertas", link: "#" },
];

const Navbar = ({ theme, setTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <div className='sticky top-0 z-50 w-full backdrop-blur-md shadow-md'>
                {/* upper nav */}
                <div className='bg-brand-bg/40 py-0'>
                    <div className='container flex justify-between items-center h-20'>

                        {/* Logo & Mobile Menu Toggle */}
                        <div className='flex items-center gap-2 lg:gap-4'>
                            {/* Hamburger Menu on Mobile/Tablet */}
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className='lg:hidden flex items-center justify-center p-2 text-main-text hover:bg-primary/10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50'
                                aria-label="Abrir menu"
                            >
                                <MenuIcon className='w-7 h-7 drop-shadow-sm' />
                            </button>

                            <a href="#" className='p-2 block'>
                                {/* A logo reage ao estado 'theme' */}
                                <img
                                    src={theme === "dark" ? LogoDark : LogoLight}
                                    key={theme} // ESSENCIAL para animar
                                    className="h-12 sm:h-14 lg:h-16 w-auto animate-in fade-in duration-500"
                                    alt="Logo Vértice Store"
                                />
                            </a>
                        </div>

                        <div className='flex items-center gap-3 lg:gap-5'>
                            {/* Barra de Pesquisa */}
                            <div className='relative group hidden md:block'>
                                <input
                                    type="text"
                                    placeholder="Pesquisar"
                                    className='w-48 lg:w-64 bg-neutral-bg text-main-text group-hover:w-72 transition-all duration-300 ease-in-out rounded-full border border-bar/40 px-4 py-2 focus:outline-none focus:border focus:border-primary text-sm'
                                />
                                <Search
                                    className='text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5'
                                />
                            </div>

                            {/* BOTÕES: No tablet este botão vira apenas o ícone de carrinho. No Desktop expande para mostrar o texto inteiro. Menos é mais! */}
                            <button
                                onClick={() => alert('Pedidos ainda indisponíveis!')}
                                className='hidden md:flex bg-linear-to-r from-primary to-secondary transition-all duration-300 ease-in-out rounded-full items-center p-2 lg:px-5 lg:py-2.5 text-white lg:gap-3 group hover:scale-105'
                            >
                                <span className='hidden lg:block transition-all duration-300 ease-in-out font-medium'>
                                    Pedidos
                                </span>
                                <ShoppingCart className='w-5 h-5 lg:w-6 lg:h-6 text-white drop-shadow-sm cursor-pointer mx-1 lg:mx-0' />
                            </button>

                            {/* Alternador Dark/Light Mode */}
                            <DarkMode theme={theme} setTheme={setTheme} />
                        </div>
                    </div>
                </div>

                {/* lower nav (Apenas Desktop >= 1024px) */}
                <div className='hidden lg:flex justify-center items-center bg-bar shadow-sm-lg transition-colors duration-300'>
                    <ul className='flex justify-center items-center gap-6'>
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <a href={data.link}
                                    className='inline-block px-4 py-3 hover:text-primary font-medium tracking-wide transition-colors duration-300'
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                        {/* Dropdown */}
                        <li className='group relative cursor-pointer'>
                            <a
                                href="#"
                                className='flex items-center gap-2 px-4 py-3 text-main-text hover:text-primary font-medium tracking-wide transition-colors duration-300'
                            >
                                Itens populares
                                <span>
                                    <ChevronDown
                                        className='w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-180'
                                    />
                                </span>
                            </a>
                            <div className='absolute z-[999] hidden group-hover:block w-48 bg-bar p-2 shadow-xl rounded-b-md text-main-text border-t border-primary/20'>
                                <ul className='flex flex-col gap-1'>
                                    {DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}
                                                className='block w-full rounded-md px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors font-medium'>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* OVERLAY: Menu Mobile/Tablet Drawer Background */}
            {isMobileMenuOpen && (
                <div
                    className='fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* SIDE DRAWER: Menu Mobile/Tablet */}
            <div
                className={`fixed top-0 left-0 h-full w-4/5 max-w-[320px] bg-neutral-bg shadow-2xl z-[1000] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Header do Drawer */}
                <div className='p-6 flex items-center justify-between border-b border-main-text/10'>
                    <img
                        src={theme === "dark" ? LogoDark : LogoLight}
                        className="h-10 w-auto"
                        alt="Logo Vértice Store"
                    />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className='p-2 rounded-full bg-primary/5 hover:bg-primary/20 transition-colors text-main-text focus:outline-none focus:ring-2 focus:ring-primary/50'
                    >
                        <X className='w-6 h-6 drop-shadow-sm' />
                    </button>
                </div>

                {/* Conteúdo do Drawer (Scrollável) */}
                <div className='p-6 flex flex-col gap-6 overflow-y-auto pb-20'>

                    {/* Barra de Pesquisa Mobile */}
                    <div className='relative flex md:hidden items-center mb-4'>
                        <input
                            type="text"
                            placeholder="Pesquisar produtos..."
                            className='w-full bg-bar/40 text-main-text rounded-full border border-main-text/10 px-5 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
                        />
                        <Search className='text-gray-400 absolute right-4 w-5 h-5' />
                    </div>

                    {/* Botão de Pedidos do Mobile (Oculto no tablet já que o ícone está na navbar) */}
                    <button
                        onClick={() => {
                            alert('Pedidos ainda indisponíveis!');
                            setIsMobileMenuOpen(false);
                        }}
                        className='md:hidden bg-linear-to-r from-primary to-secondary transition-transform active:scale-95 w-full rounded-xl flex items-center justify-center px-4 py-4 text-white gap-3 shadow-lg'
                    >
                        <ShoppingCart className='text-xl text-white' />
                        <span className='font-semibold text-lg tracking-wide'>Meus Pedidos</span>
                    </button>

                    {/* Links de Navegação */}
                    <nav className='mt-2'>
                        <ul className='flex flex-col gap-2'>
                            {Menu.map((data) => (
                                <li key={data.id}>
                                    <a
                                        href={data.link}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className='flex items-center px-4 py-3 text-lg font-medium text-main-text hover:text-primary transition-colors border-b border-main-text/10 active:bg-primary/5 rounded-lg'
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}

                            {/* Dropdown Itens achatados no Mobile */}
                            <li className='pt-8 mt-4 border-t border-main-text/10'>
                                <span className='block px-4 text-xs font-bold text-primary uppercase tracking-widest mb-4'>
                                    Itens Populares
                                </span>
                                <ul className='flex flex-col gap-2'>
                                    {DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a
                                                href={data.link}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className='block px-6 py-2.5 text-base font-medium text-main-text opacity-90 hover:opacity-100 hover:text-primary hover:bg-primary/5 transition-all rounded-lg border-l-4 border-transparent hover:border-primary'
                                            >
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Navbar