import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="bg-neutral-bg min-h-screen transition-colors duration-300">

      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Products Section */}
        <Products />
        {/* Top Products Section */}
        <TopProducts />
        {/* Banner Section */}
        <Banner />
        {/* Subscribe Section */}
        <Subscribe />
        {/* Testimonial Section */}
        <Testimonial />
      </main>
      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App