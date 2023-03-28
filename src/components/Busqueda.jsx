import { CheckCircleIcon } from '@heroicons/react/20/solid'

const Busqueda = () => {
  return (
    <>
    <div className="bg-white py-24 sm:py-24">
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 border border-gray-300 shadow-lg">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 py-16 px-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Search Engine Optimizationn</h2>
              <p className="mt-6 text-base leading-6 text-black text-justify">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p>
              <p className="mt-6 mb-6 text-base leading-6 text-black text-justify">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p>
                <button
                    type="button"
                    className="rounded-md bg-[#DD102A] py-2.5 px-8 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Learn More
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Busqueda