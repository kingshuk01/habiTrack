import React, { useState } from 'react'

import Header from '../Components/Header'
import DateItem from '../Components/DateItem'
import HabitPage from './HabitPage';
import NewHabitPage from './NewHabitPage';
import SidePanel from '../Components/SidePanel';


let dates = [];
for (let i = 1; i < 31; i++) {
  dates.push(i)
}

let habits = []
for (let i = 0; i < 31; i++) {
  habits.push({ name: 'h1', comp: true })
  habits.push({ name: 'h2', comp: false })

}



const HomeScreen = () => {

  const [opacity, setopacity] = useState("opacity-100")
  const [habitOpen, sethabitOpen] = useState(false)
  const [newHabitOpen, setnewHabitOpen] = useState(false)

  

  const changeHabitPage = () => {
    if (habitOpen) {
      setopacity("opacity-100")
      sethabitOpen(false)
    }
    else {
      setopacity("opacity-50")
      sethabitOpen(true)
    }
  }


  
  const changeNewHabitPage = () => {
    if (newHabitOpen) {
      setopacity("opacity-100")
      setnewHabitOpen(false)
    }
    else {
      setopacity("opacity-50")
      setnewHabitOpen(true)
    }
  }


  return (
    <div class="bg-cover bg-[url('https://img.freepik.com/free-vector/white-paper-textured-background-vector-simple-style_53876-136033.jpg?w=1380&t=st=1699617577~exp=1699618177~hmac=beeebea3b75c6648d70d6101c7ff421e35dc8a25bd004eaf35298dffaf08cd79')]">
      <div className={`${opacity}`}>
        <Header />
      </div>

      {habitOpen ? <div className='flex justify-center fixed inset-0 z-10'>
        <HabitPage changeHabitPage={changeHabitPage} />
      </div> : <></>}

      {newHabitOpen ? <div className='flex justify-center fixed inset-0 z-10'>
        <NewHabitPage changeNewHabitPage={changeNewHabitPage} />
      </div> : <></>}


      <div className='flex pb-10'>
        <div className='w-2/6 ml-12  '>
          <SidePanel changeNewHabitPage={changeNewHabitPage}/>
        </div>
        <div class={`grid grid-cols-5 w-4/6 place-items-center {} gap-5 mr-20 ${opacity}`}>
          {dates.map((date, index) => {
            return <DateItem date={date} changeHabitPage={changeHabitPage} key={index} />
          })}
        </div>
      </div>

    </div>
  )
}

export default HomeScreen