import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const Card = (props) => {
  
    let data = props.reviews;
    return (
    
    <div className=' flex flex-col items-center h-[150px]' >

        <div className='flex flex-col items-center relative bottom-28'>
            <div className='text-center '>
                <h2 className="text-bold text-2xl capitalize tracking-wide">{data.name}</h2>
                <p className="text-violet-300 uppercase text-sm">{data.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <ImQuotesLeft />
            </div>
            {/* this is for double appotrophe */}

            <div className="text-center mt-4 text-slate-500">
                {data.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <ImQuotesRight/>
            </div>
            {/* here react icons */}

            
        </div>



    </div>
  )
}

export default Card