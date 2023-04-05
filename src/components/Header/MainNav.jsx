import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"


function MainNav() {
  const { inView } = useAppContext()
  return (
   <nav  className={` hidden lg:flex w-full  lg:flex-col md:items-center lg:justify-center  shadow-md bg-secondary h-[10vh] ${!inView && 'fixed  top-0 left-0 z-[10]'}`}>
      <div className="w-[80%] h-full flex items-center justify-between">
        <Link className="text-[2rem] font-jost font-bold text-primary">HealthConnect</Link>
        <div className="flex items-center justify-between w-[60%] xl:w-[45%]">
          <ul className="flex list-none items-center gap-6 font-semibold">
            <li>
              <Link className="hover:text-primary font-semibold">Home</Link>
            </li>
            <li>
              <Link className="hover:text-primary">About</Link>
            </li>
            <li>
              <Link className="hover:text-primary">Services</Link>
            </li>
            <li>
              <Link className="hover:text-primary">Blog</Link>
            </li>
            <li>
              <Link className="hover:text-primary">Contact</Link>
            </li>
          </ul>
          <ul className=" flex list-none items-center gap-4">
            <li>
              <Link to={'/login'} className='text-primary'>Login</Link>
            </li>
            <li>
              <Link to={'/sign-up'} className="p-2 bg-primary text-white rounded">Signup</Link>
            </li>
           </ul>
        </div>

       
          
       
      </div> 
   </nav>
  )
}

export default MainNav