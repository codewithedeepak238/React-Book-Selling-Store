import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DropDownLoggedIn, DropDownLoggedOut } from '../../components/index'
import { Search } from "../Sections/Search"
import logo from '../../assets/logo2.png'
import { useCart } from "../../context"
export const Header = () => {
    const {cartList} = useCart()
    const [darkMode, setDark] = useState( JSON.parse(localStorage.getItem('darkMode')) || false);
    const [showSearch, setSearch] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false)
    const token = JSON.parse(sessionStorage.getItem('token'))

    useEffect(()=>{
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if(darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    })
  return (
    <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 border-b" style={{borderColor:'rgba(0,0,0,0.1)'}}>
                <Link to={'/'} className="flex items-center">
                    <img src={logo} className="h-20" alt="ebook store Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DMMI</span>
                </Link>
                <div className="flex items-center">
                    <span onClick={()=>{setDark(!darkMode); setShowLogIn(false); setSearch(false)}} className="cursor-pointer text-gray-700 mr-5 dark:text-white text-xl bi bi-gear-wide-connected"></span>
                    <span onClick={()=>{setSearch(!showSearch); setShowLogIn(false)}} className="cursor-pointer text-gray-700 mr-5 dark:text-white text-xl bi bi-search"></span>
                    <Link onClick={()=>{setShowLogIn(false); setSearch(false)}} to={'/cart'} className="cursor-pointer text-gray-700 mr-5 dark:text-white text-xl relative bi bi-cart-fill">
                        <span className="bg-red-500 px-1 text-white text-xs rounded absolute to left-2 bottom-4" >{cartList.length}</span>
                    </Link>
                    <span onClick={()=>{setShowLogIn(!showLogIn); setSearch(false)}} className="cursor-pointer text-gray-700 mr-5 dark:text-white text-xl bi bi-person-circle"></span>
                    {showLogIn && (token ? <DropDownLoggedIn setShowLogIn={setShowLogIn} /> : <DropDownLoggedOut setShowLogIn={setShowLogIn} />)}
                </div>
            </div>
        </nav>
        {showSearch && <Search setSearch={setSearch}/>}
    </div>
  )
}
