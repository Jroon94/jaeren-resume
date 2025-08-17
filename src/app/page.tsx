'use client';

import { useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import WorkExperience from '../components/WorkExperience';
import PersonalProjects from '../components/PersonalProjects';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full px-4 mt-8" ref={componentRef}>
      <Header />

      <div className="grid grid-cols-4 gap-2 mt-2">
        <Sidebar />
        
        <div className="col-span-3">
          <WorkExperience />
        </div>
      </div>
      
      <PersonalProjects />
    </div>
  );
}