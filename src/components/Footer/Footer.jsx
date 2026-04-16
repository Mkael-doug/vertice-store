import React from 'react'
import {
    MapPin,
    Smartphone
} from 'lucide-react'
import FooterLogo from '../../assets/logo-dark.svg'
import BannerFooter from '../../assets/website/banner-footer.png'

// Componentizei os SVGs sociais para não encher a marcação principal de tags. Fica bem mais agradável de ler!
const Instagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
)

const Facebook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)

const Linkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
)

// O estilo de background em objeto React pra injetar uma imagem externa de forma rápida.
const BannerImg = {
    backgroundImage: `url(${BannerFooter})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
}

// Arrays dos menus. Utilizar maps no JSX é uma excelente prática React para não repetir HTML (DRY - Don't Repeat Yourself)!
const FooterLinks = [
    { title: 'Home', link: '#hero' },
    { title: 'Sobre', link: '#about' },
    { title: 'Produtos', link: '#products' },
    { title: 'Contato', link: '#subscribe' }
];

const InstitutionalLinks = [
    { title: 'Política de Privacidade', link: '#' },
    { title: 'Termos de Uso', link: '#' },
    { title: 'Trocas e Devoluções', link: '#' },
    { title: 'Central de Ajuda', link: '#' }
];

const Footer = () => {
    return (
        <div style={BannerImg} className='text-white mt-10 relative overflow-hidden'>
            {/* O overlay escuro absoluto garante que independente do quão clara a foto BannerFooter seja, o texto branco continue legível! */}
            <div className='absolute inset-0 bg-black/60'></div>
            
            <div className='container relative z-10 pb-10 pt-16'>
                {/* --- Grid Principal do Rodapé --- */}
                {/* Em telas médias temos 2 colunas, 3 colunas em telas grandes (lg). No mobile fica tudo empilhado. */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8 md:gap-14'>
                    
                    {/* 1. Detalhes da Empresa */}
                    <div className='py-4 px-4'>
                        <img src={FooterLogo} alt="Logo" className='max-w-[190px] mb-4 drop-shadow-lg' />
                        <p className='text-sm mb-6 text-gray-300 leading-relaxed'>
                            Descubra a melhor experiência de compras online.
                            Oferecemos uma ampla variedade de produtos com qualidade e entrega rápida para todo o Brasil.
                        </p>

                        {/* Redes Sociais */}
                        <div className='flex items-center gap-4 mt-6'>
                            <a href="#" className="hover:text-primary transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20 hover:scale-110">
                                <Instagram />
                            </a>
                            <a href="#" className="hover:text-primary transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20 hover:scale-110">
                                <Facebook />
                            </a>
                            <a href="#" className="hover:text-primary transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20 hover:scale-110">
                                <Linkedin />
                            </a>
                        </div>

                        {/* Dados de Contato */}
                        <div className='mt-8 space-y-4 text-sm text-gray-300'>
                            <div className='flex items-center gap-3 group cursor-pointer'>
                                <MapPin className="text-secondary group-hover:text-primary transition-colors" size={20} />
                                <p className='group-hover:text-white transition-colors'>Avenida Nilo Peçanha, 22A - Vila São João, RJ</p>
                            </div>
                            <div className='flex items-center gap-3 group cursor-pointer'>
                                <Smartphone className="text-secondary group-hover:text-primary transition-colors" size={20} />
                                <p className='group-hover:text-white transition-colors'>+55 21 96610-2281</p>
                            </div>
                        </div>
                    </div>

                    {/* 2 e 3. Área de Links Dinâmicos */}
                    <div className='grid grid-cols-2 sm:grid-cols-2 lg:col-span-2 md:pl-10'>
                        
                        {/* Coluna Acesso Rápido */}
                        <div>
                            <div className='py-4 px-4'>
                                <h1 className='sm:text-xl text-lg font-bold sm:text-left text-justify mb-5'>Acesso Rápido</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li className='cursor-pointer group text-gray-300' key={link.title}>
                                            <a href={link.link} className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                                                {/* Uso de translate-x aqui gera um efeito visual sutil empurrando a setinha pro lado no Hover! */}
                                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">{link.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Coluna Institucional */}
                        <div>
                            <div className='py-4 px-4'>
                                <h1 className='sm:text-xl text-lg font-bold sm:text-left text-justify mb-5'>Institucional</h1>
                                {/* Substituí o monte de <li> copiados colados por um map na const InstitutionalLinks! Fica mais fácil caso resolva adicionar mais áreas no futuro. */}
                                <ul className='flex flex-col gap-3 text-gray-300'>
                                    {InstitutionalLinks.map((link) => (
                                        <li className='cursor-pointer group' key={link.title}>
                                            <a href={link.link} className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">{link.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Assinatura Inferior (Copyright) --- */}
            {/* O bg-black/40 (vidro) isola os diretos do resto do footer pra dar respiro */}
            <div className="relative z-10 border-t border-gray-100/10 py-5 mt-6 text-center text-sm text-gray-400 bg-black/40 backdrop-blur-sm">
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados. Feito com amor ❤️</p>
            </div>
        </div>
    )
}

export default Footer