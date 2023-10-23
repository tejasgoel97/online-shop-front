'use client'

import { useEffect, useState } from "react"

const Product = () => {
    const [productName, setProductName] = useState("")

    useEffect(()=>{
        console.log("inside use effect")
        //axios
        setProductName("hjkjhkjh")
    },[])

    return <div>
        {console.log("inside render")}
        This is product Page
        <h1>{productName}</h1>
    </div>
}

export default Product