import React from 'react'

export function AppBar(props) {
        

        return (
        <div className='border-2 border-gray-200'>
        <ul class="flex justify-between">
        <li class="mr-3">
          <a class="inline-block border border-gray-500 rounded py-2 px-4 text-black
           hover:bg-gray-600 m-5 font-semibold " href="#">Payment App</a>
        </li>

        
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse m-5">
      <button type="button" class="flex text-sm rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" 
      aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <p className='p-3 text-black font-semibold text-sm shadow-md -mt-1'>Hello, User</p>
        <img class="w-9 h-9 rounded-full mt-1 mr-2 mb-1 ml-2" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="user photo"/>
      </button>
      </div>
        </ul>
        </div>
        )
}
