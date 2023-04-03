const stats = [
    { id: 1, name: 'Happy Clients', value: '400+' },
    { id: 2, name: 'Project Complate', value: '120+' },
    { id: 3, name: 'Win Awards', value: '130' },
    { id: 4, name: 'Team Member', value: '24' },
  ]

const Estadisticas = () => {
  return (
    <>
    <div className="bg-white py-0 sm:py-0  mb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-4 shadow-md">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white p-8">
                <dt className="text-lg font-medium leading-6 text-black ">{stat.name}</dt>
                <dd className="order-first text-4xl font-extrabold  text-[#DD102A]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

export default Estadisticas