import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';

import AdultsDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';

import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';


const RoomDetails = () => {
  const {rooms} = useContext(RoomContext);
  const {id} = useParams();
  
  const room = rooms.find((room)=> {
    return room.id === Number(id);
  })
  const {name, description, facilities, imageLg, price} = room


  return <section >
  <ScrollToTop/>
  <div className='bg-room bg-cover h-[560px] bg-center relative flex justify-center items-center'>
    <div className='absolute w-full h-full bg-black/70'></div>
    <h1 className='text-6xl text-white z-20 font-primary flex items-center justify-center text-center'>{name} Details</h1>
  </div>
  <div className='container mx-auto'>
  <div className='flex flex-col lg:flex-row px-6 h-full py-24'>
    <div className='w-full h-full lg:w-[60%]'>
    <h2 className='h2'>{name}</h2>
    <p className='mb-8'>{description}</p>
    <img src={imageLg}
    alt=''
    className='mb-8'
    />
    <div className='mt-12' >
      <h3 className='h3 mb-3'>Room Facilities</h3>
      <p className='mb-12'></p>
      <div className='grid grid-cols-3 gap-6 mb-12'>
        {facilities.map((item, index)=>{
          const {name, icon} = item;
          return (
            <div className='flex items-center gap-x-3' key={index}>
              <div className='text-3xl text-accent'>{icon}</div>
              <div className='text-base'>{name}</div>
            </div>
          )
        })}
      </div>
    </div>
   
    </div>
    <div className='w-full h-full lg:w-[40%]'>
     
        <div className='py-8 px-6 bg-accent/20 mb-12'>
          <div className='flex flex-col space-y-4 mb-4'>
          <h3>Your Reservation</h3>
          <div className='h-[60px]'>
            <CheckIn/>
          </div>
          <div className='h-[60px]'>
            <CheckOut/>
          </div>
          <div className='h-[60px]'>
            <AdultsDropdown/>
          </div>
          <div className='h-[60px]'>
            <KidsDropdown/>
          </div>
          </div>
        <button className='btn btn-lg btn-primary w-full'>book for now for ${price}</button>
      </div>
      <div>
        <h3 className='h3'>Hotel Rules</h3>
        <p className='mb-6'>
          lorem ipsum hello world
        </p>
        <ul className='flex flex-col gap-y-6'>
          <li className='flex items-center gap-x-4'>
            <FaCheck/>
            Check-in:  1:00PM - 9:00PM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck/>
            Check-out:  10:30AM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck/>
            No Pets
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck/>
            No Smoking
          </li>
        </ul>
      </div>
    </div>


  </div>

  </div>
  </section>;
};

export default RoomDetails;
