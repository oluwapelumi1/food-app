import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';

function Navbar() {
  return (
    <div>
        <div>
        < AiOutlineMenu size={30}/>
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        </div>
        </div>
  )
}

export default Navbar