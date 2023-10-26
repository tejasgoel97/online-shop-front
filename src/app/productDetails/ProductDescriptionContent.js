'use client'

import React, { useState } from 'react'


const productSize = [
    { size: 'sx' },
    { size: 's' },
    { size: 'm' },
    { size: 'l' },
    { size: 'xl' },
    { size: 'xxl' },
]

function ProductDescriptionContent() {
    const [activeSize, setActiveSize] = useState(1);
    const [count, setCount] = useState(1);

    const handleClickSize = (index) => {
        setActiveSize(index);
    };
    const handleChange = (e) => {
        count(e.target.value);
    }

    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='text-[#222222] text-2xl font-bold capitalize cursor-pointer'>High turtleneck jumper</div>
                <div className='flex items-center justify-center  rounded-full  w-10 h-10 bg-[#ededed] cursor-pointer'>
                    <div className=''>c</div>
                </div>
            </div>
            <div className='flex flex-col gap-9'>
                <div></div>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-extrabold text-[#232630] items-center'>$15.00</div>
                    <div className='text-[#3f4045] text-sm'>
                        Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered crocodile complete its elegant appeal.Lorem ipsum
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#222222] uppercase text-xs font-bold'>Color : Black White</div>
                    <div className='flex flex-wrap gap-2'>
                        <div className='flex items-center justify-center rounded-full p-1 border border-gray-200 hover:border-gray-400 w-12 h-12 cursor-pointer'>
                            <div className="rounded-full w-10 h-10 bg-[#ef4444]" ></div>
                        </div>
                        <div className='flex items-center justify-center rounded-full p-1 border border-gray-200 hover:border-gray-400 w-12 h-12 cursor-pointer'>
                            <div className="rounded-full w-10 h-10 bg-[#fbbf24]" ></div>
                        </div>
                        <div className='flex items-center justify-center rounded-full p-1 border border-gray-200 hover:border-gray-400 w-12 h-12 cursor-pointer'>
                            <div className="rounded-full w-10 h-10 bg-[#84cc16]" ></div>
                        </div>
                        <div className='flex items-center justify-center rounded-full p-1 border border-gray-200 hover:border-gray-400 w-12 h-12 cursor-pointer'>
                            <div className="rounded-full w-10 h-10 bg-[#06b6d4]" ></div>
                        </div>
                        <div className='flex items-center justify-center rounded-full p-1 border border-gray-200 hover:border-gray-400 w-12 h-12 cursor-pointer'>
                            <div className="rounded-full w-10 h-10 bg-[#818cf8]" ></div>
                        </div>
                        <div className='flex items-center justify-center rounded-full p-1 border border-gray-200 hover:border-gray-400 w-12 h-12 cursor-pointer'>
                            <div className="rounded-full w-10 h-10 bg-[#c084fc]" ></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between'>
                        <div className='text-[#222222] uppercase text-xs font-bold'>Size: SX</div>
                        <div className='text-[#222222] uppercase text-xs font-bold cursor-pointer'>Size Guide</div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {
                            productSize.map((size, index) => {
                                return (

                                    <div onClick={() => handleClickSize(index)}
                                        className={activeSize === index ? 'flex items-center text-white bg-slate-950 border hover:border-slate-950 rounded px-5 h-12 w-20 justify-center text-center text-xs font-bold uppercase cursor-pointer' : 'flex items-center border hover:border-slate-950 rounded px-5 h-12  w-20 justify-center text-center text-xs font-bold uppercase cursor-pointer'} >{size.size}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#222222] uppercase text-xs font-bold'>Quantity:</div>
                    <div className='grid grid-cols-4 gap-2'>
                        <div className="col-span-1">
                            <div className="flex flex-row h-12 w-full relative bg-transparent border rounded">
                                <button onClick={decrementCount} className=" bg-[#fff] text-gray-600 hover:text-gray-700  h-full w-16 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="text" value={count} onChange={() => handleChange} className=" focus:outline-none text-center w-full bg-[#fff] font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" />
                                <button onClick={incrementCount} className="bg-[#fff] text-gray-600 hover:text-gray-700  h-full w-16 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex justify-center items-center rounded bg-[#e7e8eb] h-full text-slate-950 hover:bg-slate-950 hover:text-white hover:transition hover:duration-500 cursor-pointer text-xs font-bold uppercase'>
                                Add to Bag
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center border rounded bg-slate-950 text-white text-xs font-bold uppercase hover:bg-[#fb5300] hover:transition hover:duration-500 cursor-pointer h-12'>Buy It Now</div>
                </div>

            </div>
        </div>
    )
}

export default ProductDescriptionContent