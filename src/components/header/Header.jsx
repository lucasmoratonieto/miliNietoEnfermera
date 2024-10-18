
import { navLinks } from '../../constants/index'
import {miliLogo} from '../../assets/images/index'
import { useState } from 'react'
import { hamburguer } from '../../assets/icons';

function Header() {

  const [smallHeader, setSmallHeader] = useState(false);
  const [hamburguerCross, sethamburguerCross] = useState(true)

  const toggleHeader = () => {
    setSmallHeader(!smallHeader)
    sethamburguerCross(!hamburguerCross)
  }

  



  return (
    <header className='flex justify-center font-palanquin  sticky top-0 z-20 bg-white' >
      <div className='flex ml-0 m-auto items-center h-20' onClick={toggleHeader}>
        <a href="./#inicio">
          <img src={miliLogo} alt="Logo mili" width={50} className=' min-w-14 rounded-3xl'/>
        </a>
      </div>

    
      {/* header on big screen */}
        <div className='flex max-lg:hidden'>
            <ul className=" flex flex-row content-center justify-center items-center lg:gap-3 xl:gap-14 text-slate-700 ">
              {navLinks.map((navLink) =>(
                <li key={navLink.href} className='flex w-[7.4rem] items-center '>
                  <a href={navLink.href} key={navLinks.src} className=' rounded-2xl p-3 ease-in-out transform md:hover:bg-blue-100 
                    duration-700 '>
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
        </div>


      <div className= {`flex ${smallHeader ? ' absolute flex-col gap-5 right-5 z-10 bg-slate-50 pt-[1.25rem] pb-16 px-5 w-56 h-80 rounded-3xl shadow-3xl lg:hidden':''} `}>

        {/* Hambuguer */}

          <div className={`flex lg:hidden ${smallHeader  ? 'flex-col items-end -mt-5':'mr-10'}`}>
            <button onClick={toggleHeader}  className='flex flex-col w-8 border-0 bg-transparent gap-[.5rem] rounded-sm mr-1 pt-7'>
              <div className={` bg-black h-[2px] w-[100%] rounded-sm transition-all duration-1000 ${hamburguerCross ? '' : 'origin-left rotate-[40deg]'}`}> </div>
              <div className={` bg-black h-[2px] w-[100%] rounded-sm transition-all duration-1000 ${hamburguerCross ? '' : 'origin-left w-0 opacity-0 '}`}> </div>
              <div className={` bg-black h-[2px] w-[100%] rounded-sm transition-all duration-1000 ${hamburguerCross ? '' : 'origin-left -rotate-[40deg]'}`}> </div>

            </button>
            {/* <button onClick={toggleHeader} className=' w-10' >
              <img   src={hamburguer} alt={hamburguer} />
            </button> */}
          </div>

        {/* header on small screen */}
            <div className={`flex-col px-10 ${smallHeader ? '' : 'hidden'}`}>
              <ul className=" flex flex-col content-center justify-center items-center gap-2 lg:gap-8 xl:gap-20 text-slate-700 ">
                {navLinks.map((navLink) =>(
                  <li key={navLink.href} className='flex w-28 items-center'>
                    <a onClick={toggleHeader} href={navLink.href} key={navLinks.src}>
                      {navLink.label}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </header>
  )
}

export default Header