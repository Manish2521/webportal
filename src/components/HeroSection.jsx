import React from 'react';

function HeroSection() {
  return (
    <div className="min-h-screen flex justify-center items-center py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Title and Subheading */}
        <div className="col-span-full text-center sm:col-span-2 lg:col-span-3">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Our Pricing</h1>
          <p className="text-lg text-gray-600">Choose a plan that fits your needs and budget.</p>
          <br></br>
          <br></br>
        </div>
        {/* Basic Card */}
        <div className="p-8 bg-white text-center rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
          <p className="text-2xl font-semibold text-gray-900">$10<span className="text-base font-medium text-gray-600">/user</span></p>
          <hr className="mt-6 mb-8 border-t border-gray-300" />
          <ul className="text-left">
            <li className="mb-2">
              <span className="material-icons align-middle text-gray-500 mr-2"></span>
              Affordable entry-level plan
            </li>
            <li className="mb-2">
              <span className="material-icons align-middle text-gray-500 mr-2"></span>
              Essential features included
            </li>
            <li>
              <span className="material-icons align-middle text-gray-500 mr-2"></span>
              Suitable for small businesses
            </li>
          </ul>
          <a href="#" className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-xl mt-8">Choose Plan</a>
        </div>
        {/* Pro Card */}
        <div className="p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform sm:scale-125">
          <h3 className="text-xl font-semibold mb-4">Pro</h3>
          <p className="text-2xl font-semibold">$24<span className="text-base font-medium">/user</span></p>
          <hr className="mt-6 mb-8 border-t border-gray-600" />
          <ul className="text-left">
            <li className="mb-2">
              <span className="material-icons align-middle text-white mr-2"></span>
              Comprehensive package with advanced features
            </li>
            <li className="mb-2">
              <span className="material-icons align-middle text-white mr-2"></span>
              Enhanced support options
            </li>
            <li>
              <span className="material-icons align-middle text-white mr-2"></span>
              Scalable for growing businesses
            </li>
          </ul>
          <a href="#" className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-xl mt-8">Choose Plan</a>
          <div className="absolute top-4 right-4">
            <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
          </div>
        </div>
        {/* Enterprise Card */}
        <div className="p-8 bg-white text-center rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
          <p className="text-2xl font-semibold text-gray-900">$35<span className="text-base font-medium text-gray-600">/user</span></p>
          <hr className="mt-6 mb-8 border-t border-gray-300" />
          <ul className="text-left">
            <li className="mb-2">
              <span className="material-icons align-middle text-gray-500 mr-2"></span>
              Tailored solutions for large organizations
            </li>
            <li className="mb-2">
              <span className="material-icons align-middle text-gray-500 mr-2"></span>
              Customizable features and integrations
            </li>
            <li>
              <span className="material-icons align-middle text-gray-500 mr-2"></span>
              Dedicated account management and priority support
            </li>
          </ul>
          <a href="#" className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-xl mt-8">Choose Plan</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
