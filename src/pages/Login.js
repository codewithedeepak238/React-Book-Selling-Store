import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    async function handleLogin(e){
        e.preventDefault();
        const authDetail = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(authDetail)
        })
        const data = await response.json();
        data.accessToken ? navigate('/products'):toast.error(data);

        if(data.accessToken){
            sessionStorage.setItem('token', JSON.stringify(data.accessToken))
            sessionStorage.setItem('cbid', JSON.stringify(data.user.id))
        }

        e.target.password.value = ''
    }
  return (
    <main className="my-10">
        <h1 className="underline underline-offset-8 text-gray-900 mb-5 font-bold dark:text-white text-center text-2xl">Login</h1>
        <form onSubmit={handleLogin}>
        <div className="mb-6">
            <label htmlFor="email" autoComplete="off" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input ref={email} type="email" id="email" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input ref={password} type="password" id="password" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        </form>
    </main>
  )
}
