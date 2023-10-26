import React from 'react'
import ProductNavbar from './ProductNavbar'
import ProductDescriptionImg from './ProductDescriptionImg'
import ProductDescriptionContent from './ProductDescriptionContent'

function ProductDescription() {
  return (
    <div>
        <ProductNavbar ProductTitle="High turtleneck jumper" />
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-14'>
            <div><ProductDescriptionImg /></div>
            <div><ProductDescriptionContent /></div>
        </div>
    </div>
  )
}

export default ProductDescription