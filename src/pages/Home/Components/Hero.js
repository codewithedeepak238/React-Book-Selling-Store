import { Link } from 'react-router-dom'
import heroImg from '../../../assets/heroImg.jpg'
export const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row dark:text-slate-100 items-center'>
        <div className='my-5 lg:pr-5'>
            <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
            <p className='text-2-xl my-7 dark:text-slate-300'>DMMI is the world's largest and most popular source for computer sicence eBooks. Find ratings and access to newest books digitally.</p>
            <Link to={'/products'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore eBooks</Link>
        </div>
        <div className='my-5 lg:max-w-xl'>
            <img className='rounded-lg max-h-full' src={heroImg} alt="ebook store" />
        </div>
    </section>
  )
}
