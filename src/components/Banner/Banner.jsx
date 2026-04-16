import React from 'react'
import BannerImg from '../../assets/women/woman1.png'
import { Shield, Truck, CreditCard, TicketPercent } from 'lucide-react'

const Banner = () => {
    return (
        <section className='min-h-137.5 flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* Image section */}
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <img src={BannerImg} alt="Banner" className='max-w-100 h-87.5 w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                    </div>
                    {/* Text and icons section */}
                    <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>
                            Liquidação de inverno com até 50% Off
                        </h1>
                        <p className='text-sm text-main-text tracking-wide leading-5'>
                            Encontre as melhores ofertas de inverno com descontos incríveis em nossos produtos selecionados.
                        </p>
                        <div className='flex flex-col gap-4'>
                            <div data-aos="fade-up" data-aos-delay="400" className='flex items-center gap-4'>
                                <Shield
                                    className='text-4xl h-10 w-10 shadow-sm p-2 rounded-full bg-icon-bg1 text-main-text'
                                />
                                <p>Produtos de Qualidade</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="500" className='flex items-center gap-4'>
                                <Truck
                                    className='text-4xl h-10 w-10 shadow-sm p-2 rounded-full bg-icon-bg2 text-main-text'
                                />
                                <p>Entrega Rápida</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600" className='flex items-center gap-4'>
                                <CreditCard
                                    className='text-4xl h-10 w-10 shadow-sm p-2 rounded-full bg-icon-bg3 text-main-text'
                                />
                                <p>Pagamento Seguro</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="700" className='flex items-center gap-4'>
                                <TicketPercent
                                    className='text-4xl h-10 w-10 shadow-sm p-2 rounded-full bg-icon-bg4 text-main-text'
                                />
                                <p>Descontos Exclusivos</p>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <Truck />
                    <CreditCard />
                    <TicketPercent /> */}
                </div>
            </div>
        </section>
    )
}

export default Banner