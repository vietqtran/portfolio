import React, { useState } from 'react'
import { AiFillCode, AiOutlineUser, AiTwotoneCustomerService } from 'react-icons/ai'
import ProfessionalSideBar from './professionalSideBar'
import PersonalSideBar from './personalSideBar'
import HobbiesSideBar from './hobbiesSideBar'
const SideBarInformation = () => {

  const [ tab, setTab ] = useState('professional')

  return (
    <div className='grid grid-cols-5 w-[300px] h-full border-r-[1px] border-r-gray-700 '>
      <div className='col-span-1 border-r-[1px] border-r-gray-700 text-gray-500'>
        <div
          onClick={() => { setTab('professional') }}
          className='w-full flex justify-center py-3 text-xl hover:text-white cursor-pointer'>
          <span className={`${tab === 'professional' ? 'text-white' : ''}`}><AiFillCode /></span>
        </div>
        <div
          onClick={() => { setTab('personal') }}
          className='w-full flex justify-center py-3 text-xl hover:text-white cursor-pointer'>
          <span className={`${tab === 'personal' ? 'text-white' : ''}`}><AiOutlineUser /></span>
        </div>
        <div
          onClick={() => { setTab('hobbies') }}
          className='w-full flex justify-center py-3 text-xl hover:text-white cursor-pointer'>
          <span className={`${tab === 'hobbies' ? 'text-white' : ''}`}><AiTwotoneCustomerService /></span>
        </div>
      </div>
      <div className='col-span-4'>
        {tab === 'professional' &&
          <ProfessionalSideBar />
        }
        {tab === 'personal' &&
          <PersonalSideBar />
        }
        {tab === 'hobbies' &&
          <HobbiesSideBar />
        }
      </div>
    </div>
  )
}

export default SideBarInformation