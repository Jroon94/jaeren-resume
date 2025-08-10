'use client';

import EmailIcon from '../svgs/EmailIcon';
import PhoneIcon from '../svgs/PhoneIcon';
import LocationIcon from '../svgs/LocationIcon';
import LinkedInIcon from '../svgs/LinkedInIcon';
import GitHubIcon from '../svgs/GitHubIcon';
import { personalData } from '../data/personal';

export default function Header() {
  return (
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
  );
}