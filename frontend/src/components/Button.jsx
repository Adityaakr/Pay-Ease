import React from 'react'

function Button({label, onClick}) {
        return (
                <button type="button" onClick={onClick}
                className="bg-gray-500 w-full mt-8 h-10 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                {/*  same as IconType */}
                {label}

                </button>    
        )
}

export default Button
