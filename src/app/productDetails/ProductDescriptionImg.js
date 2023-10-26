'use client'

import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ProductImg = [
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/2_1213291a-e55a-45a1-88e8-dc66088ab37e_900x.jpg?v=1687253982'
  },
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/1_62d94e0a-e49c-4fb1-8a64-2b11e633e54d_900x.jpg?v=1687253982'
  },
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/4_1a0ee831-92ec-4795-9d57-7630771c514e_900x.jpg?v=1687253982'
  },
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/6_900x.jpg?v=1687253982'
  },
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/5_91359971-2f6a-407b-b63d-4df6894a49e8_900x.jpg?v=1687253982'
  },
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/8_900x.jpg?v=1687253982'
  },
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/2_1213291a-e55a-45a1-88e8-dc66088ab37e_900x.jpg?v=1687253982'
  },
  {
    Image: 'https://miona-vinovatheme.myshopify.com/cdn/shop/products/1_62d94e0a-e49c-4fb1-8a64-2b11e633e54d_900x.jpg?v=1687253982'
  }
]







function ProductDescriptionImg() {

  // const [activePhoto, setActivePhoto] = useState(1);
  // const handleClickPhoto = (index) => {
  //   setActivePhoto(index);
  // };

  const videoSlide = {
    loop: true,
    margin: 30,
    navSpeed: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 1,
      }
    }
  }


  const videoProductSlide = {
    loop: true,
    margin: 10,
    navSpeed: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 4,
      },
      576: {
        items: 6,
      },
      768: {
        items: 5,
      },
      1200: {
        items: 5,
      }
    }
  }


  return (
    <div>

      {/* <OwlCarousel className="owl-theme owl-carousel" {...videoSlide}>
        {
          ProductImg.map((image, index) => {
            return (
              <>
                <div>
                      <img src={image.Image} />
                    </div>
              </>
            )
          })
        }
      </OwlCarousel> */}






      {/* <OwlCarousel className="owl-theme owl-carousel" {...videoProductSlide}>
        {
          ProductImg.map((image, index) => {
            return (
              <>
                <div>
                      <img src={image.Image} />
                    </div>
              </>
            )
          })
        }
      </OwlCarousel> */}




      {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {
          ProductImg.map((image, index) => {
            return (
              <>
                <div className='flex justify-center' onClick={() => handleClickPhoto(index)}>
                  <img src={image.Image} className={activePhoto === index ? 'border-b-4 transition duration-500 border-orange-500' : ''} />
                </div>
              </>
            )
          })
        }
      </div> */}
    </div>
  )
}

export default ProductDescriptionImg