import React from 'react'
import SliderDefault from "react-slick";

// A exportação do Slider vêm com 'default' aninhado às vezes por causa do bundler do Vite/Rollup. 
// Para evitar que a página bugue ao construir o projeto para Produção, criei esse fallback espertinho aqui:
const Slider = SliderDefault.default || SliderDefault;

// Dados dos testemunhos de clientes separados pra eu poder focar no React abaixo e não entupir a marcação.
const TestimonialsData = [
    {
        id: 1,
        name: "Victor Hugo",
        text: "A qualidade das peças me surpreendeu. O caimento da camisa casual é perfeito e o tecido é super confortável para o dia a dia. Com certeza voltarei a comprar!",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Mariana Costa",
        text: "Finalmente um e-commerce que entende de moda feminina moderna! A camisa de crochê que comprei é linda e recebi muitos elogios. A entrega foi antes do prazo.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Felipe Andrade",
        text: "O site é muito intuitivo e fácil de navegar. Comprei as camisas estampadas para minha viagem e o processo todo foi impecável. Recomendo para quem busca estilo.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Beatriz Santos",
        text: "Adorei a curadoria da loja. As roupas têm uma pegada jovem e os descontos de inauguração valeram muito a pena. O atendimento no chat também foi nota 10!",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Lucas Menezes",
        text: "Melhor experiência de compra online que tive nos últimos meses. O rastreio funciona bem e as roupas chegaram bem embaladas e com um cheirinho ótimo.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    }
];

const Testimonial = () => {

    // Extraí as configurações do "react-slick" num objeto próprio pra ficar organizado.
    // Configurei o autoplay responsivo: no celular e no tablet 1 card por vez, no desktop normal mostro 3!
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <section className='py-10 mb-10'>
            <div className='container'>

                {/* --- Header Section --- */}
                <div className='text-center mb-10 max-w-150 mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary font-medium tracking-wide'>
                        O que nossos clientes dizem
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl font-bold mt-2'>
                        Comentários
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className='text-xs text-main-text opacity-80 mt-2'>
                        Veja o que nossos clientes têm a dizer sobre nossos produtos e serviços.
                    </p>
                </div>

                {/* --- Carrossel Slider dos Testemunhos --- */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialsData.map((data) => (
                            <div key={data.id} className="my-6">

                                {/* O overflow-hidden que adicionei aqui evita que as aspas gigantes e fiquem fora da caixa do mobile! */}
                                <div className='flex flex-col items-center gap-4 shadow-xl py-8 px-6 rounded-2xl mx-4 bg-hero-bg relative overflow-hidden group hover:bg-primary/5 transition-colors duration-300'>

                                    {/* Imagem do Cliente. z-10 pra ela nunca ficar por baixo de backgrounds decorativos como nossas aspas (",,")  */}
                                    <div className='mb-4 z-10 relative'>
                                        <img src={data.img} alt={data.name}
                                            className='rounded-full w-20 h-20 object-cover border-2 border-neutral-bg shadow-md' />
                                    </div>

                                    {/* Textos */}
                                    <div className='flex flex-col items-center gap-4 text-center z-10'>
                                        <div className='space-y-3'>
                                            <p className='text-sm text-main-text opacity-80 italic leading-relaxed'>"{data.text}"</p>
                                            <h1 className='text-xl font-bold text-main-text'>{data.name}</h1>
                                        </div>
                                    </div>

                                    {/* Esse é o truque de design: Uma aspa text-9xl super transparente pra dar textura ao fundo do card */}
                                    <p className='text-main-text/10 text-9xl font-serif absolute top-0 right-4 z-0 pointer-events-none select-none'>
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonial