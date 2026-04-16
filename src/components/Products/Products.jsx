import React from 'react'
import Img1 from "../../assets/women/woman1.png"
import Img2 from "../../assets/women/woman2.png"
import Img3 from "../../assets/women/woman3.png"
import Img4 from "../../assets/women/woman4.png"
import Img5 from "../../assets/women/woman5.png"
import { Star } from 'lucide-react';

// Separei os dados dos produtos num array de objetos. 
// Isso deixa o código bem mais limpo e preparadinho caso eu precise puxar isso de uma API depois!
const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Moda Casual",
        rating: 5.0,
        color: "orange",
        // Coloquei um delay progressivo ("0", "200", "400") para criar um efeito cascata 
        // super elegante quando os itens renderizam na tela com a biblioteca AOS.
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Moda Esportiva",
        rating: 4.5,
        color: "blue",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Acessórios",
        rating: 4.7,
        color: "pink",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Moda Formal",
        rating: 4.4,
        color: "green",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Camisas Fashion",
        rating: 4.5,
        color: "purple",
        aosDelay: "800",
    },
];

const Products = () => {
    return (
        <section id='products' className='mt-14 mb-12 flex justify-center'>
            <div className='container'>
                
                {/* --- Cabeçalho da Seção --- */}
                {/* Centralizei o conteúdo e coloquei margens para ele respirar no layout. */}
                <div className='text-center mb-10 max-w-150 mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary font-medium tracking-wide'>
                        Produtos mais vendidos para você
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl font-bold mt-2'>
                        Produtos
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className='text-xs text-main-text opacity-80 mt-2'>
                        Confira os produtos mais vendidos e aproveite as melhores ofertas!
                    </p>
                </div>
                
                {/* --- Corpo Principal: Grid de Produtos --- */}
                <div>
                    {/* Usei o CSS Grid nativo do Tailwind para a responsividade ficar perfeita sem sofrimento:
                        Coloquei 1 coluna em mobiles, 3 no tablet e 5 nas telas maiores.
                        O 'place-items-center' garante que no mobile, onde só tem 1 item na linha, não estique bizarramente! */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        
                        {ProductsData.map((data) => (
                            <div
                                key={data.id}
                                data-aos="fade-up" 
                                data-aos-delay={data.aosDelay} 
                                className='space-y-3 p-3 rounded-lg hover:shadow-lg transition-shadow duration-300'
                            >
                                {/* Imagem padronizada em tamanho fixo com object-cover, assim evito que as fotos fiquem achatadas ou distorcidas. */}
                                <img 
                                    src={data.img} 
                                    alt={data.title}
                                    className='h-55 w-37.5 object-cover rounded-md drop-shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer' 
                                />
                                <div>
                                    <h3 className='font-semibold text-lg text-main-text mt-2'>{data.title}</h3>
                                    <p className='text-sm text-main-text opacity-70 italic'>{data.color}</p>
                                    
                                    {/* Avaliações do Produto */}
                                    <div className='flex items-center gap-2 mt-1'>
                                        <Star className='text-yellow-400 fill-yellow-400 w-4 h-4 shadow-sm' />
                                        <span className='text-sm text-main-text font-medium'>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- Botão Ver Mais --- */}
                    {/* Botão padronizado reutilizando a classe global '.btn' e uma chamada de ação atraente. */}
                    <div className='flex items-center justify-center mt-12' data-aos="zoom-in" data-aos-delay="500">
                        <button className='btn px-10 py-3 text-base md:text-lg tracking-wide shadow-md hover:shadow-xl'>
                            Ver Mais Produtos
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products