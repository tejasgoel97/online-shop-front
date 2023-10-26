import { useState } from "react"
import { Checkbox } from "@/components/Buttons/CheckBox"

const category = [
    { name: "Woman", checked: false },
    { name: "Man", checked: false },
    { name: "Watch", checked: false },
    { name: "Kids", checked: false },
    { name: "Sports", checked: false },
    { name: "Sunglass", checked: false },
]


function ProductCategory() {
    const [categories, setCategories] = useState(category)

    const updateCheckStatus = index => {
        setCategories(
            categories.map((category, currentIndex) =>
                currentIndex === index
                    ? { ...category, checked: !category.checked }
                    : category
            )
        )

        // or
        // setCategories([
        //   ...categories.slice(0, index),
        //   { ...categories[index], checked: !categories[index].checked },
        //   ...categories.slice(index + 1),
        // ]);
    }

    // const selectAll = () => {
    //     setCategories(categories.map(category => ({ ...category, checked: true })))
    // }
    // const unSelectAll = () => {
    //     setCategories(categories.map(category => ({ ...category, checked: false })))
    // }

    return (
        <div className='block border-b border-gray-300 pb-7 mb-7'>
            {/* <p className="flex justify-around items-center">
                <button onClick={selectAll}>Select All</button>
                <button onClick={unSelectAll}>Unselect All</button>
            </p> */}
            <div className="text-heading text-sm md:text-base font-semibold mb-7">Category</div>

            {categories.map((category, index) => (<>
                <Checkbox
                    key={category.name}
                    isChecked={category.checked}
                    checkHandler={() => updateCheckStatus(index)}
                    label={category.name}
                    index={index}
                />
            </>))}
        </div>
    )
}

export default ProductCategory
