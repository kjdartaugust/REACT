import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-blue-900 shadow-md hover:bg-blue-900/30 hover:backdrop-blur-md z-50 transition-all duration">
  <nav className="w-[1000px] mx-auto flex justify-between py-4 px-4">
    <div className="text-lg font-bold text-white tracking-tight">
      DENTAL CARE
    </div>
    <div className="flex items-center ">
      <ul className="flex space-x-8">
        <li>
          <a
            href="#"
            className="text-white hover:text-blue-200 hover:scale-105"
          />
          Home
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-blue-200 hover:scale-105"
          />
          About
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-blue-200 hover:scale-105"
          />
          Services
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-blue-200 hover:scale-105"
          />
          Doctors
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-blue-200 hover:scale-105"
          />
          Blog
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-blue-200 hover:scale-105"
          />
          Contact
        </li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 shadow-blue-500/30 ml-8">
        Book Appointment
      </button>
    </div>
  </nav>
</header>

    </>
  )
}

export default Navbar