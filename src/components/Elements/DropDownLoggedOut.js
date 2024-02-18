import { Link } from "react-router-dom"

export const DropDownLoggedOut = ({setShowLogIn}) => {
  return (
    <div id="userDropdown" className="select-none z-10 absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                <li>
                    <Link onClick={()=>setShowLogIn(false)} to={'/products'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link onClick={()=>setShowLogIn(false)} to={'/login'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
                </li>
            </ul>
            <div className="py-1">
                <Link onClick={()=>setShowLogIn(false)} to={'/register'} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Register</Link>
            </div>
    </div>
  )
}
