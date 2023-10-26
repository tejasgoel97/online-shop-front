import { useState } from "react"
import { Checkbox } from "@/components/Buttons/CheckBox"

const price = [
    { name: "Under $50", checked: false },
    { name: "$50 to $100", checked: false },
    { name: "$100 to $150", checked: false },
    { name: "$150 to $200", checked: false },
    { name: "$200 to $250", checked: false },
    { name: "$250 to $300", checked: false },
]


function ProductPrice() {
    const [prices, setPrices] = useState(price)

    const updateCheckStatus = index => {
        setPrices(
            prices.map((price, currentIndex) =>
                currentIndex === index
                    ? { ...price, checked: !price.checked }
                    : price
            )
        )

        // or
        // setPrices([
        //   ...prices.slice(0, index),
        //   { ...prices[index], checked: !prices[index].checked },
        //   ...prices.slice(index + 1),
        // ]);
    }

    // const selectAll = () => {
    //     setPrices(prices.map(price => ({ ...price, checked: true })))
    // }
    // const unSelectAll = () => {
    //     setPrices(prices.map(price => ({ ...price, checked: false })))
    // }

    return (
        <div className='block border-b border-gray-300 pb-7 mb-7'>
            {/* <p className="flex justify-around items-center">
                <button onClick={selectAll}>Select All</button>
                <button onClick={unSelectAll}>Unselect All</button>
            </p> */}
            <div className="text-heading text-sm md:text-base font-semibold mb-7">Price</div>

            {prices.map((price, index) => (<>
                <Checkbox
                    key={price.name}
                    isChecked={price.checked}
                    checkHandler={() => updateCheckStatus(index)}
                    label={price.name}
                    index={index}
                />
            </>))}
        </div>
    )
}

export default ProductPrice
