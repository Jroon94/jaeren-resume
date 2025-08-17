'use client';

import Circle from '../svgs/Circle';
import personalData from '../data/personal.json';

export default function WorkExperience() {
  return (
    <div>
      <h2 className="text-lg font-bold text-core-blue mb-2">
        WORK EXPERIENCE
      </h2>
      <div className="border-b-2 border-core-blue mb-4"></div>
      <div className="space-y-4">
        {personalData.experience.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start">
              <h3 className="text-lg text-core-blue font-medium">
                {exp.title}
              </h3>
              <span className="text-sm text-gray-400 font-medium">
                {exp.duration}
              </span>
            </div>
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-link-blue font-medium underline hover:text-core-blue transition-colors">
              {exp.company}
            </a>
            <p className="text-xs text-gray-700">
              {exp.companyDescription}
            </p>
            <p className="text-sm mt-2 text-justify">{exp.description}</p>
            {(exp as any).highlights && (
              <div className="mt-3">
                <ul className="space-y-2">
                  {(exp as any).highlights.map(
                    (highlight: string, highlightIndex: number) => (
                      <li
                        key={highlightIndex}
                        className="ml-4 flex flex-row">
                        <div className="flex items-start mr-2">
                          <Circle filled className="w-1.5 h-1.5 my-1.5" />
                        </div>
                        <p className="text-xs">{highlight}</p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
            {exp.projects && (
              <div className="mt-3">
                <ul className="space-y-2">
                  {exp.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className="ml-4 flex flex-row">
                      <div className="flex items-start mr-2">
                        <Circle filled className="w-1.5 h-1.5 my-2.5" />
                      </div>
                      <div>
                        {(project as any).url ? (
                          <a
                            href={(project as any).url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-link-blue underline hover:text-core-blue transition-colors">
                            {project.name}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-gray-800">
                            {project.name}
                          </span>
                        )}
                        <span className="text-xs text-gray-700 ml-2">
                          ({project.client})
                        </span>
                        <p className="text-xs mt-1 text-justify">
                          {project.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}