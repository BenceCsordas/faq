import React, { useEffect, useState } from 'react'
import {questions} from "../data_faq.js"
import { Question } from './Question.jsx';


export const Faq = () => {

    const [faq] = useState(questions)
    
    const [openedIndex, setOpenedIndex] = useState(1);
    const [everythingClosed, setEverythingClosed] = useState(true)
    
    const handleChange = (id, isOpen, setIsOpen) => {
        console.log(id, isOpen);
        console.log(faq);
        setIsOpen(!isOpen)
        

    }

    return (
        <div className='space-y-4 text-center'>
            {faq.map(obj => <Question handleChange={handleChange} key={obj.id} {...obj} openedIndex={openedIndex} setOpenedIndex={setOpenedIndex} ec={everythingClosed} sec={setEverythingClosed}/>)}
        </div>
    )
}


