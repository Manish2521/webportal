import { useState } from 'react';
import React from 'react'; // Make sure to import React
export default function Login() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };

  return (
    <>
      <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`block w-full rounded-md border-0 py-1.5 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${darkMode ? 'text-gray-200 bg-gray-700 placeholder-gray-400 focus:ring-gray-500' : 'text-gray-900 bg-white placeholder-gray-400 focus:ring-indigo-600'}`}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`block w-full rounded-md border-0 py-1.5 shadow-sm focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${darkMode ? 'text-gray-200 bg-gray-700 placeholder-gray-400 focus:ring-gray-500' : 'text-gray-900 bg-white placeholder-gray-400 focus:ring-indigo-600'}`}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus:ring-2 focus:ring-inset ${darkMode ? 'bg-gray-600 hover:bg-gray-500 focus:ring-gray-500' : 'bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-600'}`}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
