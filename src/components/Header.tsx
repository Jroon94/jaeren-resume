'use client';

import EmailIcon from '../svgs/EmailIcon';
import PhoneIcon from '../svgs/PhoneIcon';
import LocationIcon from '../svgs/LocationIcon';
import LinkedInIcon from '../svgs/LinkedInIcon';
import GitHubIcon from '../svgs/GitHubIcon';
import personalData from '../data/personal.json';

export default function Header() {
  return (
    <div className="flex justify-between w-full">
      <div>
        <h1 className="text-6xl text-core-blue tracking-tight">
          {personalData.firstName}{' '}
          <span className="font-medium">{personalData.lastName}</span>
        </h1>
        <p className="text-xl text-gray-600 mt-2">{personalData.jobTitle}</p>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed max-w-md">
          {personalData.summary}
        </p>
      </div>
      <div className="text-base text-gray-700 space-y-2">
        <div className="flex items-center space-x-4">
          <div className="w-6 flex items-center justify-center">
            <EmailIcon className="w-6 h-6" />
          </div>
          <span>{personalData.email}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-6 flex items-center justify-center">
            <PhoneIcon className="w-6 h-6" />
          </div>
          <span>{personalData.phone}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-6 flex items-center justify-center">
            <LocationIcon className="w-6 h-6" />
          </div>
          <span>{personalData.location}</span>
        </div>
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4"
          title="LinkedIn Profile">
          <div className="w-6 flex items-center justify-center">
            <LinkedInIcon className="w-5 h-5" />
          </div>
          <span>jae-ren-oon</span>
        </a>
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4"
          title="GitHub Profile">
          <div className="w-6 flex items-center justify-center">
            <GitHubIcon className="w-5 h-5" />
          </div>
          <span>jroon94</span>
        </a>
      </div>
    </div>
  );
}
