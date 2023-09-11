import React, { useContext } from 'react';

import AdultsDropdown from '../components/AdultsDropdown'
import KidsDropdown from '../components/KidsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import { RoomContext } from '../context/RoomContext';





const BookForm = () => {


  const {handleClick, myRef} = useContext(RoomContext);

  return (
  <form className='h-[300px] w-full lg:h-[70px]' >
    <div className='flex flex-col w-full h-full lg:flex-row' ref={myRef}>
      <div className='flex-1 border-r'>
        <CheckIn/>
      </div>
      <div className='flex-1 border-r'>
        <CheckOut/>
      </div>
      <div className='flex-1 border-r'>
        <AdultsDropdown/>
      </div>
      <div className='flex-1 border-r'>
        <KidsDropdown/>
      </div>
      <button className='btn btn-primary' 
      type='submit'
      onClick={(e)=>handleClick(e)}>
          Check now
      </button>
    </div>
  </form>
  )
  
};

export default BookForm;
