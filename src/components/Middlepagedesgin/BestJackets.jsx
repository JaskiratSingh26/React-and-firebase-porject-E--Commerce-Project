


import React, { useContext, useState, useEffect } from 'react';
import Mycontext from '../../Context/Mycontext';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router';

function BestJackets(props) {
    let Navigate = useNavigate();
    
    const responsive = {
        desktop: { breakpoint: { max: 5000, min: 1024}, items: 4, slidesToSlide: 4 },
        middel:{    breakpoint: { max: 1024, min:800}, items: 3, slidesToSlide:3},
        tablet: { breakpoint: { max: 800, min: 464 }, items: 3, slidesToSlide: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 1 }
    };

    let { Allproducts } = useContext(Mycontext);
    let [Jackets, setJackets] = useState([]);
    let [FashionProducts, setFashionProducts] = useState([]); // New state for fashion products

    useEffect(() => {
        let JacketsFilter = Allproducts.filter(item => item.Product.category === 'jacket');
        setJackets(JacketsFilter);

        let FashionFilter = Allproducts.filter(item => item.Product.category === 'fashion'); // Filter for fashion products
        setFashionProducts(FashionFilter);
         // Set fashion products
    }, [Allproducts]);
    // console.log('all data ',Allproducts);
    return (
        <div>
            <div className='bg-white bg-opacity-80 shadow-lg rounded-lg p-5'>
                <div className='px-2 py-2'>
                    <h1 className='text-[4vh] font-extrabold'>
                        Featured Jackets
                    </h1>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        infinite={true}
                        partialVisible={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={props.deviceType}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {Jackets.map((item, index) => (
                            <div key={index} className='carousel-item'>
                                <img
                                    onClick={() => {
                                        Navigate(`/product/${item.Product.ProductID}`);
                                    }}
                                    className='h-56 rounded-lg mt-4 bg-transparent'
                                    src={item.Product.url}
                                    style={{ border: '2px solid #fff', transition: 'box-shadow 0.3s' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
    
            {/* New div for Fashion Products */}
            <div className='bg-white bg-opacity-80 shadow-lg rounded-lg p-5 mt-5'>
                <div className='px-2 py-2'>
                    <h1 className='text-[4vh] font-extrabold'>
                        Featured Fashion
                    </h1>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        infinite={true}
                        partialVisible={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={props.deviceType}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {FashionProducts.map((item, index) => (
                            <div key={index} className='carousel-item'>
                                <img
                                    onClick={() => {
                                        Navigate(`/product/${item.Product.ProductID}`);
                                    }}
                                    className=' h-56 rounded-lg mt-4 bg-transparent'
                                    src={item.Product.url}
                                    style={{ border: '2px solid #fff', transition: 'box-shadow 0.3s' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
 
}

export default BestJackets;