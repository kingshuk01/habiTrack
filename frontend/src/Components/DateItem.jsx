import React from 'react'



const DateItem = (props) => {
    return (

        <div onClick={() => { props.changeHabitPage() }} className='h-56 w-56 font-Just  bg-orange-50 border-dashed border-2 border-black rounded-md shadow-xl hover:z-10'>

            <div className='flex justify-between text-4xl'>
                <span className='p-5'>
                    {props.date === 1 ? 1 + "st" :
                        props.date === 2 ? 2 + "nd" :
                            props.date === 3 ? 3 + "rd" :
                                props.date === 21 ? 21 + "st" :
                                    props.date === 22 ? 22 + "nd" :
                                        props.date === 23 ? 23 + "rd" :
                                            props.date + "th"}
                </span>

                <div className='p-5'>
                    1/2
                </div>
                
            </div>

            <div className=' p-5 text-2xl'>
                <ul>
                    <li>
                        <label>Habit 1 ...</label>
                    </li>
                    <li>
                        <label className='line-through text-neutral-600'>Habit 2 ...</label>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default DateItem