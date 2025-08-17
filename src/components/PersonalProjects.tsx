'use client';

import Circle from '../svgs/Circle';
import personalData from '../data/personal.json';

export default function PersonalProjects() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-core-blue mb-2">
        PERSONAL PROJECTS
      </h2>
      <div className="border-b-2 border-core-blue mb-4"></div>
      <div className="space-y-4">
        {personalData.personalProjects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between items-start">
              <h3 className="text-lg text-core-blue font-medium">
                {project.title}
              </h3>
              <span className="text-sm text-gray-400 font-medium">
                {project.duration}
              </span>
            </div>
            {(project as any).company && (
              <>
                {(project as any).companyUrl ? (
                  <a
                    href={(project as any).companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-link-blue font-medium underline hover:text-core-blue transition-colors">
                    {(project as any).company}
                  </a>
                ) : (
                  <span className="text-md text-gray-700 font-medium">
                    {(project as any).company}
                  </span>
                )}
              </>
            )}
            <p className="text-xs text-gray-700">
              {project.companyDescription}
            </p>
            <p className="text-sm mt-2">{project.description}</p>
            {(project as any).highlights && (
              <div className="mt-3">
                <ul className="space-y-2">
                  {(project as any).highlights.map(
                    (highlight: string, highlightIndex: number) => (
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