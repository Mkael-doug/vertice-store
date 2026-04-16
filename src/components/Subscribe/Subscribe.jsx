import React from 'react'
import Banner from '../../assets/website/banner.png'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
}


const Subscribe = () => {
    return (
        <div
            id='subscribe'
            data-aos="zoom-in"
            className='mb-20 bg-hero-bg text-white'
            style={BannerImg}>
            <div className='container py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1
                        className='text-xl text-center! sm:text-left sm:text-3xl font-semibold'
                    >
                        Receba nossas novidades
                    </h1>
                    <input
                        data-aos="fade-up"
                        type="text"
                        placeholder='Digite seu email'
                        className='w-full p-3 bg-hero-bg border-none rounded-full mt-4 text-main-text outline-none' />
                </div>
            </div>
        </div>
    )
}

export default Subscribe