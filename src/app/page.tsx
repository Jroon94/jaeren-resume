'use client';

import { useRef } from 'react';
import Header from '../components/Header';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full px-4 mt-8" ref={componentRef}>
      <Header />
      
      <div className="flex mt-12 space-x-22">
        <div className="flex-1">
          <h2 className="text-lg font-medium text-core-blue mb-2">LANGUAGE</h2>
          <div className="border-b-2 border-core-blue mb-4"></div>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-gray-800 w-20">English</span>
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 w-20">Malay</span>
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 w-20">Chinese</span>
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-core-blue"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
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
    </div>
  );
}
