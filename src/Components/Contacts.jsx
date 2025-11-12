import React from 'react'

const Contacts = () => {
  return (
    <>
      <section className="py-20">
  <div className="w-[1000px] mx-auto px-6">
    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4 pt-12 tracking-tight">
      Get in Touch
    </h2>
    <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">
      A small river named Duden flows by, creating a serene setting for your
      inquiries.
    </p>
    <div className="flex gap-6">
      {/* form */}
      <div className="w-[500px]">
        <div className="rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300 p-6">
          <form>
            <select className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <option>Select inquiry Type</option>
              <option>Appointment</option>
              <option>Billing</option>
              <option>General Inquiry</option>
            </select>
            <input
              type="text"
              placeholder="name"
              className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <textarea
              type="message"
              placeholder="Message"
              className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition h-32"
              defaultValue={""}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3 rounded-lg shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* info */}
      <div className="w-[500px]">
        <div className="bg-blue-900 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300 p-8 text-white">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-4 flex items-center">
            <i className="fas fa-map-marker-alt mr-2 text-indigo-300" />
            123 Duden Road, Dental City, DC 12345
          </p>
          <p className="mb-4 flex items-center">
            <i className="fas fa-phone-alt mr-2 text-indigo-300" />
            <a
              href="tel:+ (123) 456 7890"
              className="hover:text-indigo-300 transform"
            >
              + (123) 456 7890
            </a>
          </p>
          <p className="mb-4 flex items-center">
            <i className="fas fa-envelope mr-2 text-indigo-300" />
            <a
              href="mailto:info@dentacare.com"
              className="hover:text-indigo-300 transform"
            >
              info@dentacare.com
            </a>
          </p>
          <p className="mb-4 flex items-center">
            <i className="fas fa-clock mr-2 text-indigo-300" />
            Mon-Fri 8 AM - 5 PM
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Contacts