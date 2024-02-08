import React from 'react'
import { Link } from 'react-router-dom'

function ButtonWarning({label,ButtonText,to}) {
        return (
        <div>

        <Link to={to}>
        <div className='text-gray-500 text-sm mt-4 pb-5'>{label}
        <u className='cursor-pointer'>{ButtonText}</u></div>
        </Link>
        </div>      
        )
}

export default ButtonWarning
