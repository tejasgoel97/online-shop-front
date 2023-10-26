import { useState } from "react"
import { Checkbox } from "@/components/Buttons/CheckBox"

const brand = [
    { name: "Shovia", checked: false },
    { name: "Elegance", checked: false },
    { name: "Hunter Shoes", checked: false },
    { name: "Club Shoes", checked: false },
    { name: "Blaze Fashion", checked: false },
    { name: "Fashadil", checked: false },
]


function ProductBrands() {
    const [brands, setBrands] = useState(brand)

    const updateCheckStatus = index => {
        setBrands(
            brands.map((brand, currentIndex) =>
                currentIndex === index
                    ? { ...brand, checked: !brand.checked }
                    : brand
            )
        )

        // or
        // setBrands([
        //   ...brands.slice(0, index),
        //   { ...brands[index], checked: !brands[index].checked },
        //   ...brands.slice(index + 1),
        // ]);
    }

    // const selectAll = () => {
    //     setBrands(brands.map(brand => ({ ...brand, checked: true })))
    // }
    // const unSelectAll = () => {
    //     setBrands(brands.map(brand => ({ ...brand, checked: false })))
    // }

    return (
        <div className='block border-b border-gray-300 pb-7 mb-7'>
            {/* <p className="flex justify-around items-center">
                <button onClick={selectAll}>Select All</button>
                <button onClick={unSelectAll}>Unselect All</button>
            </p> */}
            <div className="text-heading text-sm md:text-base font-semibold mb-7">Brands</div>

            {brands.map((brand, index) => (<>
                <Checkbox
                    key={brand.name}
                    isChecked={brand.checked}
                    checkHandler={() => updateCheckStatus(index)}
                    label={brand.name}
                    index={index}
                />
            </>))}
        </div>
    )
}

export default ProductBrands
