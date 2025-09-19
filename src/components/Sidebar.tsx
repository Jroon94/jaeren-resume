'use client';

import Image from 'next/image';
import Circle from '../svgs/Circle';
import personalData from '../data/personal.json';
import type { PersonalData } from '../types/personal';

const typedPersonalData = personalData as PersonalData;

export default function Sidebar() {
  const languages = [
    { name: 'English', level: 5 },
    { name: 'Malay', level: 3 },
    { name: 'Chinese', level: 2 },
  ];

  return (
    <div className="col-span-1 space-y-6">
      <div>
        <h2 className="text-lg font-bold text-core-blue mb-2">LANGUAGE</h2>
        <div className="border-b-2 border-core-blue mb-4"></div>
        <div className="space-y-1">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm text-gray-800 w-20">{language.name}</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((circle) => (
                  <Circle key={circle} filled={circle <= language.level} className="w-3 h-3" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-core-blue mb-2">EDUCATION</h2>
        <div className="border-b-2 border-core-blue mb-4"></div>
        <div>
          <div className="text-sm text-gray-800 font-bold">
            Bachelor of Computer Science
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/images/monash-coat-of-arms.png"
              alt="Monash University Coat of Arms"
              width={24}
              height={28}
              className="w-6 h-7 object-contain"
            />
            <div>
              <div className="text-xs text-gray-600 font-bold">
                Monash University
              </div>
              <div className="text-xs text-gray-600">
                Melbourne, AU
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-core-blue mb-2">SKILLS</h2>
        <div className="border-b-2 border-core-blue mb-4"></div>
        <div className="space-y-3">
          {typedPersonalData.skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3">
                {typeof skill === 'object' && skill.icon && (
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <div>
                  <div className="text-gray-800 text-sm font-medium">
                    {typeof skill === 'string' ? skill : skill.name}
                  </div>
                  {typeof skill === 'object' && skill.subtitle && (
                    <div className="text-gray-600 text-xxs">
                      {skill.subtitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}