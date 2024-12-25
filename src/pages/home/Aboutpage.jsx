// import React from 'react'
// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-center mb-8">About Our Company</h1>
        
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//           <p className="text-gray-700 mb-4">
//             Founded in 2023, our e-commerce company has been dedicated to providing high-quality products and exceptional customer service. We started with a simple idea: to make online shopping easy, enjoyable, and accessible to everyone.
//           </p>
//           <img
//             src="/first.png"
//             alt="Our store front"
//             className="rounded-lg shadow-md mx-auto w-full max-w-2xl h-auto"
//           />
//         </section>
        
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//           <p className="text-gray-700">
//             We strive to revolutionize the online shopping experience by offering a curated selection of products, competitive prices, and unparalleled customer support. Our goal is to build lasting relationships with our customers and become their go-to destination for all their needs.
//           </p>
//         </section>
        
//         <section className="mb-12  ">
//           <h2 className="text-2xl font-semibold mb-4">Our Developers</h2>
//           <div className="">
//             {[
//              { name: 'Jaskirat singh ', role: 'Full Stack Developer', image: '/developer.jpg' },
//             ].map((developer) => (
//               <div 
//                 key={developer.name} 
//                 className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
//               >
//                 <img
//                   src={developer.image}
//                   alt={developer.name}
//                   className="w-full h-[50vh] object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-[3vh] font-extrabold">{developer.name}</h3>
//                   <p className="text-gray-600  font-extrabold">{developer.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
        
//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="mb-4">
//               <span className="font-semibold">Address: New delhi</span> 
//             </div>
//             <div className="mb-4">
//               <span className="font-semibold">Phone:</span> 8860327***
//             </div>
//             <div>
//               <span className="font-semibold">Email:</span> <a href="mailto:info@yourcompany.com" className="text-blue-600 hover:underline">jaskirattt1@gmail.com</a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// import React from 'react';

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-5xl font-bold text-left mb-8 text-blue-600">About Our Company</h1>
        
//         <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-3xl font-semibold mb-4 text-green-600">Our Story</h2>
//           <p className="text-gray-700 mb-4">
//             We started our journey in 2023 with a simple goal: to make online shopping easy and fun for everyone. Our founders wanted to create a place where people could find high-quality products without any hassle. Since then, we have worked hard to build a company that values quality and customer satisfaction above all else.
//           </p>
//           <p className="text-gray-700 mb-4">
//             Our team is passionate about what we do, and we are always looking for ways to improve. We believe that shopping online should be a pleasant experience, and we are here to make that happen for you.
//           </p>
//           <img
//             src="/first.png"
//             alt="Our store front"
//             className="rounded-lg shadow-lg mx-auto w-full max-w-md h-auto transition-transform duration-300 transform hover:scale-90"
//           />
//         </section>
        
//         <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-3xl font-semibold mb-4 text-purple-600">Our Mission</h2>
//           <p className="text-gray-700">
//             Our mission is simple: to provide you with the best online shopping experience possible. We want to offer a wide range of products at great prices, all while ensuring that our customer service is top-notch. 
//           </p>
//           <p className="text-gray-700">
//             We aim to build strong relationships with our customers, so you can always count on us for your shopping needs. Your satisfaction is our priority, and we are committed to making your experience enjoyable and easy.
//           </p>
//         </section>
        
//         <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-3xl font-semibold mb-4 text-orange-600">Our Developer</h2>
//           <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-150">
//             <img
//               src="/developer.jpg"
//               alt="Jaskirat Singh"
//               className="w-48 h-48 object-cover rounded-full mx-auto mt-4 border-4 border-gray-300 shadow-md transition-transform duration-300 transform hover:scale-150"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-extrabold">Jaskirat Singh</h3>
//               <p className="text-gray-600 font-semibold">Full Stack Developer</p>
//             </div>
//           </div>
//         </section>

//         <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-3xl font-semibold mb-4 text-red-600">Testimonials</h2>
//           <div className="bg-gray-50 rounded-lg p-4">
//             <p className="text-gray-700 mb-4">"This company has transformed my online shopping experience! Highly recommend!" -  Elon musk </p>
//             <p className="text-gray-700">"Exceptional service and quality products. I will definitely shop here again!" - Mark Zuckerberg </p>
//           </div>
//         </section>
        
//         <section className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-3xl font-semibold mb-4 text-teal-600">Contact Us</h2>
//           <div className="mb-4">
//             <span className="font-semibold">Address:</span> New Delhi, India
//           </div>
//           <div className="mb-4">
//             <span className="font-semibold">Phone:</span> +91 8860327***
//           </div>
//           <div>
//             <span className="font-semibold">Email:</span> <a href="mailto:jaskirattt1@gmail.com" className="text-blue-600 hover: underline">jaskirattt1@gmail.com</a>
//           </div>
//         </section>
//       </main>

