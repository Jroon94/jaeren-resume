'use client';

import { useRef } from 'react';
import Header from '../components/Header';
import Circle from '../svgs/Circle';
import SquareBullet from '../svgs/SquareBullet';
import TriangleBullet from '../svgs/TriangleBullet';
import personalData from '../data/personal.json';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full px-4 mt-8" ref={componentRef}>
      <Header />

      <div className="mt-6">
        <h2 className="text-lg font-bold text-core-blue mb-2">
          WORK EXPERIENCE
        </h2>
        <div className="border-b-2 border-core-blue mb-4"></div>
        <div className="space-y-4">
          {personalData.experience.map((exp, index) => (
            <div key={index} className="grid grid-cols-5 gap-4">
              <div className="col-span-1 text-left">
                <span className="text-base text-gray-400">{exp.duration}</span>
              </div>
              <div className="col-span-4">
                <h3 className="text-lg text-core-blue font-medium">
                  {exp.title}
                </h3>
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
                <p className="text-sm mt-2">{exp.description}</p>
                {(exp as any).highlights && (
                  <div className="mt-3">
                    <ul className="space-y-2">
                      {(exp as any).highlights.map((highlight: string, highlightIndex: number) => (
                        <li key={highlightIndex} className="ml-4">
                          <div className="flex items-start">
                            <SquareBullet />
                            <p className="text-xs text-gray-600 ml-2">
                              {highlight}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.projects && (
                  <div className="mt-3">
                    <ul className="space-y-2">
                      {exp.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="ml-4">
                          <div className="flex items-start">
                            <SquareBullet />
                            <div className="ml-2">
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
                              <p className="text-xs mt-1">
                                {project.description}
                              </p>
                              {(project as any).highlights && (
                                <div className="mt-2 ml-4">
                                  <ul className="space-y-1">
                                    {(project as any).highlights.map((highlight: string, highlightIndex: number) => (
                                      <li key={highlightIndex}>
                                        <div className="flex items-start">
                                          <TriangleBullet />
                                          <p className="text-xs text-gray-600 ml-2">
                                            {highlight}
                                          </p>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold text-core-blue mb-2">
          PERSONAL PROJECTS
        </h2>
        <div className="border-b-2 border-core-blue mb-4"></div>
        <div className="space-y-4">
          {personalData.personalProjects.map((project, index) => (
            <div key={index} className="grid grid-cols-5 gap-4">
              <div className="col-span-1 text-left">
                <span className="text-base text-gray-400">
                  {project.duration}
                </span>
              </div>
              <div className="col-span-4">
                <h3 className="text-lg text-core-blue font-medium">
                  {project.title}
                </h3>
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
                      {(project as any).highlights.map((highlight: string, highlightIndex: number) => (
                        <li key={highlightIndex} className="ml-4">
                          <div className="flex items-start">
                            <SquareBullet />
                            <p className="text-xs text-gray-600 ml-2">
                              {highlight}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h2 className="text-lg font-bold text-core-blue mb-2">LANGUAGE</h2>
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
          <h2 className="text-lg font-bold text-core-blue mb-2">EDUCATION</h2>
          <div className="border-b-2 border-core-blue mb-4"></div>
          <div>
            <div className="text-gray-800 font-bold">
              Bachelor of Computer Science
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/monash-coat-of-arms.png"
                alt="Monash University Coat of Arms"
                className="w-6 h-7 object-contain"
              />
              <div>
                <div className="text-sm text-gray-600 font-bold">
                  Monash University
                </div>
                <div className="text-sm text-gray-600">
                  Melbourne, Australia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold text-core-blue mb-2">SKILLS</h2>
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
                  <div className="text-gray-800 text-sm font-medium">
                    {typeof skill === 'string' ? skill : skill.name}
                  </div>
                  {typeof skill === 'object' && skill.subtitle && (
                    <div className="text-gray-600 text-xs">
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
