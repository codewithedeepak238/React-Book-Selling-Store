import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
    const navigate = useNavigate()
    async function handleRegister(e){
        e.preventDefault();
        const authDetail= {
            name: e.target.username.value,
            email : e.target.email.value,
            password: e.target.password.value
        }

        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(authDetail)
        });
        const data = await response.json();
        console.log(data)
        data.accessToken ? navigate('/products'):toast.error(data)

        if(data.accessToken){
            sessionStorage.setItem('token', JSON.stringify(data.accessToken))
            sessionStorage.setItem('cbid', JSON.stringify(data.user.id))
        }

        e.target.username.value = ''
        e.target.email.value = ''
        e.target.password.value = ''
    }

  return (
    <main className="my-10">
        <h1 className="underline underline-offset-8 text-gray-900 mb-5 font-bold dark:text-white text-center text-2xl">Register</h1>
        <form onSubmit={handleRegister}>
        <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="name" id="username" autoComplete="off" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Alex Blaze" required/>
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" autoComplete="off" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" autoComplete="off" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </form>
    </main>
  )
}
