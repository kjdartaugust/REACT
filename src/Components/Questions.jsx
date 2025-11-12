import React from 'react'

const Questions = () => {
  return (
    <>
<section className="py-20">
  <div className="w-[1000px] mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">
      Find answers to common questions about our dental services.
    </p>

    <div className="space-y-4">
      <details className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
        <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
          How often should I visit the dentist?
        </summary>
        <p className="text-gray-600 mt-2">
          We recommend a visit every six months for checkups and cleanings to maintain optimal oral health.
        </p>
      </details>

      <details className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
        <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
          Does teeth whitening hurt?
        </summary>
        <p className="text-gray-600 mt-2">
          Our whitening procedures are safe and painless, with minimal sensitivity that subsides quickly.
        </p>
      </details>

      <details className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
        <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
          What should I do in a dental emergency?
        </summary>
        <p className="text-gray-600 mt-2">
          Contact us at + (123) 456 7890 for immediate emergency dental services.
        </p>
      </details>
    </div>
  </div>
</section>
    </>
  )
}

export default Questions