import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { BsCalendar } from 'react-icons/bs';

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);

  return (
  <div className='relative h-full justify-end flex items-center'>
    <div className='absolute z-10 pr-8'>
      <div className='text-accent text-base'>
        <BsCalendar/>
      </div>
    </div>

    <DatePicker className='w-full h-full'
    selected={endDate}
    placeholderText='Check Out'
    onChange={(Date)=> setEndDate(Date)}
    />

  </div>
  );

  
};

export default CheckOut;
