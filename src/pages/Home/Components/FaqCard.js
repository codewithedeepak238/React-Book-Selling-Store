import { useState } from "react"

export const FaqCard = () => {
    const [open,setOpen] = useState(false)
    const handleOpen=()=>{
        setOpen(!open)
    }

  return (
    <>
        <h2 id="accordion-flush-heading-1" onClick={handleOpen}>
            <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
            <span>What is Flowbite?</span>
            <svg data-accordion-icon className={`w-3 h-3 ${open?'':'rotate-180'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </h2>
        <div id="accordion-flush-body-1" className={open?'':'hidden'} aria-labelledby="accordion-flush-heading-1">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to and start developing websites even faster with components on top of Tailwind CSS.</p>
            </div>
        </div>
    </>
  )
}
