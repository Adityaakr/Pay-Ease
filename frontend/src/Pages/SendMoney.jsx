import React from 'react'

export function SendMoney(props) {
        

        return (
                <div className='lg:shadow-2xl lg:m-64 m-8 lg:mr-50 p-3 shadow-2xl shadow-outer  lg:pl-96 lg:pr-96  mt-60 bg-white-500'>
                 <div className='font-semibold mr-15 text-2xl ml-20 flex-col '>Send Money</div>
                 <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse m-5">

                <button type="button" class="mt-10 flex text-xs rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" 
                aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <img class="w-9 h-9  rounded-full mt-1  mb-1 ml-4" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="user photo"/>
                  <p className='p-3 text-black font-semibold text-sm -mt-0.5'>Friends Name</p>
                </button>
                </div>
                <div className='m-9 -mt-4 font-semibold text-xs'>Amount (in Rs)</div>
                <input type="text" 
                class="lg:w-45  -mt-8 m-9 bg-gray-100 border border-gray-300 text-black
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 h-8
                p-2.5 cursor-not-allowed dark:bg-white dark:border-gray-600
                 dark:placeholder-black dark:text-black dark:focus:ring-blue-500
                  dark:focus:border-blue-500" placeholder='Enter Amount' />
                
                <button className='bg-green-600 hover:bg-green-900 border border-white  rounded-lg text-white font-normal text-xs lg:w-60 w-60 h-8 ml-8 -mt-2'>Initiate Transfer</button>


                </div>
        )
}
