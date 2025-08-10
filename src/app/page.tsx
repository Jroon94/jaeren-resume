'use client';

import { useRef } from 'react';
import Header from '../components/Header';
import Circle from '../svgs/Circle';
import personalData from '../data/personal.json';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full px-4 mt-8" ref={componentRef}>
      <Header />
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h2 className="text-lg font-medium text-core-blue mb-2">LANGUAGE</h2>
          <div className="border-b-2 border-core-blue mb-4"></div>
          <div className="space-y-1">
            <div className="flex items-center">
              <span className="text-gray-800 w-20">English</span>
              <div className="flex space-x-4">
                <Circle filled />
                <Circle filled />
                <Circle filled />
                <Circle filled />
                <Circle filled />
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 w-20">Malay</span>
              <div className="flex space-x-4">
                <Circle filled />
                <Circle filled />
                <Circle filled />
                <Circle />
                <Circle />
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 w-20">Chinese</span>
              <div className="flex space-x-4">
                <Circle filled />
                <Circle filled />
                <Circle />
                <Circle />
                <Circle />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-medium text-core-blue mb-2">EDUCATION</h2>
          <div className="border-b-2 border-core-blue mb-4"></div>
          <div>
            <div className="text-gray-800 font-bold">Bachelor of Computer Science</div>
            <div className="flex items-center space-x-4">
              <img 
                src="/monash-coat-of-arms.png" 
                alt="Monash University Coat of Arms" 
                className="w-6 h-7 object-contain"
              />
              <div>
                <div className="text-sm text-gray-600 font-bold">Monash University</div>
                <div className="text-sm text-gray-600">Melbourne, Australia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-medium text-core-blue mb-2">SKILLS</h2>
        <div className="border-b-2 border-core-blue mb-4"></div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-3">
          {personalData.skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3">
                {typeof skill === 'object' && skill.icon && (
                  <img 
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <div>
                  <div className="text-gray-800 text-sm font-medium">{typeof skill === 'string' ? skill : skill.name}</div>
                  {typeof skill === 'object' && skill.subtitle && (
                    <div className="text-gray-600 text-xs">{skill.subtitle}</div>
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
