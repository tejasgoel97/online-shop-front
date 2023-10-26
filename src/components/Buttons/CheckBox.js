
export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
    console.log({ isChecked })
    return (
        <div className="mb-5 items-center flex">
            <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={isChecked}
                onChange={checkHandler}
                className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-black focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-black checked:hover:bg-black checked:focus:bg-black mr-3"
            />
            <label className=" items-center text-black text-sm cursor-pointer" htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    )
}


