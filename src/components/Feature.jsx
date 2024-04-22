import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import React from 'react';
import logo from '../components/topsection.jpg';

const features = [
  {
    name: 'Cutting-Edge Website Design',
    description:
      "We specialize in creating modern, user-friendly websites that captivate audiences and drive results.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Full Suite of Digital Services',
    description: 'From e-commerce solutions to mobile app development and digital marketing, we offer comprehensive digital solutions to help businesses thrive online.',
    icon: LockClosedIcon,
  },
  {
    name: 'Customer-Focused Approach',
    description: "We prioritize our clients' needs and goals, working closely with them to deliver high-quality, innovative solutions that exceed expectations.",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Innovation Hub</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to the World of Tech</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe in the power of technology to transform businesses and revolutionize industries. As a leading provider of cutting-edge solutions, we are dedicated to helping our clients thrive in the digital age.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 flex items-start">
                      <feature.icon className="flex-shrink-0 h-5 w-5 mr-2 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={logo}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