//       <style jsx>{`
//         .hover-expand {
//           transition: transform 0.5s ease-in-out;
//         }
//         .hover-expand:hover {
//           transform: scale(10);
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100vw;
//           height: 100vh;
//           z-index: 50;
//         }
//       `}</style>
//     </div>
//   );
// }




import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-left mb-8 text-blue-600">About Our Company</h1>
        
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Our Story</h2>
          <p className="text-gray-700 mb-4">
            We started our journey in 2023 with a simple goal: to make online shopping easy and fun for everyone. Our founders wanted to create a place where people could find high-quality products without any hassle. Since then, we have worked hard to build a company that values quality and customer satisfaction above all else.
          </p>
          <p className="text-gray-700 mb-4">
            Our team is passionate about what we do, and we are always looking for ways to improve. We believe that shopping online should be a pleasant experience, and we are here to make that happen for you.
          </p>
          <img
            src="/first.png"
            alt="Our store front"
            className="rounded-lg shadow-lg mx-auto w-full max-w-md h-auto transition-transform duration-300 transform hover:scale-90"
          />
        </section>
        
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-purple-600">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is simple: to provide you with the best online shopping experience possible. We want to offer a wide range of products at great prices, all while ensuring that our customer service is top-notch. 
          </p>
          <p className="text-gray-700">
            We aim to build strong relationships with our customers, so you can always count on us for your shopping needs. Your satisfaction is our priority, and we are committed to making your experience enjoyable and easy.
          </p>
        </section>
        
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-orange-600">Our Developer</h2>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-150 hover:animate-pop">
            <img
              src="/developer.jpg"
              alt="Jaskirat Singh"
              className="w-48 h-48 object-cover rounded-full mx-auto mt-4 border-4 border-gray-300 shadow-md transition-transform duration-300 transform hover:scale-150"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-extrabold">Jaskirat Singh</h3>
              <p className="text-gray-600 font-semibold">Full Stack Developer</p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">Technologies We Use</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* HTML/CSS Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-red-500">HTML/CSS</h3>
          <p className="text-gray-600 mb-4">
            Modern markup and styling for creating responsive and beautiful web interfaces
          </p>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
          <a href="https://www.geeksforgeeks.org/html-css/"  target='_blank'>

Learn more

</a>
          </button>
            
        </div>

        {/* JavaScript Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">JavaScript</h3>
          <p className="text-gray-600 mb-4">
            Dynamic programming language for interactive and modern web applications
          </p>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
  


          <a href="https://www.geeksforgeeks.org/javascript/?ref=shm" target="_blank">

Learn more

</a>
           
          </button>
        </div>

        {/* React Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-500">React</h3>
          <p className="text-gray-600 mb-4">
            Frontend library for building user interfaces with reusable components
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            <a href="https://www.geeksforgeeks.org/react/" target="_blank">

            Learn more

            </a>
          </button>
        </div>

        {/* Node.js Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-green-500">Firebase </h3>
          <p className="text-gray-600 mb-4">
          Firebase  offers us a wide range of tools and extensions to develop high-quality applications with greater efficiency.
 </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">

              
                <a href="https://www.geeksforgeeks.org/firebase-tutorial/" target="_blank">

Learn more

</a>
     
          </button>
        </div>

        {/* TypeScript Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">React Icons </h3>
          <p className="text-gray-600 mb-4">
            React Icons library for easy access to popular icons from various sourcess
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          <a href="https://www.npmjs.com/package/react-icons" target="_blank">

Learn more

</a>
          </button>
        </div>

        {/* Tailwind Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-teal-500">Tailwind CSS</h3>
          <p className="text-gray-600 mb-4">
            Utility-first CSS framework for rapidly building custom user interfaces
          </p>
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors">
          <a href="https://www.geeksforgeeks.org/tailwind-css/" target="_blank">

Learn more

</a>
          
          </button>
        </div>
      </div>
    </section>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-red-600">Testimonials</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 mb-4">"This company has transformed my online shopping experience! Highly recommend!" - Customer A</p>
            <p className="text-gray-700">"Exceptional service and quality products. I will definitely shop here again!" - Customer B</p>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-teal-600">Contact Us</h2>
          <div className="mb-4">
            <span className="font-semibold">Address:</span> New Delhi, India
          </div>
          <div className="mb-4">
            <span className="font-semibold">Phone:</span> +91 8860327***
          </div>
          <div>
            <span className="font-semibold">Email:</span> <a href="mailto:jaskirattt1@gmail.com" className=" text-blue-600 hover:underline">jaskirattt1@gmail.com</a>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hover-expand {
          transition: transform 0.5s ease-in-out;
        }
        .hover-expand:hover {
          transform: scale(10);
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 50;
        }
        @keyframes pop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pop {
          animation: pop 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}