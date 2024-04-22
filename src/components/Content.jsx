import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Innovation at its Core',
    description:
      " Embrace the latest advancements in technology with our innovative solutions, designed to keep you ahead in the ever-evolving tech landscape.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Customized Approach',
    description:
      "Experience personalized service and tailored solutions that cater specifically to your unique requirements, ensuring maximum efficiency and effectiveness",
    icon: LockClosedIcon,
  },
  {
    name: 'Seamless Integration',
    description:
      "Our seamless integration processes make transitioning to our services a breeze, minimizing downtime and maximizing productivity from day one.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Dedicated Support',
    description:
      "Enjoy dedicated support every step of the way, with our team of experts ready to assist you in optimizing your tech infrastructure and achieving your goals.",
    icon: FingerPrintIcon,
  },
];

export default function Content() {
  return (
    <div className="bg-white py-0"> {/* Removed top and bottom padding */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Innovation Hub</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Elevate Your Tech Game
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Unlock the Potential of Cutting-Edge Solutions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
