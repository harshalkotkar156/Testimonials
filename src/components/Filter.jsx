import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from './Card';
function Filter(props) {
    let reviews = props.reviews;

    const [index,setIndex] = useState(0);

    function leftShiftHandler()
    {
        // console.log("current index ",index);
        setIndex((index + (reviews.length-1)) % reviews.length);
        // console.log("after index ",index);
    }
    function rightShiftHandler()
    {
        // console.log("current index ",index);
        setIndex((index + 1) % reviews.length);
        // console.log("after index ",index);
    }

    function surpriseHandler()
    {
        let newIndex = Math.round(Math.random() * 10)%(reviews.length);
        // console.log(newIndex);
        setIndex(newIndex);
    }
  return (
    <div className='flex flex-col items-center'> 
        
        <div className='relative bottom-32 w-[100%]'>
            <div className='rounded-full w-[140px] h-[140px] bg-violet-500'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] relative top-2 right-2' src={reviews[index].image} alt="" />     
            </div>
           
        </div>
        <Card reviews={reviews[index]}></Card>
        <div className="flex gap-4 justify-center text-violet-400 mt-5 text-3xl">
                <button 
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-600 transition-all duration-200">
                    <FaAngleLeft />
                </button>
                <button 
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-600 transition-all duration-200">
                    <FaAngleRight />
                </button>
            </div>

            <div className="mt-5">
                <button 
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                    cursor-pointer mt-4 px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise Me
                </button>
            </div>
        

    </div>
  )
}

export default Filter