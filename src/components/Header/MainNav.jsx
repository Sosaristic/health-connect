import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import { useAuthContext } from "../../context/AuthContext"

function MainNav() {
  const { inView } = useAppContext()
  const { isAuth,signOut } = useAuthContext()
  return (
   <nav  className={` hidden lg:flex w-full  lg:flex-col md:items-center lg:justify-center  shadow-md bg-secondary h-[10vh] ${!inView && 'fixed  top-0 left-0 z-[10]'}`}>
      <div className="w-[80%] h-full flex items-center justify-between">
        <Link className="text-[2rem] font-jost font-bold text-primary">HealthConnect</Link>
        <div className="flex items-center justify-between w-[60%] 2xl:w-[45%]">
          <ul className="flex list-none items-center gap-6 font-semibold">
            <li>
              <Link to={'/'} className="font-semibold hover:text-primary">Home</Link>
            </li>
            <li>
              <Link to={'/'} className="hover:text-primary">About</Link>
            </li>
            <li>
              <Link to={'/'} className="hover:text-primary">Services</Link>
            </li>
            <li>
              <Link to={'/'} className="hover:text-primary">Blog</Link>
            </li>
            <li>
              <Link  to={'/'} className="hover:text-primary">Contact</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-4 list-none ">
            {!isAuth ?
            <>
            <li>
             <Link to={'/login'} className='text-primary'>Login</Link>
            </li>
           <li>
             <Link to={'/sign-up'} className="p-2 bg-primary text-white rounded">Signup</Link>
           </li>
            </>
             :
              <li>
                  <Link onClick={()=>signOut()} className="p-2 bg-primary text-white rounded">Logout</Link>
            </li>
          }
           
           </ul>
        </div>
      </div> 
   </nav>
  )
}

export default MainNav