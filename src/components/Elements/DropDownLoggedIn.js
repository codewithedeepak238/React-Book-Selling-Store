import { Link, Navigate, useNavigate } from "react-router-dom"
import { useUser } from "../../context"

export const DropDownLoggedIn = ({setShowLogIn}) => {
    const {user} = useUser()
    const navigate = useNavigate()
    
    function handleLogout(){
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('cbid')
        setShowLogIn(false);
        navigate('/login')
    }
  return (
        <div id="userDropdown" className="select-none z-10 absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{user.name}</div>
                <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                <li>
                    <Link onClick={()=>setShowLogIn(false)} to={'/dashboard'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                    <Link onClick={()=>setShowLogIn(false)} to={'/products'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                </li>
            </ul>
            <div className="py-1">
                <span onClick={handleLogout} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
            </div>
        </div>
  )
}
