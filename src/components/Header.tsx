'use client';

import EmailIcon from '../svgs/EmailIcon';
import PhoneIcon from '../svgs/PhoneIcon';
import LocationIcon from '../svgs/LocationIcon';
import LinkedInIcon from '../svgs/LinkedInIcon';
import GitHubIcon from '../svgs/GitHubIcon';
import personalData from '../data/personal.json';
import type { PersonalData } from '../types/personal';

const typedPersonalData = personalData as PersonalData;

export default function Header() {
  return (
    <div className="flex justify-between w-full">
      <div>
        <h1 className="text-6xl text-core-blue tracking-tight">
          {typedPersonalData.firstName}{' '}
          <span className="font-medium">{typedPersonalData.lastName}</span>
        </h1>
        <p className="text-xl text-gray-600 mt-2">{typedPersonalData.jobTitle}</p>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-md">
          {typedPersonalData.summary}
        </p>
      </div>
      <div className="text-base text-gray-700 space-y-2">
        <div className="flex items-center space-x-4">
          <div className="w-6 flex items-center justify-center">
            <EmailIcon className="w-6 h-6" />
          </div>
          <span>{typedPersonalData.email}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-6 flex items-center justify-center">
            <PhoneIcon className="w-6 h-6" />
          </div>
          <span>{typedPersonalData.phone}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-6 flex items-center justify-center">
            <LocationIcon className="w-6 h-6" />
          </div>
          <span>{typedPersonalData.location}</span>
        </div>
        <a
          href={typedPersonalData.linkedin}
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
          href={typedPersonalData.github}
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
