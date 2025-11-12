import React from 'react'

const Blogs = () => {
  return (
    <>
    <section className="py-20">
  <div className="w-[1000px] mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
      Latest Blog Posts
    </h2>
    <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">
      Stay updated with our latest dental care tips and news.
    </p>
    <div className="flex gap-6">
      {/* first */}
      <div className="w-[333px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <img
          src="src/assets/images/image8.jpg"
          alt="Doctor 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Top 5 Tips for a Brighter Smile
          </h3>
          <p className="text-gray-600 mb-4">
            Learn how to maintain a healthy and bright smile with these simple
            tips.
          </p>
          <a
            href="#"
            className="text-indigo-600 hover:text-gray-800 tracking-tight duration-300"
          >
            Read More
          </a>
        </div>
      </div>
      {/* second */}
      <div className="w-[333px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <img
          src="src/assets/images/image10.jpg"
          alt="Doctor 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Benefits of Regular Checkups
          </h3>
          <p className="text-gray-600 mb-4">
            Discover why regular dentist visits are crucial for oral health.
          </p>
          <a
            href="#"
            className="text-indigo-600 hover:text-gray-800 tracking-tight duration-300"
          >
            Read More
          </a>
        </div>
      </div>
      {/* third */}
      <div className="w-[333px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <img
          src="src/assets/images/image4.jpg"
          alt="Doctor 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Understanding Dental Implants
          </h3>
          <p className="text-gray-600 mb-4">
            Everything you need to know about dental implants.
          </p>
          <a
            href="#"
            className="text-indigo-600 hover:text-gray-800 tracking-tight duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Blogs