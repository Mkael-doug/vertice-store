import React from 'react'
import Img1 from '../../assets/TopRated/shirt1.png'
import Img2 from '../../assets/TopRated/shirt2.png'
import Img3 from '../../assets/TopRated/shirt3.png'
import { Star } from 'lucide-react';

// Separei os dados num array para facilitar a manutenção da loja no futuro (como se fosse dados do back-end).
const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Roupa Casual',
        description: 'Uma roupa casual confortável e estilosa para o dia a dia.',
        aosDelay: '200',
    },
    {
        id: 2,
        img: Img2,
        title: 'Camisa Estampada',
        description: 'Uma camisa estampada com design moderno e colorido.',
        aosDelay: '400',
    },
    {
        id: 3,
        img: Img3,
        title: 'Camisa Feminina',
        description: 'Uma camisa feminina confortável e estilosa para o dia a dia.',
        aosDelay: '600',
    },
]

const TopProducts = () => {
    return (
        <section id='top-products' className='mt-14 mb-12'>
            <div className='container'>
                
                {/* --- Header da Seção --- */}
                <div className='text-left mb-24'>
                    <p data-aos="fade-up" className='text-sm text-primary font-medium tracking-wide'>
                        Os melhores produtos para você
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl font-bold mt-2'>
                        Melhores Produtos
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className='text-xs text-main-text opacity-80 mt-2'>
                        Confira os produtos mais vendidos e mais amados pelos nossos clientes
                    </p>
                </div>
                
                {/* --- Grid dos Top Produtos --- */}
                {/* Ajustei o sistema de grid para garantir que em telas médias (tablets) caibam apenas 2 cards por linha,
                    evitando aquele visual espremido da versão antiga! */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-12 md:gap-10 place-items-center'>
                    
                    {ProductsData.map((data) => (
                        <div key={data.id}
                            data-aos="zoom-in"
                            // A classe "group" do Tailwind me permite fazer modificações nos elementos filhos 
                            // (como trocar as cores do texto ou dar zoom na imagem) toda vez que o usuário colocar o hover *no card inteiro*.
                            className='rounded-2xl bg-hero-bg hover:bg-main-text/80 hover:text-hero-bg transition-colors relative shadow-xl duration-300 group max-w-75 mt-5 cursor-pointer' 
                        >
                            {/* --- Área da Imagem --- */}
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} className='h-25 flex items-center justify-center relative z-10'>
                                {/* Uso -translate-y-10 para a imagem ficar vazada pro lado de fora do topo do card, tipo um design em 3D! */}
                                <img 
                                    src={data.img} 
                                    alt={data.title} 
                                    className='max-w-105 block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md' 
                                />
                            </div>
                            
                            {/* --- Área do Texto --- */}
                            <div className='p-5 text-center'>
                                
                                {/* Avaliações do Produto. Mapeei um Array de tamanho 5 dinamicamente, assim não preciso repetir o ícone <Star/> cinco vezes no meu JSX! Código Limpo importa. */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} className='text-yellow-500 fill-yellow-500 w-4 h-4' />
                                    ))}
                                </div>
                                
                                <h1 className='text-xl flex-col items-center flex font-bold mt-3'>
                                    {data.title}
                                </h1>
                                
                                {/* O line-clamp-2 ajuda a truncar descrições muito grandes, garantindo que nenhum card quebre o padrão visual do layout caso o texto seja enorme */}
                                <p className='text-sm text-main-text opacity-70 group-hover:text-hero-bg group-hover:opacity-100 duration-300 line-clamp-2 mt-2 leading-relaxed'>
                                    {data.description}
                                </p>
                                
                                <button className='btn mt-6 px-6 py-2 group-hover:scale-105 shadow-md'>
                                    Compre Agora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopProducts