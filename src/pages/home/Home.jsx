// import React from 'react'
// // import Layout from '../../components/layout/Layout'

// import Slider from '../../components/slider/Slider'
// import Category from '../../components/category/Category'
// import Bestsellingproduct from '../../components/Bestsellingproduct/BestSellingproduct'
// import Partners from '../../components/Partners/Partners'
// import Reviews from '../../components/Reviews/Reviews'
// import Navbar from '../../components/navbar/Navbar'
// export default function Home() {
//   return (
//   < >

//   <Slider/>
//   <Category/>
//   <Bestsellingproduct/>
//   <Partners/>
//   <Reviews/>
 
//   </>
//   )
// }


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
// import Bestsellingproduct from '../../components/Bestsellingproduct/BestSellingproduct';
import Partners from '../../components/Partners/Partners';
import Reviews from '../../components/Reviews/Reviews';
import BestJackets from '../../components/Middlepagedesgin/BestJackets';

export default function Home() {
    const [visibleSections, setVisibleSections] = useState({
        slider: false,
        category: false,
        bestselling: false,
        partners: false,
        reviews: false,
    });

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
                    observer.unobserve(entry.target);
                }
            });
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }, []);

    return (
        <>

     
            <motion.div
                id="slider"
                className="fade-in  "
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.slider ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <Slider />
            </motion.div>
            <motion.div
                id="category"
                className="fade-in"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={visibleSections.category ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
            >
                <Category />
            </motion.div>
            <motion.div
                id="bestselling"
                className="fade-in"
                initial={{ opacity: 0, rotate: -10 }}
                animate={visibleSections.bestselling ? { opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
              <BestJackets/>
            </motion.div>

            {/* <motion.div
                id="bestselling"
                className="fade-in"
                initial={{ opacity: 0, rotate: -10 }}
                animate={visibleSections.bestselling ? { opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
              <Fashionmiddle/>
            </motion.div> */}



            
            <motion.div
                id="partners"
                className="fade-in"
                initial={{ opacity: 0, x: -100 }}
                animate={visibleSections.partners ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <Partners />
            </motion.div>
            <motion.div
                id="reviews"
                className="fade-in"
                initial={{ opacity: 0, y: 50 }}
                animate={visibleSections.reviews ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <Reviews />
            </motion.div>


        
        </>
    );
}