import React, { useEffect, useState } from 'react'
import {BsLightbulb,BsBasketFill,BsMoonStarsFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { searchAction } from '../redux/actions/search'

const Navbar = () => {
  const [color,setColor] = useState(false)
  const dispatch = useDispatch()
  const {cardItems} = useSelector(state => state.card);
  const [search, setSearch] = useState('');
  
  useEffect(()=>{
    const root = document.getElementById('root');
    if(color){
      root.style.backgroundColor = 'black';
      root.style.color = 'white';
    }
    else{
      root.style.backgroundColor = 'white';
      root.style.color = 'black';

    }

  },[color])

    const searchPost = (e) => {
      if(e.key === 'Enter'){
        dispatch(searchAction(search))
      }
    }
  return (
    <div className='flex items-center justify-between px-3 h-28'>
      <div><img className='h-20' src="data:image/png;base64,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" alt="" /></div>
      
      <div className='flex items-center space-x-4'>
        <input value={search} onKeyPress={searchPost} onChange={e => setSearch(e.target.value)} className='border p-3 outline-none rounded-lg' type='text' placeholder='search'/>
        <div onClick={()=> setColor(!color) }>
          {
            color ? <BsMoonStarsFill size={25} className='cursor-pointer'/> :  <BsLightbulb size={25} className='cursor-pointer'/>
          }
        </div>
        <div onClick={() => dispatch({type:'DRAWER',payload:true})} className='relative'>
        <BsBasketFill size={25} className='cursor-pointer'/>
        <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>{cardItems.length}</span>

        </div>
      </div>
    </div>
  )
}

export default Navbar
