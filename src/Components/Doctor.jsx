import React from 'react'

const Doctor = () => {
  return (
    <>
<section className="py-20 bg-gradient-to-b from bg-gray-50 to-white">
  <div className="w-[1000px] mx-auto py-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
      Meet Our Export Team
    </h2>
    <div className="flex gap-6">
      {/* first */}
      <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <img
          src="src/assets/images/image20.jpg"
          alt="Doctor 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Mercy Loco</h3>
          <p className="text-gray-600">Dentist</p>
        </div>
      </div>
      {/* second */}
      <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <img
          src="src/assets/images/image40.jpg"
          alt="Doctor 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Walter Hisenbherg{" "}
          </h3>
          <p className="text-gray-600">Dentist</p>
        </div>
      </div>
      {/* third */}
      <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <img
          src="src/assets/images/image31.jpg"
          alt="Doctor 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Owusu Azuri</h3>
          <p className="text-gray-600">Dentist</p>
        </div>
      </div>
      {/* fourth */}
      <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <img
          src="src/assets/images/image30.jpg"
          alt="Doctor 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Reggie Rockstone
          </h3>
          <p className="text-gray-600">Dentist</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Doctor