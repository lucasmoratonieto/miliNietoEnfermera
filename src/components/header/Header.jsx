
import { navLinks } from '../../constants/index'
import {miliLogo} from '../../assets/images/index'
import { useState } from 'react'
import { hamburguer } from '../../assets/icons';

function Header() {

  const [smallHeader, setSmallHeader] = useState(false);
  const toggleHeader = () => {
    setSmallHeader(!smallHeader)
  }



  return (
    <header className='flex justify-center font-palanquin  sticky top-0 z-20 bg-white  ' >
      <div className='flex ml-0 m-auto items-center h-20'>
        <a href="./#inicio">
          <img src={miliLogo} alt="Logo mili" width={50} className=' min-w-14 rounded-3xl'/>
        </a>
      </div>

    
      {/* header on big screen */}
        <div className='flex max-lg:hidden'>
            <ul className=" flex flex-row content-center justify-center items-center lg:gap-3 xl:gap-14 text-slate-700 ">
              {navLinks.map((navLink) =>(
                <li key={navLink.href} className='flex w-[7.4rem] items-center '>
                  <a href={navLink.href} key={navLinks.src} className=' rounded-2xl p-2 hover:bg-blue-100 hover:duration-1000'>
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
        </div>


      <div className= {`flex ${smallHeader ? ' absolute flex-col gap-5 right-5 z-10 bg-slate-50 pt-[1.25rem] pb-16 px-5 w-56 h-80 rounded-3xl shadow-3xl lg:hidden':''} `}>

        {/* Hambuguer */}

          <div className={`flex lg:hidden ${smallHeader ? 'flex-col items-end':'mr-10'}`}>
            {/* <button onClick={toggleHeader} className='flex flex-col w-12 h-12 border-0 bg-transparent gap-[.65rem] '>
              <div className=' bg-black h-[2px] w-[100%] rounded-sm transition-all origin-left hover:rotate-45'> </div>
              <div className=' bg-black h-[2px] w-[100%] rounded-sm transition-all origin-left hover:opacity-0'> </div>
              <div className=' bg-black h-[2px] w-[100%] rounded-sm transition-all origin-left hover:-rotate-45'> </div>
            </button> */}
            <button onClick={toggleHeader} className=' w-10' >
              <img   src={hamburguer} alt={hamburguer} />
            </button>
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