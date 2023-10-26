import React from 'react'

const ProductCard = [
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100',
        productBrand: 'Gucci Carlton UK',
        productName: 'Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
        productNewPrice: '$14.99',
        ProductPrice: '$19.99'
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&w=384&q=100',
        productBrand: 'Nike Shoes',
        productName: 'NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.',
        productNewPrice: '$39.99',
        ProductPrice: ''
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&w=384&q=100',
        productBrand: 'H&M Global Desi',
        productName: 'Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless',
        productNewPrice: '$30.00',
        ProductPrice: '$40.00'
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100',
        productBrand: 'Gucci Carlton UK',
        productName: 'Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
        productNewPrice: '$14.99',
        ProductPrice: '$19.99'
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&w=384&q=100',
        productBrand: 'Nike Shoes',
        productName: 'NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.',
        productNewPrice: '$39.99',
        ProductPrice: ''
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-22.png&w=384&q=100',
        productBrand: 'H&M Global Desi',
        productName: 'Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless',
        productNewPrice: '$30.00',
        ProductPrice: '$40.00'
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-10.png&w=384&q=100',
        productBrand: 'Gucci Carlton UK',
        productName: 'Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
        productNewPrice: '$14.99',
        ProductPrice: '$19.99'
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-18.png&w=384&q=100',
        productBrand: 'Nike Shoes',
        productName: 'NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.',
        productNewPrice: '$39.99',
        ProductPrice: ''
    },
    {
        ProductImage: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14.png&w=384&q=100',
        productBrand: 'H&M Global Desi',
        productName: 'Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless',
        productNewPrice: '$30.00',
        ProductPrice: '$40.00'
    }
]


function ProductListItems() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {ProductCard.map((items) => {
                return (
                    <>
                        <div className='overflow-hidden flex rounded-md cursor-pointer flex-col  transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-lg  bg-white mb-6'>
                            <img className="w-full" src={items.ProductImage} />
                            <div className="px-6 py-2">
                                <div className="font-bold text-xl mb-2">{items.productBrand}</div>
                                <p className="text-gray-700 truncate text-base">{items.productName}</p>
                            </div>
                            <div className="px-6 pt-2 pb-2">
                                <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5 text-heading">
                                    <span className="inline-block false">{items.productNewPrice}</span>
                                    <span className="sm:text-base font-normal text-gray-800 line-through">{items.ProductPrice}</span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

        </div>
    )
}

export default ProductListItems