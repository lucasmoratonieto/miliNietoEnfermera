
import { navLinksNotPrincipal } from '../../constants/index'

function HeaderNotPrincipal() {
  return (
    <header className=' flex justify-center font-palanquin' >
        <div className=''>
            <ul className=" flex flex-row content-center justify-center items-center gap-2 lg:gap-8 xl:gap-20 text-slate-700 ">
              {navLinksNotPrincipal.map((navLink) =>(
                <li key={navLink.href} className='flex w-28 items-center'>
                  <a href={navLink.href} key={navLinksNotPrincipal.src}>
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
        </div>
    </header>
  )
}

export default HeaderNotPrincipal