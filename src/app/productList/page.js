"use client"

import React, { useState } from 'react'
import ProductListItems from './ProductListItems'
import ProductCategory from './ProductCategory'
import ProductBrands from './ProductBrands'
import ProductPrice from './ProductPrice'
import ProductColor from './ProductColor'
import Select from 'react-dropdown-select'

const options = [
  {
    id: 1,
    name: "Leanne Graham"
  },
  {
    id: 2,
    name: "Ervin Howell"
  }
];

function ProductList() {

  const [values, setValues] = useState('')

  return (<>
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1 ...">
        <div className='mb-10'>
          <div className="font-bold text-sm text-primaryOne pb-1">Home / Search</div>
        </div>
        <div>
          <div className='block border-b border-gray-300 pb-7 mb-7'>
            <div className='flex items-center justify-between mb-9'>
              <div className="font-semibold text-heading text-xl md:text-2xl">Filters</div>
              <div className='text-xs'>Clear All</div>
            </div>
          </div>

          <ProductCategory />
          <ProductBrands />
          <ProductPrice />
          <ProductColor />
        </div>
      </div>
      <div className="col-span-3 ...">
        <div className='flex justify-between text-center mb-7'>
          <div className="font-bold text-2xl text-primaryOne pb-1">Casual Wear</div>
          <div className='flex justify-around text-center items-center gap-5'>
            <div className='text-sm'>9,608 items</div>
            <div>
              <Select className='w-2' options={options} labelField="name" valueField="id" onChange={(values) => setValues(values)} />
            </div>
          </div>
        </div>
        <ProductListItems />
      </div>
    </div>
  </>
  )
}

export default ProductList