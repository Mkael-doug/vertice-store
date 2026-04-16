import React, { useState } from 'react'
import Image1 from '../../assets/Hero/couple.png'
import Image2 from '../../assets/Hero/woman.png'
import Image3 from '../../assets/Hero/shopping.png'
import SliderDefault from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

// Essa linha extra garante que pegamos o componente real, não importa como a lib exportou
const Slider = SliderDefault.default || SliderDefault;



const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Até 50% de desconto em todas as roupas",
        description: "Aproveite nossa incrível promoção de até 50% de desconto em todas as roupas! Renove seu guarda-roupa com estilo e economia. Não perca essa oportunidade única de se vestir bem por menos!"
    },
    {
        id: 2,
        img: Image2,
        title: "30% off em todas as roupas femininas",
        description: "Aproveite nossa promoção exclusiva de 30% de desconto em todas as roupas femininas! Renove seu guarda-roupa com estilo e economia. E arrase em qualquer ocasião!"
    },
    {
        id: 3,
        img: Image3,
        title: "Até 70% de desconto em todos os produtos",
        description: "Não perca a chance de economizar até 70% em todos os nossos produtos! Aproveite esta oferta incrível e renove seu estilo com descontos imperdíveis. Corra, as melhores ofertas estão aqui!"
    },
]


const HeroSlide = ({ data, isActive }) => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* Seção de texto */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>

                    {/* 3. O TÍTULO (zoom-out equivalente) */}
                    <div>
                        <h1
                            className={`text-4xl sm:text-5xl lg:text-6xl font-bold pb-4 text-main-text transition-all duration-700 ease-out transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                }`}
                        >
                            {data.title}
                        </h1>
                    </div>

                    {/* 4. A DESCRIÇÃO (fade-up com delay) */}
                    <div>
                        <p
                            className={`text-sm pb-4 text-main-text transition-all duration-700 ease-out transform delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            {data.description}
                        </p>
                    </div>

                    {/* 5. O BOTÃO (fade-up com mais delay) */}
                    <div>
                        <div
                            className={`flex justify-center sm:justify-start transition-all duration-700 ease-out transform delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <button className='bg-linear-to-r from-primary to-secondary hover:scale-105 transition-transform duration-200 text-white py-2 px-4 rounded-full'>
                                Compre Agora
                            </button>
                        </div>
                    </div>
                </div>

                {/* Seção de imagens */}
                <div className='order-1 sm:order-2'>
                    {/* 6. A IMAGEM (zoom-in) */}
                    <div className='relative z-10'>
                        {/* Wrapper de Animação Customizada */}
                        <div
                            className={`transition-all duration-700 ease-out transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                }`}
                        >
                            <img
                                src={data.img}
                                alt={data.title}
                                className='w-[320px] h-[320px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto drop-shadow-md lg:drop-shadow-xl transition-all duration-300'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        // Usamos beforeChange para capturar a transição desde o primeiro instante real
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        },
    };

    return (
        <section id='hero' className='relative overflow-hidden min-h-137.5 sm:min-h-162.5 bg-hero-bg flex justify-center items-center transition-all duration-300'>
            {/* background */}
            <div className='h-175 w-175 bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-0'></div>

            {/* hero section */}
            <div className='container pb-8 sm:pb-0 relative z-10'>
                <Slider {...settings}>
                    {ImageList.map((data, index) => (
                        <HeroSlide key={data.id} data={data} isActive={currentSlide === index} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Hero;