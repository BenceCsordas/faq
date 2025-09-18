import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export const Question = ({handleChange, id, title, info, openedIndex, setOpenedIndex, ec, sec}) => {

    const [isOpen, setIsOpen] = useState(true)
    
    

        /*if(ec){
            setIsOpen(!isOpen)
            sec(!ec)
            setOpenedIndex(id)
        }
        else if(!ec && openedIndex == id){
            sec(!ec)
            setIsOpen(!isOpen)
        }
        else if(isOpen && !ec){
            console.log("asd");
            
            setIsOpen(!isOpen)
        }*/

    
     

    return (
        <div className='border-2 border-indigo-500 rounded-2xl shadow-xl'>
            <div onClick={()=>handleChange(id, isOpen, setIsOpen)} className={isOpen ? 'flex flex-row p-4 justify-between items-center cursor-pointer hover:bg-indigo-100 rounded-2xl' : 'flex flex-row p-4 justify-between items-center cursor-pointer hover:bg-indigo-100 rounded-2xl rounded-b-none'}>
                <span className='font-medium text-gray-800'>{title}</span>
                <span className='text-indigo-700 hover:animate-bounce'>{isOpen ? <FaAngleDown /> : <FaAngleUp />}</span>

            </div>
            {!isOpen && <div className='text-gray-800 border-t border-indigo-100 '>
                {info}</div>
            }



        </div>





    )
}

