import React from 'react'


export default function Reviews() {
    const reviews = [
        {
          id: 1,
          image: 'https://tse1.mm.bing.net/th?id=OIP.R-LVdzRecRFhwxZqgoobQwHaE8&pid=Api&P=0&h=220',
          name: 'Elon Muk',
          review: 'Great products and fast shipping! Will definitely shop here again.',
        },
        {
          id: 2,
          image: 'https://media.cnn.com/api/v1/images/stellar/prod/230629105952-donald-trump-0624.jpg?c=16x9&q=h_720,w_1280,c_fill',
          name: 'Trump',
          review: 'The quality of the items exceeded my expectations. Highly recommended!',
        },
        {
          id: 3,
          image: 'https://tse2.mm.bing.net/th?id=OIP.yY38gdTH6k-GXSE-lDuiaQHaEK&pid=Api&P=0&h=220',
          name: 'Modi',
          review: 'Excellent customer service and a wide range of products to choose from.',
        },
      ]
      
  return (
    <div
    className='py-9 px-9'>
        <div className=' flex  flex-col items-center'>

        <h1 className=' font-extrabold text-[5vh]'>
        Testimonial   </h1>
        <h2 className='font-bold text-[2vh]' >What our customers are saying</h2>
        </div>


    <div>
{/* revies card */}

<div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
          >
            <div className="relative h-64">
              <img
                src={review.image}
                alt={`Review by ${review.name}`}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{review.name}</h3>
              <p className="text-gray-700">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>

   
</div>
 

  )
}
