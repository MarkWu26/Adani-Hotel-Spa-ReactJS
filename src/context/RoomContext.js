import React, {createContext, useEffect, useRef, useState}from 'react';

import {roomData} from '../data';


export const RoomContext = createContext()

const RoomProvider = ({children}) => {
  const myRef = useRef(null);
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('1 Kid');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setTotal(Number(adults[0])+Number(kids[0]));
  }, [adults,kids])

  const handleClick = (e) =>{
    e.preventDefault();
    setLoading(true);
    console.log(total);
    const newRooms = roomData.filter(room => {
        return total <= room.maxPerson
      });
      setTimeout(()=>{
        setRooms(newRooms);
        setLoading(false);
      }, 3000)
    }

    const handleScroll = (e) =>{
      console.log("button is working")
      e.preventDefault();
      myRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
      <RoomContext.Provider value={{rooms, adults, kids, setAdults, setKids, handleClick, loading, myRef, handleScroll}}>{children}</RoomContext.Provider>
      )
  

  }


export default RoomProvider;
