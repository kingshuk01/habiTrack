import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NewHabitPage = (props) => {
  return (
    <div className='h-2/3 w-2/3 self-center rounded-xl shadow-xl bg-orange-50 m-20 p-8 border-dashed border-2 border-black  font-Just flex justify-between'>
      
        <div className='w-full'>
            <input placeholder='Type out your new Habit' className='h-40 w-3/4 rounded-xl break-words bg-orange-50 focus:outline-none text-4xl' type="text" />
            
        </div>
        <FontAwesomeIcon onClick={() => { props.changeNewHabitPage() }} className='cursor-pointer text-3xl' icon={faXmark} />
    </div>

  )
}

export default NewHabitPage
