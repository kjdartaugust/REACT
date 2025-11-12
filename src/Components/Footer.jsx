import React from 'react'

const Footer = () => {
  return (
    <>
<footer className="bg-blue-900 text-white relative">
  <div className="absolute top-0 left-0 w-full h-[48px]">
    <svg
      className="relative block w-full h-12"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,31.08,1200,56.86V0Z"
        fill="#f3f4f6"
      />
    </svg>
  </div>
  <div className="w-[1000px] mx-auto px-6 py-12">
    <div className="flex gap-6">
      <div className="w-[250px]">
        <h3 className="text-lg font-semibold mb-4 text-indigo-300">
          Dental care
        </h3>
        <p>
          A small river named Duden flows by, offering a serene dental
          experience.
        </p>
      </div>
      <div className="w-[240px]">
        <h3 className="text-lg font-semibold mb-4 text-indigo-300">
          Quick Links
        </h3>
        <ul className="space-y-2 text-sm">
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
      </div>
      <div className="w-[240px]">
        <h3 className="text-lg font-semibold mb-4 text-indigo-300">Services</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 hover:scale-105"
            />
            Teeth Whitening
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 hover:scale-105"
            />
            Teeth Cleaining
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 hover:scale-105"
            />
            Quality Bracies
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 hover:scale-105"
            />
            Dental Implants
          </li>
        </ul>
      </div>
      <div className="w-[240px]">
        <h3 className="text-lg font-semibold mb-4 text-indigo-300">
          Contact US
        </h3>
        <p className="mb-4 flex items-center">
          <i className="fas fa-map-marker-alt mr-2 text-indigo-300" />
          123 Duden Road, Dental City, DC 12345
        </p>
        <p className="mb-4 flex items-center">
          <i className="fas fa-phone-alt mr-2 text-indigo-300" />
          <a
            href="tel:+123456 7890"
            className="hover:text-indigo-300 transition"
          >
            + (123) 456 7890
          </a>
        </p>
        <p className="mb-4 flex items-center">
          <i className="fas fa-envelope mr-2 text-indigo-300" />
          <a
            href="mailto:info@dentacare.com"
            className="hover:text-indigo-300 transition"
          >
            info@dentacare.com
          </a>
        </p>
        <ul className="flex space-x-2 text-sm">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 hover:scale-105"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 hover:scale-105"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 hover:scale-105"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <p className="text-center mt-8 text-gray-300 text-sm">
        © 2025 DentaCare. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer