import { useState } from "react"
import { Checkbox } from "@/components/Buttons/CheckBox"

const productColor = [
    { name: "Black", checked: false, color: '#3f3cbb' },
    { name: "Blue", checked: false, color: '#121063' },
    { name: "Olive", checked: false, color: '#565584' },
    { name: "Maroon", checked: false, color: '#3ab7bf' },
    { name: "Brown", checked: false, color: '#ecebff' },
    { name: "White", checked: false, color: '#ffffff' },
]


function ProductColor() {
    const [productColors, setProductColors] = useState(productColor)

    const updateCheckStatus = index => {
        setProductColors(
            productColors.map((productColor, currentIndex) =>
                currentIndex === index
                    ? { ...productColor, checked: !productColor.checked }
                    : productColor
            )
        )

        // or
        // setProductColors([
        //   ...productColors.slice(0, index),
        //   { ...productColors[index], checked: !productColors[index].checked },
        //   ...productColors.slice(index + 1),
        // ]);
    }

    // const selectAll = () => {
    //     setProductColors(productColors.map(productColor => ({ ...productColor, checked: true })))
    // }
    // const unSelectAll = () => {
    //     setProductColors(productColors.map(productColor => ({ ...productColor, checked: false })))
    // }

    return (
        <div className='block border-b border-gray-300 pb-7 mb-7'>
            {/* <p className="flex justify-around items-center">
                <button onClick={selectAll}>Select All</button>
                <button onClick={unSelectAll}>Unselect All</button>
            </p> */}
            <div className="text-heading text-sm md:text-base font-semibold mb-7">Colors</div>

            {productColors.map((productColor, index) => (<>
                <Checkbox
                    key={productColor.name}
                    isChecked={productColor.checked}
                    checkHandler={() => updateCheckStatus(index)}
                    label={productColor.name}
                    index={index}
                />
            </>))}
        </div>
    )
}

export default ProductColor
