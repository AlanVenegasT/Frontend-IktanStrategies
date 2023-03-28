import React from 'react'

const people = [
    {
      name: 'Seo Marketinng',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Email Marketing',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Growth Hacking',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Google PPC',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Automation Setup',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },  
  ]

const Services = () => {
  return (
    <>
    <div>
        <h2 className='text-[#DD102A] text-center text-sm '>Services</h2>
        <h3 className=' text-center text-3xl font-extrabold pb-5 pt-3 '>What We Offer</h3>
        <p className=' text-center px-40 pb-8 '>Quis ipsum gravida. Accumsan lacus vel facilisis dolore magna aliqua lacus dolor sit amet, consectetur adipiscing elitd do.</p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 px-16">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex flex-col items-center space-x-3  border border-gray-300 bg-white px-2 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900 text-center pt-2">{person.name}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Services