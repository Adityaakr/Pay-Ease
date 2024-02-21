import React from 'react'

function InputBox({label, placeholder, onChange}) {
        return (
        <div>
        <div className='font-semibold text-sm text-start ml-1 mt-3 '>{label}</div>
        <input onChange={onChange} type="text" placeholder={placeholder} className="w-full sm:w-96 text-sm  border-gray-300 mt-1 h-8 border-2 px-4 py-2 
        focus:outline-none mr-10 focus:border-blue-500 "/>
        </div>
        )
}
export default InputBox;
