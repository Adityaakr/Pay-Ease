import React from 'react'

function InputBox({label, placeholder, onChange}) {
        return (
        <div>
        <div className='font-semibold ml-6 text-sm text-start mt-3  justify-center'>{label}</div>
        <input onChange={onChange} type="text" placeholder={placeholder} className="w-96 sm:w-96 text-sm  border-gray-300 mt-1 h-8 border-2 px-4 py-2 
        focus:outline-none ml-1 focus:border-blue-500 rounded-lg p-5"/>
        </div>
        )
}
export default InputBox;
