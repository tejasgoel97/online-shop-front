"use client"

import { useEffect, useState } from "react"


const ProductInfo = () => {
    const [data, setData] = useState("")

    console.log("in product info")

    async function fetchData(){
        console.log("in main page");
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const dataaaa = await res.json()
        setData(JSON.stringify(dataaaa))
    }
    useEffect(()=>{
        fetchData()
    },[])



    return <div>
        productInfo
        {data}
    </div>
}

export default ProductInfo