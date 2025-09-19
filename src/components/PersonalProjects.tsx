'use client';

import Circle from '../svgs/Circle';
import personalData from '../data/personal.json';
import type { PersonalData } from '../types/personal';

const typedPersonalData = personalData as PersonalData;

export default function PersonalProjects() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-core-blue mb-2">
        PERSONAL PROJECTS
      </h2>
      <div className="border-b-2 border-core-blue mb-4"></div>
      <div className="space-y-4">
        {typedPersonalData.personalProjects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between items-start">
              <h3 className="text-lg text-core-blue font-medium">
                {project.title}
              </h3>
              <span className="text-sm text-gray-400 font-medium">
                {project.duration}
              </span>
            </div>
            <p className="text-xs text-gray-700">
              {project.companyDescription}
            </p>
            <p className="text-sm mt-2">{project.description}</p>
            {project.highlights && (
              <div className="mt-3">
                <ul className="space-y-2">
                  {project.highlights.map(
                    (highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="ml-4 flex flex-row">
                        <div className="flex items-center mr-2">
                          <Circle filled className="w-1.5 h-1.5" />
                        </div>
                        <p className="text-xs text-justify">{highlight}</p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}