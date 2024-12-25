

// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import './Partners.css'; // Import the CSS file for styles

// function Partners(props) {
//     const responsive = {
//         desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 3 },
//         tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
//         mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
//     };

//     let companies = [
//         { image: 'https://img.etb2bimg.com/files/retail_files/company/thumb_logo-Flipkart-1419592613.png' },
//         { image: 'https://tse2.mm.bing.net/th?id=OIP.pOPROpdILwWcNlMBFd31EgHaHa&pid=Api&P=0&h=220' },
//         { image: 'https://images.creativemarket.com/0.1.0/ps/5012350/1820/1214/m1/fpnw/wm0/online-shop-1-01-.jpg?1536258181&s=d12191d242a9b616ad624a6e69888a97' },
//         { image: 'https://cdn.dribbble.com/users/2370732/screenshots/9920313/cloth_shop_logo_design_4x.png' },
//         { image: 'https://tse2.mm.bing.net/th?id=OIP.V3iGJ00XXYk4zt2uIB_x0gHaHa&pid=Api&P=0&h=220' },
//         { image: 'https://tse1.mm.bing.net/th?id=OIP.-p4tUD5eujWyv8nil6yAxgHaFj&pid=Api&P=0&h=220' },
//         { image: 'https://tse4.mm.bing.net/th?id=OIP.BcaHKJ2t2Syq8qboWwnuSgHaHa&pid=Api&P=0&h=220' }
//     ];

//     return (
//         <div className='mt-5 py-20 px-20' style={{ background: '' }}> {/* New outer background color */}
//             <div className='py-14 px-14' style={{ background: '', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
//                 <h1 className='text-center font-extrabold text-[4vh] mb-5' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}> Our Partners</h1>
//                 <Carousel
//                     swipeable={false}
//                     draggable={false}
//                     responsive={responsive}
//                     infinite={true}
//                     partialVisible={true}
//                     autoPlay={true}
//                     autoPlaySpeed={2000}
//                     keyBoardControl={true}
//                     customTransition="all .5"
//                     transitionDuration={500}
//                     containerClass="carousel-container"
//                     removeArrowOnDeviceType={["tablet", "mobile"]}
//                     deviceType={props.deviceType}
//                     itemClass="carousel-item-padding-40-px"
//                 >
//                     {companies.map((company, index) => (
//                         <div key={index} className='carousel-item'>
//                             <img className='py-5 px-5 h-56 rounded-lg mt-4 bg-transparent' src={company.image} alt={`Company ${index + 1}`} style={{ border: '2px solid #fff', transition: 'box-shadow 0.3s' }} />
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//         </div>
//     );
// }

// export default Partners;



import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Partners.css'; // Import the CSS file for styles

function Partners(props) {
    const responsive = {

        desktop: { breakpoint: { max: 5000, min: 1024}, items: 3, slidesToSlide: 3 },
        middel:{    breakpoint: { max: 1024, min:800}, items: 2, slidesToSlide:2},
        tablet: { breakpoint: { max: 800, min: 464 }, items: 1, slidesToSlide: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
      };

    let companies = [
        { image: 'https://img.etb2bimg.com/files/retail_files/company/thumb_logo-Flipkart-1419592613.png' },
        { image: 'https://tse2.mm.bing.net/th?id=OIP.pOPROpdILwWcNlMBFd31EgHaHa&pid=Api&P=0&h=220' },
        { image: 'https://images.creativemarket.com/0.1.0/ps/5012350/1820/1214/m1/fpnw/wm0/online-shop-1-01-.jpg?1536258181&s=d12191d242a9b616ad624a6e69888a97' },
        { image: 'https://cdn.dribbble.com/users/2370732/screenshots/9920313/cloth_shop_logo_design_4x.png' },
        { image: 'https://tse2.mm.bing.net/th?id=OIP.V3iGJ00XXYk4zt2uIB_x0gHaHa&pid=Api&P=0&h=220' },
        { image: 'https://tse1.mm.bing.net/th?id=OIP.-p4tUD5eujWyv8nil6yAxgHaFj&pid=Api&P=0&h=220' },
        { image: 'https://tse4.mm.bing.net/th?id=OIP.BcaHKJ2t2Syq8qboWwnuSgHaHa&pid=Api&P=0&h=220' }
    ];

    return (
        <div className={`mt-5 py-20 px-20  max-sm:p-0  ${props.deviceType === 'mobile' ? 'p-0' : ''}`} style={{ background: '' }}>
            <div className={`py-14 px-14 ${props.deviceType === 'mobile' ? 'p-0' : ''}`} style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <h1 className='text-center font-extrabold text-[4vh] mb-5' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}> Our Partners</h1>
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
                    {companies.map((company, index) => (
                        <div key={index} className='carousel-item'>
                            <img className={`py-5 px-5 h-56 rounded-lg mt-4 bg-transparent ${props.deviceType === 'mobile' ? 'h-auto' : ''}`} src={company.image} alt={`Company ${index + 1}`} style={{ border: '2px solid #fff', transition: 'box-shadow 0.3s' }} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Partners;