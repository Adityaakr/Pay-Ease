import React from 'react'
import { Link } from "react-router-dom"

function DashButton({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <Link className="pointer  pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}

export default DashButton;
  