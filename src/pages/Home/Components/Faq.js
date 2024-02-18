import { FaqCard } from "./FaqCard"
export const Faq = () => {
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        <h1 className="text-center mb-3 underline-offset-4 text-2xl font-semibold underline dark:text-slate-100">Question in mind?</h1>
            <FaqCard/>
            <FaqCard/>
        </div>
    </section>
  )
}
