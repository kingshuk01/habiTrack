import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




const Header = () => {


    const [currMonth, setCurrMonth] = useState(0);

    const incMonth = () => {
        if (currMonth === 11) {
            setCurrMonth(0)
        }
        else {
            setCurrMonth(currMonth + 1);
        }

    };

    const decMonth = () => {
        if (currMonth === 0) {
            setCurrMonth(11)
        }
        else {

            setCurrMonth(currMonth - 1);
        }
    };


    return (
        <div className='flex justify-between font-Just'>
            <div className='p-10 ml-10'>
                <span className='text-8xl'> Habit Tracker </span>
                <FontAwesomeIcon className='text-5xl ml-5 bg-orange-50 rounded-full' icon={faCircleCheck} />
            </div>
            <div className='mt-20 mr-20 p-10 flex'>
                <div className='mt-6'>
                    <FontAwesomeIcon onClick={decMonth} className='text-2xl cursor-pointer' icon={faCaretLeft} />
                    <span className='text-4xl pr-5 pl-5'> {months[currMonth]} </span>
                    <FontAwesomeIcon onClick={incMonth} className='text-2xl cursor-pointer' icon={faCaretRight} />
                </div>
                <div className='flex flex-col ml-10 '>
                    <FontAwesomeIcon className='text-2xl cursor-pointer' icon={faCaretUp} />
                    <span className='text-3xl'>2023</span>
                    <FontAwesomeIcon className='text-2xl cursor-pointer' icon={faCaretDown} />
                </div>
            </div>
        </div>
    )
}

export default Header