import React, { useContext } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import {Menu} from '@headlessui/react'
import { RoomContext } from '../context/RoomContext';


const list = [
  {name: '0 Kids'},
  {name: '1 Kid'},
  {name: '2 Kids'},
  {name: '3 Kids'},
  {name: '4 Kids'},
]



const KidsDropdown = () => {
  const {kids, setKids} = useContext(RoomContext)
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className='flex justify-between w-full h-full items-center px-8'>
        {kids === '0 Kids'? 'No kids': kids}
        <BsChevronDown className='text-accent-hover'/>
      </Menu.Button>

      <Menu.Items as='ul' className='bg-white absolute flex flex-col z-40 w-full'>
        {list.map((li, index)=>{
          return(
            <Menu.Item as="li" 
            key={index}
            onClick={()=> setKids(li.name)}
            className='w-full h-12 flex items-center justify-center cursor-pointer border-b last-of-type:border-b-0 hover:bg-accent hover:text-white'
            >{li.name}</Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  );
};

export default KidsDropdown;
