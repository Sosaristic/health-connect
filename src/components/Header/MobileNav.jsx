import { FaTimes } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom"
import { useState } from "react";

function MobileNav() {
  const [toggle,setToggle] = useState(false)
  console
  return (
    <nav className="w-full  flex flex-col items-center justify-center lg:hidden shadow-lg fixed z-[10] h-[10vh] bg-secondary">
      <div className="h-full p-4 w-full  flex justify-center items-center relative">
       <div className="w-full px-4 bg-secondary  h-full absolute z-[30]  flex justify-between items-center ">
        <Link to={'/'} className="text-primary font-jost font-semibold text-[1.8rem] ">HealthConnect</Link>
        {toggle ?   <button type="button" className="h-[3rem] w-[3rem] flex items-center justify-center" onClick={()=>setToggle(false)}>
           < FaTimes className="h-[80%] w-[50%] text-primary" />
        </button>:
          <button type="button" className="h-[3rem] w-[3rem] flex items-center justify-center" onClick={()=>setToggle(true)}>
          <HiOutlineBars3BottomRight className="h-[80%] w-[80%] text-primary" />
       </button>   
      }
       </div>
        <div className={`absolute w-full top-[100%] z-[3] transition-[transform] ${toggle?'translate-y-0':'-translate-y-[100%]'} py-8 px-4 bg-white z-0 `}>
           <ul className="w-full text-primary">
            <li className="w-full">
              <Link to={'/'} className="w-full block hover:bg-primary hover:text-white py-2 text-[1.5rem] font-medium text-center">Home</Link>
            </li>
            <li className="w-full">
              <Link to={'/'} className="w-full block hover:bg-primary hover:text-white py-2 text-[1.5rem] font-medium text-center">About</Link>
            </li>
            <li className="w-full">
              <Link to={'/'} className="w-full block hover:bg-primary hover:text-white py-2 text-[1.5rem] font-medium text-center">Services</Link>
            </li>
            <li className="w-full">
              <Link to={'/'} className="w-full block hover:bg-primary hover:text-white py-2 text-[1.5rem] font-medium text-center">Blog</Link>
            </li>
            <li className="w-full">
              <Link to={'/'} className="w-full block hover:bg-primary hover:text-white py-2 text-[1.5rem] font-medium text-center">Contact</Link>
            </li>
             <li className="w-full">
              <Link to={'/login'} className="w-full block hover:bg-primary hover:text-white py-2 text-[1.5rem] font-medium text-center">Login</Link>
            </li>
            <li className="w-full">
              <Link to={'/sign-up'} className="w-full block bg-primary text-white py-2 text-[1.5rem] font-medium text-center">Signup</Link>
            </li>
           </ul>
        </div>
      </div>
      <div className={`w-full absolute h-[100vh] top-[100%] ${toggle?'block':'hidden'} z-[3] bg-transparent`} onClick={()=>setToggle(false)}></div>
    </nav>
  )
}

export default MobileNav