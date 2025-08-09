'use client';

import { useRef } from 'react';
import EmailIcon from '../svgs/EmailIcon';
import PhoneIcon from '../svgs/PhoneIcon';
import LocationIcon from '../svgs/LocationIcon';
import LinkedInIcon from '../svgs/LinkedInIcon';
import GitHubIcon from '../svgs/GitHubIcon';
import { personalData } from '../data/personal';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full px-4 mt-8" ref={componentRef}>
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-6xl text-core-blue tracking-tight">
            {personalData.firstName}{' '}
            <span className="font-medium">{personalData.lastName}</span>
          </h1>
          <p className="text-xl text-gray-600 mt-2">{personalData.jobTitle}</p>
          <div className="flex space-x-4 mt-3">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-core-blue hover:text-gray-600 transition-colors"
              title="LinkedIn Profile">
              <LinkedInIcon />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-core-blue hover:text-gray-600 transition-colors"
              title="GitHub Profile">
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="text-lg text-gray-700 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <EmailIcon />
            </div>
            <span>{personalData.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <PhoneIcon />
            </div>
            <span>{personalData.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <LocationIcon />
            </div>
            <span>{personalData.location}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-lg font-medium text-core-blue mb-2">LANGUAGE</h2>
        <div className="border-b-2 border-core-blue mb-4"></div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-800">English</span>
            <div className="flex space-x-1">
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800">Malay</span>
            <div className="flex space-x-1">
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800">Chinese</span>
            <div className="flex space-x-1">
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
