
export const Balance = ({ value }) => {
        return <>
        <hr className="border-blue-900 w-full"/> {/* Adjust styling as needed */}
      <div className="flex bg-[#E1EBEE]" style={{backgroundImage: "url('/patterns.jpg')"}}>
            <div className="m-8 mr- font-semibold text-3xl text-[#103963] underline">
                Your balance -
            </div>
            <div className="mt-8 font-semibold text-4xl text-black shadow-lg underline">
                Rs {value}
            </div>
        </div>
        <hr className="border-gray-900 w-full"/> {/* Adjust styling as needed */}
        </>
        
    }



               
