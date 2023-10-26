import React from 'react'

function ProductNavbar({ProductTitle}) {
  return (
    <div className='flex gap-3 items-center my-6'>
        <div className='text-[#505157] text-sm'>Home</div>
        <div className='bg-[#505157] rounded-full w-1 h-1'></div>
        <div className='text-[#505157] text-sm'>{ProductTitle}</div>
    </div>
  )
}

export default ProductNavbar